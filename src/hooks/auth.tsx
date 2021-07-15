import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as auth from '../services/auth'

export interface UserProps {
  name: string;
  email: string;
}

interface AuthProps {
  children: ReactNode
}

interface AuthContextData {
  signed: boolean;
  user: UserProps | null;
  loading: boolean;
  signIn(): Promise<void>;
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
        //api.defaults.headers['Authorization'] = `${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }else{
        setLoading(false);
      }
    }
    loadStoragedData();
  },[]);

  async function signIn(){
    const response = await auth.signIn();
    setUser(response.user);
    //api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
    await AsyncStorage.setItem('@CRISTALIAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@CRISTALIAuth:token', response.token);
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