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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import {
  HiChevronDown,
  HiOutlineMail,
  HiChevronUp,
  HiOutlineCurrencyDollar,
  HiBriefcase,
} from 'react-icons/hi';

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
import { FaTrash } from 'react-icons/fa6';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
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
function Cart() {
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
                  Giỏ hàng của tôi
                </Text>
              </Flex>
              <TableContainer
                border='1px'
                borderColor='#D7D7D7'
                roundedBottom='20px'
                py='24px'
                px='12px'
              >
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Tên dịch vụ
                      </Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Đơn giá (VND)
                      </Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Số lượng
                      </Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Số tiền (VND)
                      </Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Thao tác
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Checkbox size='lg'></Checkbox>
                      </Td>
                      <Td fontSize='14px' fontWeight='600' lineHeight='24px'>
                        UNI MAX TRIAL
                      </Td>
                      <Td fontSize='14px' fontWeight='600' lineHeight='24px'>
                        2.887.500
                      </Td>
                      <Td>
                        <Flex gap='8px' fontSize='24px' alignItems='center'>
                          <Box cursor='pointer' color='#D7D7D7'>
                            <AiFillPlusSquare />
                          </Box>
                          <Text fontSize='14px'>1</Text>
                          <Box cursor='pointer' color='#D7D7D7'>
                            <AiFillMinusSquare />
                          </Box>
                        </Flex>
                      </Td>
                      <Td fontSize='14px' fontWeight='600' lineHeight='24px' color='#4881FC'>
                        2.887.500
                      </Td>
                      <Td>
                        <Box fontSize='24px' color='#E10000'>
                          <FaTrash />
                        </Box>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
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
                  Thông tin đơn hàng
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
                <Flex justifyContent='space-between'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Tổng giá trị đơn hàng
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    0 VND
                  </Text>
                </Flex>
                <Box borderBottom='1px solid #D7D7D7'></Box>
                <Flex justifyContent='space-between'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Tổng tiền chưa bao gồm VAT
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    0 VND
                  </Text>
                </Flex>
                <Box borderBottom='1px solid #D7D7D7'></Box>
                <Flex justifyContent='space-between'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    VAT (8%)
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    0 VND
                  </Text>
                </Flex>
                <Box borderBottom='1px solid #D7D7D7'></Box>
                <Flex justifyContent='space-between'>
                  <Stack gap='0px'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Tổng giá trị đơn hàng
                    </Text>
                    <Text fontSize='12px' fontWeight='400' lineHeight='20px'>
                      (Đã bao gồm VAT)
                    </Text>
                  </Stack>

                  <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
                    0 VND
                  </Text>
                </Flex>
                <Flex justifyContent='space-between'>
                  <Checkbox size='lg'>
                    <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                      Tôi đồng ý với các{' '}
                      <Text as='span' color='#E10000'>
                        Điều khoản
                      </Text>{' '}
                      của UniWork.
                    </Text>
                  </Checkbox>
                </Flex>
                <Flex
                  justifyContent='center'
                  alignItems='center'
                  color='#FFFFFF'
                  bg='#323541'
                  rounded='20px'
                  mt='20px'
                  py='8px'
                  px='12px'
                  fontSize='16px'
                  cursor='pointer'
                >
                  Tạo đơn hàng
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Cart;
