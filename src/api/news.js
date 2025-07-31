import axios from 'axios';

export const getNews = async () => {
  const { data } = await axios.get(
    'https://samajeste.onrender.com/api/samajeste/news'
  );
  
  return data;
};