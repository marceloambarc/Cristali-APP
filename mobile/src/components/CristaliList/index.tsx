import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { styles } from "../Background/styles";

import { Order, OrderProps } from "../Order";

interface Props {
  handleOrderSelect: (order : OrderProps) => void;
}

import { DATA } from "../../utils/data"; 

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