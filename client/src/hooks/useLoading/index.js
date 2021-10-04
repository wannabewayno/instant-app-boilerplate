import React, { useState } from 'react';
import useMounted from '../useMounted';
// import Spinner from '../../components/Loading';

/** useLoading
 * An async function wrapper
 * Wrap around an async function and isLoading will be true while the function is executing
 * Also gives a pre-wrapped <Spinner /> component that shows whilst isLoading === true.
 * You can use the same wrapper for multiple functions.
 * Example Useage:
 * const { isLoading, withLoading, Spinner } = useLoading();
 * 1. const mySearchFunction = withLoading(myAPIcall);  // isLoading = true whilst API is fetching
 * 2. const mySearchFunction = withLoading(() =>
 *      myApiCall.then(response => console.log('response'))
 *    )
 * 3. const mySearchFunction withLoading(async () => {
 *         const response = await myAPIcall()
 *         console.log(response)
 *    })
 * 4. const mySearchFunction = query => withLoading(async () => {
 *         const resposne = await myAPIcall(query)
 *         console.log(response)
 *    })(); //! <- note the extra paranthesis when you need function arguments
 * @return {Object} - {isLoading : <Boolean>, withLoading : <Function>, Spinner: <Component>}
 */
const useLoading = () => {
  const [loading, setLoading] = useState(0);
  const mounted = useMounted(true);

  const withLoading = myAsyncFunction => async e => {
    if (mounted.current) setLoading(loading => ++loading);
    const myAsyncValue = await myAsyncFunction(e);
    if (mounted.current) setLoading(loading => --loading);
    return myAsyncValue;
  };

  // const SpinnerContainer = ({ ...props }) => !!loading && <Spinner {...props} />;

  return { isLoading: !!loading, withLoading, /* Spinner: SpinnerContainer */ };
};

export default useLoading;
