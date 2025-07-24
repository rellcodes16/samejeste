import axios from 'axios';

export const getQuotes = async () => {
  const { data } = await axios.get(
    'https://samajeste.onrender.com/api/samajeste/quotes'
  );
  
  return data;
};