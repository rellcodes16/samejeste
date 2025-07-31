import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../api/blogs';

export const useGetThreeRecentBlogs = () => {
  return useQuery({
    queryKey: ['recentBlogs'],
    queryFn: async () => {
      const res = await getBlogs({ page: 1, limit: 3 });
      return res.data;
    },
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
    onError: (err) => {
      console.error('Error fetching recent blogs:', err?.response?.data || err.message);
    },
  });
};
