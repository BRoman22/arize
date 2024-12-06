import './App.css';
import { Header } from './components';
import { LangContext } from './contexts';
import { enLangConfig } from './constants';
// import { Carousel, TestCard } from './components';

// const mockData: string[] = ['lol', 'kek', 'kek1', 'lol2', 'kek3'];

function App() {
  // const data = mockData?.map(item => <TestCard name={item} />);

  return (
    <LangContext.Provider value={enLangConfig}>
      <Header />
      {/* <div className="lol">lol</div> */}
      {/* <Carousel data={data} arrow /> */}
      {/* <StrategicFocus />
      <Ball /> */}
      <div
        id="Invest"
        style={{
          height: '100vh',
          backgroundColor: 'coral',
          scrollMarginTop: '64px',
        }}
      >
        lol
      </div>
      <div
        id="Strategy"
        style={{
          height: '100vh',
          backgroundColor: 'crimson',
          scrollMarginTop: '64px',
        }}
      >
        kek
      </div>
    </LangContext.Provider>
  );
}

export default App;
