import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { Divider } from "../../components/Divider";
import { CristaliInput } from "../../components/CristaliInput";
import { TextArea } from "../../components/TextArea";
import { CristaliButton } from "../../components/CristaliButton";

export function NewSale(){
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [discription, setDiscription] = useState('');

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('Home');
  }

  function handleInsertNewProduct(){
    navigation.navigate('InsertProduct');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.clientArea}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Dados do cliente</Text>
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
                onChangeText={setName}
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
                onChangeText={setTelephone}
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
                onChangeText={setEmail}
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
                onChangeText={setDiscription}
              />
            </View>
          </View>



          <View style={[styles.titleContainer, {justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={styles.title}>Produtos</Text>
          </View>

          <Divider />

          <View style={[styles.titleContainer, {justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={styles.subtitle}>Total Pedido</Text>
          </View>

          <View style={styles.orderRow}>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Peças</Text>
              <CristaliInput />
            </View>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Preço</Text>
              <CristaliInput />
            </View>
          </View>

          <Divider />

          <View style={styles.insertProduct}>
            <CristaliButton 
              title="Inserir Novo Produto"
              color={`${theme.colors.Continue}`}
              onPress={handleInsertNewProduct}
            />
          </View>

          <Divider />

          <View style={styles.footer}>
            <View style={styles.footerContainer}>
              <CristaliButton 
                title="Voltar"
                color={`${theme.colors.Config}`}
                onPress={handleGoBack}
              />
            </View>
            <View style={styles.footerContainer}>
              <CristaliButton 
                title="Continuar"
                color={`${theme.colors.Success}`}
              />
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}