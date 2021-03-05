import './App.css';
import Search from './components/search/search';
import Info from './components/info/info';
import GoogleMap from './components/google-map/google-map';
import { useState } from 'react';

function App() {

  const [state, setstate] = useState({ ipData: null, searchHit: false })

  let setDataToState = (data, searchHit) => {
    setstate({ ipData: data, searchHit: searchHit });
  }

  return (
    <div className="App">
      <Search action={setDataToState} />
      <Info ipData={state.ipData}
        searchHit={state.searchHit} />
      <GoogleMap ipData={state.ipData} />
    </div>
  );

}

export default App;
