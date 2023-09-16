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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { BsShieldFillExclamation, BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle, AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';

export default function ForgotPassword() {
  const backgroundImage = '/static/images/rectangle_33.png';
  const logo = '/static/images/logo.png';
  const [tab, setTab] = useState(1);
  const handleTab = (index) => {
    setTab(index);
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
        w='491px'
        h='590px'
        bg='white'
        justifyContent='center'
        alignItems='center'
        rounded='30px'
        gap='48px'
        py='32px'
      >
        <Image src={logo} width='173' height='40'></Image>

        {tab === 1 ? (
          <Stack justifyContent='center' alignItems='center' gap='32px'>
            <Text fontSize='24px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
              Quên mật khẩu
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
                <Input placeholder='Nhập Email' size='lg'></Input>
              </InputGroup>
            </Stack>
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
                Đăng Ký
              </Text>
            </Flex>
          </Stack>
        ) : tab === 2 ? (
          <Stack justifyContent='center' alignItems='center' gap='32px'>
            <Text fontSize='24px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
              Xác nhận OTP
            </Text>

            <Flex width='377px' gap='20px' justifyContent='center' alignItems='center'>
              <PinInput otp size='lg' type='alphanumeric'>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </Flex>
            <Flex justifyContent='space-between' w='100%'>
              <Text fontSize='16px' fontWeight='500'>
                Yêu cầu gửi lại mã sau 59 giây
              </Text>
              <Link fontSize='16px' fontWeight='500'>
                Gửi lại otp
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
                Đăng Ký
              </Text>
            </Flex>
          </Stack>
        ) : tab === 3 ? (
          <Stack justifyContent='center' alignItems='center' gap='32px'>
            <Text fontSize='24px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
              Đặt lại mật khẩu
            </Text>

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
                <Input placeholder='Nhập Mật khẩu' size='lg'></Input>
              </InputGroup>
            </Stack>
            <Stack width='377px'>
              <Text>Nhập lại mật khẩu</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={
                    <Box fontSize='24px'>
                      <BsShieldFillExclamation />
                    </Box>
                  }
                />
                <Input placeholder='Nhập lại mật khẩu' size='lg'></Input>
              </InputGroup>
            </Stack>
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
                Xác nhận
              </Text>
            </Flex>
          </Stack>
        ) : tab === 4 ? (
          <Stack justifyContent='center' alignItems='center' gap='32px'>
            <Text fontSize='24px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
              Hoàn tất
            </Text>
            <Text fontSize='15px' fontWeight='500' lineHeight='18px' letterSpacing='0.2px'>
              Bạn đã thay đổi mật khẩu thành công
            </Text>
            <Stack width='377px' justifyContent='center' alignItems='center'>
              <Image src='/static/images/Check_Square.png' width='150' height='150' />
            </Stack>
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
                Quay lại đăng nhập
              </Text>
            </Flex>
          </Stack>
        ) : (
          ''
        )}
        {tab === 4 ? (
          ''
        ) : (
          <Flex alignItems='center' gap='12px'>
            <Box fontSize='24px'>
              <AiOutlineArrowLeft />
            </Box>
            <Text fontSize='14px' fontWeight='700' lineHeight='20px' letterSpacing='0.2px'>
              Quay lại đăng nhập
            </Text>
          </Flex>
        )}

        <Tabs variant='soft-rounded' colorScheme='orange'>
          <TabList gap='12px'>
            <Tab border='1px solid #F6871F' bg='white' onClick={() => handleTab(1)}>
              1
            </Tab>
            <Tab border='1px solid #F6871F' bg='white' onClick={() => handleTab(2)}>
              2
            </Tab>
            <Tab border='1px solid #F6871F' bg='white' onClick={() => handleTab(3)}>
              3
            </Tab>
            <Tab border='1px solid #F6871F' bg='white' onClick={() => handleTab(4)}>
              4
            </Tab>
          </TabList>
        </Tabs>
      </Stack>
    </Flex>
  );
}
