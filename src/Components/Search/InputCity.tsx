import React from "react";
import { Autocomplete, AutocompleteItem, Icon } from "@ui-kitten/components";
import { IconX, ICON_TYPE } from "../../Icons";
import { TouchableOpacity } from "react-native";
import cities from "./../../../dummy-data/cities";
import { City } from "./../../Models";
import { SearchFilters } from "../../Models/SearchFilters";
import { setSearchFiltersAction } from "../../Store/search-filters/actions";
import { SearchFiltersType } from "../../Store/search-filters/types";
import { connect } from "react-redux";

interface RootState {
  SearchFiltersStore: SearchFilters;
}

const mapStateToProps = (state: RootState, ownProps) => ({
  SearchFiltersStore: state.SearchFiltersStore,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchFiltersAction: (searchFiltersData: SearchFiltersType) => {
      dispatch(setSearchFiltersAction(searchFiltersData));
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

const filter = (item, query) =>
  item.name.toLowerCase().includes(query.toLowerCase());

const StarIcon = (props) => (
  <IconX name="location" origin={ICON_TYPE.EVIL_ICONS} />
);

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const InputCity = (props: Props) => {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const [data, setData] = React.useState<City[]>(cities);

  const onSelect = (index) => {
    setValue(data[index].name);
    props.setSearchFiltersAction({ city: data[index].name });
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
      value={value}
      accessoryRight={renderCloseIcon}
      onChangeText={onChangeText}
      onSelect={onSelect}
    >
      {data.map(renderOption)}
    </Autocomplete>
  );
};

export default connector(InputCity);
