import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

const TABS = [
  { label: "Inicio", nombre: "inicio" },
  { label: "Perfil", nombre: "perfil" },
  { label: "Buscar", nombre: "buscar" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Principal</Text>
        <Text>Elige alguna opción</Text>
      </View>

      <View style={styles.tabBar}>
        {TABS.map((t) => (
          <Pressable
            key={t.nombre}
            onPress={() =>
              router.push({
                pathname: `/tab/${t.nombre}`,
                params: { titulo: t.label },
              })
            }
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>{t.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabBar: {
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#b590d8", 
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "#aeadba",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});