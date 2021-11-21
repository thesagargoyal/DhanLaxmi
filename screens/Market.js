import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SearchBar,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-paper';

const Market = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('All Assets');

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/`)
      .then(function (response) {
        console.log(response);
        setData(response.data);
        console.log('data is ', data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const listTab = [
    {
      status: 'All Assets',
    },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={{margin:20}}>
            <TextInput
              mode="outlined"
              label="Search..."
              theme={{ colors: { primary: 'blue' } }}
            />
          </View>

          <View style={{ paddingTop: 20 }}>
            <View style={styles.listTab}>
              {listTab.map((e) => (
                <TouchableOpacity
                  style={[
                    styles.btntab,
                    status === e.status && styles.btnTabActive,
                  ]}
                  key={e.id}
                  onPress={() => setStatusFilter(e.status)}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                    {e.status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {data.map((coin) => (
            <View key={coin.id}>
              <View
                style={{
                  paddingTop: 25,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={{ uri: coin.image.large }}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 16,
                      borderWidth: 0.5,
                      borderColor: '#ddd',
                    }}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 15 }}>
                  <Text style={{ fontSize: 17, fontWeight: '400' }}>
                    {coin.name}
                  </Text>
                </View>
                <View style={{ paddingLeft: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: '400' }}>
                    ${coin.market_data.current_price.usd}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '300',
                      color: '#5d616d',
                    }}></Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  listTab: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  btntab: {
    width: Dimensions.get('window').width / 4,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnTabActive: {
    backgroundColor: '#f3f7ff',
  },
});

export default Market;
