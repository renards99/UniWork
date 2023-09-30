import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';
import EmployerHeader from '../../components/layout/employer/header';
import { useEffect, useState } from 'react';
import StatusFrame from '../../components/layout/admin/statusFrame';
import DropDownStatus from '../../components/layout/admin/dropDownStatus';
import PostImage from '../../public/static/images/applicationPost.png';
import PdfImage from '../../public/static/images/pdf.png';
import { BsExclamationCircle, BsCalendar4, BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { convertToLocaleDateTime } from '../../helper';
import { useRouter } from 'next/router';
import axios from 'axios';
import PDFViewer from '../../components/pdf';

function isStringEmpty(str) {
  console.log(str);
  return str?.length === 0;
}
function CandidateDetails() {
  const router = useRouter();
  const [profile, setProfile] = useState({});
  // const profile = {
  //   CV: PdfImage,
  //   university: 'FPT University',
  //   specialized: 'Kỹ Thuật Phần Mềm',
  //   time: '30/08/2017 - 31/12/2021',
  //   experience: 'FPT Software',
  //   position: 'Full Stack Developer',
  //   jobTime: '30/08/2020 đến nay',
  //   description:
  //     'Tôi là một trí tuệ nhân tạo được gọi là ChatGPT. Tôi được phát triển bởi OpenAI và dựa trên kiến trúc GPT-3.5. Tôi có khả năng đọc, viết và trả lời câu hỏi trên nhiều chủ đề khác nhau. ',
  //   email: 'huy.com.hg@gmail.com',
  //   phone: ' 091234567',
  //   birthDate: '10/10/1999',
  //   male: true,
  // };
  const [status, setStatus] = useState({});
  const [companyProfile, setCompanyProfile] = useState({});
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

  const handleGetData = async (userId, jobId) => {
    try {
      const [getCandidateDetail, getJobSelected, getStatusJob] = await Promise.all([
        axios.post('http://localhost:5000/student-details', { id: userId }),
        axios.post('http://localhost:5000/job-post/get-job-post-by-id', { id: jobId }),
        axios.post(
          'http://localhost:5000/job-post-application/get-job-post-application-by-candicate-id-and-job-id',
          { user_account_id: userId, job_post_id: jobId },
        ),
      ]);
      if (getCandidateDetail.data.statusCode == 200) {
        const userData = getCandidateDetail.data.data.user_details[0];
        setProfile({
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
          id: userData.id,
          gender: userData.gender == 1 ? 'Nam' : userData.gender == 2 ? 'Nữ' : 'Không yêu cầu',
          job_type: userData.job_type_name,
          facebook_link: userData.facebook_link,
          registration_date: convertToLocaleDateTime(userData.registration_date),
          birthDate: convertToLocaleDateTime(userData.dob),
          short_des: userData.short_des,
        });
      }
      if (getJobSelected.data.statusCode == 200) {
        const data = getJobSelected.data.data[0];
        setCompanyProfile({
          title: data.title,
          job_location: data.job_location,
          company_name: data.company_name,
        });
      }
      if (getStatusJob.data.statusCode == 200) {
        const data = getStatusJob.data.data[0];
        setStatus({
          cv: data?.cv?.includes('localhost:3000') ? null : data?.cv,
          state: data?.state,
        });
      }
    } catch (err) {}
  };

  useEffect(() => {
    const { userId, jobId } = router.query;
    if (userId && jobId) {
      handleGetData(userId, jobId);
    }
  }, [router]);

  const handleProcessCV = async (state) => {
    const { userId, jobId } = router.query;
    if (userId && jobId) {
      try {
        const acceptCv = await axios.post(
          'http://localhost:5000/job-post-application/update-job-post-application',
          { user_account_id: userId, job_post_id: jobId, state: state },
        );
        if (acceptCv.data.statusCode === 200) {
          window.location.href = 'http://localhost:3000/employer/post-list';
          alert('Đã xử lí cv');
          onClose();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Box ml='316px'>
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
                  onClick={() => handleProcessCV(1)}
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
                  onClick={() => handleProcessCV(2)}
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
                        {companyProfile?.title}
                      </Text>
                      <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                        {companyProfile?.company_name}
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex gap='8px'>
                    <Flex py='2px' px='8px' alignItems='flex-start' bg='#D7D7D7' rounded='4px'>
                      <Text fontSize='12px' fontWeight='500' lineHeight='20px' color='#323541'>
                        {companyProfile?.job_location}
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
            {!status?.cv ? (
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
                      {profile.short_des}
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
                    <PDFViewer url={status?.cv} />
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
                  <img
                    src={profile?.image}
                    width='100'
                    height='100'
                    style={{ borderRadius: '50%', width: '160px', height: '160px' }}
                  />
                </Box>
                <Text fontSize='24px' fontWeight='800' lineHeight='32px'>
                  {profile?.full_name}
                </Text>
                <Text fontSize='20px' fontWeight='600' lineHeight='28px' letterSpacing='0.2px'>
                  {profile?.role}
                </Text>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                  Ngày đăng ký:{' '}
                  <Text as='span' fontSize='14px' fontWeight='500' lineHeight='24px'>
                    {profile?.registration_date}
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
                    Giới tính: {profile.gender}
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
