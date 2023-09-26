import { Box, Flex, Text, Stack, Grid, GridItem, Collapse } from '@chakra-ui/react';
import { LuBellDot } from 'react-icons/lu';
import { IoPersonCircle } from 'react-icons/io5';
import { HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import Notifications from './notifications';
import DropDownHeader from './dropDownHeader';
function AdminHeader() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Flex
      h='10vh'
      justifyContent='space-between'
      alignItems='center'
      border='1px'
      borderColor='#D7D7D7'
      px='48px'
    >
      <Text fontSize='30px' fontWeight='700' lineHeight='38px'>
        Quản lý tài khoản
        <Text as='span' fontSize='24px' fontWeight='800' lineHeight='32px'>
          &gt;
        </Text>
        <Text as='span' fontSize='20px' fontWeight='600' lineHeight='20px' letterSpacing='0.2px'>
          Thông tin tài khoản
        </Text>
      </Text>
      <Flex gap='24px' justifyContent='flex-end' alignItems='flex-start'>
        {/* <Flex
          alignItems='flex-start'
          fontSize='24px'
          bg='#E8E8EB'
          p='12px'
          rounded='40px'
          cursor='pointer'
          gap='10px'
        >
          <LuBellDot />
        </Flex> */}
        <Notifications />
        <DropDownHeader />
      </Flex>
    </Flex>
  );
}

export default AdminHeader;
