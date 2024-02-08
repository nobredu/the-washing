import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/pages/TelaLogin';
import TelaNovoUsuario from './src/pages/TelaNovoUsuario';
import TelaNovoEstabelecimento from './src/pages/TelaNovoEstabelecimento';
import { RootStackParamList } from './src/telas';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;