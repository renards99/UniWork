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
  status: [
    <StatusFrame text='Chưa duyệt' />,
    <StatusFrame text='Đã duyệt' />,
    <StatusFrame text='Không duyệt' />,
    <StatusFrame text='Hết hạn' />,
  ],
};
function postsList() {
  return (
    <Stack gap='26px'>
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
                <Flex p='16px' gap='20px'>
                  <Box w='100px' h='100px' bg='#323541'></Box>
                  <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch'>
                    <Stack gap='4px'>
                      <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                        Nhân viên thiết kế UI/UX (UI/UX Designer)
                      </Text>
                      <Text fontSize='14px' fontWeight='400'>
                        Công ty Cổ phần Công nghệ eUp
                      </Text>
                    </Stack>
                    <StatusFrame text='Chưa duyệt' />
                  </Stack>
                </Flex>
                <Flex p='16px' gap='20px'>
                  <Box w='100px' h='100px' bg='#323541'></Box>
                  <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch'>
                    <Stack gap='4px'>
                      <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                        Nhân viên thiết kế UI/UX (UI/UX Designer)
                      </Text>
                      <Text fontSize='14px' fontWeight='400'>
                        Công ty Cổ phần Công nghệ eUp
                      </Text>
                    </Stack>
                    <StatusFrame text='Chưa duyệt' />
                  </Stack>
                </Flex>
                <Flex p='16px' gap='20px'>
                  <Box w='100px' h='100px' bg='#323541'></Box>
                  <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch'>
                    <Stack gap='4px'>
                      <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                        Nhân viên thiết kế UI/UX (UI/UX Designer)
                      </Text>
                      <Text fontSize='14px' fontWeight='400'>
                        Công ty Cổ phần Công nghệ eUp
                      </Text>
                    </Stack>
                    <StatusFrame text='Chưa duyệt' />
                  </Stack>
                </Flex>
                <Flex p='16px' gap='20px'>
                  <Box w='100px' h='100px' bg='#323541'></Box>
                  <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch'>
                    <Stack gap='4px'>
                      <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                        Nhân viên thiết kế UI/UX (UI/UX Designer)
                      </Text>
                      <Text fontSize='14px' fontWeight='400'>
                        Công ty Cổ phần Công nghệ eUp
                      </Text>
                    </Stack>
                    <StatusFrame text='Chưa duyệt' />
                  </Stack>
                </Flex>
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
                  Ứng viên tuyển gần đây
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
                <Flex p='16px' gap='20px'>
                  <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
                  <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch' gap='0px'>
                    <Flex justifyContent='space-between'>
                      <Stack gap='4px'>
                        <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                          Nguyễn văn A
                        </Text>
                        <Text fontSize='14px' fontWeight='400'>
                          Java-Dev
                        </Text>
                      </Stack>
                      <Text fontSize='14px' fontWeight='600'>
                        17/08/2021
                      </Text>
                    </Flex>
                    <StatusFrame text='Chưa duyệt' />
                  </Stack>
                </Flex>
                <Flex p='16px' gap='20px'>
                  <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
                  <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch' gap='0px'>
                    <Flex justifyContent='space-between'>
                      <Stack gap='4px'>
                        <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                          Nguyễn văn A
                        </Text>
                        <Text fontSize='14px' fontWeight='400'>
                          Java-Dev
                        </Text>
                      </Stack>
                      <Text fontSize='14px' fontWeight='600'>
                        17/08/2021
                      </Text>
                    </Flex>
                    <StatusFrame text='Chưa duyệt' />
                  </Stack>
                </Flex>
                <Flex p='16px' gap='20px'>
                  <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
                  <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch' gap='0px'>
                    <Flex justifyContent='space-between'>
                      <Stack gap='4px'>
                        <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                          Nguyễn văn A
                        </Text>
                        <Text fontSize='14px' fontWeight='400'>
                          Java-Dev
                        </Text>
                      </Stack>
                      <Text fontSize='14px' fontWeight='600'>
                        17/08/2021
                      </Text>
                    </Flex>
                    <StatusFrame text='Chưa duyệt' />
                  </Stack>
                </Flex>
                <Flex p='16px' gap='20px'>
                  <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
                  <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch' gap='0px'>
                    <Flex justifyContent='space-between'>
                      <Stack gap='4px'>
                        <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                          Nguyễn văn A
                        </Text>
                        <Text fontSize='14px' fontWeight='400'>
                          Java-Dev
                        </Text>
                      </Stack>
                      <Text fontSize='14px' fontWeight='600'>
                        17/08/2021
                      </Text>
                    </Flex>
                    <StatusFrame text='Chưa duyệt' />
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

export default postsList;
