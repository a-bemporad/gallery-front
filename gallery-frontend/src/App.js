import React from "react";
import Router from "./routes/Router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import serendipiaTheme from "./styles/serendipiaTheme";

const App = () => {
  return (
    <ChakraProvider theme={serendipiaTheme}>
      <CSSReset />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
