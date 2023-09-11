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
} from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import { HiMiniMapPin } from 'react-icons/hi2';
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
        // leftIcon={
        //   <Box fontSize='24px'>
        //     <HiMiniMapPin />
        //   </Box>
        // }
        _hover='none'
        _focus={{ bg: 'none' }}
        _expanded={{ bg: 'none' }}
        bg='none'
        as={Button}
        gap='20px'
        py='22px'
        pl='24px'
        pr='12px'
        justifyContent='space-between'
        alignSelf='stretch'
        alignItems='center'
        border='1px solid #818181'
        rounded='12px'
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
      <MenuList rounded='10px' border='1px solid #323541'>
        {data.map((item) => (
          <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
            {selectedMenuItem === item ? (
              <Box border='2px solid #323541' roundedRight='12px' pos='fixed' h='48px'></Box>
            ) : (
              ''
            )}

            <MenuItem h='48px' onClick={() => handleMenuItem(item)} _focus={{ bg: 'none' }}>
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
