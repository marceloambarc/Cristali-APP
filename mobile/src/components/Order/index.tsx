import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

import { OrderIcon } from "../OrderIcon";
import { theme } from "../../global/styles";

export interface OrderProps {
  id: string;
  number: string;
  client: string;
  email: string;
  date: string;
  price: string;
  telephone: string;
  notes: string;
  open?: boolean
}

interface Props extends TouchableOpacityProps {
  data: OrderProps
}

export function Order({ data, ...rest } : Props){
  return (
    <TouchableOpacity
      style={
        [styles.container, 
          data.open ? 
          {backgroundColor: theme.colors.activatedList}
          :
          {backgroundColor: theme.colors.unactivatedList}
        ]}
      activeOpacity={0.7}
      {...rest}
    >
    <OrderIcon />

    <View style={styles.content}>
      <View>
        <Text style={styles.title}>
          { data.client }
        </Text>

        <Text style={styles.text}>
          { data.date }
        </Text>

        <Text style={styles.text}>
          { data.price }
        </Text>
      </View>
    </View>

    <View>
      <Text style={styles.number}>Número</Text>
      <Text style={styles.text}>#{ data.number }</Text>
    </View>
    

  </TouchableOpacity>
  );
}