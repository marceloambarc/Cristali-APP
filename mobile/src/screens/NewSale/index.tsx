import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StatusBar, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity, Alert, TextInput, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from "../../hooks/auth";
import uuid from 'react-native-uuid';

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { COLLECTION_ITEMS } from "../../config/storage";
import { OrderProps } from "../../components/Order";

import { Divider } from "../../components/Divider";
import { CristaliInput } from "../../components/CristaliInput";
import { CristaliInputMoney } from "../../components/CristaliInputMoney";
import { TextArea } from "../../components/TextArea";
import { CristaliButton } from "../../components/CristaliButton";
import { Header } from "../../components/Header";
import { SearchButton } from "../../components/SearchButton";

export interface ItemProps {
  id: number;
  title: string;
  value: string;
}

export let itemCounter = 1;

export function NewSale(){
  const { user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();

  const orderParams = route.params as OrderProps;

  const [loading, setLoading] = useState(true);

  const [client, setClient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [sellPrice, setSellPrice] = useState(0);
  const [piece, setPiece] = useState(0);

  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    if(orderParams){
      setClient(orderParams.client);
      setTelephone(orderParams.telephone);
      setEmail(orderParams.email);
      setNotes(orderParams.notes);
      setTotalPrice(orderParams.price);
    }
    setLoading(false);
    
  },[orderParams]);

  const [list, setList] = useState<ItemProps[]>([{id: 0, value: '', title: ''}]);

  const handleChange = (value: string, id: ItemProps['id']) => {
    setList(prev => prev.map(item => item.id === id? {...item, value} : item));
  }

  const handleTitleChange = (title: string, id: ItemProps['id']) => {
    setList(prev => prev.map(item => item.id ===id? {...item, title} : item))
  }

  const handleDelete = (id: ItemProps['id'], value: string) => {
    setList(prev => prev.filter(item => item.id !== id));
    setPiece(prev=> prev-1);
    var price = parseInt(value.replace(/\D/g, ""));
    setSellPrice(price - sellPrice);
  }

  const handleAdd = (index: number, value: string) => {
    const newItem = {id: itemCounter ++, value: '', title: ''}
    if(value === ''){
      alert('Insira o Valor.');
    }else{
      var price = parseInt(value.replace(/\D/g, ""));
      setList(prev => [...prev.slice(0, index+1), newItem, ...prev.slice(index + 1)]);
      setPiece(prev => prev+1);
      setSellPrice(price + sellPrice);
    }
  }

  async function handleSave(){
    for (let index = 0; index <= list.length; index++) {
      if(list[index].title != undefined && list[index].title != ''){
        alert(`${list[index].title}, ${list[index].value}`);
      }else{
        return;
      }
      
    }
    /*const newItems = {
      id: uuid.v4(),
      title: item.title,
      value: item.value
    }
    const response = await AsyncStorage.setItem(COLLECTION_ITEMS, newItems);
    const storage: ItemProps[] = response ? JSON.parse(response) : [];

    console.log(storage);*/
  }

  function handleContinue(){
    if(piece <= 0){
      alert('Insira um Produto.');
    }else{
      handleSave();
      navigation.navigate('Checkout',{
        client,
        telephone,
        email,
        notes,
        piece,
        list: list,
        price: sellPrice.toString()
      });
    }
  }

  if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={`${theme.colors.primary}`} />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      keyboardVerticalOffset={(Platform.OS === 'ios')? 7 : 0}
      contentContainerStyle={{backgroundColor: 'transparent'}}
      behavior={(Platform.OS === 'ios')? "padding" : undefined}
    >
      <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.input}
      />
      <Header
        title='Nova Venda'
        haveClose
      />
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
      <View
        style={styles.container}
      >
        <View style={styles.clientArea}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Dados do cliente</Text>
            <SearchButton
              color={`${theme.colors.Config}`}
              onPress={() => navigation.navigate('Client')}
            />
          </View>
          <Divider />

          <View style={styles.clientData}>
            <View style={styles.clientInput}>
              <View style={styles.inputTextRow}>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputBannerText}>
                    Nome
                  </Text>
                </View>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputLabel}>
                    Máximo de 50 caracteres
                  </Text>
                </View>
              </View>
              <CristaliInput 
                clientInput
                value={client}
                onChangeText={setClient}
                autoCorrect={false}
                returnKeyType='done'
                autoCapitalize='words'
              />
            </View>

            <View style={styles.clientInput}>
              <View style={styles.inputTextRow}>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputBannerText}>
                    Telefone
                  </Text>
                </View>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputLabel}>
                    Máximo de 9 caracteres
                  </Text>
                </View>
              </View>
              <CristaliInput 
                clientInput
                value={telephone}
                onChangeText={setTelephone}
                autoCorrect={false}
                keyboardType='phone-pad'
                returnKeyType='done'
              />
            </View>

            <View style={styles.clientInput}>
              <View style={styles.inputTextRow}>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputBannerText}>
                    Email
                  </Text>
                </View>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputLabel}>
                    Máximo de 50 caracteres
                  </Text>
                </View>
              </View>
              <CristaliInput 
                clientInput
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType='done'
                autoCapitalize='none'
              />
            </View>

            <View style={styles.clientInput}>
              <View style={styles.inputTextRow}>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputBannerText}>
                    Anotações
                  </Text>
                </View>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputLabel}>
                    Máximo de 100 caracteres
                  </Text>
                </View>
              </View>
              <TextArea 
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
                autoCapitalize="none"
                value={notes}
                onChangeText={setNotes}
                returnKeyType='done'
              />
            </View>
          </View>

          <View style={[styles.titleContainer, {justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={styles.title}>Produtos</Text>
          </View>

          <Divider />

          <View style={styles.orderRow}>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Peças</Text>
              <CristaliInput 
                textAlign='center'
                value={piece.toString()}
                editable={false}
                autoCorrect={false}
              />
            </View>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Preço</Text>
              <CristaliInputMoney
                type={'money'}
                textAlign='center'
                value={sellPrice.toString()}
                editable={false}
                autoCorrect={false}
              />
            </View>
          </View>

          <Divider />

          <View 
            style={styles.productContainer}
          >
          {list.map((item, index) => (
            <View 
              key={item.id}
              style={styles.list}
            >
              <View 
                key={item.id}
                style={{width: Dimensions.get('window').width *.6}}
              >
                <Text>{index}, {item.id}</Text>
                {index <= piece -1
                  ?
                  <View style={styles.listProdutContainer}>
                    <View style={styles.sellPriceContainer}>
                      <CristaliInputMoney
                      type={'money'}
                      key={item.id}
                      value={item.value}
                      productInsert
                      editable={false}
                      autoCorrect={false}
                      />
                    </View>
                    <View style={styles.productTitleContainer}>
                      <CristaliInput 
                        value={item.title}
                        onChangeText={e => handleTitleChange(e, item.id)}
                        placeholder="Produto..."
                        clientInput
                        autoCorrect={false}
                      />
                    </View>
                  </View>
                  :
                  <CristaliInputMoney
                    type={'money'}
                    key={item.id}
                    value={item.value}
                    onChangeText={e => handleChange(e, item.id)}
                    placeholder='Insira o Valor do Produto'
                    keyboardType='numeric'
                    autoCorrect={false}
                  />
                }
              </View>
              {index <= piece -1 ?
                <View />
              :
                <TouchableOpacity
                  style={[styles.listButton, {backgroundColor: theme.colors.Success}]}
                  onPress={() => handleAdd(index, item.value)}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </TouchableOpacity>
              }
              {list.length > 1 && (
                <TouchableOpacity
                  style={[styles.listButton, {backgroundColor: theme.colors.Cancel}]}
                  onPress={() => handleDelete(item.id, item.value)}
                >
                  <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

          <Divider />

          <View style={styles.footer}>
            <View>
              <CristaliButton 
                title="Continuar"
                color={`${theme.colors.Success}`}
                onPress={handleContinue}
              />
            </View>
          </View>

        </View>
      </View>
      
    </ScrollView>
    </KeyboardAvoidingView>
  );
}