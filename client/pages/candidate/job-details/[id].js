import { BsChevronDown } from 'react-icons/bs';
import {
  Box,
  Input,
  Button,
  Icon,
  Text,
  Stack,
  Flex,
  Radio,
  RadioGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Textarea,
} from '@chakra-ui/react';
import { MdOpenInNew } from 'react-icons/md';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { BsBuilding } from 'react-icons/bs';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import CandidateHeader from '../../../components/layout/candidate/header';
import axios from 'axios';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';

function JobDetails({ data, BACK_END_PORT }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [radioValue, setRadioValue] = useState('1');
  const handleRadioClick = (index) => {
    setRadioValue(index);
  };
  const menuData = {
    roles: ['Giám đốc', 'Nhân viên', 'Trợ lý', 'Quản lý', 'Phó phòng', 'Thực tập sinh'],
    workForm: ['Bán thời gian - Partime', 'Toàn thời gian - Fulltime'],
    gender: ['nam', 'nữ', 'không yêu cầu'],
    experience: ['Dưới 1 năm', '1 năm', '2 năm', '3 năm', '4 năm', '5 năm', 'Trên 5 năm'],
  };

  const handleSubmitCv = async () => {
    // console.log(radioValue);
    // return
    try {
      if (localStorage.getItem('user')) {
        const userId = JSON.parse(localStorage.getItem('user'))?.id;
        let cvRadio3;
        if (radioValue == 3) {
          const formData = new FormData();
          formData.append('cv_file', myCV);
          const uploadCV = await axios.post('http://localhost:5000/upload-cv', formData);
          if (uploadCV.data.statusCode === 200) {
            cvRadio3 = uploadCV.data.data.cv_file;
          }
        }
        if (userId) {
          const submitData = {
            user_account_id: userId,
            job_post_id: data.id,
            state: 0,
            cv:
              radioValue == 1
                ? `http://localhost:3000/candidate/student-profile?id=${userId}`
                : radioValue == 2
                ? cv
                : cvRadio3,
          };
          const submitCV = await axios.post(
            `${BACK_END_PORT}/job-post-application/create-job-post-application`,
            submitData,
          );
          if (submitCV.data.statusCode === 200) {
            alert(submitCV.data.data);
            onClose()
          } else {
            alert(submitCV.data.data);
          }
        }
      }
    } catch (error) {
      alert('Ứng tuyển thất bại');
    }
  };

  const fakeData = [
    {
      id: 1,
      title: 'Nhân viên thiết kế chuyên viên tư vấn thiết kế lĩnh vực kiến trúc',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI GLOBAL ',
      locations: 'Hà Nội, HCM',
      remainingDays: 'Còn 30 ngày để ứng tuyển',
      time: 'Cập nhật 2h trước',
      salary: '25-30TRIỆU',
      tags: [''],
    },
    {
      id: 2,
      title: 'Nhân viên thiết kế chuyên viên tư vấn thiết kế lĩnh vực kiến trúc',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI GLOBAL ',
      locations: 'Hà Nội, HCM',
      remainingDays: 'Còn 30 ngày để ứng tuyển',
      time: 'Cập nhật 2h trước',
      salary: '25-30TRIỆU',
      tags: [
        'thu nhập trợ cấp',
        'được cấp thiết bị làm việc',
        'Thử việc 100% lương',
        'thưởng nghỉ lễ , tết',
      ],
    },
  ];
  const locations = ['Hà Giang', 'Tuyên Quang', 'Hà Nội', '...'];
  const experiences = ['Không Kinh Nghiệm', 'Trên 1 năm', 'Trên 2 năm', '...'];
  const salaries = ['1-5 triệu', '5-7 triệu', '20 triệu', '...'];

  const [cv, setCv] = useState('');

  const handleGetCvUser = async (id) => {
    try {
      const getCv = await axios.post(`http://localhost:5000/student/get-student-by-id`, { id });
      if (getCv.data.statusCode === 200) {
        setCv(getCv.data.data.cv);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      let userData = JSON.parse(user);
      if (userData) {
        const { id } = userData;
        handleGetCvUser(id);
      }
    }
  }, []);

  const [myCV, setMyCV] = useState();

  const HomeContent = (
    <div>
      <CandidateHeader />
      <Stack bg='#333333' justifyContent='center' alignItems='center'>
        <Flex bg='transparent' pt='50px' gap='0px'>
          <Input
            focusBorderColor='#F98820'
            borderColor='transparent'
            _placeholder={{ color: '#737B7D' }}
            placeholder='Mô tả công việc'
            bg='gray.100'
            padding='16px'
            fontSize='2xl'
            fontWeight='medium'
            boxShadow='md'
            rounded='none'
            roundedLeft='xl'
            w='800px'
            h='60px'
          />

          <Flex gap='40px'>
            <Select
              focusBorderColor='#F98820'
              borderColor='transparent'
              borderLeft='2px solid #CBCBCB'
              icon={<Icon as={BsChevronDown} />}
              className='unw-homepage-select'
              bg='gray.100'
              w='160px'
              h='60px'
              rounded='none'
              roundedRight='xl'
              fontSize='16px'
            >
              <option selected hidden disabled>
                Địa Điểm
              </option>
              {locations.map((location, index) => {
                return <option key={index}>{location}</option>;
              })}
            </Select>
            <Select
              focusBorderColor='#F98820'
              borderColor='transparent'
              icon={<Icon as={BsChevronDown} />}
              className='unw-homepage-select'
              bg='gray.100'
              rounded='xl'
              w='160px'
              h='60px'
              fontSize='16px'
            >
              <option selected hidden disabled>
                Kinh Nghiệm
              </option>
              {experiences.map((exp, index) => {
                return <option key={index}>{exp}</option>;
              })}
            </Select>
            <Select
              focusBorderColor='#F98820'
              borderColor='transparent'
              icon={<Icon as={BsChevronDown} />}
              className='unw-homepage-select'
              bg='gray.100'
              rounded='xl'
              w='160px'
              h='60px'
              fontSize='16px'
            >
              <option selected hidden disabled>
                Mức Lương
              </option>
              {salaries.map((salary, index) => {
                return <option key={index}>{salary}</option>;
              })}
            </Select>
          </Flex>
          <Button
            bg='#F98820'
            textColor='white'
            py='16px'
            px='30px'
            w='160px'
            h='60px'
            ml='24px'
            fontSize='2xl'
          >
            Tìm Kiếm
          </Button>
        </Flex>
        <Stack
          rounded='12px'
          w='1000px'
          bgGradient='linear(to-b, #F98820, transparent)'
          p='24px'
          m='25px'
          justifyContent='center'
          alignItems='center'
          gap='24px'
        >
          <Flex alignSelf='stretch'>
            <Text fontSize='32px' fontWeight='800' lineHeight='40px' color='white'>
              {data.title}
            </Text>
          </Flex>
          <Flex justifyContent='space-between' alignItems='center' alignSelf='stretch'>
            <Flex gap='8px'>
              <Image src='/static/images/icon/coin.svg' width='40' height='40'></Image>
              <Stack gap='0px'>
                <Text fontSize='16px' fontWeight='600' color='white'>
                  Mức lương
                </Text>
                <Text fontSize='16px' fontWeight='800' color='white'>
                  {data.salary}
                </Text>
              </Stack>
            </Flex>
            <Flex gap='8px'>
              <Image src='/static/images/icon/coin.svg' width='40' height='40'></Image>
              <Stack gap='0px'>
                <Text fontSize='16px' fontWeight='600' color='white'>
                  Mức lương
                </Text>
                <Text fontSize='16px' fontWeight='800' color='white'>
                  {data.salary}
                </Text>
              </Stack>
            </Flex>
            <Flex gap='8px'>
              <Image src='/static/images/icon/coin.svg' width='40' height='40'></Image>
              <Stack gap='0px'>
                <Text fontSize='16px' fontWeight='600' color='white'>
                  Mức lương
                </Text>
                <Text fontSize='16px' fontWeight='800' color='white'>
                  {data.salary}
                </Text>
              </Stack>
            </Flex>
          </Flex>
          <Flex
            gap='4px'
            bg='#F8A353'
            justifyContent='center'
            alignItems='center'
            w='670px'
            rounded='12px'
            p='12px'
            cursor='pointer'
            onClick={onOpen}
          >
            <Image src='/static/images/icon/send.svg' width='30' height='30'></Image>
            <Text color='white'>Ứng tuyển ngay</Text>
          </Flex>
        </Stack>
      </Stack>
      <Stack px='80px' py='50px' gap='42px' bg='#F0EAE9'>
        <Flex gap='32px'>
          <Stack gap='32px' flex='1 0 0'>
            <Stack bg='white' p='24px' gap='24px'>
              <Flex borderLeft='4px solid #F1841D' p='12px'>
                <Text fontSize='32px' fontWeight='700' lineHeight='18px'>
                  Chi tiết tin tuyển dụng
                </Text>
              </Flex>
              <Stack>
                <Text fontSize='24px' fontWeight='600'>
                  Mô tả công việc
                </Text>
                <Stack>
                  {data.job_description && typeof data.job_description === 'string'
                    ? data.job_description.split('\n').map((text, index) => (
                        <Text fontSize='14px' fontWeight='500' key={index}>
                          -{' ' + text}
                        </Text>
                      ))
                    : null}
                </Stack>
              </Stack>
              <Stack>
                <Text fontSize='24px' fontWeight='600'>
                  Yêu cầu công việc
                </Text>
                <Stack>
                  <Text fontSize='14px' fontWeight='500'>
                    - Công việc cụ thế sẽ trao đối trực tiếp khi phóng vấn.
                  </Text>
                  <Text fontSize='14px' fontWeight='500'>
                    - Công việc cụ thế sẽ trao đối trực tiếp khi phóng vấn.
                  </Text>
                  <Text fontSize='14px' fontWeight='500'>
                    - Công việc cụ thế sẽ trao đối trực tiếp khi phóng vấn.
                  </Text>
                  <Text fontSize='14px' fontWeight='500'>
                    - Công việc cụ thế sẽ trao đối trực tiếp khi phóng vấn.
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Text fontSize='24px' fontWeight='600'>
                  Địa điểm làm việc
                </Text>
                <Stack>
                  <Text fontSize='14px' fontWeight='500'>
                    - {data.job_location}.
                  </Text>
                </Stack>
                <Text fontSize='14px' fontWeight='500'>
                  Ứng viên nộp hồ sơ ngay dưới đây
                </Text>
              </Stack>
              <Flex
                justifyContent='center'
                alignItems='center'
                bg='#F8A353'
                w='220px'
                rounded='12px'
                cursor='pointer'
                onClick={onOpen}
              >
                <Text fontSize='16px' color='white' fontWeight='700' lineHeight='40px'>
                  Ứng tuyển
                </Text>
              </Flex>
              <Modal isOpen={isOpen} onClose={onClose} isCentered size='5xl'>
                <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
                <ModalContent>
                  <ModalHeader borderBottom='1px solid #818181' fontSize='24px'>
                    Ứng tuyển{' '}
                    <Text as='span' color='#F98820'>
                      {data.title}
                    </Text>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Stack p='24px 24px 32px 24px' justifyContent='center' alignItems='center'>
                      <RadioGroup onChange={setRadioValue} value={radioValue}>
                        <Stack gap='20px' alignSelf='stretch'>
                          <Flex gap='220px'>
                            <Radio
                              size='lg'
                              colorScheme='orange'
                              value='1'
                              border='1px solid black'
                            >
                              Nộp hồ sơ Online{' '}
                              <Text color='#F8A353' as='span'>
                                (
                                <Link
                                  href='http://localhost:3000/candidate/student-profile'
                                  target='_blank'
                                >
                                  Xem
                                </Link>
                                )
                              </Text>
                            </Radio>
                            {cv && (
                              <Radio
                                size='lg'
                                colorScheme='orange'
                                value='2'
                                border='1px solid black'
                              >
                                CV đã tải lên{' '}
                                <Text color='#F8A353' as='span'>
                                  (
                                  <Link href={cv} target={'_blank'}>
                                    Xem
                                  </Link>
                                  )
                                </Text>
                              </Radio>
                            )}
                          </Flex>
                          <Radio size='lg' colorScheme='orange' value='3' border='1px solid black'>
                            CV Tải từ máy tính
                          </Radio>
                        </Stack>
                      </RadioGroup>
                      {radioValue === '1' ? null : radioValue === '3' ? (
                        <Stack gap='8px' alignSelf='stretch'>
                          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                            CV của bạn
                          </Text>
                          <label for='cv' style={{ cursor: 'pointer' }}>
                            <Stack
                              p='12px'
                              justifyContent='center'
                              alignItems='center'
                              gap='0px'
                              alignSelf='stretch'
                              height='160px'
                              bg='#1311311A'
                              rounded='12px'
                            >
                              <Image
                                src='/static/images/upload_cloud.png'
                                width='40'
                                height='40'
                              ></Image>
                              <Input
                                // hidden
                                onChange={(e) => setMyCV(e.target.files[0])}
                                type='file'
                                // display={'none'}
                                id='cv'
                                w='35%'
                              />
                              <Stack
                                justifyContent='center'
                                alignItems='center'
                                fontSize='12px'
                                fontWeight='700'
                                lineHeight='20px'
                                color='#818181'
                              >
                                <Text>Kéo CV của bạn vào đây hoặc bấm để chọn file CV của bạn</Text>
                                <Text>Dung lượng file không vượt quá 5MB.</Text>
                                <Text>(Hỗ trợ tải lên file: PDF)</Text>
                              </Stack>{' '}
                            </Stack>{' '}
                          </label>
                        </Stack>
                      ) : (
                        ''
                      )}
                      <Flex
                        p='12px'
                        w='140px'
                        mt='32px'
                        rounded='12px'
                        bg='#F8A353'
                        justifyContent='center'
                        alignItems='center'
                        onClick={handleSubmitCv}
                        cursor='pointer'
                      >
                        <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                          Xác nhận{' '}
                        </Text>
                      </Flex>
                    </Stack>
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Text fontSize='14px' fontWeight='500'>
                Hạn nộp hồ sơ:{' '}
                {data.expired_at && !isNaN(new Date(data.expired_at).valueOf())
                  ? format(new Date(data.expired_at), 'dd-MM-yyyy')
                  : 'N/A'}
              </Text>
            </Stack>
            <Stack gap='24px'>
              <Text fontSize='32px' fontWeight='700' lineHeight='18px'>
                Việc làm liên quan
              </Text>
              {fakeData.map((data, index) => (
                <Flex rounded='10px' bg='white' justifyContent='space-between' p='24px' key={index}>
                  <Flex>
                    <Box>
                      <Image src='/static/images/avatar_icon.png' width='100' height='100' alt='' />
                    </Box>
                    <Flex p='12px'>
                      <Stack gap='12px'>
                        <Text fontSize='24px' fontWeight='600' lineHeight='18px'>
                          {data.title}
                        </Text>
                        <Text fontSize='12px' fontWeight='700' lineHeight='18px'>
                          {data.company}
                        </Text>
                        {data.tags.map((tag, index) => (
                          <Text
                            fontSize='12px'
                            fontWeight='700'
                            lineHeight='18px'
                            color='#E76F00'
                            key={index}
                          >
                            {tag}
                          </Text>
                        ))}

                        <Flex gap='32px'>
                          <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                            <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                              {data.locations}
                            </Text>
                          </Flex>
                          <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                            <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                              {data.remainingDays}
                            </Text>
                          </Flex>
                          <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                            <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                              {data.time}
                            </Text>
                          </Flex>
                        </Flex>
                      </Stack>
                    </Flex>
                  </Flex>
                  <Stack justifyContent='space-between' p='12px'>
                    <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#E76F00'>
                      25-30 triệu
                    </Text>
                    <Flex
                      rounded='12px'
                      bg='#F6871F'
                      p='8px'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Text fontSize='12px' fontWeight='600' lineHeight='18px' color='white'>
                        Ứng tuyển
                      </Text>
                    </Flex>
                  </Stack>
                </Flex>
              ))}
            </Stack>
          </Stack>
          <Stack gap='16px'>
            <Stack bg='white' w='320px' justifyContent='center' rounded='12px' p='20px'>
              <Flex alignItems='center' gap='24px'>
                <Image src='/static/images/avatar_icon.png' width='100' height='100'></Image>
                <Text fontSize='24px' fontWeight='600' lineHeight='28px'>
                  Công ty cổ phần và đầu tư thương mại ABC
                </Text>
              </Flex>
              <Stack gap='24px' flex='1 0 0'>
                <Box borderTop='1px solid #CACACA'></Box>
                <Stack gap='16px' justifyContent='center' alignItems='center'>
                  <Stack gap='24px'>
                    <Flex gap='12px' alignItems='center'>
                      <Box fontSize='24px'>
                        <BsBuilding />
                      </Box>
                      <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#727272'>
                        Quy mô: 999 nhân viên
                      </Text>
                    </Flex>
                    <Flex gap='12px' alignItems='center'>
                      <Box fontSize='24px'>
                        <HiOutlineMapPin />
                      </Box>
                      <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#727272'>
                        Địa điểm: Hà Nội, Toà 123 , đường
                      </Text>
                    </Flex>
                  </Stack>
                  <Flex gap='4px' alignItems='center' justifyContent='center' color=''>
                    <Text fontSize='20px' fontWeight='600' lineHeight='18px' color='#727272'>
                      Xem trang công ty
                    </Text>
                    <Box fontSize='18px'>
                      <MdOpenInNew />
                    </Box>
                  </Flex>
                </Stack>
                <Stack gap='24px'>
                  <Text fontSize='24px' fontWeight='700'>
                    Thông tin chung
                  </Text>
                  <Flex alignItems='center' gap='12px'>
                    <Image src='/static/images/icon/rank.svg' width='36' height='36'></Image>
                    <Stack gap='8px'>
                      <Text fontsize='18px' fontWeight='400' color='#727272'>
                        Cấp bậc
                      </Text>
                      <Text fontsize='18px' fontWeight='600'>
                        Thông tin chung
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex alignItems='center' gap='12px'>
                    <Image src='/static/images/icon/experience.svg' width='36' height='36'></Image>
                    <Stack gap='8px'>
                      <Text fontsize='18px' fontWeight='400' color='#727272'>
                        Kinh nghiệm
                      </Text>
                      <Text fontsize='18px' fontWeight='600'>
                        {menuData.experience[data.experience - 1]}
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex alignItems='center' gap='12px'>
                    <Image src='/static/images/icon/personnel.svg' width='36' height='36'></Image>
                    <Stack gap='8px'>
                      <Text fontsize='18px' fontWeight='400' color='#727272'>
                        Số lượng tuyển
                      </Text>
                      <Text fontsize='18px' fontWeight='600'>
                        {data.hire_number}
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex alignItems='center' gap='12px'>
                    <Image src='/static/images/icon/workform.svg' width='36' height='36'></Image>
                    <Stack gap='8px'>
                      <Text fontsize='18px' fontWeight='400' color='#727272'>
                        Hình thức làm việc
                      </Text>
                      <Text fontsize='18px' fontWeight='600'>
                        {menuData.workForm[data.work_hours - 1]}
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex alignItems='center' gap='12px'>
                    <Image src='/static/images/icon/gender.svg' width='36' height='36'></Image>
                    <Stack gap='8px'>
                      <Text fontsize='18px' fontWeight='400' color='#727272'>
                        Giới tính
                      </Text>
                      <Text fontsize='18px' fontWeight='600'>
                        {menuData.gender[data.gender - 1]}
                      </Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
            <Stack bg='white' w='320px' justifyContent='center' rounded='12px' p='20px'>
              <Stack gap='24px' flex='1 0 0'>
                <Stack gap='24px'>
                  <Text fontSize='24px' fontWeight='700'>
                    Ngành nghề
                  </Text>
                  <Flex alignItems='center' gap='12px' flexWrap='wrap'>
                    <Flex
                      p='12px'
                      bg='#F1F1F1'
                      rounded='12px'
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Text color='#727272' fontSize='12px'>
                        Dịch vụ khách hàng
                      </Text>
                    </Flex>
                    <Flex
                      p='12px'
                      bg='#F1F1F1'
                      rounded='12px'
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Text color='#727272' fontSize='12px'>
                        Giáo dục/ đào tạo
                      </Text>
                    </Flex>
                    <Flex
                      p='12px'
                      bg='#F1F1F1'
                      rounded='12px'
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Text color='#727272' fontSize='12px'>
                        Tư vấn
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
                <Stack gap='24px'>
                  <Text fontSize='24px' fontWeight='700'>
                    Khu vực
                  </Text>
                  <Flex alignItems='center' gap='12px' flexWrap='wrap'>
                    <Flex
                      p='12px'
                      bg='#F1F1F1'
                      rounded='12px'
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Text color='#727272' fontSize='12px'>
                        hcm
                      </Text>
                    </Flex>
                    <Flex
                      p='12px'
                      bg='#F1F1F1'
                      rounded='12px'
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Text color='#727272' fontSize='12px'>
                        hà nội
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
            <Image src='/static/images/fixer.png' width='320' height='320'></Image>
            <Image src='/static/images/product_manager.png' width='320' height='320'></Image>
          </Stack>
        </Flex>
      </Stack>
    </div>
  );
  return <div>{HomeContent}</div>;
}

export default JobDetails;

export async function getServerSideProps(context) {
  const id = context.query.id;
  const BACK_END_PORT = 'http://localhost:5000';
  let jobData = {};
  const getJobById = await axios.post(`${BACK_END_PORT}/job-post/get-job-post-by-id`, { id: id });
  if (getJobById.data.statusCode === 200) {
    jobData = getJobById.data.data;
  }
  return {
    props: {
      data: jobData[0],
      BACK_END_PORT,
    }, // will be passed to the page component as props
  };
}
