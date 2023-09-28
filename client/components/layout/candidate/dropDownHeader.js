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
} from '@chakra-ui/react';

import { HiChevronDown } from 'react-icons/hi';
import { useRouter } from 'next/router';
export default function DropDownHeader(props) {
  const router = useRouter();
  const data = props.data;

  const [selectedMenuItem, setSelectedMenuItem] = useState(data[0]);
  const [menuIcon, setMenuIcon] = useState(false);
  async function handleLogout() {
    const userIdentifier = JSON.parse(localStorage.getItem('user')).email; // Retrieve the logged-in user's email or mobile number

    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: userIdentifier }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        window.location.href = 'http://localhost:3000/';
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
        onClick={handleMenuClick}
        leftIcon={<Avatar size='xs' src='' />}
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
            {selectedMenuItem}
          </Text>
        </Flex>
      </MenuButton>
      <MenuList rounded='10px' border='1px solid #323541' bg='#E8E8EB'>
        {data.map((item) => (
          <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
            {selectedMenuItem === item ? (
              <Box border='2px solid #323541' roundedRight='12px' pos='fixed' h='48px'></Box>
            ) : (
              ''
            )}

            <MenuItem h='48px' onClick={() => handleMenuItem(item)} bg='#E8E8EB'>
              <Text p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
                {item}
              </Text>
            </MenuItem>
          </Flex>
        ))}
      </MenuList>
    </Menu>
  );
}
