import React from 'react';
import { footer } from './footer.module.scss';
import Link from '../Link';

const Footer = () => {
  return (
    <footer className={footer}>
      <Link text="contact" url="" />
      <Link text="About us" url="" />
    </footer>
  );
};

export default Footer;
