import { TABLET_WIDTH } from 'helpers/constants';
import { useEffect } from 'react';

export const useClickOutside = (ref: any, callback: any, smallSize: boolean) => {
    useEffect(() => {
     const handleClick = (e: MouseEvent) => {
      if (window.innerWidth > TABLET_WIDTH || smallSize) {
       if (ref.current && !ref.current.contains(e.target)) {
        callback();
       }
      }
     };
   
     document.addEventListener('mousedown', handleClick);
     return () => {
      document.removeEventListener('mousedown', handleClick);
     };
    }, [ref, smallSize, callback]);
   };
  
