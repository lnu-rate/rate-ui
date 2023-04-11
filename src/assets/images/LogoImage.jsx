/** @format */

import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';
import { COURSES_ROUTE } from '../../app/Routes';

const LogoImage = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        mr: 1,
        mb: 2,
      }}
    >
      <Link component={RouterLink} to={COURSES_ROUTE}>
        <Logo />
      </Link>
    </Box>
  );
};

export default LogoImage;
