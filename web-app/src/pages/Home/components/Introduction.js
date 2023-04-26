import { Box, Typography } from '@mui/material';

const Introduction = () => {
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
        gap={2}
      >
        <Typography
          fontSize="60px"
          fontWeight={800}
          align="center"
          lineHeight="70px"
        >
          Clouds are the way of the future!
        </Typography>
        <Typography
          fontStyle="italic"
          fontWeight={300}
          color="#888"
          align="center"
        >
          The best experience you've ever had with cloud storage service.
        </Typography>
      </Box>
    </Box>
  );
};

export default Introduction;
