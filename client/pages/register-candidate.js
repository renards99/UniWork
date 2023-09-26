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

function Register() {
  const backgroundImage = '/static/images/rectangle_33.png';
  const logo = '/static/images/logo.png';
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
          Đăng nhập
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
            <Input p='20px' placeholder='Nhập Mật khẩu' size='lg'></Input>
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
            <Input placeholder='Nhập lại Mật khẩu' size='lg'></Input>
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
            <Input placeholder='Nhập Email' size='lg'></Input>
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
      </Stack>
    </Flex>
  );
}

export default Register;
