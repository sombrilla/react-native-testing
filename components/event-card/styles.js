import { StyleSheet } from 'react-native';
import { hidden } from 'ansi-colors';

const main = StyleSheet.create({
    container: {
      width: '47.5%',
      height: 150,
      borderRadius: 15,
      backgroundColor: 'white',
      overflow:'hidden',
      elevation: 8,
      marginVertical: 10,
    },
    imageWrapper:{
      height: '60%',
    },
    copyWrapper:{
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    image: {
      width: '100%',
      height: '100%',
    }
  });

export default main;