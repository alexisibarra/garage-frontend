import React, { FC } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { TouchableOpacity } from "react-native";

import { ICar } from "../../store/reducers/cars.reducer";
import { toggleStar } from "../../store/reducers/stars.reducer";

import Cover from "../Cover";

import {
  Card,
  Header,
  Details,
  Line,
  Model,
  MakeYear,
  StarIcon,
} from "./styles";

export interface IProps {
  car: ICar;
  navigation?: any;
  disableOnPress: boolean;
}

const CardListItem: FC<IProps> = (props: IProps) => {
  const { car, navigation, disableOnPress } = props;

  const star = useSelector<RootStateOrAny>(
    (state) => state.stars.starred[car.id]
  );

  const dispatch = useDispatch();

  const _toggleStar = () => {
    dispatch(toggleStar(car.id));
  };

  const onCardPress = () =>
    !disableOnPress &&
    navigation &&
    navigation.navigate("Details", {
      carId: car.id,
    });

  return (
    <Card onPress={onCardPress}>
      <Cover source={car.image?.url} />

      <Details>
        <Header>
          <Model>{car.model}</Model>

          <TouchableOpacity onPress={() => _toggleStar()}>
            <StarIcon star={star} />
          </TouchableOpacity>
        </Header>

        <Line />

        <MakeYear>
          {car.maker.name} | {car.year}
        </MakeYear>
      </Details>
    </Card>
  );
};

export default CardListItem;
