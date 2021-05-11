import React, { useState } from "react";
import Router from "./routes/Router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import serendipiaTheme from "./styles/serendipiaTheme";
import { token } from "./constants/requests";

const App = () => {
  const [logged, setLogged] = useState(token ? "Log Out" : "Log In");
  return (
    <ChakraProvider theme={serendipiaTheme}>
      <CSSReset />
      <BrowserRouter>
        <Header logged={logged} setLogged={setLogged} />
        <Router logged={logged} setLogged={setLogged} />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
