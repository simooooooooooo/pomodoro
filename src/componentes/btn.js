import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default Boton = (props) => {

    const {activo, setActivo} = props;

    const handleClick = () => {
        setActivo(!activo);
    }

    return (
    <View>
    <TouchableOpacity style = {styles.boton} onPress = {() => handleClick() }>
        <Text style = {styles.texto}>{activo ? "Parar" : "Comenzar"}</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "white",
        margin: 10,
        height: 50,
        borderRadius: 10,
        justifyContent: "center"
    },
    texto: {
        fontSize: 20,
        alignSelf: "center",
    },
});