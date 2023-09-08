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
import EmployerHeader from '../../components/layout/employer/header';
import { useState } from 'react';
import StatusFrame from '../../components/layout/admin/statusFrame';
import DropDownStatus from '../../components/layout/admin/dropDownStatus';
import { FaCheckCircle } from 'react-icons/fa';
const menuData = {
  jobType: ['Shipper', 'Worker', 'Khác', '...'],
  scale: ['10-20', '25-90', '100-200', '...'],
  gender: ['Nam', 'Nữ'],
};
function report() {
  return (
    <Stack gap='26px'>
      <EmployerHeader />
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
                  <Input
                    p='24px 20px'
                    placeholder='Mức lương'
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                  ></Input>
                  <Stack gap='8px' p='0px'>
                    <Text fontSize='16px' fontWeight='700' lineHeight='24px'>
                      Loại báo cáo
                    </Text>
                    <DropDown data={menuData.jobType} />
                  </Stack>
                </Stack>
                <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                  <Text fontSize='16px' fontWeight='700' lineHeight='24px'>
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
                <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                  <Text fontSize='16px' fontWeight='700' lineHeight='24px'>
                    Tài liệu chứng minh
                  </Text>
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
                      <Box bg='#323541' w='40px' h='40px'></Box>
                      <Text
                        fontSize='16px'
                        fontWeight='700'
                        lineHeight='20px'
                        textAlign='center'
                        color='#323541'
                      >
                        Kéo tệp của bạn vào đây hoặc bấm để tải lên Cho phép upload tối đa 2 file và
                        dung lượng mỗi file không vượt quá 5MB. (Hỗ trợ tải lên file: JPEG, PNG,
                        PDF, BMP)
                      </Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Stack>
            </GridItem>
            <Flex
              justifyContent='center'
              alignItems='center'
              color='white'
              bg='#323541'
              rounded='20px'
              w='305px'
              mt='20px'
              py='8px'
              px='12px'
              fontSize='16px'
              cursor='pointer'
            >
              <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                Lưu
              </Text>
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
                  Nếu có anh/chị gặp phải vấn đề vui lòng liên hệ theo thông tin bên dưới để nhận
                  trợ giúp.
                </Text>
                <Flex flex='1 0 0' alignItems='center' justifyContent='space-between'>
                  <Stack gap='20px' alignItems='center'>
                    <Flex gap='12px' alignItems='center'>
                      <Box fontSize='24px'>
                        <FiPhone />
                      </Box>
                      <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                        0827 168 123
                      </Text>
                    </Flex>
                    <Flex gap='12px' alignItems='center'>
                      <Box fontSize='24px'>
                        <FiPhone />
                      </Box>
                      <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                        0339 168 123
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack gap='20px' alignItems='flex-start'>
                    <Flex gap='12px' alignItems='flex-start'>
                      <Box fontSize='24px'>
                        <FiPhone />
                      </Box>
                      <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                        uniwork@gmail.com
                      </Text>
                    </Flex>
                    <Flex gap='12px' alignItems='flex-start'>
                      <Box fontSize='24px'>
                        <FiPhone />
                      </Box>
                      <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                        Người liên hệ
                      </Text>
                    </Flex>
                  </Stack>
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
}

export default report;
