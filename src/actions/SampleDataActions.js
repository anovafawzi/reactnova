import { useReducer } from 'react';
import { sampleReducer } from '../reducers';
import { SampleAction } from '../constants/ActionList';

import Api from '../lib/api';

export const useSampleDataActions = (loader) => {
  const [state, dispatch] = useReducer(sampleReducer, {});

  const getSampleData = (url = '') => {
    const searchUrl = (url === '') ? 'https://swapi.co/api/people/' : url;

    loader.showLoader();
    Api.get(searchUrl)
      .then(response => {
        dispatch({ type: SampleAction.GET_SAMPLE_DATA, sampleData: response });
        loader.hideLoader();
      })
      .catch(error => {
        console.log(error);
        loader.hideLoader();
      });
  }

  return [{
    state,
    getSampleData,
  }];
}
