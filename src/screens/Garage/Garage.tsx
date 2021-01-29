import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ScrollView, View } from "react-native";

import { getAllThunk } from "../../store/reducers/cars.reducer";
import { IStoreState } from "../../store/reducers/reducers";

import CardListItem from "../../components/CardListItem/CardListItem";

import { GarageContainer, Space } from "./styles";

const Garage = (props: IProps) => {
  const { cars, getAllCars, navigation } = props;

  useEffect(() => {
    getAllCars();
  }, [getAllCars]);

  return (
    <GarageContainer>
      {Object.values(cars).map((car) => (
        <View key={`CardListItem-container-${car.id}`}>
          <CardListItem car={car} navigation={navigation} />

          <Space />
        </View>
      ))}
    </GarageContainer>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  cars: state.cars.all,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAllCars: getAllThunk(dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type IProps = PropsFromRedux & {
  navigation: any;
};

export default connector(Garage);
