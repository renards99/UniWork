import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Link,
  textDecoration,
} from '@chakra-ui/react';
import { LuBellDot } from 'react-icons/lu';
import { IoPersonCircle } from 'react-icons/io5';
import { HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/static/images/Logo.png';
import DropDownHeader from './dropDownHeader';
// import Notifications from './notifications';
function CandidateHeader() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const data = {
    dropDown: [
      'Xem trang cá nhân',
      'Quản lý CV',
      'Cái đặt thông tin ',
      'Đổi mật khẩu',
      'Việc làm đã ứng tuyển',
      'Cài đặt gợi ý việc làm',
      'Báo cáo/ Hỗ trợ',
      'Đăng xuất',
    ],
  };
  return (
    <Flex
      h='10vh'
      justifyContent='space-between'
      alignItems='center'
      border='1px'
      borderColor='#D7D7D7'
      px='48px'
      alignSelf='stretch'
    >
      <Flex gap='32px' alignItems='center'>
        <Link href='/'>
          <Image src={Logo} height={'40'} width={'170'} />
        </Link>
        <Link href='/' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Việc làm
          </Text>
        </Link>
        <Link href='/' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Công ty
          </Text>
        </Link>
        <Link href='/' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Cửa hàng
          </Text>
        </Link>
      </Flex>
      <Flex gap='24px' justifyContent='flex-end' alignItems='flex-start'>
        <Flex
          alignItems='flex-start'
          fontSize='24px'
          bg='#E8E8EB'
          p='12px'
          rounded='40px'
          cursor='pointer'
          gap='10px'
        >
          <LuBellDot />
        </Flex>
        {/* <Notifications /> */}
        <DropDownHeader />
        {/* <Flex
          rounded='40px'
          fontSize='24px'
          p='12px'
          alignItems='flex-start'
          gap='18px'
          bg='#E8E8EB'
          cursor='pointer'
          onClick={handleClick}
        >
          <IoPersonCircle />
          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
            Candidate
          </Text>
          {show ? (
            <Box transition='transform 0.3s ease-in-out'>
              <HiChevronDown />
            </Box>
          ) : (
            <Box transform='rotate(-180deg)' transition='transform 0.3s ease-in-out'>
              <HiChevronDown />
            </Box>
          )}
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default CandidateHeader;
