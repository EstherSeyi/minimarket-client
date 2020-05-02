import React from 'react';
import {createCtx} from './createCtx';
import useAuthenticate from '../custom-hooks/useAuthenticate';
import {AuthType} from '../types/';

type Props = {
  children: React.ReactNode;
};

const [useAuth, CtxProvider] = createCtx<AuthType>();

const AuthContextProvider: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}: Props) => {
  const auth = useAuthenticate();
  return <CtxProvider value={auth}>{children}</CtxProvider>;
};

export {AuthContextProvider, useAuth};
