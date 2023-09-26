import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { LuBellDot } from 'react-icons/lu';
import { IoPersonCircle } from 'react-icons/io5';
import { HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/static/images/Logo.png';
import DropDownHeader from './dropDownHeader';
// import Notifications from './notifications';
function CandidateHeader() {
  const login = 1;
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const data = {
    dropDown: [
      'Xem trang cá nhân',
      'Quản lý CV',
      'Cái đặt thông tin ',
      'Đổi mật khẩu',
      'Việc làm đã ứng tuyển',
      'Cài đặt gợi ý việc làm',
      'Báo cáo/ Hỗ trợ',
      'Đăng xuất',
    ],
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modal = (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size='6xl'>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent>
        {/* <ModalHeader borderBottom='1px solid #818181' fontSize='24px'>
          Chào bạn
          <Text as='span' color='#F98820'>
            Nhân viên tư vấn
          </Text>
        </ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>
          <Stack justifyContent='center' alignItems='center' p='24px'>
            <Image src={Logo} height={'40'} width={'170'} />
            <Text color='#323541' fontSize='16px' fontWeight='500' lineHeight='32px'>
              Thao tác với tư cách là{' '}
              <Text as='span' fontSize='18px' fontWeight='700'>
                Nhà Tuyển Dụng
              </Text>
            </Text>
          </Stack>
          <Flex
            p='24px 24px 32px 24px'
            justifyContent='space-between'
            alignItems='center'
            gap='20px'
          >
            <Stack justifyContent='center' alignItems='center'>
              <Image src='/static/images/employer.png' width='400' height='250'></Image>
              <Link href='/candidate/login' textDecoration='none' color='white'>
                <Flex
                  py='12px'
                  px='24px'
                  mt='32px'
                  rounded='full'
                  bg='#F8A353'
                  justifyContent='center'
                  alignItems='center'
                  cursor='pointer'
                >
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                    Đăng nhập
                  </Text>
                </Flex>
              </Link>
            </Stack>
            <Stack justifyContent='center' alignItems='center'>
              <Image src='/static/images/candidate.png' width='400' height='250'></Image>
              <Link href='/register-employer' textDecoration='none' color='white'>
                <Flex
                  py='12px'
                  px='24px'
                  mt='32px'
                  rounded='full'
                  bg='#F8A353'
                  justifyContent='center'
                  alignItems='center'
                  cursor='pointer'
                  textDecoration='none'
                >
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                    Đăng ký
                  </Text>
                </Flex>
              </Link>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
  return (
    <Flex
      h='10vh'
      justifyContent='space-between'
      alignItems='center'
      border='1px'
      borderColor='#D7D7D7'
      px='48px'
      alignSelf='stretch'
    >
      {modal}
      <Flex gap='32px' alignItems='center'>
        <Link href='/'>
          <Image src={Logo} height={'40'} width={'170'} />
        </Link>
        <Link href='/' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Việc làm
          </Text>
        </Link>
        <Link href='/' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Công ty
          </Text>
        </Link>
        <Link href='/' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Cửa hàng
          </Text>
        </Link>
      </Flex>
      <Flex gap='24px' justifyContent='flex-end' alignItems='flex-start'>
        {login === 1 ? (
          <Flex gap='20px'>
            <Link href='/register-candidate'>
              <Flex border='1px solid #FF6B00' p='16px 16px' rounded='12px'>
                <Text color='#FF6B00' fontSize='20px' fontWeight='700' textAlign='center'>
                  Đăng nhập
                </Text>
              </Flex>
            </Link>
            <Link href='/register-employer'>
              <Flex bg='#FF6B00' p='16px 16px' rounded='12px'>
                <Text color='white' fontSize='20px' fontWeight='700' textAlign='center'>
                  Đăng ký
                </Text>
              </Flex>
            </Link>

            <Flex bg='#33271F' p='16px 16px' rounded='12px' onClick={onOpen} cursor='pointer'>
              <Text
                color='white'
                fontSize='20px'
                fontWeight='700'
                textAlign='center'
                cursor='pointer'
              >
                Đăng tuyển & tìm hồ sơ
              </Text>
            </Flex>
          </Flex>
        ) : (
          <Flex gap='20px'>
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
            <DropDownHeader />
          </Flex>
        )}

        {/* <Notifications /> */}

        {/* <Flex
          rounded='40px'
          fontSize='24px'
          p='12px'
          alignItems='flex-start'
          gap='18px'
          bg='#E8E8EB'
          cursor='pointer'
          onClick={handleClick}
        >
          <IoPersonCircle />
          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
            Candidate
          </Text>
          {show ? (
            <Box transition='transform 0.3s ease-in-out'>
              <HiChevronDown />
            </Box>
          ) : (
            <Box transform='rotate(-180deg)' transition='transform 0.3s ease-in-out'>
              <HiChevronDown />
            </Box>
          )}
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default CandidateHeader;
