import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [kalimat, setKalimat] = useState("Kalimat ini akan muncul disini")
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Masukkan Kalimat pada Kotak dibawah Ini
      </Text>
      <TextInput style={styles.inputan}
      onChangeText={(text) => setKalimat(text.replace(/[^0-9]/g,''))} 
      multiline={true}
      numberOfLines={5}
      keyboardType="numeric"
      />
      <Text>
      Output: {'\n'}
      {kalimat}
      </Text>
      <Button title="Munculkan Pesan" 
      onPress={() => alert(kalimat)} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputan:{
    borderColor: 'black',
    borderWidth: 1,

  }
});
