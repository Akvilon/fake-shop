import React from 'react';
import {Header} from "./Header";
import {Main} from "./Main";
import {Box} from "@chakra-ui/react";

function App() {
  return (
    <Box h="100%" display="flex" flexDirection="column">
        <Header />
        <Main />
    </Box>
  );
}

export default App;
