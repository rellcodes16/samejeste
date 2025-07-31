import { useQuery } from '@tanstack/react-query';
import { getBlogsByAuthor } from '../api/author';

export const useGetBlogsByAuthor = (authorId) => {
  return useQuery({
    queryKey: ['blogsByAuthor', authorId],
    queryFn: () => getBlogsByAuthor(authorId),
    enabled: !!authorId,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
    onSuccess: (data) => {
      console.log('Fetched blogs for author:', data);
    },
    onError: (err) => {
      console.error('Error fetching blogs by author:', err?.response?.data || err.message);
    },
  });
};
