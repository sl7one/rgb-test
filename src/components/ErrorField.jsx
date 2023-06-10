import { ErrorMessage } from './ErrorMessage';

export const ErrorField = ({ isValid, message }) => {
  return (
    <>
      {isValid === null ? null : !isValid && <ErrorMessage message={message} />}
    </>
  );
};
