import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles';

import { Divider } from '../../components/Divider';
import { CristaliInput } from '../../components/CristaliInput';
import { TextArea } from '../../components/TextArea';
import { InsertPhoto } from '../../components/InsertPhoto';
import { CristaliButton } from '../../components/CristaliButton';

export function InsertProduct(){
  const [discription, setDiscription] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.productArea}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Produto</Text>
          </View>

          <Divider />

          <View style={styles.productData}>

            <View style={styles.productInput}>
              <View style={styles.productText}>
                <Text style={styles.productBannerText}>
                  Código
                </Text>
              </View>
              <CristaliInput />
            </View>

            <View style={styles.productInput}>
              <View style={styles.productText}>
                <Text style={styles.productBannerText}>
                  Quantidade
                </Text>
              </View>
              <CristaliInput />
            </View>

            <View style={styles.productInput}>
              <View style={styles.productText}>
                <Text style={styles.productBannerText}>
                  Preço
                </Text>
              </View>
              <CristaliInput />
            </View>

            <View style={styles.productInput}>
              <View style={styles.productTextRow}>
                <View style={styles.productTextCol}>
                  <Text style={styles.productBannerText}>
                    Anotações
                  </Text>
                </View>
                <View style={styles.productTextCol}>
                  <Text style={styles.productLabel}>
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

          <View style={styles.buttonContainer}>
            <InsertPhoto />
          </View>

          <View style={styles.footer}>
            <View style={styles.total}>
              <Text style={styles.totalText}>Total</Text>
              <CristaliInput  />
            </View>
          </View>
          
          <View style={styles.insertButton}>
            <CristaliButton
              title='Inserir'
              color={`${theme.colors.Continue}`}
            />
          </View>
          
        </View>
      </View>
    </ScrollView>
  );
}