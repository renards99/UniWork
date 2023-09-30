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
} from '@chakra-ui/react';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { BsShieldFillExclamation, BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
function Register() {
  const backgroundImage = '/static/images/rectangle_33.png';
  const logo = '/static/images/logo.png';
  const [email, setEmail] = useState(''); // Added state for email
  const [password, setPassword] = useState(''); // Added state for password
  const [confirmPassword, setConfirmPassword] = useState(''); // Added state for confirmPassword
  const [errorMessage, setErrorMessage] = useState(''); // Added state for error message

  const validateForm = () => {
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }

    if (password.length <= 5) {
      setErrorMessage('Password must be more than 5 characters');
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }
    // Handle registration

    console.log('Form is valid');
    const currentDate = new Date().toISOString().slice(0, 10);

    const createAccountResponse = await axios.post('http://localhost:5000/create-account', {
      full_name: '',
      role_id: 3,
      email: email,
      password: password,
      gender: 1,
      date_of_birth: '',
      mobile_number: null,
      registration_date: currentDate,
      is_verified: 0,
      is_banned: 0,
      user_image: '',
    });
    const createdAccountId = createAccountResponse.data.data.user_id;
    const createEmployer = await axios.post('http://localhost:5000/student/create-student', {
      user_account_id: createdAccountId,
      cv: null,
      short_des: null,
    });
    if (createAccountResponse.status === 201 && createEmployer.status === 201) {
      try {
        await loginAccount(email, password, 'http://localhost:5000');
      } catch (error) {
        console.error('Error logging in after account creation:', error);
      }
      window.location.href = 'http://localhost:3000/candidate';
    } else {
      console.error('Unable to create an account. Please try again.');
    }
    alert('Registration successful!');
  };
  return (
    <Flex
      h='100vh' // Set the height to cover the entire viewport
      w='100vw' // Set the width to cover the entire viewport
      minH='100%' // Ensure the Box covers the entire viewport height
      minW='100%' // Ensure the Box covers the entire viewport width
      position='fixed' // Position it fixed to stay in place while scrolling
      top='0' // Align it to the top of the viewport
      left='0' // Align it to the left of the viewport
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize='cover' // Adjust background properties as needed
      backgroundRepeat='no-repeat'
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        bg='white'
        justifyContent='center'
        alignItems='center'
        rounded='30px'
        gap='18px'
        p='50px'
      >
        <Image src={logo} width='173' height='40'></Image>
        <Text fontSize='24px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
          Đăng ký
        </Text>
        <Text fontSize='15px' fontWeight='500' lineHeight='18px' letterSpacing='0.2px'>
          Chào mừng bạn đã quay trở lại!
        </Text>
        <Stack width='377px'>
          <Text>Email Đăng nhập</Text>
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
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </InputGroup>
        </Stack>
        <Stack width='377px'>
          <Text>Mật khẩu</Text>
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
              placeholder='Nhập Mật khẩu'
              size='lg'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputGroup>
        </Stack>
        <Stack width='377px'>
          <Text>Nhập lại Mật khẩu</Text>
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
              placeholder='Nhập lại Mật khẩu'
              size='lg'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
          </InputGroup>
        </Stack>
        <Flex justifyContent='space-between' w='377px'>
          <Checkbox size='lg' fontSize='14px' fontWeight='500'>
            Nhớ mật khẩu
          </Checkbox>
          <Link fontSize='14px' fontWeight='500'>
            Quên mật khẩu?
          </Link>
        </Flex>
        <Flex
          p='15px 20px'
          w='335px'
          justifyContent='center'
          alignItems='center'
          h='45px'
          bg='#F6871F'
          rounded='10px'
          cursor='pointer'
          onClick={handleRegister}
        >
          <Text fontSize='20px' fontWeight='500' color='white'>
            Đăng nhập
          </Text>
        </Flex>
        <Text fontSize='14px' fontWeight='700' lineHeight='20px' letterSpacing='0.2px'>
          Hoặc đăng nhập bằng
        </Text>
        <Flex gap='20px'>
          <Flex
            bg='#FF7373'
            w='132px'
            height='40px'
            justifyContent='space-evenly'
            alignItems='center'
            rounded='12px'
            cursor='pointer'
          >
            <Box fontSize='24px' color='white'>
              <AiFillGoogleCircle />
            </Box>
            <Text
              fontSize='12px'
              fontWeight='900px'
              lineHeight='18px'
              letterSpacing='0.2px'
              color='white'
            >
              Google
            </Text>
          </Flex>
          <Flex
            bg='#468BFF'
            w='132px'
            height='40px'
            justifyContent='space-evenly'
            alignItems='center'
            rounded='12px'
            cursor='pointer'
          >
            <Box fontSize='24px' color='white'>
              <BsFacebook />
            </Box>
            <Text
              fontSize='12px'
              fontWeight='900px'
              lineHeight='18px'
              letterSpacing='0.2px'
              color='white'
            >
              Facebook
            </Text>
          </Flex>
        </Flex>
        <Text fontSize='14px' fontWeight='700' lineHeight='20px' letterSpacing='0.2px'>
          Bạn không có tài khoản ? <Link color='#F6871F'>Đăng ký ngay</Link>
        </Text>
        {errorMessage && <Text color='red'>{errorMessage}</Text>}
      </Stack>
    </Flex>
  );
}

export default Register;
