import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    width: "100%",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
