import React, { ReactNode } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../telas';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaIndexCliente'>;
};

const TelaMensagensCliente: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        {/* <Text style={styles.headerText} onPress={() => { navigation.navigate('TelaLogin'); }}>&lt;</Text> */}
      </View>
      
      <Text style={styles.titleBody}>Mensagens</Text>

      <View style={styles.body}>
        <View style={styles.boxMsg}>
          <Text>Usuario 2356</Text>
          <Text>Agendamento criado para 22/10/2022 - 09:00</Text>
        </View>
        <View style={styles.boxMsg}>
          <Text>Usuario 2345</Text>
          <Text>Agendamento criado para 25/10/2022 - 10:00</Text>
        </View>
        <View style={styles.boxMsg}>
          <Text>Usuario 2357</Text>          
          <Text>Agendamento criado para hoje as 12:00</Text>
        </View>
        <View style={styles.boxMsg}>
          <Text>Usuario 2357</Text>          
          <Text>Agendamento criado para agora</Text>
        </View>
        
      </View>

      <View style={styles.footer}>
        <Text onPress={() => { navigation.navigate('TelaIndexEstabelecimento'); }}>Home</Text>
        <Text>Mensagens</Text>
        <Text onPress={() => { navigation.navigate('TelaPerfilEstabelecimento'); }}>Perfil</Text>
      </View>
    </View>
  );
};

export default TelaMensagensCliente;

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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height:'5%',
  },
  boxMsg: {
    width: 300,
    height: '15%',
    backgroundColor: '#DCD6D6',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  }
});