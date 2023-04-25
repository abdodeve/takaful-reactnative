import React from "react";
import { View, StyleSheet } from "react-native";
import { Radio, RadioGroup } from "@ui-kitten/components";
import { connect } from "react-redux";

import { setSearchFiltersAction } from "../../Store/search-filters/actions";
import { SearchFiltersType } from "../../Store/search-filters/types";
import { SearchFilters } from "../../Models/SearchFilters";

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

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const RadioAnnouncementType = (props: Props) => {
  const labels = ["Don", "Demande"];
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  return (
    <View style={styles.container}>
      <RadioGroup
        style={styles.inlineRadioGroup}
        selectedIndex={selectedIndex}
        onChange={(index) => {
          props.setSearchFiltersAction({
            announcementType: labels[index],
          });
          return setSelectedIndex(index);
        }}
      >
        <Radio>Don</Radio>
        <Radio>Demande</Radio>
      </RadioGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inlineRadioGroup: {
    flexDirection: "row",
  },
  radio: {
    margin: 2,
  },
});

export default connector(RadioAnnouncementType);
