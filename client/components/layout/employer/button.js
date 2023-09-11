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
function Button() {
  return (
    <Flex
      w='132px'
      p='8px 12px'
      justifyContent='center'
      alignItems='center'
      gap='20px'
      rounded='20px'
      bg='#323541'
    >
      <Text fontSize='14px' fontWeight='400px' lineHeight='24px'>
        Đổi logo
      </Text>
    </Flex>
  );
}

export default Button;
