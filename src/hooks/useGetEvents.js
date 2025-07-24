import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../api/events';

export const useGetEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
    onSuccess: (data) => {
      const events = data?.data || [];
      console.log('Fetched events:', events);
    },
    onError: (err) => {
      console.error('Error fetching events:', err?.response?.data || err.message);
    },
  });
};
