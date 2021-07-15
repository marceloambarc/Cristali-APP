import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Logo } from '../../components/Logo';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';

export interface TelaTesteProps {
  reference_id: string;
  description: string;
  value: string;
  currency: string;
  type: string;
  installments: number,
  capture: boolean,
  number: string,
  exp_month: string,
  exp_year: string,
  security_code: string,
  name: string
  notification_urls: string;
}

export function TelaTeste(){
  const navigation = useNavigation();
  const route = useRoute();
  const pagSeguroParams = route.params as TelaTesteProps;

  const id = pagSeguroParams.reference_id;
  const description = pagSeguroParams.description;
  const value = pagSeguroParams.value;
  const currency = pagSeguroParams.currency;
  const type = pagSeguroParams.type;
  const installments = pagSeguroParams.installments;
  const capture = pagSeguroParams.capture;
  const number = pagSeguroParams.number;
  const exp_month = pagSeguroParams.exp_month;
  const exp_year = pagSeguroParams.exp_year;
  const security_code = pagSeguroParams.security_code;
  const name = pagSeguroParams.name;
  const notification_urls = pagSeguroParams.notification_urls;

  return (
      <ScrollView>
        <View style={styles.container}>

        
        <Logo />

        <View style={styles.banner}>
          <Text style={styles.title}>{id}</Text>
          <Text style={styles.title}>{description}</Text>
          <Text style={styles.title}>{value}</Text>
          <Text style={styles.title}>{currency}</Text>
          <Text style={styles.title}>{type}</Text>
          <Text style={styles.title}>{installments}</Text>
          <Text style={styles.title}>{capture}</Text>
          <Text style={styles.title}>{number}</Text>
          <Text style={styles.title}>{pagSeguroParams.exp_month}</Text>
          <Text style={styles.title}>{pagSeguroParams.exp_year}</Text>
          <Text style={styles.title}>{security_code}</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{notification_urls}</Text>
        </View>
        <CristaliButton 
            title="Finalizar"
            color={'green'}
            onPress={() => navigation.goBack()}
          />
        </View>
       
      </ScrollView>
  );
}