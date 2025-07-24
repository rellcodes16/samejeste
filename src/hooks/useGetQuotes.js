import { useQuery } from '@tanstack/react-query';
import { getQuotes } from '../api/quotes';

export const useGetQuotes = () => {
  return useQuery({
    queryKey: ['quotes'],
    queryFn: getQuotes,
    onSuccess: (data) => {
      const quotes = data?.data || [];
      console.log('Fetched quotes:', quotes);
    },
    onError: (err) => {
      console.error('Error fetching quotes:', err?.response?.data || err.message);
    },
  });
};
