import { Box, Button, Typography } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';

const texts = [
  'Global access from anywhere and in any device',
  'You own space in the cloud: 5TB cloud storage included',
  'Unlimited speed: No speed or transfer limits',
];

const GetStarted = () => {
  return (
    <Box
      py={8}
      px={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        width="900px"
        maxWidth="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
      >
        <Button
          variant="contained"
          color="success"
          sx={{
            py: 2,
            px: 4,
            fontWeight: 600,
            fontSize: '20px',
            textTransform: 'none',
            borderRadius: 4,
            color: 'white',
            boxShadow: 'none !important',
          }}
        >
          Get started now
        </Button>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography fontSize="40px" fontWeight={300} align="center">
            Find out why people love our website
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {texts.map((text) => (
              <Box key={text} display="flex" alignItems="center" gap={1}>
                <CheckIcon />
                <Typography fontSize="20px" fontWeight={300}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
