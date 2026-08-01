'use client';

import dynamic from 'next/dynamic';

const SearchPageClient = dynamic(() => import('./SearchPageClient'), {
  ssr: false,
  loading: () => (
    <div className='min-h-screen bg-white dark:bg-black' />
  ),
});

export default function SearchClientIsland() {
  return <SearchPageClient />;
}
