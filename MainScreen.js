import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import api from "./Utility/API";

function MainScreen(props) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const CallRestAPI = async () => {
    setLoading(true);
    //GET
    //let result = await api.GetSampleDataSet();


    //POST
    var obj = {
        email: "eve.holt@reqres.in",
        password: "pistol"
    };
    var json = JSON.stringify(obj);
    let result = await api.GetSampleDataSet(json);
    console.log(result)
    setData(result);
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
            {data.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "green",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            Articles:
          </Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + ". " + item.title}</Text>
            )}
          />
        </View>
      )}
      <Button title="LoadRestAPI" onPress={() => CallRestAPI()} />
      <ActivityIndicator size="large" color="#00ff00" animating={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainScreen;
