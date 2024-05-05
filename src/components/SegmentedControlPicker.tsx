import React from "react";
import colors from "theme/colors";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

type SegmentedControlPickerProps = {
  values: string[];
  onValueChange: (value: string) => void;
};

function SegmentedControlPicker({
  values,
  onValueChange,
}: SegmentedControlPickerProps) {
  return (
    <SegmentedControl
      values={values}
      selectedIndex={1}
      onValueChange={onValueChange}
      backgroundColor={colors.secondary}
      tintColor={colors.ternary}
      fontStyle={{
        color: colors.textSecondary,
        fontWeight: "400",
      }}
      activeFontStyle={{
        color: colors.textPrimary,
        fontWeight: "400",
      }}
    />
  );
}

export default SegmentedControlPicker;
