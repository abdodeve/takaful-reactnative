import React from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Icon,
  Text,
} from "@ui-kitten/components";
import { IconX, ICON_TYPE } from "../../../Icons";
import { TouchableOpacity } from "react-native";
import cities from "./../../../../dummy-data/cities";

const filter = (item, query) =>
  item.title.toLowerCase().includes(query.toLowerCase());

const StarIcon = (props) => (
  <IconX name="location" origin={ICON_TYPE.EVIL_ICONS} />
);

const InputCity = () => {
  const [value, setValue] = React.useState<any | null>(null);
  const [data, setData] = React.useState<any | null>(cities);

  const onSelect = (index) => {
    setValue(data[index].title);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(cities.filter((item) => filter(item, query)));
  };

  const clearInput = () => {
    setValue("");
    setData(cities);
  };

  const renderOption = (item, index) => (
    <AutocompleteItem key={index} title={item.title} accessoryLeft={StarIcon} />
  );

  const renderCloseIcon = (props) => (
    <TouchableOpacity onPress={clearInput}>
      <IconX name="close" color="#000" origin={ICON_TYPE.EVIL_ICONS} />
    </TouchableOpacity>
  );

  return (
    <Autocomplete
      placeholder="Entrez le nom de la ville"
      value={value}
      accessoryRight={renderCloseIcon}
      onChangeText={onChangeText}
      onSelect={onSelect}
    >
      {data.map(renderOption)}
    </Autocomplete>
  );
};

export default InputCity;
