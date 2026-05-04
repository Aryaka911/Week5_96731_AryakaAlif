import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Welcome" }} />

      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>

        <Link href="/home" style={styles.button}>
          Go to Home Screen
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#6200ee",
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    overflow: "hidden",
  },
});