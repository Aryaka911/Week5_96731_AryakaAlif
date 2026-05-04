import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <>
    <Stack.Screen options={{ title: "Home" }} />

    <View style={styles.container}>
      <Text style={styles.title}>Navigation Menu</Text>

      <Link href="/email" push asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>📧 Email Page</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/userList" push asChild>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>👥 User List</Text>
        </TouchableOpacity>
      </Link>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // shadow android
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
  },
});