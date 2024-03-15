import React, { ReactNode } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../telas';
import { StackNavigationProp } from '@react-navigation/stack';
import iconPerfil from '../../assets/icons/iconPerfil.png'

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaIndexCliente'>;
};

const TelaPerfilCliente: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        {/* <Text style={styles.headerText} onPress={() => { navigation.navigate('TelaLogin'); }}>&lt;</Text> */}
      </View>
      
      <Text style={styles.titleBody}>Perfil</Text>
      <Image style={styles.iconPerfil} source={iconPerfil}></Image>

      <View style={styles.body}>
          <Text style={styles.titulosCampos}>Nome</Text>
          <Text style={styles.titulosCampos}>Email</Text>
          <Text style={styles.titulosCampos}>Veiculo</Text>
          <Text style={styles.titulosCampos}>Placa</Text>
          <Text style={styles.titulosCampos}>Celular</Text>

          <TouchableOpacity style={styles.submit} 
            onPress={() => { alert("Indisponivel no momento") }}>
            <Text style={styles.titulosCampos}>Editar</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text onPress={() => { navigation.navigate('TelaIndexCliente'); }}>Home</Text>
        <Text onPress={() => { navigation.navigate('TelaMensagensCliente'); }}>Mensagens</Text>
        <Text>Perfil</Text>
      </View>
    </View>
  );
};

export default TelaPerfilCliente;

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
  iconPerfil: {
    maxHeight: '25%',
    maxWidth: '50%',
    borderRadius: 10,
    margin: 20
  },
  titulosCampos: {
    margin: 10,
  },
  submit: {
    backgroundColor: '#04A330',
    borderRadius: 5,
    width: '30%',
    height: '13%',
    marginTop: '5%',
    borderWidth: 1,
    borderColor: 'black',
  },
});