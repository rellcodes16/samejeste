import axios from 'axios';

export const getBlogsByAuthor = async (authorId) => {
  const { data } = await axios.get(
    `https://samajeste.onrender.com/api/samajeste/author/${authorId}`
  );

  console.log(data.data)

  return data.data;
};
