import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, TextInputProps, Platform, Button } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { CristaliButton } from "../../components/CristaliButton";
import { CristaliInput } from "../../components/CristaliInput";

type ReactProps = TextInputProps & RectButtonProps;

interface Props extends ReactProps {
  handleValidate: () => void;
}

export function Insert({ handleValidate, ...rest } : Props){

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
          <View style={styles.inner}>
            <Text style={styles.header}>Preço</Text>
            <CristaliInput
              {...rest}
              keyboardType='number-pad'
            />
            <View style={styles.btnContainer}>
              <CristaliButton
                title="Continuar"
                color={`${theme.colors.Success}`}
                onPress={handleValidate}
              />
            </View>
          </View>
      </KeyboardAvoidingView>
  )
}