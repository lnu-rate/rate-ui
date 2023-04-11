/** @format */

import { Avatar, Box, Stack, Typography } from '@mui/material';

const LecturerPageComment = ({ comment }) => {
  return (
    <Stack spacing={1} sx={{ overflowWrap: 'break-word' }}>
      <Box
        sx={{
          width: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Avatar
          alt={comment.owner.name}
          variant="circular"
          src={comment.owner.src}
          sx={{
            width: 64,
            height: 64,
            mr: 1,
          }}
        />
        <Box>
          <Typography
            variant="h6"
            sx={{ color: (theme) => theme.palette.primary.main }}
          >
            {comment.owner.username}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="text">
              <b>Я:</b> {comment.quality}/10
            </Typography>
            <Typography variant="text">
              <b>М:</b> {comment.methodologicalSupport}/10
            </Typography>
            <Typography variant="text">
              <b>О:</b> {comment.objectivity}/10
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography>{comment.text}</Typography>
    </Stack>
  );
};
export default LecturerPageComment;
