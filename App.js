import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CalculoProduto from "./components/CalculoProduto";

export default function App() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [aumento, setAumento] = useState(0);
  const [resultado, setResultado] = useState(null);

  const calcularPreco = () => {
    const valorNumerico = valor;
    const aumentoNumerico = aumento;

    if (!isNaN(valorNumerico) && !isNaN(aumentoNumerico)) {
      setResultado({
        valor: valorNumerico,
        aumento: aumentoNumerico,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        alt="Logo"
        source={require("./assets/logo.png")}
        style={{ width: 100, height: 100 }}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe o nome do produto"
        value={nome}
        onChangeText={setNome}
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        placeholder="Informe o valor do produto"
        keyboardType="numeric"
        value={valor}
        onChangeText={(p) => setValor(Number(p))}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe o aumento do produto"
        keyboardType="numeric"
        value={aumento}
        onChangeText={(p) => setAumento(Number(p))}
      />

      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={calcularPreco}
      >
        <Text style={styles.appButtonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado && (
        <CalculoProduto valor={resultado.valor} aumento={resultado.aumento} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
