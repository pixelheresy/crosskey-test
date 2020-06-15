import React from 'react';
import { HeadingProps } from './types';

const Heading: React.FunctionComponent<HeadingProps> = ({
  text,
}) => {
  return (<h1 className='heading'>{text}</h1>);
};

export default Heading;
