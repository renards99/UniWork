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
import { CiMapPin } from 'react-icons/ci';
import { HiChevronDown } from 'react-icons/hi';
import { HiMapPin } from 'react-icons/hi2';
export default function DropDown(props) {
  const data = props.data;

  const [selectedMenuItem, setSelectedMenuItem] = useState(data[0]);
  const [menuIcon, setMenuIcon] = useState(false);
  const handleMenuItem = (text) => {
    setSelectedMenuItem(text);
  };
  const handleMenuClick = () => setMenuIcon(!menuIcon);
  return (
    <Menu matchWidth>
      <MenuButton
        bg='White'
        as={Button}
        gap='20px'
        py='24px'
        px='24px'
        justifyContent='space-between'
        alignSelf='stretch'
        alignItems='center'
        rounded='12px'
        border='1px solid #F6871F'
        onClick={handleMenuClick}
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
