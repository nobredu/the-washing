import React, { ReactNode, useState } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { RootStackParamList } from '../telas';
import { StackNavigationProp } from '@react-navigation/stack';
import iconPerfil from '../../assets/icons/iconPerfil.png'
import iconPerfilEdit from '../../assets/icons/iconEditPerfil.png'
import iconAvaliacao from '../../assets/icons/iconStars.png'

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
        {editando ? <Image style={styles.iconPerfilEdit} source={iconAvaliacao} /> : null}
      </View>

      <View style={styles.camposPerfil}>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Empresa"><Text></Text></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Email"></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Endereço"></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Horario"></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Dias"></TextInput>
          <TextInput editable={editando} style={styles.titulosCampos} placeholder = "Equipes"></TextInput>
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
        <Text onPress={() => { navigation.navigate('TelaIndexEstabelecimento'); }}>Home</Text>
        <Text onPress={() => { navigation.navigate('TelaMensagensEstabelecimento'); }}>Mensagens</Text>        
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
    marginBottom: '10%',
    alignItems: 'center',
  },
  headerText: {    
    fontSize: 35,
  },
  iconPerfil: {
    maxHeight: '100%',
    maxWidth: '30%',
  },
  iconPerfilEdit: {
    maxHeight: '80%',
    maxWidth: '30%',
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