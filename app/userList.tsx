import { Link, Stack } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import userData from "./data.json";

export default function UserList() {
  return (
    <>
    <Stack.Screen options={{ title: "User List" }} />

    <ScrollView contentContainerStyle={{ padding: 15 }}>
      {userData.map((user, index) => (
        <Link
          key={index}
          href={{
            pathname: "/profile",
            params: {
              userName: user.name,
              email: user.email,
              photo: user.photo_url,
            },
          }} push asChild>
            
          <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 12,
                padding: 12,
                marginBottom: 12,
                backgroundColor: "#1e1e1e",
                elevation: 3,
            }}
          >

            <Image
              source={{ uri: user.photo_url }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 999,
                marginRight: 10,
              }}
            />

            <View>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                {user.name}
              </Text>
              <Text style ={{ color : "#ccc" }}>
                {user.email}
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
    </>
  );
}