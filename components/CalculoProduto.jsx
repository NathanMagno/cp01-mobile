import { Text } from "react-native"


export default function CalculoProduto(props) {


    return (
        <>


            <Text>{((props.aumento / 100) * props.valor) + props.valor}</Text>



        </>
    )
}
