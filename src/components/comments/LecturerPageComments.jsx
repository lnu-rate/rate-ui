import { Box, Stack } from '@mui/material';
import React from 'react';
import LecturerComments from './LecturerComments';
import LecturerPageComment from './LecturerPageComment';

const LecturerPageComments = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {LecturerComments.map((comment, id) => (
        <Stack key={id}>
          <LecturerPageComment comment={comment} />
        </Stack>
      ))}
    </Box>
  );
};

export default LecturerPageComments;
