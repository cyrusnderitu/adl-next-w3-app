import React, { useState } from "react";
import Speakers from "./Speakers";
import Header from "./Header";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout sharedTheme={"light"}>
        <Header />
        <Speakers  />
    </Layout>
  );
};

export default App;
