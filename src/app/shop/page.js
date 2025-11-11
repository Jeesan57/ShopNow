import { Suspense } from 'react';
import ShopContent from '../../components/ShopContent';

export const dynamic = 'force-dynamic';

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
