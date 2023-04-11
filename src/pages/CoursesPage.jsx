/** @format */

import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import StyledStack from '../components/styled/StyledStack';
import CoursesList from '../components/courses/CoursesList';
import { useState } from 'react';
import NewCourseForm from '../components/forms/NewCourseForm';
import { ADMIN_ROLE } from '../data/userRoles';

const CoursesPage = () => {
  const [isAddNewCourseOpen, setAddNewCourseOpen] = useState(false);

  const USER_ROLE = localStorage.getItem('role');

  return (
    <>
      <StyledStack>
        <Stack
          spacing={3}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 4,
            px: 8,
            borderBottom: '1px solid rgba(0,0,0,.125)',
          }}
        >
          <Typography variant="h4">Мої курси</Typography>
          {USER_ROLE === ADMIN_ROLE && (
            <Button
              variant="contained"
              onClick={() => setAddNewCourseOpen(true)}
            >
              Додати курс
            </Button>
          )}
        </Stack>
        <CoursesList />
      </StyledStack>
      {USER_ROLE === ADMIN_ROLE && (
        <Modal
          open={isAddNewCourseOpen}
          onClose={() => setAddNewCourseOpen(!isAddNewCourseOpen)}
          aria-labelledby="modal-modal-title"
        >
          <Box>
            <NewCourseForm
              handleCloseModal={() => setAddNewCourseOpen(!isAddNewCourseOpen)}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default CoursesPage;
