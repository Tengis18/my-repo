'use client';

import Dialog from '@/components/dialogg/Dialog';
import { useEffect, useState } from 'react';

function Notification() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Dialog />;
}
export default function Page() {
  return (
    <div>
      <Dialog />
    </div>
  );
}
