import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { Divider } from "../../components/Divider";
import { CristaliInput } from "../../components/CristaliInput";

export function History(){

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.historyArea}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Filtro</Text>
            <Text style={styles.title}>Calendar</Text>
          </View>

          <Divider />

          <View style={styles.subtitleContainer}>
            <Text style={styles.title}>Resumo</Text>
          </View>

          <View style={styles.orderRow}>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Pedidos</Text>
              <CristaliInput />
            </View>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Total</Text>
              <CristaliInput />
            </View>
          </View>

          <View style={styles.dividerLimiter}>
            <Divider />
          </View>

          <View>
            
          </View>

        </View>
      </View>
    </ScrollView>
  );
}