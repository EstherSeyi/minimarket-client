import React from 'react';
import './container.css';

export function Container(props: React.PropsWithChildren<unknown>) {
  return <div className="container">{props.children}</div>;
}
