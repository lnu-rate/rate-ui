import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const NewCourseForm = ({ handleCloseModal }) => {
  const [name, setName] = useState('');
  const [lecturer, setLecturer] = useState('');

  const DATA = {
    name: name,
    lecturer: lecturer,
  };

  const handleSubmitAddNewCourseForm = (data) => {
    console.log(data);
    handleCloseModal();
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', md: '50%' },
        bgcolor: 'background.paper',
        boxShadow: 12,
        borderRadius: 4,
        p: { xs: 2, md: 4 },
      }}
    >
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        mb={4}
        align="center"
      >
        Додати курс
      </Typography>
      <TextField
        sx={{ mb: 2 }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        fullWidth
        label="Назва предмету"
      />
      <TextField
        sx={{ mb: 6 }}
        value={lecturer}
        onChange={(e) => setLecturer(e.target.value)}
        name="lecturer"
        fullWidth
        label="ПІБ Викладача"
      />
      <LoadingButton
        onClick={() => handleSubmitAddNewCourseForm(DATA)}
        variant="contained"
        sx={{ width: '40%', display: 'block', mx: 'auto' }}
      >
        Register
      </LoadingButton>
    </Box>
  );
};

export default NewCourseForm;
