// SegundaTela.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../telas';

type TelaNovoEstabelecimentoProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaNovoUsuario'>;
};

const TelaNovoEstabelecimento: React.FC<TelaNovoEstabelecimentoProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>      
      <View style={stylesNovoUsuario.container}>
        <Text style={stylesNovoUsuario.titulo}>Novo Usuario Estabelecimento</Text>
        <TextInput placeholder="Nome Do lava rápido" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Dias de funcionamento" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Horario de funcionamento" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Tipos de lavagens" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Sistema leva e traz ?" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Tipos de pagamentos" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Telefone estabelecimento" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Endereço do estabelecimento" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="CNPJ" style={stylesNovoUsuario.imput}></TextInput>

        <TouchableOpacity style={stylesNovoUsuario.buttonFooter}>
          <Text 
            style={stylesNovoUsuario.buttonFooterText}
            onPress={() => { navigation.navigate('TelaLogin'); }}
          >Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default TelaNovoEstabelecimento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesNovoUsuario = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 24, 
    margin: 20
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#DCD6D6',
    width: '90%',
    height: '95%',
    borderRadius: 8,
  },
  imput: {
    backgroundColor: '#716E6E',
    borderRadius: 20,
    width: '95%',
    height: '6%',
    marginTop: '2%',
    textAlign: 'center'
  },
  buttonFooter: {
    backgroundColor: '#04A330',
    padding: 10,
    borderRadius: 5,
    marginTop: '25%',
    width: '40%',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonFooterText: {
    color: 'black',
    textAlign: 'center',
  },
});