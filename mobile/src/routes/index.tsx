import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';
import { Loading } from '../components/Loading';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  const { signed, loading } = useAuth();

  if(loading){
    return(
      <Loading />
    );
  }else{
    return (
      <NavigationContainer>
        {
        signed?
        <AppRoutes />
        :
        <AuthRoutes />
        }
      </NavigationContainer>
    );
  }
}