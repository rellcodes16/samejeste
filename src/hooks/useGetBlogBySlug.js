import { useQuery } from '@tanstack/react-query';
import { getBlog } from '../api/blogs';

export const useGetBlogBySlug = (slug) => {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => getBlog(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
    onError: (err) => {
      console.error('Error fetching blog:', err?.response?.data || err.message);
    },
  });
};
