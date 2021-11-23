import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";
import { TextInput } from "react-native-paper";
import Loader from "../component/Loader";

const Market = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filteredData = data?.filter((coin) =>
      coin.id.toLowerCase().includes(searchItem.toLowerCase())
    );
    setData(filteredData);
  }, [searchItem]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 20, flex: 1 }}>
        <TextInput
          mode="outlined"
          label="Search..."
          value={searchItem}
          onChangeText={(text) => setSearchItem(text)}
          theme={{ colors: { primary: "blue" } }}
        />
      </View>
      {data.length == 0 ? (
        <View style={{ flex: 9 }}>
          <Loader sizeParam={60} />
        </View>
      ) : (
        <View style={{ flex: 9 }}>
          <ScrollView style={{ paddingHorizontal: 20 }}>
            {data?.map((coin) => (
              <TouchableOpacity key={coin.id}>
                <View
                  style={{
                    paddingTop: 25,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Image
                      source={{ uri: coin.image.large }}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        borderWidth: 0.5,
                        borderColor: "#ddd",
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, paddingLeft: 15 }}>
                    <Text style={{ fontSize: 17, fontWeight: "400" }}>
                      {coin.name}
                    </Text>
                  </View>
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>
                      ${coin.market_data.current_price.usd}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "300",
                        color: "#5d616d",
                      }}
                    ></Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listTab: {
    backgroundColor: "white",
    flexDirection: "row",
  },
  btntab: {
    width: Dimensions.get("window").width / 4,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    borderRadius: 20,
  },
  btnTabActive: {
    backgroundColor: "#f3f7ff",
  },
});

export default Market;
