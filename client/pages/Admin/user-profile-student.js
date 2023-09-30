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
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { convertToLocaleDateTime, totalPriceItemInCart } from '../../helper';
import axios from 'axios';

const BACK_END_PORT = 'http://localhost:5000';

function UserProfileStudent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [eProfile, setEProfile] = useState({});
  const router = useRouter();
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

  const getUserAccount = async (id) => {
    try {
      const getUserAccount = await axios.post(`http://localhost:5000/account-details`, {
        id,
      });
      if (getUserAccount.data.statusCode == 200) {
        const userData = getUserAccount.data.data.user_details[0];
        setEProfile({
          role:
            userData.role == 1
              ? 'Quản trị viên'
              : userData.role == 2
              ? 'Nhà tuyển dụng'
              : 'Ứng viên',
          email: userData.email,
          phone: userData.mobile_number,
          full_name: userData.full_name,
          image: userData.user_image,
          gender: userData.gender,
          id: userData.id,
          gender: userData.gender == 1 ? 'Nam' : userData.gender == 2 ? 'Nữ' : 'Không yêu cầu',
          job_type: userData.job_type_name,
          facebook_link: userData.facebook_link,
          subScriptionDate: convertToLocaleDateTime(userData.registration_date),
          dob: convertToLocaleDateTime(userData.dob),

          isVerified: userData.is_verified,
          is_banned: userData.is_banned,

        });
        handleGetJobByCompany(userData.company_id);
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getUserAccount(id);
    }
  }, [router]);
  const handleBan = async () => {
    const fullName = JSON.parse(localStorage.getItem('user'))?.full_name;
    const userId = JSON.parse(localStorage.getItem('user'))?.id;
    const banResponse = await axios.put(`${BACK_END_PORT}/ban-user`, {
      id: eProfile.id,
      is_banned: 1,
    });
    if (banResponse.data.statusCode == 200) {
      alert(`ban user successfully`);
      window.location.href = 'http://localhost:3000/admin/account-manager';
    }
    const log = await axios.post(`${BACK_END_PORT}/user-log/create-user-log`, {
      user_account_id: userId,
      description: `Quản trị viên ${fullName} đã cấm người dùng: ${eProfile.email} -id: ${eProfile.id}`,
    });
  };
  const handleUnban = async () => {
    const unbanResponse = await axios.put(`${BACK_END_PORT}/ban-user`, {
      id: eProfile.id,
      is_banned: 0,
    });
    if (unbanResponse.data.statusCode == 200) {
      alert(`unban user successfully`);
      window.location.href = 'http://localhost:3000/admin/account-manager';
    }
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
            {/* <GridItem border='1px' borderColor='#D7D7D7' rounded='12px'>
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
            </GridItem> */}
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
                  {eProfile.is_banned == 0 ? (
                    <Flex
                      onClick={toggleModal}
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
                        Cấm người dùng
                      </Text>
                    </Flex>
                  ) : (
                    <Flex
                      onClick={toggleModal}
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
                        Bỏ cấm
                      </Text>
                    </Flex>
                  )}
                </Flex>
                <>
                  {isModalOpen && (
                    <Box
                      position='fixed'
                      top='0'
                      left='0'
                      width='100%'
                      height='100%'
                      backgroundColor='rgba(0, 0, 0, 0.5)'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                      zIndex='1000'
                    >
                      <Box backgroundColor='#323541' padding='20px' borderRadius='12px'>
                        <Text color='white' fontSize='20px' mb='20px'>
                          {eProfile.is_banned == 0
                            ? 'Bạn có chắc muốn cấm tài khoản này?'
                            : 'Bạn có chắc muốn bỏ cấm tài khoản này?'}
                        </Text>
                        <Flex gap='20px' justifyContent='center' alignItems='center'>
                          <Flex
                            onClick={() => {
                              eProfile.is_banned == 0 ? handleBan() : handleUnban();
                              setIsModalOpen(false);
                            }}
                            justifyContent='center'
                            alignItems='center'
                            color='white'
                            bg='#FF5733'
                            rounded='20px'
                            w='100px'
                            py='8px'
                            px='12px'
                            fontSize='16px'
                            cursor='pointer'
                          >
                            <Text fontSize='14px' fontWeight='600'>
                              Xác nhận
                            </Text>
                          </Flex>
                          <Flex
                            onClick={toggleModal}
                            justifyContent='center'
                            alignItems='center'
                            color='#323541'
                            bg='white'
                            rounded='20px'
                            w='100px'
                            py='8px'
                            px='12px'
                            fontSize='16px'
                            cursor='pointer'
                            border='1px solid #323541'
                          >
                            <Text fontSize='14px' fontWeight='600'>
                              Hủy
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                    </Box>
                  )}

                  <Stack gap='0px' w='930px'>
                    {/*... rest of your code */}
                  </Stack>
                </>
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
                  <img
                    src={eProfile.image}
                    width='160'
                    height='160'
                    style={{ borderRadius: '50%', height: '160px' }}
                  />
                </Box>
                <Text fontSize='24px' fontWeight='800' lineHeight='32px'>
                  {eProfile.full_name}
                </Text>
                <Text fontSize='20px' fontWeight='600' lineHeight='28px' letterSpacing='0.2px'>
                  {eProfile.role}
                </Text>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                  Ngày đăng ký:{' '}
                  <Text as='span' fontSize='14px' fontWeight='500' lineHeight='24px'>
                    {eProfile.subScriptionDate}
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
                    Email: {eProfile.email}
                  </Text>
                </Flex>
                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>
                    <FiPhone />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Điện thoại: {eProfile.mobile_number}
                  </Text>
                </Flex>
                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>
                    <BsCalendar4 />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Ngày sinh: {eProfile.dob}
                  </Text>
                </Flex>
                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>{profile.male ? <BsGenderMale /> : <BsGenderFemale />}</Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Giới tính: {eProfile.gender}
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </div>
  );
}

export default UserProfileStudent;
