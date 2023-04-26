import { useState } from 'react';
import {
  Box,
  Dialog,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import * as yup from 'yup';

import ErrorText from '../../../components/ErrorText';

const steps = [
  'Create your free account',
  'Verify your account',
  'Get access your content',
];

const validationSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
});

const initialValues = {
  email: '',
};

const StartModal = ({ open, onClose, onSubmit: onSubmitForm }) => {
  const theme = useTheme();

  const onSubmit = (values) => {
    onSubmitForm(values.email);
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      validationSchema,
      initialValues,
      onSubmit,
    });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <Box position="relative">
        <CloseIcon
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
            cursor: 'pointer',
          }}
          onClick={onClose}
        />
        <Grid container>
          <Grid item xs={12} sm={12} md={6} sx={{ bgcolor: theme.colors.bg }}>
            <Box
              p={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
            >
              <Box>
                <Typography
                  fontSize="20px"
                  fontWeight={600}
                  align="center"
                  color="white"
                >
                  Get access to your content
                </Typography>
                <Typography fontWeight={300} align="center" color="white">
                  3 easy steps
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={1}>
                {steps.map((step, index) => (
                  <Box key={step} display="flex" alignItems="center" gap={2}>
                    <Box
                      width="40px"
                      borderRadius="50%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bgcolor="white"
                      sx={{ aspectRatio: '1/1' }}
                    >
                      <Typography fontWeight={600}>{index + 1}</Typography>
                    </Box>
                    <Typography color="white">{step}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box p={4} display="flex" flexDirection="column" gap={2}>
              <Typography fontSize="20px" fontWeight={600} align="center">
                Create your free account
              </Typography>
              <Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Your email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur('email')}
                />
                <ErrorText
                  show={touched.email && errors.email}
                  text={errors.email}
                />
              </Box>
              <Button
                variant="contained"
                color="success"
                sx={{
                  borderRadius: 2,
                  color: 'white',
                  fontWeight: 600,
                  boxShadow: 'none !important',
                }}
                onClick={handleSubmit}
              >
                Continue
              </Button>
              <Typography
                fontSize="10px"
                fontStyle="italic"
                color="#888"
                align="center"
              >
                By clicking Continue, you agree with the Terms & Conditions and
                the Privacy Policy
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default StartModal;
