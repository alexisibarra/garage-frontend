import React, { FC, useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";

import { connect, ConnectedProps } from "react-redux";
import { ICar } from "./src/store/reducers/cars.reducer";
import { IStoreState } from "./src/store/reducers/reducers";

import CardListItem from "./src/components/CardListItem/CardListItem";

const DetailsScreen: FC<IProps> = (props) => {
  const {
    cars,
    route: {
      params: { carId },
    },
    navigation,
  } = props;

  const [car, setCar] = useState<ICar>();

  useEffect(() => {
    if (!!carId && !!cars && cars[carId]) {
      setCar(cars[carId]);
    }
  }, [carId, cars]);

  useEffect(() => {
    if (!!car) {
      (navigation as any).setOptions({
        title: `${car.maker.name} ${car.model}`,
      });
    }
  }, [car]);

  return car ? (
    <ScrollView style={{ width: "100%", paddingVertical: "5%" }}>
      <CardListItem car={car} disableOnPress={true} />
    </ScrollView>
  ) : (
    <ScrollView style={{ width: "100%" }}>
      <Text>Loading...</Text>
    </ScrollView>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  cars: state.cars.all,
});

const connector = connect(mapStateToProps, null);

type PropsFromRedux = ConnectedProps<typeof connector>;

type IProps = PropsFromRedux & {
  navigation: any;
};

export default connector(DetailsScreen);
