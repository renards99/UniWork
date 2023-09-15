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
import AdminPage from '.';
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
function isStringEmpty(str) {
  return str.length === 0;
}
function CandidateDetails() {
  const profile = {
    CV: PdfImage,
    university: 'FPT University',
    specialized: 'Kỹ Thuật Phần Mềm',
    time: '30/08/2017 - 31/12/2021',
    experience: 'FPT Software',
    position: 'Full Stack Developer',
    jobTime: '30/08/2020 đến nay',
    description:
      'Tôi là một trí tuệ nhân tạo được gọi là ChatGPT. Tôi được phát triển bởi OpenAI và dựa trên kiến trúc GPT-3.5. Tôi có khả năng đọc, viết và trả lời câu hỏi trên nhiều chủ đề khác nhau. ',
    email: 'huy.com.hg@gmail.com',
    phone: ' 091234567',
    birthDate: '10/10/1999',
    male: true,
  };
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [action, setAction] = useState(1);

  return (
    <Box>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size='xl'>
        <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
        {action == 1 ? (
          <ModalContent textAlign='center' alignItems='center' p='24px 24px 28px 24px'>
            <ModalHeader fontSize='24px' fontWeight='800' lineHeight='32px'>
              Bạn có chắc sẽ chấp nhận ứng viên này?
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Sau khi ứng viên qua được phần CV UniWork sẽ tự động gửi mail thông báo cho ứng viên
                về tình trạng ứng tuyển
              </Text>
            </ModalBody>

            <ModalFooter>
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
                  onClick={onClose}
                >
                  Hủy
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
                  onClick={onClose}
                >
                  <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                    Chấp thuận
                  </Text>
                </Flex>
              </Flex>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent textAlign='center' alignItems='center' p='24px 24px 28px 24px'>
            <ModalHeader fontSize='24px' fontWeight='800' lineHeight='32px'>
              Bạn có chắc sẽ từ chối ứng viên này?
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Sau khi từ chối ứng viên UniWork sẽ tự động gửi mail thông báo cho ứng viên về tình
                trạng ứng tuyển
              </Text>
            </ModalBody>

            <ModalFooter>
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
                  onClick={onClose}
                >
                  Hủy
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
                  onClick={onClose}
                >
                  <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                    Từ chối
                  </Text>
                </Flex>
              </Flex>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
      <EmployerHeader />

      <Grid templateColumns='repeat(3, 1fr)' h='90vh'>
        <GridItem colSpan='2' border='1px' borderColor='#D7D7D7' px='16px' py='24px'>
          {/*Left */}
          <DropDownStatus data={menuData.status} />
          <Box my='20px'>
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
                Bài ứng tuyển
              </Text>
            </Flex>
            <Stack
              p='24px'
              justifyContent='center'
              gap='12px'
              roundedBottom='20px'
              border='1px'
              borderColor='#D7D7D7'
            >
              <Flex
                px='12px'
                py='16px'
                alignItems='flex-start'
                gap='38px'
                rounded='12px'
                border='1px'
                borderColor='#D7D7D7'
                _hover={{ bgColor: '#1311311A' }}
                transition='0.3s'
              >
                <Box flexShrink='0'>
                  <Image src={PostImage} width='100' height='100'></Image>
                </Box>
                <Stack
                  justifyContent='space-between'
                  flex='1 0 0'
                  alignSelf='stretch'
                  alignItems='flex-start'
                  gap='20px'
                >
                  <Flex
                    alignItems='flex-start'
                    alignSelf='stretch'
                    justifyContent='space-between'
                    gap='4px'
                  >
                    <Stack alignItems='flex-start'>
                      <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                        NHÂN VIÊN KẾ TOÁN - 1 NĂM KINH NGHIỆM THU NHẬP 12TR-18TR
                      </Text>
                      <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                        CÔNG TY CỔ PHẦN MODERN LIGHT VIỆT NAM
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex gap='8px'>
                    <Flex py='2px' px='8px' alignItems='flex-start' bg='#D7D7D7' rounded='4px'>
                      <Text fontSize='12px' fontWeight='500' lineHeight='20px' color='#323541'>
                        Hà nội
                      </Text>
                    </Flex>
                    <Flex py='2px' px='8px' alignItems='flex-start' bg='#D7D7D7' rounded='4px'>
                      <Text fontSize='12px' fontWeight='500' lineHeight='20px' color='#323541'>
                        Còn 12 ngày để ứng tuyển
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
              </Flex>
            </Stack>
          </Box>
          <Box>
            {isStringEmpty(profile.CV) ? (
              <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem border='1px' borderColor='#D7D7D7' rounded='12px'>
                  <Stack pt='16px' pb='20px' px='20px' gap='12px'>
                    <Text fontSize='20px' fontWeight='600' lineHeight='28px' letterSpacing='0.2px'>
                      Học vấn
                    </Text>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      {profile.university}
                    </Text>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px' color='#727272'>
                      Chuyên ngành: {profile.specialized}
                    </Text>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px' color='#727272'>
                      Thời gian: {profile.jobTime}
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem border='1px' borderColor='#D7D7D7' rounded='12px'>
                  <Stack pt='16px' pb='20px' px='20px' gap='12px'>
                    <Text fontSize='20px' fontWeight='600' lineHeight='28px' letterSpacing='0.2px'>
                      Kinh Nghiệm
                    </Text>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      {profile.experience}
                    </Text>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px' color='#727272'>
                      Vị Trí: {profile.position}
                    </Text>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px' color='#727272'>
                      Thời gian: {profile.time}
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem colSpan='2' border='1px' borderColor='#D7D7D7' rounded='xl'>
                  <Stack pt='16px' pb='20px' px='20px' gap='12px'>
                    <Text fontSize='20px' fontWeight='600' lineHeight='28px' letterSpacing='0.2px'>
                      Mô tả{' '}
                    </Text>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px' color='#727272'>
                      {profile.description}
                    </Text>
                  </Stack>
                </GridItem>
              </Grid>
            ) : (
              <Box>
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
                    CV{' '}
                    <Text as='span' fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Link: CV-My IT CV
                    </Text>
                  </Text>
                </Flex>
                <Stack justifyContent='center' alignItems='center'>
                  <Box>
                    <Image src={profile.CV} objectFit='fill'></Image>
                  </Box>
                </Stack>
              </Box>
            )}
            <Flex gap='20px'>
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
                onClick={() => {
                  setAction(1), onOpen();
                }}
              >
                <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                  Chấp thuận
                </Text>
              </Flex>
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
                onClick={() => {
                  setAction(2), onOpen();
                }}
              >
                Từ chối
              </Flex>
            </Flex>
          </Box>
        </GridItem>
        {/*Right*/}
        <GridItem border='1px' borderColor='#D7D7D7'>
          <Stack py='18px' px='80px'>
            <Flex justifyContent='flex-end' fontSize='24px'>
              <BsExclamationCircle />
            </Flex>
            <Stack gap='40px'>
              <Stack p='12px' justifyContent='center' alignItems='center' fontWeight='semibold'>
                <Box overflow='hidden' rounded='full'>
                  <Image src={TempAvatar} width='160' height='160'></Image>
                </Box>
                <Text fontSize='24px' fontWeight='800' lineHeight='32px'>
                  Nguyen Van A
                </Text>
                <Text fontSize='20px' fontWeight='600' lineHeight='28px' letterSpacing='0.2px'>
                  Ứng Viên
                </Text>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                  Ngày đăng ký:{' '}
                  <Text as='span' fontSize='14px' fontWeight='500' lineHeight='24px'>
                    11/11/2023
                  </Text>
                </Text>
              </Stack>
              <Stack>
                <Flex gap='12px' alignItems='center'>
                  <Box w='4px' bg='#323541' height='28px' rounded='20px'></Box>
                  <Text fontSize='21px' fontWeight='bold'>
                    Thông tin người dùng
                  </Text>
                </Flex>
              </Stack>

              <Stack
                borderColor='#323541'
                border='1px'
                rounded='12px'
                py='20px'
                px='28px'
                alignItems='flex-start'
                gap='16px'
              >
                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>
                    <HiOutlineMail />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Email: {profile.email}
                  </Text>
                </Flex>
                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>
                    <FiPhone />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Điện thoại: {profile.phone}
                  </Text>
                </Flex>
                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>
                    <BsCalendar4 />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Ngày sinh: {profile.birthDate}
                  </Text>
                </Flex>
                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>{profile.male ? <BsGenderMale /> : <BsGenderFemale />}</Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Giới tính: {profile.male ? 'Nam' : 'Nữ'}
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CandidateDetails;
