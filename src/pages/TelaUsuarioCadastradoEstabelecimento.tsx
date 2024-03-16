import React, { ReactNode } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../telas';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaIndexCliente'>;
};

const TelaUsuarioCadastradoEstabelecimento: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>      
      <Text style={styles.titleBody}>Novo usuario estabelecimento</Text>

      <View style={styles.body}>
        <Text style={styles.titleBody}>Usuario cadastrado</Text>
        <Text>Vá ao menu Home</Text>
      </View>

      <View style={styles.footer}>
        <Text onPress={() => { navigation.navigate('TelaIndexEstabelecimento');     }}>Home</Text>
        <Text onPress={() => { navigation.navigate('TelaMensagensEstabelecimento'); }}>Mensagens</Text>
        <Text onPress={() => { navigation.navigate('TelaPerfilEstabelecimento');    }}>Perfil</Text>
      </View>
    </View>
  );
};

export default TelaUsuarioCadastradoEstabelecimento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',    
    alignItems: 'center',
  },
  titleBody: {
    marginTop: "10%",
    fontSize: 35,
  },
  body:{
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height:'5%',
  }
});