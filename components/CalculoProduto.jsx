import { Text } from "react-native";

export default function CalculoProduto({ aumento, valor }) {
  return (
    <>
      <Text>{(aumento / 100) * valor + valor}</Text>
    </>
  );
}
