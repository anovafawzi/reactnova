import { SampleAction } from '../constants/ActionList';

const getSampleData = (sampleData, state) => {
  return { ...state, sampleData };
}

export const sampleReducer = (state, action) => {
  switch (action.type) {
    case SampleAction.GET_SAMPLE_DATA:
      return getSampleData(action.sampleData, state);
    default:
      return state;
  }
};
