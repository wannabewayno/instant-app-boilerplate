import { useEffect, useRef } from 'react';

/**
 * A hook that generates a ref to attach to a container,
 * Whenever the user clicks outside of that container, this hook will run the handler function provided
 * 
 * Example:
 * const MyComponent = props => {
 *    const [isOpen, setIsOpen] = useState(false)
 *    clickOutSideRef = useClickOutside(setIsOpen(false));
 *    return (
 *      <div class="container">  
 *        {isOpen && (<p ref={clickoutSideRef}>open!</p>)}
 *        <button>Open Seseme!</button>
 *      </div>
 *    )
 * }
 * @param {Functiom} handler A user defined callback function that runs everytime a click is detected outside of the ref's container
 * @param {Object} [ref=useRef()] Optionally pass down you're own ref if you have other things attached to it, usefull if chaining hooks that generate refs.
 * @return {Object} Ref with magic attached to it.
 */ 
export default function useClickOutside(handler, ref) {
  const generatedRef = useRef();
  ref = ref || generatedRef;
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
  return ref;
}
