import React from 'react';
import { SafeListing, SafeUser } from '../types';
import ListingCard from '../components/listings/ListingCard';
import Container from '../components/Container';
import Heading from '../components/Heading';

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export default function FavoritesClient({
  listings,
  currentUser,
}: FavoritesClientProps) {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited!" />

      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}
