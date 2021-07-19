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
  user: UserProps | null;
  loading: boolean;
  signIn({cgce, senha} : UserProps): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children } : AuthProps){
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(){
      const storagedUser = await AsyncStorage.getItem('@CRISTALIAuth:user');
      const storagedToken = await AsyncStorage.getItem('@CRISTALIAuth:token');
      if(storagedUser && storagedToken){
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }else{
        setLoading(false);
      }
    }
    loadStoragedData();
  },[]);

  async function signIn({cgce, senha}: UserProps){
    setLoading(true);
    api.post('/login',{
      cgce,
      senha
    }).then(response => {
      setUser(response.data.user);
      AsyncStorage.setItem('@CRISTALIAuth:user', JSON.stringify(response.data.user));
      AsyncStorage.setItem('@CRISTALIAuth:token', response.data.token);
    }).catch(err => {
      Alert.alert(
        'Ops!',
        err
      );
    })
    setLoading(false);
  }

  async function signOut(){
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

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