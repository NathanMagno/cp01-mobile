import { StyleSheet, TextInput, View } from 'react-native';
import CalculoProduto from './components/CalculoProduto';

export default function App() {

  const [nome, setNome] = useState('')
  const [valor, setValor] = useState(0)
  const [aumento, setAumento] = useState(0)

  return (
    <View style={styles.container}>

      <TextInput placeholder='Informe o nome do produto'
        value={nome} onChangeText={setNome} />

      <TextInput placeholder='Informe o valor do produto' keyboardType='numeric'
        value={valor} onChangeText={setValor} />

      <TextInput placeholder='Informe o aumento do produto'
        keyboardType='numeric' value={aumento} onChangeText={setAumento} />


      <CalculoProduto />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
