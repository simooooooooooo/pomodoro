import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Tabs from "../componentes/tabs";
import Timer from "../componentes/timer";
import Boton from "../componentes/btn";
import { useState, useEffect } from "react";

export default Principal = () => {
  const [seleccion, setSeleccion] = useState("POMO" | "SHORT" | "LONG");
  const [tiempo, setTiempo] = useState(25 * 60);
  const [activo, setActivo] = useState(false);
  const colores = ["#21EB98", "#BF60EB", "#EB8E21"];

  useEffect(() => {
    let interval = null;

    if (activo) {
      interval = setInterval(() => {setTiempo(tiempo - 1);}, 1000);
    } else {
      clearInterval(interval);
    }

    if (tiempo === 0) {
      setActivo(false);
      setTiempo(tiempoActual === 0 ? 2500 : tiempoActual === 1 ? 300 : 900);
      Alarma();
    }

    return () => clearInterval(interval);
  }, [tiempo, activo]);

  return (
    <SafeAreaView
      style={[
        objetoEstilos.contenedor,
        { backgroundColor: colores[seleccion] },
      ]}
    >
      <View style={{ marginTop: Platform.OS === "android" && 30 }}>
        <Tabs
          seleccion={seleccion}
          setseleccion={setSeleccion}
          tiempo={tiempo}
          setTiempo={setTiempo}
          setActivo={setActivo}
        />
        <Timer tiempo={tiempo} />
        <Boton activo={activo} setActivo={setActivo} />
      </View>
    </SafeAreaView>
  );
};

const objetoEstilos = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
});
