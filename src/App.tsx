import React, { useState, useEffect, ReactNode } from 'react';
import intl from 'react-intl-universal';

// global app container
import AppContainer from './AppContainer';

// import app global store (context)
import AppStore from './context/AppStore';

// locale data
const locales = {
	'en-US': require('./locales/en.json'),
	//'id-ID': require('./locales/id.json'),
};

const RenderApp = (initDone: any): JSX.Element => {
  if (initDone) {
    return (
      <React.Fragment>
        <AppStore>
          <AppContainer />
        </AppStore>
      </React.Fragment>
    );
  }
  return <React.Fragment></React.Fragment>;
}

const App = () => {
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    intl.init({
			currentLocale: 'en-US', // determine default locale here
			locales,
		}).then(() => {
			setInitDone(true);
		});
  }, []);

  return (
    <React.Fragment>
      <RenderApp initDone />
    </React.Fragment>
  );
}

export default App;
