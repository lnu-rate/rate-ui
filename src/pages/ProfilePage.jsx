import React from 'react';
import BackButton from '../components/buttons/BackButton';
import StyledStack from '../components/styled/StyledStack';
import { Link as RouterLink } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { Avatar, Box, Typography } from '@mui/material';
import { getUser } from '../components/user/getUser';
import { LECTURER_ROLE } from '../data/userRoles';

const ProfilePage = () => {
  let { id } = useParams();
  // console.log(id);
  const USER_DATA = getUser(id);
  id = null;

  return (
    <StyledStack>
      <BackButton sx={{ mt: 2, ml: 2 }} />
      <Box
        spacing={3}
        sx={{
          display: 'flex',
          gap: 4,
          p: { xs: 2, sm: 4, md: 8 },
          borderBottom: '1px solid rgba(0,0,0,.125)',
        }}
      >
        <Avatar
          alt="avatar"
          variant="circular"
          src={USER_DATA.image || ''}
          sx={{
            width: 124,
            height: 124,
            mr: 1,
          }}
        />
        <Box>
          <Typography variant="h4">{USER_DATA.fullName}</Typography>
          <Link
            component={RouterLink}
            href={USER_DATA.email}
            sx={{
              color: (theme) => theme.palette.primary.dark,
              ':hover': {
                opacity: '0.8',
              },
            }}
          >
            <Typography variant="h6">{USER_DATA.email}</Typography>
          </Link>
          <Typography
            variant="h6"
            sx={{ display: 'inline', fontSize: '1.25rem' }}
          >
            {USER_DATA.faculty}
          </Typography>
          <Box>
            <Typography
              variant="text"
              sx={{ display: 'inline', fontSize: '1.25rem' }}
            >
              <b>
                {USER_DATA.role === LECTURER_ROLE
                  ? 'Посада:'
                  : 'Група та кафедра:'}
              </b>
              <span>
                {USER_DATA.degree || `${USER_DATA.stream}-${USER_DATA.group}`},
              </span>
              <span>
                {USER_DATA.department ||
                  'кафедрa оптоелектроніки та інформаційних технологій'}
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </StyledStack>
  );
};

export default ProfilePage;
