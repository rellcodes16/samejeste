import { useQuery } from '@tanstack/react-query';
import { getRelatedBlog } from '../api/blogs';

export const useGetRelatedBlogs = ({ tags, slug }) => {
  return useQuery({
    queryKey: ['relatedBlogs', tags, slug],
    queryFn: () => getRelatedBlog({ tags, slug }),
    enabled: tags?.length > 0 && !!slug,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
  });
};
