import { useEffect } from 'react';
import useMounted from '../useMounted';

// Short hand for a useEffect that only runs after the mounting Phase
const useSkipEffect = (callback, dependencies = []) => {
    useEffect(() => {
        if (isMounted.current) return callback()
    }, dependencies);
    const isMounted = useMounted();
}
export default useSkipEffect;