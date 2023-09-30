import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
import { LuBellDot } from 'react-icons/lu';
import { IoPersonCircle } from 'react-icons/io5';
import { HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

// import Notifications from './notifications';
function EmployerHeader() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenuClick = () => setMenuIcon(!menuIcon);
  const path = {
    cart: '/employer/cart',
  };

  async function handleLogOut() {
    const id = JSON.parse(localStorage.getItem('user')).id; // Retrieve the logged-in user's email or mobile number

    try {
      const response = await axios.post('http://localhost:5000/logout', {
        id,
      });
      if (response.data.statusCode == 200) {
        localStorage.removeItem('user');
        router.push('/');
      } else {
        console.error(`There was an error logging out: ${data.message}`);
      }
    } catch (error) {
      console.error('Failed to make the logout request:', error);
    }
  }

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
        Trang cá nhân
      </Text>
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
        <Link href={path.cart}>
          <Flex
            alignItems='flex-start'
            fontSize='24px'
            bg='#E8E8EB'
            p='12px'
            rounded='40px'
            cursor='pointer'
            gap='10px'
          >
            <Image src='/static/images/icon/cart.svg' width='24' height='24' />
          </Flex>
        </Link>
        {/* <Notifications /> */}{' '}
        <Menu matchWidth>
          <MenuButton
            // leftIcon={
            //   <Box fontSize='24px'>
            //     <HiMiniMapPin />
            //   </Box>
            // }
            _hover='none'
            bg='#E8E8EB'
            as={Button}
            gap='20px'
            py='24px'
            px='24px'
            justifyContent='space-between'
            alignSelf='stretch'
            alignItems='center'
            rounded='40px'
            // onClick={handleMenuClick}
            rightIcon={
              menuIcon ? (
                <Box transition='transform 0.3s ease-in-out' fontSize='24px'>
                  <HiChevronDown />
                </Box>
              ) : (
                <Box
                  transform='rotate(-180deg)'
                  transition='transform 0.3s ease-in-out'
                  fontSize='24px'
                >
                  <HiChevronDown />
                </Box>
              )
            }
          >
            <Flex gap='20px'>
              <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                Employer
              </Text>
            </Flex>
          </MenuButton>
          <MenuList
            rounded='12px'
            justifyContent='space-between'
            alignSelf='stretch'
            alignItems='center'
            bg='#E8E8EB'
            p='0px'
            overflowY='auto'
          >
            <Link href='/employer/employer-details'>
              <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
                <MenuItem h='48px' _focus={{ bg: 'none' }}>
                  <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Trang cá nhân
                  </Text>
                </MenuItem>
              </Flex>
            </Link>
            <Link href=''>
              <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
                <MenuItem h='48px' _focus={{ bg: 'none' }}>
                  <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Cài đặt
                  </Text>
                </MenuItem>
              </Flex>
            </Link>
            <Link href='/employer/change-password'>
              <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
                <MenuItem h='48px' _focus={{ bg: 'none' }}>
                  <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Đổi mật khẩu
                  </Text>
                </MenuItem>
              </Flex>
            </Link>

            <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
              <MenuItem h='48px' _focus={{ bg: 'none' }} onClick={handleLogOut}>
                <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
                  Đăng xuất
                </Text>
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default EmployerHeader;
