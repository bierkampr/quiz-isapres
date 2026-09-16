'use client';

import { useEffect, useState } from 'react';
import '@material/web/all.js';

export default function MaterialProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{children}</>;
}
