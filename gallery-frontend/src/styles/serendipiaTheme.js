import { extendTheme } from "@chakra-ui/react";

const serendipiaTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        fontFamily: "IM Fell Great Primer, serif",
      },
      h3: {
        fontFamily: "IM Fell Great Primer, serif",
      },
      p: {
        fontFamily: "Halant, serif",
      },
    },
  },
  colors: {
    palette1: {
      1: "#FA7921",
      2: "#FE9920",
      3: "#B9A44C",
      4: "#566E3D",
      5: "#0C4767",
    },
    palette2: {
      1: "#FE5D26",
      2: "#F2C078",
      3: "#FAEDCA",
      4: "#C1DBB3",
      5: "#7EBC89",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Fredericka the Great, cursive",
        fontWeight: "500",
      },
    },
    Button: {
      variants: {
        callToAction: {
          w: "8em",
          h: "2em",
          bgColor: "palette2.5",
          fontFamily: "IM Fell Great Primer, serif",
          color: "palette2.3",
          _hover: {
            bgColor: "palette1.1",
            borderColor: "none",
          },
        },
        softAction: {
          w: "8em",
          h: "2em",
          bgColor: "palette1.2",
          fontFamily: "IM Fell Great Primer, serif",
          color: "palette1.5",
          _hover: {
            bgColor: "palette1.1",
            borderColor: "none",
          },
        },
      },
    },
  },
});

export default serendipiaTheme;
