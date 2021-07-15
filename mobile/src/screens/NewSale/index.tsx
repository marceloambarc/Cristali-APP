import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StatusBar, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity, Alert, TextInput } from "react-native";
import { useNavigation, useRoute, StackActions } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { OrderProps } from "../../components/Order";
import { UserProps } from "../Home";

import { Divider } from "../../components/Divider";
import { CristaliInput } from "../../components/CristaliInput";
import { CristaliInputMoney } from "../../components/CristaliInputMoney";
import { TextArea } from "../../components/TextArea";
import { CristaliButton } from "../../components/CristaliButton";
import { Header } from "../../components/Header";
import { SearchButton } from "../../components/SearchButton";

interface TodoItem {
  id: number;
  value: string;
  title: string;
  clear?: boolean
}

export let itemCounter = 1;

export function NewSale(){
  const navigation = useNavigation();
  const route = useRoute();

  const orderParams = route.params as OrderProps;
  const userParams = route.params as UserProps;
  const itemParams = route.params as TodoItem;

  const [username, setUsername] = useState('');
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
    if(userParams){
      setUsername(userParams.username);
    }else{
      Alert.alert(
        'Ops!',
        'Você Não pode Acessar, não está Logado(a)'
      )
      navigation.dispatch(StackActions.push('SignIn'));
    }
    if(itemParams.clear){
      setList([{id: 0, value: '', title: ''}]);
    }
    setLoading(false);
  },[orderParams, userParams]);

  const [list, setList] = useState<TodoItem[]>([{id: 0, value: '', title: ''}]);

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList(prev => prev.map(item => item.id === id? {...item, value} : item));
  }

  const handleTitleChange = (title: string, id: TodoItem['id']) => {
    setList(prev => prev.map(item => item.id ===id? {...item, title} : item))
  }

  const handleDelete = (id: TodoItem['id'], value: string) => {
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

  function handleContinue(){
    if(piece <= 0){
      alert('Insira um Produto.');
    }else{
      navigation.navigate('Checkout',{
        username,
        client,
        telephone,
        email,
        notes,
        price: sellPrice.toString()
      });
    }
  }

  if(loading){
    return(
      <View>
        <Text>Hello World</Text>
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