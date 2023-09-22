import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import StatusFrame from './statusFrame';

export default function DropDownStatus(props) {
  const data = props.data;

  const [selectedMenuItem, setSelectedMenuItem] = useState(data[0]);
  const [modalStatus, setModalStatus] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);
  const [banned, setBanned] = useState(false);
  

  const handleBanned = () => {
    setBanned(!banned);
    setModalStatus(!modalStatus);
  };

  const handleOpenModal = (index, selected) => {
    if( index == 2) {

      setModalStatus(!modalStatus);
    } else {
      setSelectedMenuItem(selected);
    }
  };
  const ModalBanned = (
    <Modal isOpen={modalStatus} size={banned ? 'lg' : 'md'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={'center'} fontSize={'18px'}>
          {banned ? 'Bạn muốn bỏ lệnh cấm người này?' : 'Bạn chắc sẽ cấm tài khoản này?'}
        </ModalHeader>
        <ModalBody textAlign={'center'}>
          <Text>
            {!banned
              ? 'Sau khi thực hiện thao tác này, người dùng sẽ không thể đăng nhập vào tài khoản này nữa. Bạn có chắc chắn muốn cấm?'
              : 'Sau khi thực hiện thao tác này, người dùng có thể tiếp tục đăng nhập trang web bằng tài khoản này. Bạn có chắc chắn muốn bỏ lệnh cấm?'}
          </Text>
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-evenly'}>
          <Button
            mr={3}
            onClick={() => setModalStatus(!modalStatus)}
            w={'30%'}
            borderRadius={'9999px'}
            border={'1px solid'}
          >
            Hủy
          </Button>
          <Button
            color={'#fff'}
            backgroundColor={'#000'}
            w={'30%'}
            borderRadius={'9999px'}
            onClick={handleBanned}
          >
            Xác nhận
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      {ModalBanned}
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
          <Flex
            gap='20px'
            p='10px 12px 10px 24px'
            justifyContent='space-between'
            alignItems='center'
          >
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              Trạng thái:
            </Text>
            {selectedMenuItem}
          </Flex>
        </MenuButton>
        <MenuList rounded='10px' border='1px solid #323541'>
          {data.map((item, index) => (
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
                onClick={()=>handleOpenModal(index, item)}
                command={
                  <Box p='12px 20px' fontSize='16px' fontWeight='600' lineHeight='24px'>
                    {index == 2 && !banned ? <StatusFrame text='Cấm' /> : item}
                  </Box>
                }
              ></MenuItem>
            </Flex>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
