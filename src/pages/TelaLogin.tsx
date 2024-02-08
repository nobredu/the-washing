// HomeScreen.tsx

import React from 'react';
import { StyleSheet ,Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { RootStackParamList } from '../telas';
import { StackNavigationProp } from '@react-navigation/stack';
import logoLogin from '../../assets/logo/logo-theWashing.png'

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaLogin'>;
};

const TelaLogin: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={stylesLogin.titulo}>The washing</Text>
      <Image style={stylesLogin.logo} source={logoLogin}></Image>
      <View style={stylesLogin.container}>
        <TextInput placeholder="Email" style={stylesLogin.imput}></TextInput>
        <TextInput placeholder="Senha" style={stylesLogin.imput}></TextInput>
        <TouchableOpacity style={stylesLogin.submit} 
          onPress={() => { navigation.navigate('TelaNovoUsuario'); }}>
          <Text 
            style={stylesLogin.textSubmit}
            onPress={() => { alert('Desabilitado no momento') }}
            >Entrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={stylesLogin.novoUsuario} 
        onPress={() => { navigation.navigate('TelaNovoUsuario'); }}>
        <Text style={stylesLogin.textNovoUsuario}>Novo usuario</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesLogin = StyleSheet.create({
  titulo: {
    fontSize: 24, 
    marginBottom: 20
  },
  logo: {
    width: '80%',
    borderRadius: 10,
    margin: 20
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#DCD6D6',
    width: '90%',
    height: '30%',
    borderRadius: 8,
  },
  imput: {
    backgroundColor: '#716E6E',
    borderRadius: 20,
    width: '95%',
    height: '20%',
    marginTop: '10%',
    textAlign: 'center'
  },
  submit: {
    backgroundColor: '#04A330',
    borderRadius: 5,
    width: '40%',
    height: '20%',
    marginTop: '5%',
    borderWidth: 1,
    borderColor: 'black',
  },
  textSubmit: {
    textAlign: 'center',
    marginTop: '10%'
  },
  novoUsuario: {
    backgroundColor: '#DEDADA',
    borderRadius: 25,
    width: '25%',
    height: '5%',
    marginTop: '10%',
  },
  textNovoUsuario: {
    textAlign: 'center',
    marginTop: '10%'
  }
});