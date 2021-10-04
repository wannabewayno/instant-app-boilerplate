import { useRef, useEffect } from 'react';

const useMounted = initialValue => {
  const mounted = useRef(initialValue || false);
  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);
  return mounted;
};

export default useMounted;
