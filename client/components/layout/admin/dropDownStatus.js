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
export default function DropDownStatus(props) {
  const data = props.data;
  console.log(data);

  const [selectedMenuItem, setSelectedMenuItem] = useState(data[0]);
  const [menuIcon, setMenuIcon] = useState(false);
  const handleMenuItem = (text) => {
    setSelectedMenuItem(text);
  };
  const handleMenuClick = () => setMenuIcon(!menuIcon);
  return (
    <Menu matchWidth>
      <MenuButton
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
        border='1px solid #666666'
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
        <Flex gap='20px' p='10px 12px 10px 24px' justifyContent='space-between' alignItems='center'>
          <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
            Trạng thái:
          </Text>
          {selectedMenuItem}
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
            <MenuItem
              pr='54px'
              _focus={{ bg: 'none' }}
              h='48px'
              onClick={() => handleMenuItem(item)}
              command={
                <Box p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
                  {item}
                </Box>
              }
            ></MenuItem>
          </Flex>
        ))}
      </MenuList>
    </Menu>
  );
}
