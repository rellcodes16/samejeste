import { useQuery } from '@tanstack/react-query';
import { getQuotes } from '../api/quotes';

export const useGetQuotes = () => {
  return useQuery({
    queryKey: ['quotes'],
    queryFn: getQuotes,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
    onSuccess: (data) => {
      const quotes = data?.data || [];
      console.log('Fetched quotes:', quotes);
    },
    onError: (err) => {
      console.error('Error fetching quotes:', err?.response?.data || err.message);
    },
  });
};
