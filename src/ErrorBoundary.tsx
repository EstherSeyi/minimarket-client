/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

type ErrorHandler = (error: Error, info: React.ErrorInfo) => void;
type ErrorHandlingComponent<Props> = (
  props: Props,

  error?: Error,
) => React.ReactNode;

type ErrorState = {error?: Error};
type Props = React.PropsWithChildren<unknown>;

class ErrorBoundary extends React.Component<Props, ErrorState> {
  state: ErrorState = {
    error: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    return {error};
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // if (errorHandler) {
    // 	errorHandler(error, info);
    // }

    console.log(error, info);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
