import { Box, Flex, Button, Text, Input, Stack, Checkbox, Grid, GridItem } from '@chakra-ui/react';
import { HiChevronRight, HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { LuBellDot } from 'react-icons/lu';
import { IoPersonCircle } from 'react-icons/io5';
import AdminHeader from '../../components/layout/admin/header';
import { BsExclamationCircle, BsCalendar4, BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';
import PdfImage from '../../public/static/images/pdf.png';

function UserProfileStudent() {
  const profile = {
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
  return (
    <div ml='316px'>
      {/*Header*/}

      <AdminHeader />
      {/*Profile Content*/}

      <Grid templateColumns='repeat(3, 1fr)' h='90vh'>
        <GridItem colSpan='2' border='1px' borderColor='#D7D7D7'>
          {/*Left */}
          <Grid templateColumns='repeat(2, 1fr)' gap={6} px='16px' py='24px'>
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
                  CV{' '}
                  <Text as='span' fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Link: CV-My IT CV
                  </Text>
                </Text>
              </Flex>
              <Stack justifyContent='center' alignItems='center'>
                <Box>
                  <Image src={PdfImage} objectFit='fill'></Image>
                </Box>
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
                  >
                    <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                      Tải xuống
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
                  >
                    Xem online
                  </Flex>
                </Flex>
              </Stack>
            </GridItem>
          </Grid>
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
              <Flex
                justifyContent='center'
                alignItems='center'
                bg='#323541'
                color='white'
                rounded='20px'
                py='8px'
                px='12px'
                fontSize='16px'
                gap='20px'
              >
                <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                  Chỉnh sửa thông tin
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </div>
  );
}

export default UserProfileStudent;
