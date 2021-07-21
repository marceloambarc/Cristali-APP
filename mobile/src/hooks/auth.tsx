import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

export interface UserProps {
  id?: number;
  ativo?: number;
  senha: string;
  ccli?: string;
  nomecli?: string;
  cgce: string;
}

interface AuthProps {
  children: ReactNode
}

interface AuthContextData {
  signed: boolean;
  user: UserProps;
  loading: boolean;
  signIn({cgce, senha} : UserProps): Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children } : AuthProps){
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [loading, setLoading] = useState(false);

  async function signIn({cgce, senha}: UserProps){
    setLoading(true);
    api.post('/login',{
      cgce,
        senha
    }).then(response => {
      AsyncStorage.setItem('@CRISTALIAuth:user', JSON.stringify(response.data.user));
      AsyncStorage.setItem('@CRISTALIAuth:token', response.data.token);
      setUser(response.data.user);
      setLoading(false);
    }).catch(err => {
      const errorstring = String(err);
      const res = errorstring.replace(/\D/g,'');
      if(res == '403'){
        Alert.alert('Usuário não Cadastrado!');
        setLoading(false);
      }else if(res == '401'){
        Alert.alert('Senha Incorreta.');
        setLoading(false);
      }else{
        alert('Problema na conexão.');
        setLoading(false);
      }
    });
  }

  async function signOut(){
    setUser({} as UserProps);
    await AsyncStorage.removeItem('@CRISTALIAuth:token');
    await AsyncStorage.removeItem('@CRISTALIAuth:user');
  }

  async function loadStoragedData(){
    const storagedUser = await AsyncStorage.getItem('@CRISTALIAuth:user');
    const storagedToken = await AsyncStorage.getItem('@CRISTALIAuth:token');
    if(storagedUser && storagedToken){
      api.defaults.headers.authorization = `Bearer ${storagedToken}`
    }
  }

  useEffect(() => {
    loadStoragedData();
  },[]);

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
    { children }
    </AuthContext.Provider>
  );
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {
  AuthProvider,
  useAuth
}