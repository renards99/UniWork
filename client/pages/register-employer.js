//before
import {
  PinInput,
  PinInputField,
  Box,
  Link,
  Text,
  Input,
  Flex,
  Avatar,
  Stack,
  Spacer,
  Center,
  AbsoluteCenter,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Checkbox,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { BsShieldFillExclamation, BsFacebook } from 'react-icons/bs';
import { loginAccount } from '../helper/authHelpers';
import { AiFillGoogleCircle } from 'react-icons/ai';
import DropDown from '../components/layout/employer/dropDown';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
function RegisterEmployer() {
  const [errorMessage, setErrorMessage] = useState('');
  const [jobType, setJobType] = useState([]);

  const [email, setEmail] = useState('');
  const [selectedJobType, setSelectedJobType] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, ConfirmPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const logo = '/static/images/logo.png';
  const getListJobType = useCallback(async () => {
    try {
      const getListJobType = await axios.post(`http://localhost:5000/job-type/get-all-job-type`);
      if (getListJobType.data.statusCode === 200) {
        setJobType(getListJobType.data.data.map((item) => item.job_type_name));
        console.log(getListJobType.data.data);
      } else {
      }
    } catch (error) {}
  }, []);
  useEffect(() => {
    getListJobType();
  }, []);

  const handleFacebookLinkChange = (e) => {
    setFacebookLink(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleGenderChange = (selectedValue) => {
    setGender(selectedValue);
  };
  const handleJobTypeChange = (selectedValue) => {
    setSelectedJobType(selectedValue);
    console.log(selectedValue + 'selectedvalue');
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    ConfirmPassword(e.target.value);
  };
  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };
  const validateForm = () => {
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    if (!password.trim()) {
      setErrorMessage('Password is required');
      return false;
    }
    if (password.length <= 6) {
      setErrorMessage('Password must be more than 6 characters');
      return false;
    }
    if (!confirmPassword.trim()) {
      setErrorMessage('Confirmation of password is required');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password should match');
      return false;
    }
    if (!fullname.trim()) {
      setErrorMessage('Full name is required');
      return false;
    }
    if (!gender) {
      setErrorMessage('Gender is required');
      return false;
    }
    if (!phoneNumber.trim()) {
      setErrorMessage('Phone number is required');
      return false;
    }
    if (selectedJobType === 0) {
      setErrorMessage('Job type is required');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const currentDate = new Date().toISOString().slice(0, 10);

      const createAccountResponse = await axios.post('http://localhost:5000/create-account', {
        full_name: fullname,
        role_id: 2,
        email: email,
        password: password,
        gender: gender,
        date_of_birth: '',
        mobile_number: phoneNumber,
        registration_date: currentDate,
        is_verified: 0,
        is_banned: 0,
        user_image: '',
      });

      const createdAccountId = createAccountResponse.data.data.user_id;
      const createEmployer = await axios.post('http://localhost:5000/employer/create-employer', {
        user_account_id: createdAccountId,
        job_type_id: selectedJobType,
        facebook_link: facebookLink,
        company_id: null,
        license: null,
        other_document: null,
      });
      console.log(createAccountResponse.status);
      if (createAccountResponse.status === 201 && createEmployer.status === 201) {
        try {
          await loginAccount(email, password, 'http://localhost:5000');
          console.log('Account created and logged in successfully!');
        } catch (error) {
          console.error('Error logging in after account creation:', error);
        }
        window.location.href = 'http://localhost:3000/employer';
      } else {
        console.error('Unable to create an account. Please try again.');
      }
    } catch (error) {
      console.error(
        'Error creating account:',
        error.response ? error.response.data : error.message,
      );
    }
  };
  return (
    <Flex h='100vh' w='100vw' minH='100%' minW='100%' top='0' left='0' alignItems='center'>
      <Stack
        w='50%'
        h='100%'
        bg='white'
        justifyContent='center'
        gap='18px'
        p='100px'
        alignItems='center'
      >
        <Stack w='100%'>
          <Image src={logo} width='173' height='40'></Image>
          <Flex alignItems='center' gap='12px'>
            <Stack h='40px' border='4px solid #F1841D'></Stack>
            <Text fontSize='24px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
              Tài khoản
            </Text>
          </Flex>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Email Đăng nhập:
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <Box fontSize='24px'>
                    <MdEmail />
                  </Box>
                }
              />
              <Input
                placeholder='Nhập Email'
                size='lg'
                value={email}
                onChange={handleEmailChange}
              ></Input>
            </InputGroup>
          </Stack>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Mật khẩu:
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <Box fontSize='24px'>
                    <BsShieldFillExclamation />
                  </Box>
                }
              />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Nhập Mật khẩu'
                size='lg'
                value={password}
                onChange={handlePasswordChange}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Nhập lại Mật khẩu:
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={
                  <Box fontSize='24px'>
                    <BsShieldFillExclamation />
                  </Box>
                }
              />
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Nhập lại Mật khẩu'
                size='lg'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <InputRightElement width='4.5rem'>
                <Button
                  h='1.75rem'
                  size='sm'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Flex alignItems='center' gap='12px'>
            <Stack h='40px' border='4px solid #F1841D'></Stack>
            <Text fontSize='24px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
              Thông tin nhà tuyển dụng:
            </Text>
          </Flex>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Họ và tên:
            </Text>
            <Input
              placeholder='Nhập họ và tên'
              size='lg'
              value={fullname}
              onChange={handleFullnameChange}
            ></Input>
          </Stack>
          <Flex gap='24px'>
            <Stack flex='1 0 0'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Giới tính:
              </Text>
              <RadioGroup onChange={handleGenderChange} value={String(gender)}>
                <Flex gap='32px'>
                  <Radio size='lg' value='1'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Nam
                    </Text>
                  </Radio>
                  <Radio size='lg' value='2'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Nữ
                    </Text>
                  </Radio>
                  <Radio size='lg' value='3'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Khác
                    </Text>
                  </Radio>
                </Flex>
              </RadioGroup>
            </Stack>
            <Stack flex='1 0 0'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Điện thoại:
              </Text>
              <Input
                placeholder='Nhập số điện thoại'
                size='lg'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              ></Input>
            </Stack>
          </Flex>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Lĩnh vực hoạt động (ngành nghề):
            </Text>
            <DropDown data={jobType} selected={selectedJobType} onChange={handleJobTypeChange} />
          </Stack>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              facebook:
            </Text>
            <Input
              placeholder='Nhập tài khoản facebook'
              size='lg'
              value={facebookLink}
              onChange={handleFacebookLinkChange}
            ></Input>
          </Stack>
        </Stack>
        {errorMessage && <Text color='red'>{errorMessage}</Text>}
        <Flex
          p='8px 0px'
          w='335px'
          justifyContent='center'
          alignItems='center'
          bg='#F6871F'
          rounded='10px'
          cursor='pointer'
          onClick={handleRegister}
        >
          <Text fontSize='20px' fontWeight='500' color='white'>
            Đăng Ký
          </Text>
        </Flex>

        <Text fontSize='14px' fontWeight='700' lineHeight='20px' letterSpacing='0.2px'>
          Bạn đã có tài khoản ? <Link color='#F6871F'>Đăng nhập ngay</Link>
        </Text>
      </Stack>
      <Stack></Stack>
    </Flex>
  );
}

export default RegisterEmployer;
