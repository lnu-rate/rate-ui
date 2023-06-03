import { Checkbox, FormControlLabel, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import StyledTextField from '../styled/StyledTextField';
import { LoginService } from '../../services/LoginService';
import { useNavigate } from 'react-router-dom';
import { COURSES_ROUTE } from '../../app/Routes';
import axios from 'axios';
// import { getUser } from '../user/getUser';
// import axios from 'axios';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    // console.log(JSON.stringify(data));
    try {
      let myObj = await axios
        .post('http://localhost:8080/login', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .catch((err) => console.log(err.response.data));
      const JWT = myObj?.data?.token;
      console.log(JWT);
      await axios
        .post('http://localhost:8080/success', null, {
          headers: {
            'Authorization': `Bearer ${JWT}`,
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.response.data));
      // console.log(loginSuccess);
      // let res = await LoginService(data);
      // console.log(res);
      // localStorage.setItem("role", res.role);
      // res = null;

      setLoading(false);
      // navigate(COURSES_ROUTE, { replace: true });
    } catch {
      setError('password', {
        type: 'invalidPassword',
        message: 'Credentials are incorrect',
      });
      setLoading(false);
    }
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      justifyContent="center"
      spacing={3}
      sx={{ p: 8 }}
    >
      <StyledTextField
        label="Login"
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
      <StyledTextField
        label="Password"
        type="password"
        register={{
          ...register('password', {
            // required: {
            //   value: true,
            //   message: 'The field is required!',
            // },
            // minLength: {
            //   value: 8,
            //   message: 'Input 8 characters minimum',
            // },
            // maxLength: {
            //   value: 20,
            //   message: 'Input 20 characters maximum',
            // },
          }),
        }}
        helperText={errors?.password ? errors.password.message : ' '}
        error={!!errors?.password}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            disableRipple
            sx={{ p: 0, pr: 1 }}
            {...register('rememberMe', { rememberMe: isChecked })}
          />
        }
        label="Remember me"
      />
      <LoadingButton
        loading={loading}
        type="submit"
        variant="contained"
        sx={{ width: '100%' }}
      >
        Login
      </LoadingButton>
    </Stack>
  );
};

export default LoginForm;
