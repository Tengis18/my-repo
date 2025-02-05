'use client';

import ForgetPassword from '@/components/Forget-Password/Forget-Password';
import { useEffect, useState } from 'react';

function Notification() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ForgetPassword />;
}
export default function Page() {
  return (
    <div>
      <ForgetPassword />
    </div>
  );
}
