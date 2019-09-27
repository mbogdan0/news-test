import React from 'react';
import DataProvider from "./components/DataProvider/DataProvider";
import News from "./components/News/News";


const App = () => {
  return (
      <DataProvider>
        <News />
      </DataProvider>
  );
};


export default App;
