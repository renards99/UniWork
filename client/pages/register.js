import {
  Box,
  Link,
  Text,
  Input,
  Flex,
  Avatar,
  Stack,
  HStack,
  Spacer,
  Center,
  AbsoluteCenter,
  Button,
  InputGroup,
  useDisclosure,
} from '@chakra-ui/react';
import Logo from '../public/static/images/logo.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Register() {


  const [avatar, setAvatar] = useState();
  useEffect(() => {
    //cleanup
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  return (
    <Box
      bg='#F4F4F4'
      backgroundImage="url('https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000')"
    >
      <Box h='100px'></Box>
      <Stack p='120px' bg='white' width='60%' mx='auto'>
        <Image src={Logo} alt='logo' className='unw-register-logo'></Image>
        <Text my='18px' color='#F98820' fontSize='24px' fontWeight='semibold' mx='auto'>
          Đăng kí tài khoản tại UniWork
        </Text>
        <Flex justifyContent='space-between' w='100%'>
          <Stack width='400px'>
            <label>
              <Text color='#373f41' fontSize='16px' fontWeight='bold'>
                Họ và tên
              </Text>
              <Input
                focusBorderColor='#F98820'
                borderColor='transparent'
                _placeholder={{ color: '#737B7D' }}
                placeholder='Nhập họ và tên'
                bg='gray.100'
                padding='16px'
                fontSize='2xl'
                fontWeight='medium'
                boxShadow='md'
                mb='20px'
                rounded='xl'
              />
            </label>
            <label>
              <Text color='#373f41' fontSize='16px' fontWeight='bold'>
                Ngày sinh
              </Text>
              <Input
                focusBorderColor='#F98820'
                borderColor='transparent'
                _placeholder={{ color: '#737B7D' }}
                placeholder='Nhập ngày sinh'
                bg='gray.100'
                padding='16px'
                fontSize='2xl'
                fontWeight='medium'
                boxShadow='md'
                mb='20px'
                rounded='xl'
                type='date'
              />
            </label>
          </Stack>

          <Box>
            <Text color='#373f41' fontSize='16px' fontWeight='bold'>
              Ảnh Đại diện
            </Text>
            <label for='file-input'>
              <Flex
                rounded='md'
                boxShadow='md'
                mt='6px'
                width='400px'
                bg='gray.100'
                height='115px'
                className='unw-register-avatar'
                alignItems='center'
              >
                {avatar ? (
                  <Image src={avatar.preview} alt='' layout='fill' className='unw-register-image' />
                ) : (
                  <Text fontSize='2xl' fontWeight='medium' color='#737B7D' px='12px'>
                    Chọn ảnh đại diện
                  </Text>
                )}
              </Flex>
            </label>
          </Box>
          <Input
            hidden
            type='file'
            id='file-input'
            accept='image/png, image/jpeg'
            onChange={handlePreviewAvatar}
          ></Input>
        </Flex>
        <label>
          <Text color='#373f41' fontSize='16px' fontWeight='bold'>
            Email
          </Text>
          <Input
            focusBorderColor='#F98820'
            borderColor='transparent'
            _placeholder={{ color: '#737B7D' }}
            placeholder='Nhập Email'
            bg='gray.100'
            padding='16px'
            fontSize='2xl'
            fontWeight='medium'
            boxShadow='md'
            mb='20px'
            rounded='xl'
            type='email'
          />
        </label>
        <label>
          <Text color='#373f41' fontSize='16px' fontWeight='bold'>
            Số điện thoại
          </Text>

          <Input
            focusBorderColor='#F98820'
            borderColor='transparent'
            _placeholder={{ color: '#737B7D' }}
            placeholder='Nhập số điện thoại'
            bg='gray.100'
            padding='16px'
            fontSize='2xl'
            fontWeight='medium'
            boxShadow='md'
            mb='20px'
            rounded='xl'
            type='tel'
          />
        </label>
        <label>
          <Text color='#373f41' fontSize='16px' fontWeight='bold'>
            Mật khẩu
          </Text>
          <Input
            focusBorderColor='#F98820'
            borderColor='transparent'
            _placeholder={{ color: '#737B7D' }}
            placeholder='Nhập mật khẩu'
            bg='gray.100'
            padding='16px'
            fontSize='2xl'
            fontWeight='medium'
            boxShadow='md'
            mb='20px'
            rounded='xl'
            type='password'
          />
        </label>
        <label>
          <Text color='#373f41' fontSize='16px' fontWeight='bold'>
            Nhập lại mật khẩu
          </Text>
          <Input
            focusBorderColor='#F98820'
            borderColor='transparent'
            _placeholder={{ color: '#737B7D' }}
            placeholder='Nhập lại mật khẩu'
            bg='gray.100'
            padding='16px'
            fontSize='2xl'
            fontWeight='medium'
            boxShadow='md'
            mb='20px'
            rounded='xl'
            type='password'
          />
        </label>
        <label>
          <Text color='#373f41' fontSize='16px' fontWeight='bold'>
            Mô tả về bản thân
          </Text>
          <Input
            type='textarre'
            focusBorderColor='#F98820'
            borderColor='transparent'
            _placeholder={{ color: '#737B7D' }}
            placeholder='Nhập mô tả về bản thân'
            bg='gray.100'
            padding='16px'
            fontSize='2xl'
            fontWeight='medium'
            boxShadow='md'
            mb='20px'
            rounded='xl'
            h='80px'
          />
        </label>
        <Button bg='#F98820' textColor='white' py='16px' px='30px' mt='16px' fontSize='2xl'>
          Đăng ký
        </Button>
      </Stack>
      <Box h='100px'></Box>
    </Box>
  );
}
