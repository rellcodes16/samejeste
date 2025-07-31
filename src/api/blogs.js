import axios from 'axios';

export const getBlogs = async ({ page = 1, limit = 9, search = '' }) => {
  const { data } = await axios.get(
    `https://samajeste.onrender.com/api/samajeste/blogs?page=${page}&limit=${limit}&search=${search}`
  );

  return data;
};

export const getBlog = async (slug) => {
  const { data } = await axios.get(
    `https://samajeste.onrender.com/api/samajeste/blogs/slug/${slug}`
  );

  return data;
};

export const getRelatedBlog = async ({ tags, slug }) => {
  const query = new URLSearchParams({
    tags: tags.join(','),
    exclude: slug,
  }).toString();

  const { data } = await axios.get(
    `https://samajeste.onrender.com/api/samajeste/blogs/related?${query}`
  );

  return data.data; 
};
