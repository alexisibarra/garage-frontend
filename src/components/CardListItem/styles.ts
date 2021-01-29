import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { Colors, Spacing } from "../../styles";

export const Card = styled.TouchableOpacity`
  background-color: ${Colors.cardColor};
  margin-horizontal: ${Spacing.padding}px;
  shadow-offset: {
    width: 0;
    height: 5;
  }
  shadow-opacity: 0.25;
  shadow-radius: 20px;
  elevation: 2;
`;

export const Details = styled.View`
  padding: ${Spacing.padding}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: ${Spacing.extraMargin}px;
`;

export const Model = styled.Text`
  color: ${Colors.textColor};
  font-size: 30px;
  font-family: Arial;
`;

export const Line = styled.View`
  height: 1px;
  background-color: ${Colors.divisorColor};
  margin-vertical: ${Spacing.extraMargin}px;
`;

export const MakeYear = styled.Text`
  padding-vertical: ${Spacing.extraMargin}px;
`;

interface IStarIcon {
  star: boolean;
}

export const StarIcon = styled(AntDesign).attrs((props: IStarIcon) => {
  console.log({ props });

  return {
    name: props.star ? "star" : "staro",
    color: props.star ? Colors.starColor : Colors.textColor,
    size: 24,
  };
})``;
