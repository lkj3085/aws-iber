import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import RestaurantItem from "../../../src/components/RestaurantItem";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // const results = await DataStore.query(Restaurant);
    // setRestaurants(results);
    // DataStore.query(Restaurant).then((results) => setRestaurants(results));
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);

  return (
    <View styles={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
