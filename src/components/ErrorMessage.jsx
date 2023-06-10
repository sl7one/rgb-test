import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ErrorMessageText } from 'styles/styled';

export const ErrorMessage = ({ message }) => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, ease: 'back.out()', duration: 0.5 }
    );
  }, []);

  return <ErrorMessageText ref={ref}>{message}</ErrorMessageText>;
};
