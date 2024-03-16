// TelaIndexCliente.tsx

import React, { ReactNode } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../telas';
import { StackNavigationProp } from '@react-navigation/stack';
import iconHistorico from '../../assets/icons/iconAmpulheta.png'



type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaIndexCliente'>;
};

type QuadroProps = {
  onPress: () => void;
  children?: ReactNode; // Permite que o componente aceite elementos filhos
};

const Quadro: React.FC<QuadroProps> = ({ onPress, children }) => (
  <TouchableOpacity style={styles.quadro} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const TelaIndexCliente: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => { navigation.navigate('TelaLogin'); }}>&lt;</Text>
      </View>
      
      <Text style={styles.titleBody}>Cliente</Text>

      <View style={styles.body}>
        <View style={styles.gridContainer}>
          <Quadro 
            onPress={() => alert('Indisponivel no momento')}>
            <Text>Agendar serviço</Text>
            
          </Quadro>
          <Quadro 
            onPress={() => alert('Indisponivel no momento')}>
            <Text>Consultar serviço</Text>
          </Quadro>
          <Quadro 
            onPress={() => alert('Indisponivel no momento')}>
            <Text>Estabelecimentos proximos</Text>
          </Quadro>
          <Quadro 
            onPress={() => navigation.navigate('TelaHistoricoCliente')}>
            <Image style={styles.icons} source={iconHistorico}></Image>
            <Text>Historico</Text>
          </Quadro>
          <Quadro 
            onPress={() => alert('Indisponivel no momento')}>
            <Text>Negociação</Text>
          </Quadro>
        </View>
      </View>

      <View style={styles.footer}>
        <Text >Home</Text>
        <Text onPress={() => { navigation.navigate('TelaMensagensCliente'); }} >Mensagens</Text>
        <Text onPress={() => { navigation.navigate('TelaPerfilCliente'); }} >Perfil</Text>
      </View>
    </View>
  );
};

export default TelaIndexCliente;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
  },
  header: {
    height: 70,
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'blue',
    fontSize: 18,
    flex: 1,
  },
  titleBody: {
    textAlign: 'center',
    fontSize: 35,
  },
  body:{
    flex: 1,
    marginTop: '20%',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  quadro: {
    width: 130,
    height: 130,
    backgroundColor: '#716E6E',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height:'5%',
  },
  icons: {
    width: '50%',
    height:'50%',
    borderRadius: 10,
    margin: 20
  }
});