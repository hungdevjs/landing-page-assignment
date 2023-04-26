import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Button,
  useTheme,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useFormik } from 'formik';
import * as yup from 'yup';
import valid from 'card-validator';
import axios from 'axios';

import useAppContext from '../../hooks/useAppContext';
import Layout from '../../components/Layout';
import ErrorText from '../../components/ErrorText';
import { monthOptions, yearOptions } from '../../utils/selectors';
import testExpiredTime from '../../utils/testExpiredTime';

const features = [
  'Download the latest apps',
  'Watch popular movies',
  'Learn from eBooks and Courses',
  'An more!',
];

const validationSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
  fullName: yup.string().required('Fullname is required'),
  creditCardNumber: yup
    .string()
    .required('Credit card number')
    .test(
      'credit card number test',
      'Credit card number is invalid',
      (value) => valid.number(value).isValid
    ),
  month: yup
    .number()
    .required('Credit card expired month is required')
    .test(
      'credit card expired month test',
      'Credit card expired time is invalid',
      (value, context) =>
        1 <= value && value <= 12 && testExpiredTime(value, context.parent.year)
    ),
  year: yup
    .number()
    .required('Credit card expired year is required')
    .test(
      'credit card expired year test',
      'Credit card expired time is invalid',
      (value, context) => {
        return testExpiredTime(context.parent.month, value);
      }
    ),
  cvv: yup
    .string()
    .required('Credit card CVV is required')
    .test('credit card cvv test', 'Credit card cvv is invalid', (value) => {
      try {
        const validLength = value.length === 3;
        if (!validLength) return false;

        return !isNaN(Number(value));
      } catch (err) {
        return false;
      }
    }),
});

const Register = () => {
  const {
    responsiveState: { isTablet },
  } = useAppContext();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const initialValues = useMemo(() => {
    return {
      email,
      fullName: '',
      creditCardNumber: '',
      month: '',
      year: '',
      cvv: '',
    };
  }, [email]);

  const onSubmit = async (values) => {
    console.log({ values });
    // send to some enpoints using axios
    // change endpoint and uncomment line 129-136 to run
    // setSubmitting(true)
    // try{
    //   const res = await axios.post("randomendpoint", values)
    //   console.log(res)
    // } catch(err) {
    //   console.error(err)
    // }
    // setSubmitting(false)
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    setTouched,
    handleSubmit,
    setSubmitting,
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <Layout>
      <Box
        py={isTablet ? 0 : 8}
        px={isTablet ? 0 : 2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          width="900px"
          maxWidth="100%"
          border="1px solid #ddd"
          borderRadius={isTablet ? 0 : 2}
          overflow="hidden"
          bgcolor="#f8f8f8"
        >
          <Box display="flex" flexDirection={isTablet ? 'column' : 'row'}>
            <Box
              width={isTablet ? '100%' : '50%'}
              sx={{ borderRight: '1px solid #ddd' }}
            >
              <Box
                p={2}
                bgcolor="success.main"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={1}
              >
                <SecurityIcon sx={{ color: 'white' }} />
                <Typography color="white">
                  Secure & TLS Encrypted Verification
                </Typography>
              </Box>
              <Box
                p={2}
                display="flex"
                flexDirection="column"
                gap={0.5}
                sx={{ borderBottom: '1px solid #ddd' }}
              >
                <Typography
                  fontSize="24px"
                  fontWeight={600}
                  textTransform="uppercase"
                >
                  100% Free Membership
                </Typography>
                <Typography>
                  Verify your account and{' '}
                  <span style={{ fontWeight: 600 }}>Get access for free</span>
                </Typography>
                <Typography fontSize="14px" color="#888">
                  Based on 123,456 user reviews
                </Typography>
              </Box>
              {isTablet && (
                <Box p={2} sx={{ borderBottom: '1px solid #ddd' }}>
                  <Membership />
                </Box>
              )}
              <Box p={2} display="flex" flexDirection="column" gap={1}>
                <Box>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Email"
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
                <Box>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Fullname"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur('fullName')}
                  />
                  <ErrorText
                    show={touched.fullName && errors.fullName}
                    text={errors.fullName}
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Credit card number"
                    name="creditCardNumber"
                    value={values.creditCardNumber}
                    onChange={handleChange}
                    onBlur={handleBlur('creditCardNumber')}
                  />
                  <ErrorText
                    show={touched.creditCardNumber && errors.creditCardNumber}
                    text={errors.creditCardNumber}
                  />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box flex={1}>
                    <Autocomplete
                      clearOnEscape
                      size="small"
                      options={monthOptions}
                      value={
                        monthOptions.find((item) => item.value === values.month)
                          ?.value
                      }
                      onChange={(e, newValue) => {
                        setTouched({ ...touched, month: true });
                        setFieldValue('month', newValue.value);
                      }}
                      isOptionEqualToValue={(option, value) =>
                        option.value === value
                      }
                      renderInput={(params) => (
                        <TextField
                          variant="outlined"
                          size="small"
                          label="Exp. month"
                          {...params}
                        />
                      )}
                    />
                    <ErrorText
                      show={touched.month && errors.month}
                      text={errors.month}
                    />
                  </Box>
                  <Box flex={1}>
                    <Autocomplete
                      clearOnEscape
                      size="small"
                      options={yearOptions}
                      value={
                        yearOptions.find((item) => item.value === values.year)
                          ?.value
                      }
                      onChange={(e, newValue) => {
                        setTouched({ ...touched, year: true });
                        setFieldValue('year', newValue.value);
                      }}
                      isOptionEqualToValue={(option, value) =>
                        option.value === value
                      }
                      renderInput={(params) => (
                        <TextField
                          variant="outlined"
                          size="small"
                          label="Exp. year"
                          {...params}
                        />
                      )}
                    />
                    <ErrorText
                      show={touched.year && errors.year}
                      text={errors.year}
                    />
                  </Box>
                  <Box width="100px">
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      label="CVV"
                      name="cvv"
                      value={values.cvv}
                      onChange={handleChange}
                      onBlur={handleBlur('cvv')}
                    />
                    <ErrorText
                      show={touched.cvv && errors.cvv}
                      text={errors.cvv}
                    />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    mt: 2,
                    textTransform: 'none',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: 'none !important',
                  }}
                  onClick={handleSubmit}
                >
                  Get Access
                </Button>
                <Typography fontSize="10px" fontStyle="italic" color="#888">
                  By click Get Access, you agree with the Terms & Conditions and
                  the Privacy Policy
                </Typography>
              </Box>
            </Box>
            <Box width={isTablet ? '100%' : '50%'}>
              <Box
                height="100%"
                p={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={4}
              >
                {!isTablet && <Membership />}
                <Box display="flex" flexDirection="column" gap={1}>
                  <Typography fontWeight={600} textTransform="uppercase">
                    Why is my credit card required?
                  </Typography>
                  <Typography fontSize="14px" color="#888">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;

const Membership = () => {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography fontSize="18px" fontWeight={600}>
        Your membership will give you access to:
      </Typography>
      {features.map((feature) => (
        <Box key={feature} display="flex" alignItems="center" gap={1}>
          <CheckCircleOutlineIcon sx={{ color: theme.palette.success.main }} />
          <Typography fontWeight={300}>{feature}</Typography>
        </Box>
      ))}
    </Box>
  );
};
