import React, { useState, useEffect } from 'react';
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
    initDone && <React.Fragment>
      <AppStore>
        <AppContainer />
      </AppStore>
    </React.Fragment>
  );
}

export default App;
