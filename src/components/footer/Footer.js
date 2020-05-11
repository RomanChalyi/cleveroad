// import React from 'react';
// import { footer } from './footer.module.scss';
// import Link from '../Link';

// const Footer = () => {
//   return (
//     <footer className={footer}>
//       <Link text="contact" url="" />
//       <Link text="About us" url="" />
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { footer, footerText } from './footer.module.scss';

const Footer = () => {
  return (
    <Box className={footer}>
      <Typography variant="h6" className={footerText}>
        version: 0.0.1
      </Typography>
    </Box>
  );
};
export default Footer;
