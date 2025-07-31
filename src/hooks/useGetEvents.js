import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../api/events';

console.log('jjgjjg')

export const useGetEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
    retry: 1, 
    onSuccess: (data) => {
      const events = data?.data || [];
      console.log('Fetched events:', events);
    },
    onError: (err) => {
      console.error('Error fetching events:', err?.response?.data || err.message);
    },
  });
};
