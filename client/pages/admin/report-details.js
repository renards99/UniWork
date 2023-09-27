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
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import {
  HiChevronDown,
  HiOutlineMail,
  HiChevronUp,
  HiOutlineCurrencyDollar,
  HiBriefcase,
} from 'react-icons/hi';
import DropDown from '../../components/layout/admin/dropDown';
import { HiOutlineMapPin, HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { GiPlayerTime } from 'react-icons/gi';
import { LiaNewspaperSolid } from 'react-icons/lia';
import {
  BsExclamationCircle,
  BsGlobe,
  BsFillPersonPlusFill,
  BsPersonVcardFill,
  BsGenderAmbiguous,
} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import AdminPage from '.';
import DatePicker from '../../components/layout/admin/datePicker';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';

import { useState } from 'react';
import StatusFrame from '../../components/layout/admin/statusFrame';
import DropDownStatus from '../../components/layout/admin/dropDownStatus';
import { FaCheckCircle } from 'react-icons/fa';
import AdminHeader from '../../components/layout/admin/header';
const menuData = {
  jobType: ['Shipper', 'Worker', 'Khác', '...'],
  scale: ['10-20', '25-90', '100-200', '...'],
  gender: ['Nam', 'Nữ'],
};
const reportData = {
  type: 'something',
  file: '/static/images/license.png',
};
function report() {
  return (
    <Stack gap='26px' ml='312px'>
      <AdminHeader />
      <Grid templateColumns='repeat(3, 1fr)' h='90vh' mt='52px' px='24px'>
        <GridItem colSpan='2'>
          {/*Left */}
          <Stack gap='24px' justifyContent='center' alignItems='center'>
            <GridItem colSpan='2'>
              <Flex
                px='24px'
                pb='8px'
                pt='16px'
                bg='#323541'
                p='12px'
                fontSize='18px'
                roundedTop='12px'
                gap='12px'
                alignItems='flex-start'
              >
                <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Yêu cầu hỗ trợ & báo cáo vi phạm
                </Text>
              </Flex>
              <Stack
                py='24px'
                px='12px'
                justifyContent='space-between'
                gap='20px'
                roundedBottom='20px'
                border='1px'
                borderColor='#D7D7D7'
              >
                <Stack gap='8px' p='0px'>
                  <Text fontSize='16px' fontWeight='700' lineHeight='24px'>
                    Tiêu đề
                  </Text>
                  <Text fontSize='20px' fontWeight='700' lineHeight='28px' letterSpacing='0.2px'>
                    Tình trạng spam đơn của một số Ứng viên
                  </Text>
                  <Stack gap='8px' p='0px'>
                    <Text fontSize='16px' fontWeight='700' lineHeight='24px'>
                      Loại báo cáo
                    </Text>
                    {/* <DropDown data={menuData.jobType} /> */}
                    <Menu matchWidth>
                      <MenuButton
                        _hover='none'
                        _focus={{ bg: 'none' }}
                        _expanded={{ bg: 'none' }}
                        bg='#DEDEDE'
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
                          <Box transition='transform 0.3s ease-in-out' fontSize='24px'>
                            <HiChevronDown />
                          </Box>
                        }
                        isDisabled
                      >
                        <Flex gap='20px'>
                          <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                            {reportData.type}
                          </Text>
                        </Flex>
                      </MenuButton>
                      <MenuList rounded='10px' border='1px solid #323541'></MenuList>
                    </Menu>
                  </Stack>
                </Stack>
                <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                  <Text fontSize='16px' fontWeight='700' lineHeight='24px'>
                    Mô tả
                  </Text>
                  <Stack fontSize='14px' fontWeight='400' lineHeight='24px' ml='16px'>
                    <Text>
                      Hiện tại có một số tài khoản ảo của sinh viên liên tục spam trên bài đăng của
                      tôi user1@gmail.com tranhoangminh_holahola@gmail.com
                      holatrinhthuyhoang@gmail.com
                    </Text>
                    <Stack ml='16px'>
                      <Text>user1@gmail.com</Text>
                      <Text>tranhoangminh_holahola@gmail.com</Text>
                      <Text>holatrinhthuyhoang@gmail.com</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                  <Text fontSize='16px' fontWeight='700' lineHeight='24px'>
                    Tài liệu chứng minh
                  </Text>
                  {reportData.file === null ? (
                    <Flex
                      h='160px'
                      justifyContent='center'
                      alignItems='center'
                      gap='10px'
                      alignSelf='stretch'
                      rounded='12px'
                      bg='#E8E8EB'
                      p='12px 12px 12px 16px'
                    >
                      <Stack justifyContent='center' alignItems='center' gap='8px' flex='1 0 0'>
                        <Image src='/static/images/upload_cloud.png' width='40' height='40'></Image>
                        <Text
                          fontSize='16px'
                          fontWeight='700'
                          lineHeight='20px'
                          textAlign='center'
                          color='#323541'
                        >
                          Hiện tại không có file nào
                        </Text>
                      </Stack>
                    </Flex>
                  ) : (
                    <Box>
                      <Image src={reportData.file} width='530' height='830'></Image>
                    </Box>
                  )}
                </Stack>
              </Stack>
            </GridItem>
            <Flex alignSelf='stretch' gap='24px'>
              {' '}
              <Flex
                justifyContent='center'
                alignItems='center'
                color='white'
                bg='#323541'
                rounded='20px'
                mt='20px'
                width='132px'
                py='8px'
                px='12px'
                fontSize='16px'
                cursor='pointer'
              >
                <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                  Gửi báo cáo
                </Text>
              </Flex>
              <Flex
                justifyContent='center'
                alignItems='center'
                bg='white'
                rounded='20px'
                mt='20px'
                width='132px'
                py='8px'
                px='12px'
                fontSize='16px'
                cursor='pointer'
                border='1px solid #323541'
              >
                <Text color='#323541' fontSize='14px' fontWeight='600' lineHeight='24px'>
                  Bỏ qua
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </GridItem>
        {/*Right*/}
        <GridItem>
          <Stack gap='24px'>
            <Box px='24px'>
              <Flex
                px='24px'
                pb='8px'
                pt='16px'
                bg='#323541'
                p='12px'
                fontSize='18px'
                roundedTop='12px'
                gap='12px'
                alignItems='flex-start'
              >
                <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Hotline CSKH & Hỗ trợ
                </Text>
              </Flex>

              <Stack
                p='24px'
                justifyContent='center'
                gap='16px'
                border='1px'
                borderColor='#D7D7D7'
                roundedBottom='20px'
              >
                <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                  Tài khoản báo cáo: tim.jennings@example.com
                </Text>
                <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                  Ngày báo cáo: 24/02/2023
                </Text>
              </Stack>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
}

export default report;
