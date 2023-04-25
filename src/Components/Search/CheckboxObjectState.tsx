import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Layout } from "@ui-kitten/components";
import { connect } from "react-redux";

const useCheckboxState = (initialCheck = false) => {
  const [checked, setChecked] = React.useState(initialCheck);
  return { checked, onChange: setChecked };
};

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

const newCheckboxState1 = (initialCheck = false) => {
  const [checked1, setChecked1] = React.useState(initialCheck);
  return { checked: checked1, onChange: setChecked1 };
};

const CheckboxObjectState = (props: Props) => {
  const [newCheckboxState, setNewCheckboxState] = React.useState(false);
  const [goodCheckboxState, setGoodCheckboxState] = React.useState(false);
  const [mediumCheckboxState, setMediumCheckboxState] = React.useState(false);
  const [tinkerCheckboxState, setTinkerCheckboxState] = React.useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        style={styles.checkbox}
        status="basic"
        checked={newCheckboxState}
        onChange={(checked) => {
          setNewCheckboxState(checked);
          props.setSearchFiltersAction({
            objectState: {
              ...props.SearchFiltersStore.objectState,
              ...{ new: checked },
            },
          });
        }}
      >
        Comme neuf
      </CheckBox>
      <CheckBox
        style={styles.checkbox}
        status="basic"
        checked={goodCheckboxState}
        onChange={(checked) => {
          setGoodCheckboxState(checked);
          props.setSearchFiltersAction({
            objectState: {
              ...props.SearchFiltersStore.objectState,
              ...{ good: checked },
            },
          });
        }}
      >
        Bon état
      </CheckBox>
      <CheckBox
        style={styles.checkbox}
        status="basic"
        checked={mediumCheckboxState}
        onChange={(checked) => {
          setMediumCheckboxState(checked);
          props.setSearchFiltersAction({
            objectState: {
              ...props.SearchFiltersStore.objectState,
              ...{ medium: checked },
            },
          });
        }}
      >
        Moyen
      </CheckBox>
      <CheckBox
        style={styles.checkbox}
        status="basic"
        checked={tinkerCheckboxState}
        onChange={(checked) => {
          setTinkerCheckboxState(checked);
          props.setSearchFiltersAction({
            objectState: {
              ...props.SearchFiltersStore.objectState,
              ...{ tinker: checked },
            },
          });
        }}
      >
        À bricoler
      </CheckBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  checkbox: {
    margin: 2,
    fontSize: 30,
  },
});

export default connector(CheckboxObjectState);
