import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Input,
  Textarea,
  MenuDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HiChevronDown,
  HiOutlineMail,
  HiChevronUp,
  HiOutlineCurrencyDollar,
  HiBriefcase,
} from 'react-icons/hi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import DropDown from '../../components/layout/admin/dropDown';
import { HiOutlineMapPin, HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { GiPlayerTime } from 'react-icons/gi';
import { LiaNewspaperSolid } from 'react-icons/lia';
import {
  BsGlobe,
  BsFillPersonPlusFill,
  BsPersonVcardFill,
  BsGenderAmbiguous,
} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';

import DatePicker from '../../components/layout/admin/datePicker';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';
import EmployerHeader from '../../components/layout/employer/header';
import { useState } from 'react';
import StatusFrame from '../../components/layout/admin/statusFrame';
import DropDownStatus from '../../components/layout/admin/dropDownStatus';
import PostImage from '../../public/static/images/applicationPost.png';
import PdfImage from '../../public/static/images/pdf.png';
import { BsExclamationCircle, BsCalendar4, BsGenderMale, BsGenderFemale } from 'react-icons/bs';

import AdminHeader from '../../components/layout/admin/header';
function Service() {
  const menuData = {
    dropDown: ['Chọn loại dịch vụ', 'Quảng cáo tin tuyển dụng'],
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const services = {
    trial: [
      {
        id: 1,
        title: 'UNI MAX TRIAL',
        price: '2.887.500 VND',
        description:
          'Trải nghiệm quảng cáo tin đăng tuyển dụng hiệu quả với vị trí nổi bật trong việc làm tốt nhất kết hợp cùng các dịch vụ cao cấp và được Uni bảo hành vị trí ưu tiên với chi phí tối ưu nhất dành cho khách hàng.',
      },
      {
        id: 2,
        title: 'UNI PRO TRIAL',
        price: '2.448.000 VND',
        description:
          'Trải nghiệm quảng cáo tin đăng tuyển dụng tối ưu với vị trí ưu tiên trong Việc làm hấp dẫn kết hợp cùng các dịch vụ cao cấp với chi phí tối ưu.',
      },
      {
        id: 3,
        title: 'UNI ECO PLUS TRIAL',
        price: '2.112.000 VND',
        description:
          'Trải nghiệm quảng cáo tin đăng tuyển dụng tiết kiệm với vị trí trong Đề xuất việc làm liên quan kết hợp cùng các dịch vụ cao cấp với chi phí tối ưu',
      },
    ],
    promote: [
      {
        id: 4,
        title: 'UNI MAX',
        price: '7.500.000 VND',
        description:
          'Quảng cáo tin đăng tuyển dụng hiệu quả với vị trí nổi bật trong việc làm tốt nhất kết hợp cùng các dịch vụ cao cấp và được Uni bảo hành vị trí ưu tiên với chi phí tối ưu nhất dành cho khách hàng.',
        color: '#048500',
      },
      {
        id: 5,
        title: 'UNI PRO',
        price: '5.440.000 VND',
        description:
          'Quảng cáo tin đăng tuyển dụng tối ưu với vị trí ưu tiên trong Việc làm hấp dẫn kết hợp cùng các dịch vụ cao cấp.',
        color: '#4881FC',
      },
      {
        id: 6,
        title: 'UNI ECO PLUS',
        price: '4.400.000 VND',
        description:
          'Quảng cáo tin đăng tuyển dụng tiết kiệm với vị trí trong Đề xuất việc làm liên quan kết hợp cùng các dịch vụ cao cấp.',
        color: '#F6BE2C',
      },
    ],
    credit: [
      {
        id: 7,
        title: 'UNI JOBS TRIAL ',
        price: '3.000.000 VND',
        description:
          'Sử dụng credit để mở khóa thông tin liên hệ của các ứng viên phù hợp từ kho dữ liệu với hàng triệu CV chất lượng',
      },
      {
        id: 8,
        title: 'UNI PRO TRIAL',
        price: '6.000.000 VND',
        description:
          'Sử dụng credit để mở khóa thông tin liên hệ của các ứng viên phù hợp từ kho dữ liệu với hàng triệu CV chất lượng',
      },
    ],
  };
  const modal = (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size='5xl'>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent>
        <ModalHeader color='white' bg='#323541' fontSize='24px'>
          Dịch vụ
        </ModalHeader>
        <ModalCloseButton color='white' />
        <ModalBody>
          <Stack p='24px 24px 32px 24px' justifyContent='center' alignItems='center'>
            <Stack alignSelf='stretch' gap='8px'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Tên dịch vụ
              </Text>
              <Input
                p='24px 20px'
                placeholder='Tên Dịch vụ'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack alignSelf='stretch' gap='8px'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Loại dịch vụ
              </Text>
              <DropDown data={menuData.dropDown}></DropDown>
            </Stack>
            <Stack alignSelf='stretch' gap='8px'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Đơn giá
              </Text>
              <Input
                p='24px 20px'
                placeholder='Giá tiền'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack alignSelf='stretch' gap='8px'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Mô tả
              </Text>
              <Textarea
                p='24px 20px'
                placeholder='Mô tả'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
                height='160px'
              ></Textarea>
            </Stack>
            <Flex
              p='12px'
              w='140px'
              mt='32px'
              rounded='12px'
              bg='#323541'
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
    <Box ml='312px'>
      {modal}
      <AdminHeader />
      <Stack p='36px' gap='32px'>
        <Stack gap='20px'>
          <Stack gap='14px'>
            <Flex gap='12px'>
              <Text
                color='#4881FC'
                fontSize='20px'
                fontWeight='700'
                lineHeight='28px'
                letterSpacing='0.2px'
              >
                UNI JOBS TRIAL{' '}
              </Text>
              <Box border='1px solid black'></Box>
              <Text fontSize='20px' fontWeight='400' lineHeight='28px' letterSpacing='0.04px'>
                QUẢNG CÁO TIN TUYỂN DỤNG
              </Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Stack gap='4px'>
                <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                  Trải nghiệm cộng hưởng sức mạnh công nghệ tạo ra hiệu quả đột phá cho tin tuyển
                  dụng của Doanh nghiệp với chi phí tối ưu
                </Text>
                <Text fontSize='14px' fontWeight='400' lineHeight='24px' color='#E10000'>
                  Nhà tuyển dụng sẽ mua và kích họa duy nhất 1 gói Uni Job Trial
                </Text>
              </Stack>
              <Box fontSize='50px' cursor='pointer' onClick={onOpen}>
                <AiFillPlusCircle />
              </Box>
            </Flex>
          </Stack>
          <Flex gap='24px'>
            {services.trial.map((service) => (
              <Stack
                justifyContent='space-between'
                p='12px 20px 16px 20px'
                rounded='20px'
                border='1px solid #D7D7D7'
                background='#F7F7F91A'
                h='276px'
              >
                <Stack gap='8px' w='296px'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {service.title}
                  </Text>
                  <Text fontSize='20px' fontWeight='700' lineHeight='28px' letterSpacing='0.2px'>
                    {service.price}
                  </Text>
                  <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                    {service.description}
                  </Text>
                </Stack>
                <Flex gap='20px'>
                  <Flex
                    justifyContent='center'
                    alignItems='center'
                    color='#323541'
                    bg='white'
                    rounded='20px'
                    w='132px'
                    mt='20px'
                    py='8px'
                    px='12px'
                    fontSize='16px'
                    cursor='pointer'
                    border='1px'
                    borderColor='#323541'
                  >
                    Sửa
                  </Flex>
                  <Flex
                    justifyContent='center'
                    alignItems='center'
                    color='white'
                    bg='#323541'
                    rounded='20px'
                    w='132px'
                    mt='20px'
                    py='8px'
                    px='12px'
                    fontSize='16px'
                    cursor='pointer'
                  >
                    <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                      Xóa
                    </Text>
                  </Flex>
                </Flex>
              </Stack>
            ))}
          </Flex>
        </Stack>
        <Stack gap='20px'>
          <Stack gap='14px'>
            <Flex gap='12px'>
              <Text
                color='#048500'
                fontSize='20px'
                fontWeight='700'
                lineHeight='28px'
                letterSpacing='0.2px'
              >
                UNI JOBS{' '}
              </Text>
              <Box border='1px solid black'></Box>
              <Text fontSize='20px' fontWeight='400' lineHeight='28px' letterSpacing='0.04px'>
                QUẢNG CÁO TIN TUYỂN DỤNG
              </Text>
            </Flex>
            <Stack gap='4px'>
              <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                Cộng hưởng sức mạnh công nghệ tạo ra hiệu quả đột phá cho tin tuyển dụng của Doanh
                nghiệp
              </Text>
            </Stack>
          </Stack>
          <Flex gap='24px'>
            {services.promote.map((service) => (
              <Stack
                justifyContent='space-between'
                p='12px 20px 16px 20px'
                rounded='20px'
                border='1px solid'
                borderTop='5px solid'
                borderColor={service.color}
                background='#F7F7F91A'
                h='276px'
              >
                <Stack gap='8px' w='296px'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {service.title}
                  </Text>
                  <Text fontSize='20px' fontWeight='700' lineHeight='28px' letterSpacing='0.2px'>
                    {service.price}
                  </Text>
                  <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                    {service.description}
                  </Text>
                </Stack>
                <Flex gap='20px'>
                  <Flex
                    justifyContent='center'
                    alignItems='center'
                    color='#323541'
                    bg='white'
                    rounded='20px'
                    w='132px'
                    mt='20px'
                    py='8px'
                    px='12px'
                    fontSize='16px'
                    cursor='pointer'
                    border='1px'
                    borderColor='#323541'
                  >
                    Sửa
                  </Flex>
                  <Flex
                    justifyContent='center'
                    alignItems='center'
                    color='white'
                    bg='#323541'
                    rounded='20px'
                    w='132px'
                    mt='20px'
                    py='8px'
                    px='12px'
                    fontSize='16px'
                    cursor='pointer'
                  >
                    <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                      Xóa
                    </Text>
                  </Flex>
                </Flex>
              </Stack>
            ))}
          </Flex>
        </Stack>
        <Stack gap='20px'>
          <Stack gap='14px'>
            <Flex gap='12px'>
              <Text
                color='#E10000'
                fontSize='20px'
                fontWeight='700'
                lineHeight='28px'
                letterSpacing='0.2px'
              >
                UNI CREDIT
              </Text>
              <Box border='1px solid black'></Box>
              <Text fontSize='20px' fontWeight='400' lineHeight='28px' letterSpacing='0.04px'>
                NẠP CREDIT MỞ HỒ SƠ ỨNG VIÊN
              </Text>
            </Flex>
            <Stack gap='4px'>
              <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                Chủ động kết nối trực tiếp với ứng viên tài năng, gia tăng cơ hội tuyển dụng thành
                công
              </Text>
            </Stack>
          </Stack>
          <Flex gap='24px'>
            {services.credit.map((service) => (
              <Stack
                justifyContent='space-between'
                p='12px 20px 16px 20px'
                rounded='20px'
                border='1px solid #D7D7D7'
                background='#F7F7F91A'
                h='276px'
              >
                <Stack gap='8px' w='296px'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {service.title}
                  </Text>
                  <Text fontSize='20px' fontWeight='700' lineHeight='28px' letterSpacing='0.2px'>
                    {service.price}
                  </Text>
                  <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                    {service.description}
                  </Text>
                </Stack>
                <Flex gap='20px'>
                  <Flex
                    justifyContent='center'
                    alignItems='center'
                    color='#323541'
                    bg='white'
                    rounded='20px'
                    w='132px'
                    mt='20px'
                    py='8px'
                    px='12px'
                    fontSize='16px'
                    cursor='pointer'
                    border='1px'
                    borderColor='#323541'
                  >
                    Sửa
                  </Flex>
                  <Flex
                    justifyContent='center'
                    alignItems='center'
                    color='white'
                    bg='#323541'
                    rounded='20px'
                    w='132px'
                    mt='20px'
                    py='8px'
                    px='12px'
                    fontSize='16px'
                    cursor='pointer'
                  >
                    <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                      Xóa
                    </Text>
                  </Flex>
                </Flex>
              </Stack>
            ))}
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Service;
