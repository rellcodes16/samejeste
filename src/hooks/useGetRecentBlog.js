import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../api/blogs';

export const useFeaturedBlog = () => {
  return useQuery({
    queryKey: ['featuredBlog'],
    queryFn: async () => {
      const res = await getBlogs({ page: 1, limit: 1 });
      return res.data[0];
    },
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
    onError: (err) => {
      console.error('Error fetching featured blog:', err?.response?.data || err.message);
    },
  });
};
