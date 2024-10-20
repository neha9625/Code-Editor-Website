import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set to "light" for a light theme
    useSystemColorMode: false, // Ignores the user's system color mode preference
  },
});

export default theme;
