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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
} from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
export default function DropDownStatus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItems = [
    <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
      {/* {selectedMenuItem === item ? (
      <Box border='2px solid #323541' roundedRight='12px' pos='fixed' h='48px'></Box>
    ) : (
      ''
    )} */}
      <MenuItem
        pr='54px'
        _focus={{ bg: 'none' }}
        h='48px'
        onClick={() => handleMenuItem(0)}
        command={
          <Box p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
            <Flex
              alignItems='center'
              justifyContent='center'
              backgroundColor='#C7F5D9'
              w='134px'
              padding='6px 10px'
              h='28px'
              borderRadius={'12px'}
              textAlign={'center'}
            >
              <Text fontSize={'14px'} fontWeight={'500'} color='#048500'>
                Đã xác minh
              </Text>
            </Flex>
          </Box>
        }
      ></MenuItem>
    </Flex>,
    <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
      {/* {selectedMenuItem === item ? (
              <Box border='2px solid #323541' roundedRight='12px' pos='fixed' h='48px'></Box>
            ) : (
              ''
            )} */}
      <MenuItem
        pr='54px'
        _focus={{ bg: 'none' }}
        h='48px'
        onClick={() => handleMenuItem(1)}
        command={
          <Box p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
            <Flex
              alignItems='center'
              justifyContent='center'
              backgroundColor='#E5EBFA'
              w='134px'
              padding='6px 10px'
              h='28px'
              borderRadius={'12px'}
              textAlign={'center'}
            >
              <Text fontSize={'14px'} fontWeight={'500'} color='#4881FC'>
                Chưa xác minh
              </Text>
            </Flex>
          </Box>
        }
      ></MenuItem>
    </Flex>,
    <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
      {/* {selectedMenuItem === item ? (
              <Box border='2px solid #323541' roundedRight='12px' pos='fixed' h='48px'></Box>
            ) : (
              ''
            )} */}
      <MenuItem
        pr='54px'
        _focus={{ bg: 'none' }}
        h='48px'
        onClick={() => handleMenuItem(2)}
        command={
          <Box p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
            <Flex
              alignItems='center'
              justifyContent='center'
              backgroundColor='#FFD7D7'
              w='134px'
              padding='6px 10px'
              h='28px'
              borderRadius={'12px'}
              textAlign={'center'}
            >
              <Text fontSize={'14px'} fontWeight={'500'} color='#E10000'>
                Đã cấm
              </Text>
            </Flex>
          </Box>
        }
      ></MenuItem>
    </Flex>,
    <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
      {/* {selectedMenuItem === item ? (
              <Box border='2px solid #323541' roundedRight='12px' pos='fixed' h='48px'></Box>
            ) : (
              ''
            )} */}
      <MenuItem
        pr='54px'
        _focus={{ bg: 'none' }}
        h='48px'
        onClick={() => handleMenuItem(3)}
        command={
          <Box p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
            <Flex
              alignItems='center'
              justifyContent='center'
              backgroundColor='#1311311A'
              w='134px'
              padding='6px 10px'
              h='28px'
              borderRadius={'12px'}
              textAlign={'center'}
            >
              <Text fontSize={'14px'} fontWeight={'500'} color='#818181'>
                Không hoạt động
              </Text>
            </Flex>
          </Box>
        }
      ></MenuItem>
    </Flex>,
    <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px #D7D7D7 solid'>
      {/* {selectedMenuItem === item ? (
              <Box border='2px solid #323541' roundedRight='12px' pos='fixed' h='48px'></Box>
            ) : (
              ''
            )} */}
      <MenuItem
        pr='54px'
        _focus={{ bg: 'none' }}
        h='48px'
        onClick={() => handleMenuItem(4)}
        command={
          <Box p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
            <Flex
              alignItems='center'
              justifyContent='center'
              backgroundColor='#FFEACB'
              w='134px'
              padding='6px 10px'
              h='28px'
              borderRadius={'12px'}
              textAlign={'center'}
            >
              <Text fontSize={'14px'} fontWeight={'500'} color='#FF7613'>
                Hết hạn
              </Text>
            </Flex>
          </Box>
        }
      ></MenuItem>
    </Flex>,
  ];

  const [menuIcon, setMenuIcon] = useState(false);
  const handleMenuItem = (text) => {
    setSelectedMenuItem(menuItems[text]);
  };
  const handleMenuClick = () => setMenuIcon(!menuIcon);

  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0]);
  const modal = (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size='5xl'>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent>
        <ModalHeader borderBottom='1px solid #818181' fontSize='24px'>
          Ứng tuyển
          <Text as='span' color='#F98820'>
            Nhân viên tư vấn
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack p='24px 24px 32px 24px' justifyContent='center' alignItems='center'>
            <Flex
              p='12px'
              w='140px'
              mt='32px'
              rounded='12px'
              bg='#F8A353'
              justifyContent='center'
              alignItems='center'
              onClick={onClose}
              cursor='pointer'
            >
              <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                Xác nhận{' '}
              </Text>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <Menu matchWidth>
      {modal}
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
        <Flex gap='20px' justifyContent='space-between' alignItems='center'>
          <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
            Trạng thái:
          </Text>
          {selectedMenuItem}
        </Flex>
      </MenuButton>
      <MenuList rounded='10px' border='1px solid #323541'>
        {menuItems.map((item) => (
          <Flex justifyContent='center' alignItems='center'>
            {item}
          </Flex>
        ))}
      </MenuList>
    </Menu>
  );
}
