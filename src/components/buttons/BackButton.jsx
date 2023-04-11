import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { COURSES_ROUTE } from '../../app/Routes';

const BackButton = ({ sx }) => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(COURSES_ROUTE);
  };

  return (
    <Button
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        p: 0,
        textTransform: 'none',
        ...sx,
      }}
      onClick={handleClickBack}
    >
      <ArrowBackIcon color="primary" />
      <Typography variant="h6" color="primary">
        Back
      </Typography>
    </Button>
  );
};

export default BackButton;
