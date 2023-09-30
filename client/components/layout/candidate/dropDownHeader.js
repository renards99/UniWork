import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Text,
  Button,
  Flex,
  Avatar,
  Link,
} from '@chakra-ui/react';

import { HiChevronDown } from 'react-icons/hi';
import axios from 'axios';

import { useRouter } from 'next/router';
export default function DropDownHeader(props) {
  const router = useRouter();
  const data = props.data;

  // const [selectedMenuItem, setSelectedMenuItem] = useState(data[0]);
  const [menuIcon, setMenuIcon] = useState(false);
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
  const handleMenuItem = (text) => {
    setSelectedMenuItem(text);

    // Check if the selected item is "Đăng xuất"
    if (text === 'Đăng xuất') {
      handleLogout(); // Navigate to /logout
    }
  };

  const handleMenuClick = () => setMenuIcon(!menuIcon);
  return (
    <Menu matchWidth>
      <MenuButton
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
        leftIcon={<Avatar size='md' src='' />}
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
            Candidate
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
      >
        <MenuItem h='48px' bg='#E8E8EB' border='1px solid #1311311A' roundedTop='12px'>
          <Link href='/candidate/student-profile'>
            <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
              Xem trang cá nhân
            </Text>
          </Link>
        </MenuItem>
        <MenuItem h='48px' bg='#E8E8EB' border='1px solid #1311311A'>
          <Link href='/candidate/change-account-info'>
            <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
              Cài đặt thông tin
            </Text>
          </Link>
        </MenuItem>
        <MenuItem h='48px' bg='#E8E8EB' border='1px solid #1311311A'>
          <Link href='/candidate/change-password'>
            <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
              Đổi mật khẩu
            </Text>
          </Link>
        </MenuItem>
        <MenuItem h='48px' bg='#E8E8EB' border='1px solid #1311311A'>
          <Link href='/candidate/job-apply'>
            <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
              Việc làm đã ứng tuyển
            </Text>
          </Link>
        </MenuItem>
        <MenuItem h='48px' bg='#E8E8EB' border='1px solid #1311311A'>
          <Link href='job-recommended-setting'>
            <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
              Cài đặt gợi ý việc làm
            </Text>
          </Link>
        </MenuItem>
        <MenuItem h='48px' bg='#E8E8EB' border='1px solid #1311311A'>
          <Link href='/candidate/report'>
            <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
              Báo cáo/Hỗ trợ
            </Text>
          </Link>
        </MenuItem>
        <MenuItem
          h='48px'
          bg='#E8E8EB'
          border='1px solid #1311311A'
          roundedBottom='12px'
          onClick={handleLogOut}
        >
          <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
            Đăng xuất
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
