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
    email: 'lanab@gmail.com',
    date: '10/10/2021 - 15:32',
    price: '7.390,50',
    telephone: '(51)999351517',
    notes: 'Cliente desde 2017',
    open: false
  },
  {
    id: '2',
    number: '10016',
    client: 'Solange Viana Brás',
    email: 'solangebras@terra.com.br',
    date: '02/10/2021 - 10:01',
    price: '2.110,50',
    telephone: '(51)9993512323',
    notes: 'Anéis de casamento liso é sua preferência.',
    open: false
  },
  {
    id: '3',
    number: '10273',
    client: 'Kendrick Almada',
    email: 'kalmada.joias@hotmail.com',
    date: '27/09/2021 - 10:01',
    telephone: '(51)999430917',
    price: '777,77',
    notes: 'Anéis de casamento liso é sua preferência.!',
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