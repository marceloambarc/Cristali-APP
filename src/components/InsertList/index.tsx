import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles';

import { CristaliInput } from '../CristaliInput';

interface TodoItem {
  id: number;
  value: string
}

let count = 1

export const InsertList: React.FC = () => {
  const [list, setList] = useState<TodoItem[]>([{id: 0, value: ''}]);

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList(prev => prev.map(item => item.id === id? {...item, value} : item));
  }

  const handleDelete = (id: TodoItem['id']) => {
    setList(prev => prev.filter(item => item.id !== id));
  }

  const handleAdd = (index: number, value: string) => {
    const newItem = {id: count ++, value: ''}
    if(value === ''){
      alert('Insira o Valor.');
    }else{
      setList(prev => [...prev.slice(0, index+1), newItem, ...prev.slice(index + 1)]);
    }
  }

  return (
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
            <CristaliInput
              key={item.id}
              value={item.value}
              onChangeText={e => handleChange(e, item.id)}
              placeholder='Insira o Valor do Produto'
              keyboardType='number-pad'
            />
          </View>


          <TouchableOpacity
            style={[styles.listButton, {backgroundColor: theme.colors.Success}]}
            onPress={() => handleAdd(index, item.value)}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
          {list.length > 1 && (
            <TouchableOpacity
            style={[styles.listButton, {backgroundColor: theme.colors.Cancel}]}
              onPress={() => handleDelete(item.id)}
            >
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
}