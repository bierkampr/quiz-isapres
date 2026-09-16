'use client';

import { useEffect, useState } from 'react';

export default function MaterialProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Dynamically import @material/web custom elements after React hydration completes
    import('@material/web/all.js').then(() => {
      setMounted(true);
    });
  }, []);

  return <>{children}</>;
}
