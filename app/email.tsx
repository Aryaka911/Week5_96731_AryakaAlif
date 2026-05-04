import { Link, Stack } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Email() {
  return (
    <>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Email List Page</Text>

        <View style={{ marginTop: 10 }}>
            <Link href="/home">
            <Text style={{ color: "#007bff", marginTop: 20, fontWeight: "400", fontSize: 20}}>
                Go to Home Screen
            </Text>
            </Link>
        </View>
      
    </View>
    </>
    
  );
}