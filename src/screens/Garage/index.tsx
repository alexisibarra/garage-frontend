import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { getList } from "../../services/api";
import CardListItem from "../../components/CardListItem";
import { Space, Title } from "./styles";

const Garage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateData = async () => {
      const res = await getList();

      console.log(res.items);

      setData(res.items);
    };
    updateData();
  }, []);

  return (
    <ScrollView>
      <Title>Garage</Title>
      {data.map((item: any) => (
        <View key={`CardListItem-container-${item.id}`}>
          <CardListItem
            id={item.model}
            model={item.model}
            make={item.make}
            year={item.year}
            coverURL={item?.image?.url}
          />
          <Space />
        </View>
      ))}
    </ScrollView>
  );
};

export default Garage;
