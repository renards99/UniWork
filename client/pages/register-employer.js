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
import { AiFillGoogleCircle } from 'react-icons/ai';
import DropDown from '../components/layout/admin/dropDown';
function RegisterEmployer() {
  const logo = '/static/images/logo.png';
  const menuData = {
    jobType: ['Shipper', 'Worker', 'Khác', '...'],
  };
  return (
    <Flex
      h='100vh' // Set the height to cover the entire viewport
      w='100vw' // Set the width to cover the entire viewport
      minH='100%' // Ensure the Box covers the entire viewport height
      minW='100%' // Ensure the Box covers the entire viewport width
      top='0' // Align it to the top of the viewport
      left='0' // Align it to the left of the viewport
      alignItems='center'
    >
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
              Email Đăng nhập
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
              <Input placeholder='Nhập Email' size='lg'></Input>
            </InputGroup>
          </Stack>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Mật khẩu
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
              <Input placeholder='Nhập Mật khẩu' size='lg'></Input>
            </InputGroup>
          </Stack>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Nhập lại Mật khẩu
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
              <Input placeholder='Nhập lại Mật khẩu' size='lg'></Input>
            </InputGroup>
          </Stack>
          <Flex alignItems='center' gap='12px'>
            <Stack h='40px' border='4px solid #F1841D'></Stack>
            <Text fontSize='24px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
              Thông tin nhà tuyển dụng
            </Text>
          </Flex>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Họ và tên
            </Text>
            <Input placeholder='Nhập họ và tên' size='lg'></Input>
          </Stack>
          <Flex gap='24px'>
            <Stack flex='1 0 0'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Giới tính
              </Text>
              <RadioGroup>
                <Flex gap='32px'>
                  <Radio size='lg'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Nam
                    </Text>
                  </Radio>
                  <Radio size='lg'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Nữ
                    </Text>
                  </Radio>
                </Flex>
              </RadioGroup>
            </Stack>
            <Stack flex='1 0 0'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Điện thoại
              </Text>
              <Input placeholder='Nhập số điện thoại' size='lg'></Input>
            </Stack>
          </Flex>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Lĩnh vực hoạt động (ngành nghề)
            </Text>
            <DropDown data={menuData.jobType} />
          </Stack>
          <Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              facebook
            </Text>
            <Input placeholder='Nhập tài khoản facebook' size='lg'></Input>
          </Stack>
        </Stack>
        <Flex
          p='8px 0px'
          w='335px'
          justifyContent='center'
          alignItems='center'
          bg='#F6871F'
          rounded='10px'
          cursor='pointer'
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
