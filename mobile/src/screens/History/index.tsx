import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Dimensions, Platform, ActivityIndicator } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useAuth } from '../../hooks/auth';

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { CristaliInputMoney } from "../../components/CristaliInputMoney";
import { CristaliInput } from "../../components/CristaliInput";
import { CristaliList } from "../../components/CristaliList";
import { OrderProps } from "../../components/Order";
import { Header } from "../../components/Header";

import { DATA } from "../../utils/data"; 

export function History(){
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [historyCount, setHistoryCount] = useState(0);
  const [total, setTotal] = useState('0');

  // Calendar
  const [momentum, setMomentum] =  useState<Date>(new Date());
  
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isSecondDatePickerVisible, setSecondDatePickerVisibility] = useState(false);

  const [firstDate, setFirstDate] = useState<Date>(momentum);
  const [secondDate, setSecondDate] = useState<Date>(new Date());

  async function handleSetTotal(){
   setTotal(DATA.reduce((a,v) =>  a = a + parseFloat(v.price.replace('.','').replace(',','')) , 0).toString());
  }

  async function handleSetMomentum(){
    var event = new Date();
    event.setDate(-30);
    setMomentum(event);
    setFirstDate(event);
  }

  useEffect(() => {
    setLoading(false);
    setHistoryCount(DATA.length);
    handleSetTotal();
    handleSetMomentum();
  },[]);

  function handleOrderSelect(orderSelect: OrderProps){
    alert('Selected ' + orderSelect.id);
  }

  const showSecondDatePicker = () => {
    setSecondDatePickerVisibility(true);
  };
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideSecondDatePicker = () => {
    setSecondDatePickerVisibility(false);
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setFirstDate(date);
    hideDatePicker();
  };

  const handleSecondConfirm = (date: Date) => {
    setSecondDate(date);
    hideSecondDatePicker();
  }

  if(loading){
    return(
      <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
        <ActivityIndicator size="large" color={`${theme.colors.primary}`} />
      </View>
    );
  }else{
    return (
      <>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={theme.colors.input}
        />
        <Header
          title='Histórico'
          haveClose
        />
        <View style={styles.container}>
          <View style={styles.historyArea}>
  
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Filtro</Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  display={Platform.OS === 'android'? 'default':'inline'}
                  maximumDate={new Date()}
                  date={momentum}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  is24Hour={true}
                  headerTextIOS='Selecione a Data'
                  confirmTextIOS='Confirmar'
                  cancelTextIOS='Cancelar'
                  textColor={'black'}
                  isDarkModeEnabled={true}
                  locale='pt_BR'
                />
                <DateTimePickerModal
                  isVisible={isSecondDatePickerVisible}
                  mode="date"
                  display={Platform.OS === 'android'? 'default':'inline'}
                  maximumDate={new Date()}
                  date={new Date()}
                  onConfirm={handleSecondConfirm}
                  onCancel={hideSecondDatePicker}
                  is24Hour={true}
                  headerTextIOS='Selecione a Data'
                  confirmTextIOS='Confirmar'
                  cancelTextIOS='Cancelar'
                  textColor={'black'}
                  isDarkModeEnabled={true}
                  locale='pt_BR'
                />
              <TouchableOpacity 
                style={styles.calendar}
                onPress={showDatePicker}
              >
                <FontAwesome5 name="calendar-alt" size={Dimensions.get('window').height * .05} color="black" />
              </TouchableOpacity>
                <View style={styles.datepickedContainer}>
                  <Text style={styles.datepickedTitle}>Data Inicial</Text>
                  <Text style={styles.datepicked}>
                    { `${firstDate.getDate()}/${firstDate.getMonth()+1}/${firstDate.getFullYear()}` }
                  </Text>
                </View>
              <TouchableOpacity 
                style={styles.calendar}
                onPress={showSecondDatePicker}
              >
                <FontAwesome5 name="calendar-alt" size={Dimensions.get('window').height * .05} color="black" />
              </TouchableOpacity>
                <View style={styles.datepickedContainer}>
                  <Text style={styles.datepickedTitle}>Data Final</Text>
                  <Text style={styles.datepicked}>
                    { `${secondDate.getDate()}/${secondDate.getMonth()+1}/${secondDate.getFullYear()}` }
                  </Text>
                </View>
            </View>
  
            <View style={styles.orderRow}>
              <View style={styles.orderCol}>
                <Text style={styles.orderText}>Pedidos</Text>
                <CristaliInput 
                  value={historyCount.toString()}
                  editable={false}
                  textAlign='center'
                />
              </View>
              <View style={styles.orderCol}>
                <Text style={styles.orderText}>Total</Text>
                <CristaliInputMoney
                  type={"money"}
                  value={total}
                  editable={false}
                  textAlign='center'
                />
              </View>
            </View>
  
            <View style={styles.list}>
              <CristaliList
                handleOrderSelect={handleOrderSelect}
              />
            </View>
  
          </View>
        </View>
      </>
    );
  }
}