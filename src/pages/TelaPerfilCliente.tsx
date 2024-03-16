import React, { ReactNode, useState } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { RootStackParamList } from '../telas';
import { StackNavigationProp } from '@react-navigation/stack';
import iconPerfil from '../../assets/icons/iconPerfil.png'
import iconPerfilEdit from '../../assets/icons/iconEditPerfil.png'

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaIndexCliente'>;
};

const TelaPerfilCliente: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [editando, setEditando] = useState(false); // Estado para controlar se está editando
  function habilitaEdit() {
    setEditando(!editando);

  }
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
        <Image 
          style={styles.iconPerfil} 
          source={editando ? iconPerfilEdit : iconPerfil} // Alterna entre as imagens com base no estado de edição
        />
      </View>

      <View style={styles.camposPerfil}>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Nome"><Text></Text></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Email"></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Veiculo"></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Placa"></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Celular"></TextInput>
      </View>

      <View style={styles.viewSubmit}>
          <TouchableOpacity style={styles.submit} 
            onPress={() => { 
              habilitaEdit();
            }}>
            <Text style={styles.titulosCampos}>{editando ? 'Salvar' : 'Editar'}</Text>
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
  },
  header:{
    flex: 1,
    marginTop: '20%',
    alignItems: 'center',
  },
  headerText: {    
    fontSize: 35,
  },
  iconPerfil: {
    maxHeight: '70%',
    maxWidth: '40%',
    borderRadius: 10,
    margin: 20
  },
  camposPerfil:{
    marginTop: '10%',
    alignItems: 'flex-start',
  },
  titulosCampos: {
    marginLeft: '20%',
    margin: 10,
  },
  viewSubmit:{
    alignItems: 'center',
    marginTop: '5%',
  },
  submit: {
    backgroundColor: '#04A330',
    borderRadius: 5,
    width: '30%',
    height: '22%',
    marginTop: '5%',
    borderWidth: 1,
    borderColor: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height:'5%',
  },
});