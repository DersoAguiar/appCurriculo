import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF',
  },

  card_content: {
    marginTop: 20,
  },

  card_header: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default style
