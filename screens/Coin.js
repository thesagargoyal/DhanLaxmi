import React, { useRef, useMemo, useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Chart from "../component/Chart";
import { getMarketData } from '../services/cryptoService';
import Constants from 'expo-constants';


export default function Coin() {
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setSelectedCoinData(marketData[0]);
    };
    fetchMarketData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <View style={{width:"100%"}}>
            <Text style={{textAlign:"center", fontSize:30, fontWeight: "bold"}}>{selectedCoinData?.name}/{selectedCoinData?.symbol}</Text>
        </View>
      {selectedCoinData ? (
        <Chart
          currentPrice={selectedCoinData.current_price}
          logoUrl={selectedCoinData.image}
          name={selectedCoinData.name}
          symbol={selectedCoinData.symbol}
          priceChangePercentage7d={
            selectedCoinData.price_change_percentage_7d_in_currency
          }
          sparkline={selectedCoinData?.sparkline_in_7d.price}
          high={selectedCoinData?.high_24h}
          low={selectedCoinData?.low_24h}
          rank={selectedCoinData?.market_cap_rank}
          volume={selectedCoinData?.total_volume}
          marketCap={selectedCoinData?.market_cap}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
