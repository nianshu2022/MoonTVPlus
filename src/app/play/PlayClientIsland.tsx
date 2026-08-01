'use client';

import dynamic from 'next/dynamic';

const PlayPageClient = dynamic(() => import('./PlayPageClient'), {
  ssr: false,
  loading: () => (
    <div className='min-h-screen bg-white dark:bg-black' />
  ),
});

export default function PlayClientIsland() {
  return <PlayPageClient />;
}
