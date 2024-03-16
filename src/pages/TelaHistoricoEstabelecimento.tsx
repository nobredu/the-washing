import React, { ReactNode } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../telas';
import { StackNavigationProp } from '@react-navigation/stack';
import iconCheck from '../../assets/icons/iconCheck.png'
import iconErro from '../../assets/icons/iconErro.png'
import iconAvaliacao from '../../assets/icons/iconStars.png'

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaIndexCliente'>;
};

const TelaHistoricoEstabelecimento: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titleBody}>Historico</Text>

      <View style={styles.body}>
        <View style={styles.boxMsg}>
          <View style={styles.viewIcon}>
            <Image style={styles.icons} source={iconCheck}></Image>
          </View>
          <View>
            <View style={styles.boxHeader}>
              <Text style={styles.boxTitulo}>Simples</Text>
              <Image style={styles.iconAvaliacao} source={iconAvaliacao}></Image>
            </View>
            <Text></Text>
            <Text style={styles.boxText}>Lava rapido Centro</Text>
            <Text style={styles.boxText}>Dia 01/10/2022 10:00</Text>
          </View>
        </View>
        <View style={styles.boxMsg}>
          <View style={styles.viewIcon}>
            <Image style={styles.icons} source={iconCheck}></Image>
          </View>
          <View>
            <View style={styles.boxHeader}>
              <Text style={styles.boxTitulo}>Completa</Text>
              <Image style={styles.iconAvaliacao} source={iconAvaliacao}></Image>
            </View>
            <Text></Text>
            <Text style={styles.boxText}>Lava car toya</Text>
            <Text style={styles.boxText}>Dia 01/10/2022 13:00</Text>
          </View>
        </View>
        <View style={styles.boxMsg}>
          <View style={styles.viewIcon}>
            <Image style={styles.icons} source={iconCheck}></Image>
          </View>
          <View>
            <View style={styles.boxHeader}>
              <Text style={styles.boxTitulo}>Ducha</Text>
              <Image style={styles.iconAvaliacao} source={iconAvaliacao}></Image>
            </View>
            <Text></Text>
            <Text style={styles.boxText}>Lava rapido Centro</Text>
            <Text style={styles.boxText}>Dia 29/09/2022 15:00</Text>
          </View>
        </View>
        <View style={styles.boxMsg}>
          <View style={styles.viewIcon}>
            <Image style={styles.icons} source={iconErro}></Image>
          </View>
          <View>
            <View style={styles.boxHeader}>
              <Text style={styles.boxTitulo}>Completa</Text>
            </View>
            <Text></Text>
            <Text style={styles.boxText}>Lava rapido Centro</Text>
            <Text style={styles.boxText}>Dia 15/09/2022 12:00</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text onPress={() => { navigation.navigate('TelaIndexEstabelecimento'); }}>Home</Text>
        <Text onPress={() => { navigation.navigate('TelaMensagensEstabelecimento'); }}>Mensagens</Text>
        <Text onPress={() => { navigation.navigate('TelaPerfilEstabelecimento'); }}>Perfil</Text>
      </View>
    </View>
  );
};

export default TelaHistoricoEstabelecimento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
  },
  titleBody: {    
    fontSize: 35,
    marginTop: '10%',
  },
  body:{
    flex: 1,
    marginTop: '20%',
  },
  boxMsg: {
    flexDirection: 'row',
    width: 300,
    height: '15%',
    backgroundColor: '#DCD6D6',
    margin: 10,
    justifyContent: 'flex-start',
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
    width: '80%',
    height:'80%',
  },
  viewIcon:{
    width: '30%',
    height: '100%',
    backgroundColor: '#716E6E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxTitulo:{
    fontSize: 23,
    marginLeft: '5%',
  },
  boxText:{
    marginLeft: '5%',
  },
  boxHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconAvaliacao:{
    width: '35%',
    height:'50%',
  }
});