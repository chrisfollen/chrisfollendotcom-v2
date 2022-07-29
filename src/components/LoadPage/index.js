import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '../Loader/style';

export default function LoadPage() {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 2500);
  }, [pathname]);

  return loading ? <Loader /> : null;
}
