import React from 'react';

type Props = {
  error: string;
};

const FormError = (props: Props) => {
  const {error} = props;
  return (
    <>
      {error ? (
        <small
          className="error"
          style={{
            color: 'red',
            textAlign: 'center',
            marginBottom: '0.75rem',
          }}
        >
          {error}
        </small>
      ) : null}
    </>
  );
};

export default FormError;
