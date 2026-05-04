import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Button, Image, Text, View } from "react-native";

export default function Profile() {
  const { userName, email, photo } = useLocalSearchParams<{
    userName: string;
    email: string;
    photo: string;
  }>();

  return (
    <>
    <Stack.Screen options={{ title: "Profile" }} />
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Image
        source={{ uri: photo }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 999,
          marginBottom: 10,
        }}
      />

      <Text>
        {userName}'s Profile
      </Text>
      <Text>{email}</Text>

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