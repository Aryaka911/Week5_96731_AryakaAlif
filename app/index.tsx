import { Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Appbar, Card, Text, Avatar, Searchbar } from "react-native-paper"
import userData from "./data.json";
import styles from "./AppStyles";

export default function App() {
  const [search, setSearch] = useState("");
  const filteredUsers = userData.filter((user) => 
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Screen Name */}
      <Stack.Screen options={{ title: "User List"}} />

      <Appbar.Header>
        <Appbar.Content title="User List" style={{ alignItems: "center" }} />
      </Appbar.Header>

      <View style={styles.container}>
        {/* 🔍 Search */}
        <Searchbar
          placeholder="Cari user..."
          value={search}
          onChangeText={setSearch}
          style={styles.search}
        />

      <ScrollView>
          {filteredUsers.map((user, index) => (
            <Card key={index} style={styles.card}>
              <Card.Title
                title={user.name}
                subtitle={user.email}
                left={(props) => (
                  <Avatar.Image
                    {...props}
                    source={{ uri: user.photo_url }}
                  />
                )}
              />
            </Card>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
