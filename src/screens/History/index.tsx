import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { Divider } from "../../components/Divider";
import { CristaliInput } from "../../components/CristaliInput";
import { CristaliList } from "../../components/CristaliList";
import { OrderProps } from "../../components/Order";
import { Header } from "../../components/Header";

export function History(){
  const [historyCount, setHistoryCount] = useState('0');
  const [total, setTotal] = useState('0');

  function handleOrderSelect(orderSelect: OrderProps){
    alert('Hello World!');
  }

  function handleViewCalendar(){
    alert('Calendar');
  }

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.input}
      />
      <Header
        title='Histórico'
        haveClose
        haveBack
      />
      <View style={styles.container}>
        <View style={styles.historyArea}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Filtro</Text>
            <TouchableOpacity 
              style={styles.calendar}
              onPress={handleViewCalendar}
            >
              <FontAwesome5 name="calendar-alt" size={52} color="black" />
            </TouchableOpacity>
            
          </View>

          <Divider />

          <View style={styles.subtitleContainer}>
            <Text style={styles.title}>Resumo</Text>
          </View>

          <View style={styles.orderRow}>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Pedidos</Text>
              <CristaliInput 
                value={historyCount}
                editable={false}
                textAlign='center'
              />
            </View>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Total</Text>
              <CristaliInput 
                value={total}
                editable={false}
                textAlign='center'
              />
            </View>
          </View>

          <View style={styles.dividerLimiter}>
            <Divider />
          </View>

          <View>
            <CristaliList
              handleOrderSelect={handleOrderSelect}
            />
          </View>

        </View>
      </View>
    </>
  );
}