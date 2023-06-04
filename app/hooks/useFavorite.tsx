import { useRouter } from 'next/navigation';
import { SafeUser } from '../types';
import useLoginModal from './useLoginModal';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

export default function useFavorite({ listingId, currentUser }: IUseFavorite) {
  const router = useRouter();
  const loginModal = useLoginModal();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) return loginModal.onOpen();

      try {
        let request;

        if (isFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success('Success');
      } catch (error) {
        toast.error('Something went wrong.');
      }
    },
    [currentUser, isFavorite, router, loginModal]
  );

  return {
    toggleFavorite,
    isFavorite,
  };
}
