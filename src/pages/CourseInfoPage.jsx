/** @format */

import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import StyledStack from '../components/styled/StyledStack';
import CourseInfoLabList from '../components/coursesInfo/labs/CourseInfoLabList';
import CourseInfoLectionList from '../components/coursesInfo/lections/CourseInfoLectionList';
import BackButton from '../components/buttons/BackButton';
import { ADMIN_ROLE, LECTURER_ROLE } from '../data/userRoles';
import { useState } from 'react';
import NewSubjectForm from '../components/forms/NewSubjectForm';

const CourseInfoPage = () => {
  const [isAddNewCourseOpen, setAddNewCourseOpen] = useState(false);

  const USER_ROLE = localStorage.getItem('role');

  return (
    <>
      <StyledStack>
        <BackButton sx={{ mt: 2, ml: 1 }} />
        <Stack
          spacing={3}
          sx={{
            display: 'flex',
            flexDirection: { sm: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 4,
            px: 8,
            borderBottom: '1px solid rgba(0,0,0,.125)',
          }}
        >
          <Typography variant="h4">Управління ІТ проектами</Typography>
          {(USER_ROLE === ADMIN_ROLE || USER_ROLE === LECTURER_ROLE) && (
            <Button
              variant="contained"
              onClick={() => setAddNewCourseOpen(true)}
            >
              Додати лекцію/лабораторну
            </Button>
          )}
        </Stack>
        <CourseInfoLectionList />
        <CourseInfoLabList />
      </StyledStack>
      {(USER_ROLE === ADMIN_ROLE || USER_ROLE === LECTURER_ROLE) && (
        <Modal
          open={isAddNewCourseOpen}
          onClose={() => setAddNewCourseOpen(!isAddNewCourseOpen)}
          aria-labelledby="modal-modal-title"
        >
          <Box>
            <NewSubjectForm
              handleCloseModal={() => setAddNewCourseOpen(!isAddNewCourseOpen)}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default CourseInfoPage;
