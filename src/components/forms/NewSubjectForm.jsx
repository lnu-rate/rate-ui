import { LoadingButton } from '@mui/lab';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { CoursesInfoLabs } from '../coursesInfo/labs/CoursesInfoLabs';
import { CourseInfoLections } from '../coursesInfo/lections/CourseInfoLections';

const NewSubjectForm = ({ handleCloseModal }) => {
  const [name, setName] = useState('');
  const [educationalMethods, setEducationalMethods] = useState('Лекція');

  const DATA = {
    name: name,
    educationalMethods: educationalMethods,
  };

  const handleSubmitAddNewCourseForm = (data) => {
    if (educationalMethods === 'Лабораторна') {
      CoursesInfoLabs.push({ id: CoursesInfoLabs.length, name: name });
    }
    if (educationalMethods === 'Лекція') {
      CourseInfoLections.push({ id: CourseInfoLections.length, name: name });
    }
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
        Додати
      </Typography>
      <FormControl sx={{ mb: 2 }} fullWidth>
        <InputLabel id="degree-select-label">Ступінь</InputLabel>
        <Select
          labelId="degree-select-label"
          id="degree-select"
          value={educationalMethods}
          label="Тип"
          onChange={(e) => setEducationalMethods(e.target.value)}
          sx={{
            borderRadius: 2,
          }}
        >
          <MenuItem value="Лекція">Лекція</MenuItem>
          <MenuItem value="Лабораторна">Лабораторна</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ mb: 2 }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        fullWidth
        label="Назва лекції/лаборатоної"
      />
      <LoadingButton
        onClick={() => handleSubmitAddNewCourseForm(DATA)}
        variant="contained"
        sx={{ width: '40%', display: 'block', mx: 'auto', color: 'white' }}
      >
        Готово
      </LoadingButton>
    </Box>
  );
};

export default NewSubjectForm;
