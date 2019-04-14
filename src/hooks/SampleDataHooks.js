import { useContext } from 'react';
import AppContext from '../context/AppContext';

export const useSampleData = () => {
  const context = useContext(AppContext);
  const { sampleData, getSampleData } = context;

  return [
    sampleData, getSampleData
  ];
}
