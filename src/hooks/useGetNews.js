import { useQuery } from '@tanstack/react-query';
import { getNews } from '../api/news';

export const useGetNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: getNews,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
    onSuccess: (data) => {
      const news = data?.data || [];
      console.log('Fetched news:', news);
    },
    onError: (err) => {
      console.error('Error fetching news:', err?.response?.data || err.message);
    },
  });
};
