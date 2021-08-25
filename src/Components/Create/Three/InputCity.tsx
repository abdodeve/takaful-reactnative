import React, {Dispatch} from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Icon,
  Text
} from "@ui-kitten/components";
import { IconX, ICON_TYPE } from "../../../Icons";
import { TouchableOpacity } from "react-native";
import cities from "./../../../../dummy-data/cities";
import { City } from "./../../../Models";

type Props = {city: string, setCity: Dispatch<string>};

const filter = (item, query) =>
  item.name.toLowerCase().includes(query.toLowerCase());

const StarIcon = (props) => (
  <IconX name="location" origin={ICON_TYPE.EVIL_ICONS} />
);

const InputCity: React.FC<Props> = ({city, setCity}) => {
  // const [value, setValue] = React.useState<string | undefined>(undefined);
  const [data, setData] = React.useState<City[]>(cities);

  const onSelect = (index) => {
    if (data) setCity(data[index].name);
  };

  const onChangeText = (query) => {
    setCity(query);
    setData(cities.filter((item) => filter(item, query)));
  };

  const clearInput = () => {
    setCity("");
    setData(cities);
  };

  const renderOption = (item, index) => (
    <AutocompleteItem key={index} title={item.name} accessoryLeft={StarIcon} />
  );

  const renderCloseIcon = (props) => (
    <TouchableOpacity onPress={clearInput}>
      <IconX name="close" color="#000" origin={ICON_TYPE.EVIL_ICONS} />
    </TouchableOpacity>
  );

  return (
    <Autocomplete
      placeholder="Entrez le nom de la ville"
      value={city}
      accessoryRight={renderCloseIcon}
      onChangeText={onChangeText}
      onSelect={onSelect}
    >
      {data.map(renderOption)}
    </Autocomplete>
  );
};

export default InputCity;
