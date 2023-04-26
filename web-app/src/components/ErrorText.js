import { Box, Typography } from '@mui/material';

const ErrorText = ({ show, text }) => {
  return (
    <Box height="1.4rem">
      {show && (
        <Typography fontSize="12px" fontStyle="italic" color="tomato">
          *{text}
        </Typography>
      )}
    </Box>
  );
};

export default ErrorText;
