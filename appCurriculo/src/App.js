/* eslint-disable no-dupe-keys */
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/fofo-perfil.jpg';
import Card from './components/card';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert(
          'Meu Linkedln',
          'https://www.linkedin.com/in/anderson-s-aguiar-662591230/',
        );
        break;

      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/DersoAguiar');
        break;

      case 'facebook':
        Alert.alert('Meu Facebook', 'https://facebook.com/AndersonSAguiar');
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Anderson S Aguiar</Text>
          <Text style={style.funcao}>Desenvolvedor Front-End</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>Engenheiro Agrônomo</Text>
          <Text style={style.card_content_text}>Experiência Profisisonal</Text>
          <Text style={style.card_content_text}>Experiência Profisisonal</Text>
        </Card>
        <Card titulo="Experiência Profissional">
          <Text style={style.card_content_text}>Agrobombas</Text>
          <Text style={style.card_content_text}>Livraria Lamarca</Text>
          <Text style={style.card_content_text}>a e m Bombas Hidráulicas</Text>
        </Card>
      </View>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },

  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },

  funcao: {
    color: '#939393',
    marginBottom: 10,
    color: 'black',
  },

  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
    color: 'black',
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});
