import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/pages/TelaLogin';
import TelaNovoUsuario from './src/pages/TelaNovoUsuario';
import TelaNovoEstabelecimento from './src/pages/TelaNovoEstabelecimento';
import TelaIndexCliente from './src/pages/TelaIndexCliente';
import TelaMensagensCliente from './src/pages/TelaMensagensCliente';
import { RootStackParamList } from './src/telas';
import TelaPerfilCliente from './src/pages/TelaPerfilCliente';
import TelaPerfilEstabelecimento from './src/pages/TelaPerfilEstabelecimento';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen name="TelaLogin" component={TelaLogin}
          options={{headerShown: false }} 
        />
        <Stack.Screen name="TelaNovoUsuario" component={TelaNovoUsuario} 
          options={{headerShown: false }} 
        />
        <Stack.Screen name="TelaNovoEstabelecimento" component={TelaNovoEstabelecimento} 
          options={{headerShown: false }} 
        />
        <Stack.Screen name="TelaIndexCliente" component={TelaIndexCliente} 
          options={{headerShown: false }} 
        />
        <Stack.Screen name="TelaMensagensCliente" component={TelaMensagensCliente} 
          options={{headerShown: false }} 
        />
        <Stack.Screen name="TelaPerfilCliente" component={TelaPerfilCliente} 
          options={{headerShown: false }} 
        />
        <Stack.Screen name="TelaPerfilEstabelecimento" component={TelaPerfilEstabelecimento} 
          options={{headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;