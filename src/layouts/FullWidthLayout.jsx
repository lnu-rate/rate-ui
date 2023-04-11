/** @format */

import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const FullWidthLayout = () => {
  return (
    <>
      <Header />
      <Container disableGutters maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default FullWidthLayout;
