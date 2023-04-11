/** @format */

import { Box, Stack, Typography } from '@mui/material';
import StyledStack from '../components/styled/StyledStack';
import { DEPARTMENTS } from '../components/lecturers/Lecturers';
import MyLecturer from '../components/lecturers/MyLecturer';
import BackButton from '../components/buttons/BackButton';

const LecturersPage = () => {
  return (
    <>
      <StyledStack>
        <BackButton sx={{ mt: 2, ml: 2 }} />
        <Stack
          spacing={3}
          sx={{
            p: { xs: 2, sm: 4, md: 8 },
            borderBottom: '1px solid rgba(0,0,0,.125)',
          }}
        >
          <Typography variant="h4">Викладачі та кафедри</Typography>
        </Stack>
        <Stack
          spacing={3}
          sx={{
            p: { xs: 2, sm: 4, md: 8 },
            borderBottom: '1px solid rgba(0,0,0,.125)',
          }}
        >
          {DEPARTMENTS.map((department) => (
            <Box key={department.id} pb={1}>
              <Typography variant="h5" pb={1}>
                {department.name}
              </Typography>
              {department.lecturers.map((lecturer) => (
                <MyLecturer key={lecturer.id} lecturer={lecturer} />
              ))}
            </Box>
          ))}
        </Stack>
      </StyledStack>
    </>
  );
};

export default LecturersPage;
