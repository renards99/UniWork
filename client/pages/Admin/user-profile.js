import { Box, Flex, Button, Text, Input, Stack, Checkbox, Grid, GridItem } from '@chakra-ui/react';
import { HiChevronRight, HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { LuBellDot } from 'react-icons/lu';
import { IoPersonCircle } from 'react-icons/io5';
import { BsExclamationCircle, BsCalendar4, BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';
import PdfImage from '../../public/static/images/pdf.png';

function UserProfile() {
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
    <div>
      {/*Header*/}

      <Flex
        h='10vh'
        justifyContent='space-between'
        alignItems='center'
        border='1px'
        borderColor='#D7D7D7'
        px='36px'
      >
        <Text fontSize='5xl' fontWeight='bold'>
          Quản lý tài khoản{' '}
          <Text as='span' fontSize='3xl' fontWeight='semibold'>
            {' '}
            &gt; Thông tin tài khoản
          </Text>
        </Text>
        <Flex gap='6'>
          <Flex
            alignItems='center'
            fontSize='24px'
            w='48px'
            h='48px'
            justifyContent='center'
            bg='#E8E8EB'
            p='10px'
            rounded='full'
            textAlign='center'
            cursor='pointer'
          >
            <LuBellDot />
          </Flex>
          <Flex
            h='48px'
            fontSize='24px'
            justifyContent='space-between'
            alignItems='center'
            bg='#E8E8EB'
            p='10px'
            gap='6'
            rounded='full'
            textAlign='center'
            cursor='pointer'
          >
            <IoPersonCircle />
            <Text fontSize='18px' fontWeight='semibold'>
              Administrator
            </Text>
            <HiChevronDown />
          </Flex>
        </Flex>
      </Flex>
      {/*Profile Content*/}

      <Grid templateColumns='repeat(3, 1fr)' h='90vh'>
        <GridItem colSpan='2' border='1px' borderColor='#D7D7D7'>
          {/*Right */}
          <Grid templateColumns='repeat(2, 1fr)' gap={6} px='16px' py='24px'>
            <GridItem border='1px' borderColor='#D7D7D7' rounded='xl'>
              <Stack p='12px'>
                <Text fontSize='21px' fontWeight='bold'>
                  Học vấn
                </Text>
                <Text fontSize='18px' fontWeight='bold'>
                  {profile.university}
                </Text>
                <Text fontSize='16px' fontWeight='semibold' color='#727272'>
                  Chuyên ngành: {profile.specialized}
                </Text>
                <Text fontSize='16px' fontWeight='semibold' color='#727272'>
                  Thời gian: {profile.time}
                </Text>
              </Stack>
            </GridItem>
            <GridItem border='1px' borderColor='#D7D7D7' rounded='xl'>
              <Stack p='12px'>
                <Text fontSize='21px' fontWeight='bold'>
                  Học vấn
                </Text>
                <Text fontSize='18px' fontWeight='bold'>
                  {profile.university}
                </Text>
                <Text fontSize='16px' fontWeight='semibold' color='#727272'>
                  Chuyên ngành: {profile.specialized}
                </Text>
                <Text fontSize='16px' fontWeight='semibold' color='#727272'>
                  Thời gian: {profile.time}
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan='2' border='1px' borderColor='#D7D7D7' rounded='xl'>
              <Stack p='12px'>
                <Text fontSize='21px' fontWeight='bold'>
                  Mô tả{' '}
                </Text>
                <Text fontSize='16px' fontWeight='semibold' color='#727272'>
                  {profile.description}
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan='2' rounded='xl' overflow='hidden'>
              <Box bg='black' p='12px' fontSize='18px'>
                <Text color='white'>CV Link: CV-My IT CV</Text>
              </Box>
              <Stack justifyContent='center' alignItems='center'>
                <Box>
                  <Image src={PdfImage} objectFit='fill'></Image>
                </Box>
                <Button
                  color='white'
                  bg='black'
                  rounded='full'
                  mt='24px'
                  p='18px'
                  fontSize='16px'
                  _hover='none'
                >
                  Tải xuống
                </Button>
              </Stack>
            </GridItem>
          </Grid>
        </GridItem>
        {/*Left*/}
        <GridItem border='1px' borderColor='#D7D7D7'>
          <Stack py='18px' px='80px'>
            <Flex justifyContent='flex-end' fontSize='24px'>
              <BsExclamationCircle />
            </Flex>
            <Stack gap='6'>
              <Stack p='12px' justifyContent='center' alignItems='center' fontWeight='semibold'>
                <Box overflow='hidden' rounded='full'>
                  <Image src={TempAvatar} width='160' height='160'></Image>
                </Box>
                <Text fontSize='24px' fontWeight='bold'>
                  Nguyen Van A
                </Text>
                <Text fontSize='18px'>Ứng Viên</Text>
                <Text fontSize='16px'>
                  Ngày đăng ký:{' '}
                  <Text as='span' fontSize='14px'>
                    11/11/2023
                  </Text>
                </Text>
              </Stack>
              <Stack>
                <Flex gap='6'>
                  <Box border='2px' rounded='full'></Box>
                  <Text fontSize='21px' fontWeight='bold'>
                    Thông tin người dùng
                  </Text>
                </Flex>
              </Stack>
              <Stack>
                <Stack
                  border='1px'
                  color='black'
                  rounded='xl'
                  p='12px'
                  fontSize='5xl'
                  fontWeight='semibold'
                >
                  <Flex alignItems='center' gap='4'>
                    <HiOutlineMail />
                    <Text fontSize='18px'>Email: {profile.email}</Text>
                  </Flex>
                  <Flex alignItems='center' gap='4'>
                    <FiPhone />
                    <Text fontSize='18px'>Điện thoại: {profile.phone}</Text>
                  </Flex>
                  <Flex alignItems='center' gap='4'>
                    <BsCalendar4 />
                    <Text fontSize='18px'>Ngày sinh: {profile.birthDate}</Text>
                  </Flex>
                  <Flex alignItems='center' gap='4'>
                    {profile.male ? <BsGenderMale /> : <BsGenderFemale />}
                    <Text fontSize='18px'>Giới tính: {profile.male ? 'Nam' : 'Nữ'}</Text>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
            <Button
              color='white'
              bg='black'
              rounded='full'
              mt='24px'
              p='18px'
              fontSize='16px'
              _hover='none'
            >
              Chỉnh sửa thông tin
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </div>
  );
}

export default UserProfile;
