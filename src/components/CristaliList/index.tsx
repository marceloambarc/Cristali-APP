import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { styles } from "../Background/styles";

import { Order, OrderProps } from "../Order";

interface Props {
  handleOrderSelect: (order : OrderProps) => void;
}

const DATA = [
  {
    id: '1',
    number: '10293',
    client: 'Lana Brito Hortas',
    date: '10/10/2021 - 15:32',
    price: '7.390,50',
    open: false
  },
  {
    id: '2',
    number: '10016',
    client: 'Solange Viana Brás',
    date: '02/10/2021 - 10:01',
    price: '2.110,50',
    open: false
  },
  {
    id: '3',
    number: '10293',
    client: 'Kendrick Almada',
    date: '27/09/2021 - 10:01',
    price: '777,77',
    open: false
  }
];

export function CristaliList({ handleOrderSelect } : Props){
  const [orders, setOrders] = useState<OrderProps[]>([]);

  async function fetchOrder(){
    setOrders(DATA);
  }

  useEffect(() => {
    fetchOrder();
  },[]);

  return (
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Order 
            data={item} 
            onPress={() => handleOrderSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 20 }}
      />
  );
}