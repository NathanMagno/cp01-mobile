import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CalculoProduto from './components/CalculoProduto';

export default function App() {

  const [nome, setNome] = useState('')
  const [valor, setValor] = useState(0)
  const [aumento, setAumento] = useState(0)

  return (
    <View style={styles.container}>

      <Image alt='Logo' source={require('./assets/logo.png')} height={10} width={10} />

      <TextInput style placeholder='Inform  e o nome do produto'
        value={nome} onChangeText={setNome} keyboardType='default' required />

      <TextInput placeholder='Informe o valor do produto' keyboardType='numeric'
        value={valor} onChangeText={setValor} required />

      <TextInput placeholder='Informe o aumento do produto'
        keyboardType='numeric' value={aumento} onChangeText={setAumento} required />


      <TouchableOpacity style={styles.appButtonContainer}
        onPress={() => <CalculoProduto valor={valor}
          aumento={aumento} />}><Text style={styles.appButtonText}>Calcular</Text></TouchableOpacity>

      <CalculoProduto valor={valor}
        aumento={aumento} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

});
