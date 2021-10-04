import { useEffect } from 'react';
import useMounted from '../useMounted';

// Short hand for a useEffect that only runs during the mounting Phase
const useMountEffect = (callback, dependencies = []) => {
    useEffect(() => {
        if (!isMounted.current) return callback();
    }, dependencies);
    const isMounted = useMounted();
}
export default useMountEffect;