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
import { useRouter } from 'next/router';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { LuBellDot } from 'react-icons/lu';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../../public/static/images/Logo.png';
import DropDownHeader from './dropDownHeader';
import axios from 'axios';
import Cookies from 'js-cookie';
// import Notifications from './notifications';
function CandidateHeader(props) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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
  const [userId, setUserId] = useState('');
  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem('user'))?.id);
  });

  const [forgetPassword, setForgetPassword] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = useCallback(
    (value) => {
      setUser(value);
    },
    [user],
  );

  const handlePassword = useCallback(
    (value) => {
      setPassword(value);
    },
    [password],
  );

  const changeForgetPassword = useCallback(() => {
    setForgetPassword(!forgetPassword);
  }, [forgetPassword]);

  const attemptLogin = async () => {
    try {
      await loginAccount(user, password, props.back_end_port, router);
    } catch (error) {
      console.log(error);
    }
  };

  const LoginPopup = (
    <Modal isOpen={isLoginOpen} onClose={setIsLoginOpen} size={'lg'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody className={'unw-login-form'} minHeight={!forgetPassword ? '500px' : '420px'}>
          <Text fontSize={24} marginTop={'20px'} textAlign={'center'} fontWeight={'bold'}>
            {!forgetPassword ? 'Đăng nhập' : 'Quên mật khẩu'}
          </Text>
          {!forgetPassword ? (
            <Stack padding={'0 10px'} marginTop={'10px'}>
              <div className='h-auto max-w-[400px] bg-white'>
                <div className='text-center'>
                  <div className='p-4 bg-blue-500 text-white text-xl font-medium rounded-md my-4 items-center flex justify-between cursor-pointer'>
                    <BsFacebook className='text-4xl'></BsFacebook>
                    <a className='mr-5'>Tiếp Tục với Facebook</a>
                  </div>
                  <div className='p-4 border border-black text-xl font-medium rounded-md my-8 items-center flex justify-between cursor-pointer'>
                    <FcGoogle className='text-4xl'></FcGoogle>
                    <a className='mr-5'>Tiếp Tục với Google</a>
                  </div>
                  <div className='my-4 flex items-center'>
                    <div class='flex-grow h-[1px] bg-black'></div>
                    <span className='px-2 text-xl font-semibold'>Hoặc</span>
                    <div class='flex-grow h-[1px] bg-black'></div>
                  </div>
                  <div className='flex flex-col '>
                    <input
                      className='p-4 text-xl border border-gray-400 focus:outline-none my-4 rounded-md'
                      type='text'
                      placeholder='Email/ Số điện thoại'
                      onChange={(e) => {
                        handleUser(e.target.value);
                      }}
                      value={user}
                    />
                    <input
                      className='p-4 text-xl border border-gray-400 focus:outline-none my-4 rounded-md'
                      type='password'
                      placeholder='Mật khẩu'
                      onChange={(e) => {
                        handlePassword(e.target.value);
                      }}
                      value={password}
                    />
                    <button
                      className='bg-[#F98820] text-white rounded-md text-xl p-3'
                      type='submit'
                      onClick={attemptLogin}
                    >
                      Đăng nhập
                    </button>
                  </div>
                  <div className='flex justify-between p-4'>
                    <div className='flex items-center'>
                      <input type='checkbox' className='mr-2 cursor-pointer'></input>
                      <label className='font-medium text-lg'>Nhớ mật khẩu</label>
                    </div>
                    <a
                      className='text-lg text-[#F98820] cursor-pointer'
                      onClick={changeForgetPassword}
                    >
                      Quên mật khẩu?
                    </a>
                  </div>

                  <div className='flex-grow h-[1px] bg-black'></div>
                  <div className='p-4 text-lg'>
                    Mới sử dụng lần đầu?{' '}
                    <a className='text-[#F98820] cursor-pointer'>Đăng Ký Ngay</a>
                  </div>
                  <Box height={5}></Box>
                </div>
              </div>
            </Stack>
          ) : (
            <Stack>
              <Text className={'title'} marginTop={'30px'}>
                Nhập email/sdt của bạn để khôi phục mật khẩu của bạn. bạn sẽ nhận được một tin nhắn
                có hướng dẫn để giúp bạn giải quyết các vấn đề của mình
              </Text>
              <Input
                className={'unw-input'}
                placeholder='Email hoặc số điện thoại'
                marginTop={'20px'}
                fontSize={'1.125rem'}
              />
              <Box height={'10px'}></Box>

              <Button className={'unw-forget-password-button'}>Gửi</Button>
              <Box height={'10px'}></Box>

              <Text className='unw-forget-password-return' onClick={changeForgetPassword}>
                Quay lại giao diện đăng nhập
              </Text>
            </Stack>
          )}
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
      {LoginPopup}
      {modal}
      <Flex gap='32px' alignItems='center'>
        <Link href='/'>
          <Image src={Logo} height={'40'} width={'170'} />
        </Link>
        <Link href='/candidate/job_searching' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Việc làm
          </Text>
        </Link>
        <Link href='/candidate/searching-employer' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Công ty
          </Text>
        </Link>
        <Link href='/candidate/searching-small-business' _hover={{ textDecoration: 'none' }}>
          <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
            Cửa hàng
          </Text>
        </Link>
      </Flex>
      <Flex gap='24px' justifyContent='flex-end' alignItems='flex-start'>
        {userId === '' ? (
          <Flex gap='20px'>
            {/* <Link href='/login'> */}
            <Flex border='1px solid #FF6B00' p='16px 16px' rounded='12px' onClick={setIsLoginOpen}>
              <Text color='#FF6B00' fontSize='20px' fontWeight='700' textAlign='center'>
                Đăng nhập
              </Text>
            </Flex>
            {/* </Link> */}
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
