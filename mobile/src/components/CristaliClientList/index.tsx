import React, { useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { api } from "../../services/api";

import { Client, ClientProps } from "../Client";

interface Props {
  handleClientSelect: (client : ClientProps) => void;
}
export function CristaliClientList({ handleClientSelect } : Props){
  const [clients, setClients] = useState<ClientProps[]>([]);

  useFocusEffect(() => {
    api.get('client').then(response => {
      setClients(response.data);
    });
  });

  return (
      <FlatList
        data={clients}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Client 
            data={item} 
            onPress={() => handleClientSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 20 }}
      />
  );
}