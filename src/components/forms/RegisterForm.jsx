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
import { useForm } from 'react-hook-form';

const RegisterForm = ({ handleCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  // console.log(errors);

  const [role, setRole] = useState('student');
  const [faculty, setFaculty] = useState(
    'Електроніки та компютерних технологій'
  );
  const [stream, setStream] = useState('ФеІ');
  const [degree, setDegree] = useState('Доцент');
  const [department, setDepartment] = useState(
    'Кафедра оптоелектроніки та інформаційних технологій'
  );

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const handleChangeFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleChangeStream = (event) => {
    setStream(event.target.value);
  };

  const handleChangeDegree = (event) => {
    setDegree(event.target.value);
  };

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleSubmitRegisterForm = (data) => {
    console.log({ role: role, faculty: faculty, data });
    handleCloseModal();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleSubmitRegisterForm)}
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
        Реєстрація
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="role-select-label">Роль</InputLabel>
        <Select
          labelId="role-select-label"
          id="role-select"
          value={role}
          label="Роль"
          onChange={handleChangeRole}
          sx={{
            borderRadius: 2,
          }}
        >
          <MenuItem value="student">Студент</MenuItem>
          <MenuItem value="lecturer">Лектор</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mt: 2 }} fullWidth>
        <InputLabel id="faculty-select-label">Факультет</InputLabel>
        <Select
          labelId="faculty-select-label"
          id="faculty-select"
          value={faculty}
          label="Факультет"
          onChange={handleChangeFaculty}
          sx={{
            borderRadius: 2,
          }}
        >
          <MenuItem value="Електроніки та компютерних технологій">
            Електроніки та компютерних технологій
          </MenuItem>
          <MenuItem value="Прикладної математики">
            Прикладної математики
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ mt: 2 }}
        name="fullName"
        fullWidth
        label="ПІБ"
        register={{
          ...register('fullName', {
            required: {
              value: true,
              message: 'The field is required!',
            },
            maxLength: {
              value: 60,
              message: '60 characters maximum',
            },
          }),
        }}
        helperText={errors?.login ? errors.login.message : ' '}
        error={!!errors?.login}
      />
      <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
        <TextField
          sx={{ width: '50%' }}
          name="login"
          label="Логін"
          register={{
            ...register('login', {
              required: {
                value: true,
                message: 'The field is required!',
              },
              maxLength: {
                value: 30,
                message: '30 characters maximum',
              },
            }),
          }}
          helperText={errors?.login ? errors.login.message : ' '}
          error={!!errors?.login}
        />
        <TextField
          sx={{ width: '50%' }}
          name="password"
          autoComplete="on"
          type="password"
          label="Пароль"
          register={{
            ...register('password', {
              required: {
                value: true,
                message: 'The field is required!',
              },
              minLength: {
                value: 8,
                message: 'Input 8 characters minimum',
              },
              maxLength: {
                value: 14,
                message: 'Input 30 characters maximum',
              },
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/i,
                message:
                  'Input at least one uppercase letter, one lowercase letter and one number!',
              },
            }),
          }}
        />
      </Box>
      {role === 'student' && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <FormControl sx={{ width: '30%' }}>
            <InputLabel id="stream-select-label">Потік</InputLabel>
            <Select
              labelId="stream-select-label"
              id="stream-select"
              value={stream}
              label="Потік"
              onChange={handleChangeStream}
              sx={{
                borderRadius: 2,
              }}
            >
              <MenuItem value="ФеІ">ФеІ</MenuItem>
              <MenuItem value="ФеМ">ФеМ</MenuItem>
              <MenuItem value="ФеП">ФеП</MenuItem>
              <MenuItem value="ФеЛ">ФеЛ</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ width: '30%' }}
            name="course"
            label="Курс"
            register={{
              ...register('course', {
                required: {
                  value: true,
                  message: 'The field is required!',
                },
              }),
            }}
          />
          <TextField
            sx={{ width: '30%' }}
            name="group"
            label="Група"
            register={{
              ...register('group', {
                required: {
                  value: true,
                  message: 'The field is required!',
                },
                maxLength: {
                  value: 2,
                  message: 'Input 30 characters maximum',
                },
              }),
            }}
          />
        </Box>
      )}
      {role === 'lecturer' && (
        <Box sx={{ mt: 1, mb: 3 }}>
          <FormControl sx={{ mb: 2 }} fullWidth>
            <InputLabel id="degree-select-label">Ступінь</InputLabel>
            <Select
              labelId="degree-select-label"
              id="degree-select"
              value={degree}
              label="Ступінь"
              onChange={handleChangeDegree}
              sx={{
                borderRadius: 2,
              }}
            >
              <MenuItem value="Професор">Професор</MenuItem>
              <MenuItem value="Доцент">Доцент</MenuItem>
              <MenuItem value="Асистент">Асистент</MenuItem>
              <MenuItem value="Аспірант">Аспірант</MenuItem>
              <MenuItem value="Інженер">Інженер</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="department-select-label">Кафедра</InputLabel>
            <Select
              labelId="department-select-label"
              id="department-select"
              value={department}
              label="Кафедра"
              onChange={handleChangeDepartment}
              sx={{
                borderRadius: 2,
              }}
            >
              <MenuItem value="Кафедра оптоелектроніки та інформаційних технологій">
                Кафедра оптоелектроніки та інформаційних технологій
              </MenuItem>
              <MenuItem value="Кафедра радіоелектронних і комп'ютерних систем">
                Кафедра радіоелектронних і комп'ютерних систем
              </MenuItem>
              <MenuItem value="Кафедра радіофізики та комп'ютерних технологій">
                Кафедра радіофізики та комп'ютерних технологій
              </MenuItem>
              <MenuItem value="Кафедра сенсорної та напівпровідникової електроніки">
                Кафедра сенсорної та напівпровідникової електроніки
              </MenuItem>
              <MenuItem value="Кафедра системного проектування">
                Кафедра системного проектування
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}
      <LoadingButton type="submit" variant="contained" sx={{ width: '100%' }}>
        Register
      </LoadingButton>
    </Box>
  );
};

export default RegisterForm;
