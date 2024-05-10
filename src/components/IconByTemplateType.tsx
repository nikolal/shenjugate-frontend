import React from "react";
import { View, Text } from "react-native";
import colors from "theme/colors";
import { TemplateType } from "@screens/workout/templates";
import { Ionicons } from "@expo/vector-icons";

type IconByTemplateTypeProps = {
  templateType: TemplateType;
  text?: boolean;
};

function IconByTemplateType({ templateType, text }: IconByTemplateTypeProps) {
  if (templateType === TemplateType.Strength) {
    return (
      <View className="flex-row">
        <Ionicons name={"barbell"} size={20} color={colors.accentBlue} />
        {text && (
          <Text className="ml-2 text-sm text-textSecondary">Strength</Text>
        )}
      </View>
    );
  } else if (templateType === TemplateType.Power) {
    return (
      <View className="flex-row">
        <Ionicons name={"flame"} size={20} color={colors.accentRed} />
        {text && <Text className="ml-2 text-sm text-textSecondary">Power</Text>}
      </View>
    );
  } else if (templateType === TemplateType.Speed) {
    return (
      <View className="flex-row">
        <Ionicons name={"flash"} size={20} color={colors.accentYellow} />
        {text && <Text className="ml-2 text-sm text-textSecondary">Speed</Text>}
      </View>
    );
  } else if (templateType === TemplateType.Hypertrophy) {
    return (
      <View className="flex-row">
        <Ionicons name={"hammer"} size={20} color={colors.accentGreen} />
        {text && (
          <Text className="ml-2 text-sm text-textSecondary">Hypertrohy</Text>
        )}
      </View>
    );
  } else if (templateType === TemplateType.Endurance) {
    return (
      <View className="flex-row">
        <Ionicons name={"fitness"} size={20} color={colors.accentPurple} />
        {text && (
          <Text className="ml-2 text-sm text-textSecondary">Endurance</Text>
        )}
      </View>
    );
  }
  return (
    <View className="flex-row">
      <Ionicons name={"flask"} size={20} color={colors.accentPink} />
      {text && (
        <Text className="ml-2 text-sm text-textSecondary">Assistance</Text>
      )}
    </View>
  );
}

export default IconByTemplateType;
