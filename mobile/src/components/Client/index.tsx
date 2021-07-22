import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

import { OrderIcon } from "../OrderIcon";
import { theme } from "../../global/styles";

export interface ClientProps {
  id: number;
  nomefinalcli: string;
  phone: string;
  email: string;
  notes: string;
}

interface Props extends TouchableOpacityProps {
  data: ClientProps
}

export function Client({ data, ...rest } : Props){
  return (
    <TouchableOpacity
      style={
        [styles.container, 
          {backgroundColor: theme.colors.activatedList}
        ]}
      activeOpacity={0.7}
      {...rest}
    >

    <View style={styles.content}>
      <View>
        <Text style={styles.title}>
          { data.nomefinalcli }
        </Text>

        <Text style={styles.text}>
          { data.email }
        </Text>

        <Text style={styles.text}>
          { data.notes }
        </Text>
      </View>
    </View>

    <View>
      <Text style={styles.number}>Telefone</Text>
      <Text style={styles.text}>{ data.phone }</Text>
    </View>
    

  </TouchableOpacity>
  );
}