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
  roles: ['Giám đốc', 'Nhân viên', 'Trợ lý', 'Quản lý', 'Phó phòng', 'Thực tập sinh'],
  workForm: [
    'Bán thời gian - Partime',
    'Toàn thời gian - Fulltime',
    'Làm việc từ xa - Remote',
    'Làm việc văn phòng và làm việc từ xa - Hybird',
  ],
  gender: ['nam', 'nữ', 'không yêu cầu'],
};
function PostUpload() {
  return (
    <Box>
      <EmployerHeader />
      <Grid templateColumns='repeat(3, 1fr)' h='90vh' mt='52px' px='24px'>
        <GridItem colSpan='2'>
          {/*Left */}
          <Stack gap='24px'>
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
                  Đăng tin tuyển dụng
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
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Tiêu đề:
                  </Text>
                  <Input
                    p='24px 20px'
                    placeholder='Tên tiêu đề    '
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                  ></Input>
                </Stack>
                <Stack gap='8px' p='0px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Vị trí:
                  </Text>
                  <Input
                    p='24px 20px'
                    placeholder='Công việc'
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                  ></Input>
                </Stack>
                <Stack gap='8px' p='0px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Mức lương:
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
                </Stack>
                <Flex gap='20px' alignItems='center' alignSelf='stretch'>
                  <Stack gap='8px' p='0px' flex='1 0 0'>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Số lượng tuyển:
                    </Text>
                    <Input
                      p='24px 20px'
                      placeholder='Số lượng tuyển'
                      rounded='12px'
                      border='1px solid #323541'
                      focusBorderColor='none'
                      _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                      fontSize='16px'
                      fontWeight='600px'
                      lineHeight='24px'
                    ></Input>
                  </Stack>
                  <Stack gap='8px' p='0px' flex='1 0 0'>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Lĩnh vực:
                    </Text>
                    <DropDown data={menuData.roles} />
                  </Stack>
                </Flex>
              </Stack>
            </GridItem>
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
                  Chỉ tiêu tuyển dụng
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
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Hình thức làm việc
                  </Text>
                  <DropDown data={menuData.roles} />
                </Stack>
                <Stack gap='8px' p='0px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Giới tính
                  </Text>
                  <DropDown data={menuData.roles} />
                </Stack>

                <Flex gap='20px' alignItems='center' alignSelf='stretch'>
                  <Stack gap='8px' p='0px' flex='1 0 0'>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Địa điểm
                    </Text>
                    <DropDown data={menuData.roles} />
                  </Stack>
                  <Stack gap='8px' p='0px' flex='1 0 0'>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Thời hạn đăng
                    </Text>
                    <Flex>
                      <DatePicker />
                      <Input
                        rounded='0px 12px 12px 0px'
                        p='24px 20px'
                        placeholder='Thời hạn đăng'
                        border='1px solid #323541'
                        focusBorderColor='none'
                        _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                        fontSize='16px'
                        fontWeight='600px'
                        lineHeight='24px'
                      ></Input>
                    </Flex>
                  </Stack>
                </Flex>
              </Stack>
            </GridItem>
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
                  Chỉ tiêu tuyển dụng
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
                <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Mô tả công việc
                  </Text>
                  <Textarea
                    p='24px 20px'
                    placeholder='Bạn hãy điền gì đó vào đây...'
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
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Địa điểm làm việc
                  </Text>
                  <Textarea
                    p='24px 20px'
                    placeholder='Địa điểm văn phòng'
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                    height='120px'
                  ></Textarea>
                </Stack>
              </Stack>
            </GridItem>
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
                  Dịch vụ
                </Text>
              </Flex>
              <RadioGroup>
                <Stack
                  p='24px'
                  justifyContent='center'
                  gap='16px'
                  border='1px'
                  borderColor='#D7D7D7'
                >
                  <Radio size='lg' colorScheme='blackAlpha' value='1'>
                    <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                      Add Label Hot
                    </Text>
                  </Radio>
                  <Box w='full' border='1px solid #BABABA' rounded='12px'></Box>
                  <Radio size='lg' colorScheme='blackAlpha' value='2'>
                    <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                      Add Label Hot
                    </Text>
                  </Radio>
                  <Box w='full' border='1px solid #BABABA' rounded='12px'></Box>
                  <Radio size='lg' colorScheme='blackAlpha' value='3'>
                    <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                      Add Label Hot
                    </Text>
                  </Radio>
                  <Box w='full' border='1px solid #BABABA' rounded='12px'></Box>
                  <Radio size='lg' colorScheme='blackAlpha' value='4'>
                    <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                      Add Label Hot
                    </Text>
                  </Radio>
                  <Box w='full' border='1px solid #BABABA' rounded='12px'></Box>
                  <Radio size='lg' colorScheme='blackAlpha' value='5'>
                    <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                      Add Label Hot
                    </Text>
                  </Radio>
                  <Flex justifyContent='space-between' alignItems='center'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Bài đăng 0 ngày:
                    </Text>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      0đ
                    </Text>
                  </Flex>
                  <Flex justifyContent='space-between' alignItems='center'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Add label Hot:
                    </Text>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      1.000.000đ
                    </Text>
                  </Flex>
                </Stack>
                <Stack
                  p='24px'
                  justifyContent='center'
                  gap='16px'
                  border='1px'
                  borderColor='#D7D7D7'
                  roundedBottom='20px'
                >
                  <Flex justifyContent='space-between' alignItems='center'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Total:
                    </Text>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      1.000.000đ
                    </Text>
                  </Flex>
                </Stack>
              </RadioGroup>
              <Button
                mt='24px'
                w='100%'
                px='24px'
                py='22px'
                backgroundColor={'white'}
                color={'#323541'}
                borderRadius={'20px'}
                fontSize={'14px'}
                fontWeight={'600'}
                lineHeight='24px'
                border='1px solid #323541'
              >
                Xác nhận thanh toán
              </Button>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default PostUpload;
