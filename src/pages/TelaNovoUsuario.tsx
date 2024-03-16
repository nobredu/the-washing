// SegundaTela.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../telas';

type TelaNovoUsuarioProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaNovoUsuario'>;
};

const TelaNovoUsuario: React.FC<TelaNovoUsuarioProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>      
      <View style={stylesNovoUsuario.container}>
        <Text style={stylesNovoUsuario.titulo}>Novo Usuario</Text>
        <TextInput placeholder="Nome Completo" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Cpf / CNPJ" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="RG" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Estado" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Cidade" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Endereço" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Celular" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Email" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Confirmar email" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Senha" style={stylesNovoUsuario.imput}></TextInput>
        <TextInput placeholder="Confirmar senha" style={stylesNovoUsuario.imput}></TextInput>

        <View style={stylesNovoUsuario.buttonContainer}>
          <TouchableOpacity style={stylesNovoUsuario.buttonFooter}>
            <Text 
              style={stylesNovoUsuario.buttonFooterText}
              onPress={() => { navigation.navigate('TelaUsuarioCadastradoCliente'); }}
            >Cliente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesNovoUsuario.buttonFooter}
            onPress={() => { navigation.navigate('TelaNovoEstabelecimento'); }}>
            <Text style={stylesNovoUsuario.buttonFooterText}>Estabelecimento</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default TelaNovoUsuario;

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
  buttonContainer: {
    marginTop: '10%',
    flexDirection: 'row',
  },
  buttonFooter: {
    backgroundColor: '#04A330',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: '40%',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonFooterText: {
    color: 'black',
    textAlign: 'center',
  },
});