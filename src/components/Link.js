import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const Link = ({ text, url }) => (
  <LinkRouter className="link" to={url}>
    {text}
  </LinkRouter>
);

export default Link;
