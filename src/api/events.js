import axios from 'axios';

export const getEvents = async () => {
  const { data } = await axios.get(
    'https://samajeste.onrender.com/api/samajeste/events'
  );

  console.log(data)
  
  return data;
};