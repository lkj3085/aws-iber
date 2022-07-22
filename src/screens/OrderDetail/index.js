import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import BasketDishItem from "../../components/BasketDIshItem";
import { useOrderContext } from "../../contexts/OrderContext";
import { useRoute } from "@react-navigation/native";

const OrderDetailHeader = ({ order }) => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2일 전</Text>

          <Text style={styles.menuTitle}>주문 내역</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const { getOrder } = useOrderContext();
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return null;
  }
  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailHeader order={order} />}
      data={order.dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
