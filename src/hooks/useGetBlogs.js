import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../api/blogs';

export const useGetBlogs = ({ page, limit, search }) => {
  return useQuery({
    queryKey: ['blogs', page, limit, search],
    queryFn: () => getBlogs({ page, limit, search }),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
    onError: (err) => {
      console.error('Error fetching blogs:', err?.response?.data || err.message);
    },
  });
};
