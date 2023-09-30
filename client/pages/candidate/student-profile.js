import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Input,
  Button,
  Radio,
  RadioGroup,
  Textarea,
  StackItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  Select,
  Avatar,
} from '@chakra-ui/react';
import { HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { HiMiniMapPin, HiOutlineMapPin } from 'react-icons/hi2';
import { CiSearch } from 'react-icons/ci';
import { LiaNewspaperSolid } from 'react-icons/lia';
import { BsBox2, BsExclamationCircle, BsGlobe } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';
import CandidateHeader from '../../components/layout/candidate/header';
import { useCallback, useEffect, useState } from 'react';
import PostImage from '../../public/static/images/applicationPost.png';
import Paging from '../../components/paging';
import DropDown from '../../components/layout/employer/dropDown';
import StatusFrame from '../../components/layout/admin/statusFrame';
import { IoEllipse } from 'react-icons/io5';
import PDFViewer from '../../components/pdf';
import { AiFillCamera } from 'react-icons/ai';

import axios from 'axios';
import { useRouter } from 'next/router';
import { convertToLocaleDateTime } from '../../helper';

function StudentProfile() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [myCV, setMyCV] = useState();
  const [avatar, setAvatar] = useState();
  const [isModalEducationOpen, setIsModalEducationOpen] = useState(false);
  const openModalEducation = () => {
    setIsModalEducationOpen(true);
  };
  const closeModalEducation = () => {
    setIsModalEducationOpen(false);
  };
  const [isModalExOpen, setIsModalExOpen] = useState(false);
  const openModalExperience = () => {
    setIsModalExOpen(true);
  };
  const closeModalExperience = () => {
    setIsModalExOpen(false);
  };
  const [isModalCVOpen, setIsModalCVOpen] = useState(false);
  const openModalCV = () => {
    setIsModalCVOpen(true);
  };
  const [isModalShowCVOpen, setIsModalShowCVOpen] = useState(false);
  const openModalShowCV = () => {
    setIsModalShowCVOpen(true);
  };
  const closeModalShowCV = () => {
    setIsModalShowCVOpen(false);
  };
  const [cvLink, setCvLink] = useState();
  const [avatarLink, setAvatarLink] = useState();

  const closeModalCV = async () => {
    try {
      const formData = new FormData();
      formData.append('cv_file', myCV);
      const uploadCV = await axios.post('http://localhost:5000/upload-cv', formData);
      if (uploadCV.data.statusCode === 200) {
        const user = localStorage.getItem('user');
        if (user) {
          let userData = JSON.parse(user);
          if (userData) {
            const { id } = userData;
            const updateCV = await axios.put('http://localhost:5000/student/update-student', {
              id,
              cv: uploadCV.data.data.cv_file,
            });
            if (updateCV.data.statusCode === 200) {
              alert('Student updated successfully');
              setCvLink(uploadCV.data.data.cv_file);
              setEProfile({ ...eProfile, cv: uploadCV.data.data.cv_file });
              setIsModalCVOpen(false);
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
      setIsModalCVOpen(false);
    }
  };
  const changeAvatar = async (file) => {
    try {
      setAvatar(file);

      const formData = new FormData();
      formData.append('image_file', file);
      const uploadImage = await axios.post('http://localhost:5000/upload-image', formData);
      if (uploadImage.data.statusCode === 200) {
        setAvatarLink(uploadImage.data.data.image_file);
      }
    } catch (e) {}
  };
  const [isModalPersonalInfoOpen, setIsModalPersonalInfoOpen] = useState(false);
  const openModalPersonalInfo = () => {
    setIsModalPersonalInfoOpen(true);
  };
  const closeModalPersonalInfo = () => {
    setIsModalPersonalInfoOpen(false);
  };
  // const isModalEducationOpen
  // const [isModal2Open, setIsModal2Open] = useState(false);
  const [eProfile, setEProfile] = useState({});

  const student = {
    id: '1',
    name: 'Nguyen Van A',
    title: 'Thực tập sinh kế toán',
    description:
      'Hiện tại là sinh viên tốt nghiệp chuyên ngành Kế toán - Kiểm toán đang chờ bằng và đã làm trong lĩnh vực mà cụ thể là kế toán với kinh nghiệm 6 tháng. Tuy kinh nghiệm còn hạn chế nhưng mục tiêu của em là được làm đúng chuyên ngành mình đã học và mong muốn học hỏi để có thêm nhiều kinh nghiệm, nên em mong muốn xin vào công ty làm thực tập để từ đó trau dồi thêm kiến thức, kinh nghiệm thực tế cho bản thân.',
    cv: '0',
    education: [
      { school: 'Đại học FPT', time: '2019-2023', profession: 'Kế toán, kiểm toán', GPA: '3.0' },
      {
        school: 'Học viện chính sách và phát triển',
        time: '2019-2023',
        profession: 'Kế toán, kiểm toán',
        GPA: '3.0',
      },
    ],
    experience: [
      {
        company: 'Công ty Cổ phần giải pháp chống giả An Hà',
        time: '02/2023 - 07/2023',
        title: 'Thực tập sinh Kế toán',
        experience: [
          'Có kinh nghiệm sử dụng phần mềm misa.',
          'Công việc đã làm nhập dữ liệu chứng từ.',
          'Sắp xếp lưu trữ chứng từ khoa học.',
          'In chứng từ, sổ sách có liên quan theo yêu cầu.',
        ],
      },
      {
        company: 'Công ty Cổ phần giải pháp chống giả An Hà',
        time: '02/2023 - 07/2023',
        title: 'Thực tập sinh Kế toán',
        experience: [
          'Có kinh nghiệm sử dụng phần mềm misa.',
          'Công việc đã làm nhập dữ liệu chứng từ.',
          'Sắp xếp lưu trữ chứng từ khoa học.',
          'In chứng từ, sổ sách có liên quan theo yêu cầu.',
        ],
      },
    ],
  };
  const studentInfo = (
    <Stack w='950px' gap='24px'>
      <Stack flexShrink='0' gap='0' pos='relative'>
        <Box
          backgroundImage="url('https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')"
          bgRepeat='no-repeat'
          bgPos='center'
          bgSize='cover'
          w='full'
          h='231px'
          roundedTop='12px'
        >
          <Flex
            w='180px'
            mx='8px'
            my='8px'
            p='8px'
            bg='#6C6C6C'
            rounded='12px'
            justifyContent='space-between'
            alignItems='center'
            cursor='pointer'
          >
            <Box fontSize='24px'>
              <AiFillCamera color='white' />
            </Box>
            <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='white'>
              Cập nhật ảnh bìa
            </Text>
          </Flex>
        </Box>
        {/*Avatar here */}
        <Flex
          bg='gray'
          rounded='full'
          w='162px'
          h='162px'
          pos='absolute'
          top='150px'
          left='36px'
          overflow='hidden'
        ></Flex>
        <Avatar
          src={avatarLink}
          rounded='full'
          w='162px'
          h='162px'
          pos='absolute'
          top='150px'
          left='36px'
          overflow='hidden'
        ></Avatar>
        <Stack bg='white' roundedBottom='12px'>
          <Flex gap='98px' pl='20px' py='8px' justifyContent='space-between' ml='200px' p='20px'>
            <Stack>
              <Text fontSize='24px' fontWeight='800' lineHeight='32px'>
                {eProfile.full_name}
              </Text>
              {eProfile.job_type && (
                <Flex fontSize='16px' fontWeight='500'>
                  <Text lineHeight='24px'>{eProfile.job_type}</Text>
                </Flex>
              )}
            </Stack>
            <label for='image'>
              <Flex cursor='pointer'>
                <Input
                  hidden
                  onChange={(e) => changeAvatar(e.target.files[0])}
                  type='file'
                  // display={'none'}
                  id='image'
                />
                <Image src='/static/images/icon/Edit.svg' width='30' height='30'></Image>
              </Flex>
            </label>
          </Flex>{' '}
          <Stack px='20px' py='28px'>
            {!eProfile.cv ? (
              <Flex gap='15px'>
                <Flex
                  w='200px'
                  h='50px'
                  bg='#F98820'
                  rounded='10px'
                  justifyContent='center'
                  onClick={openModalCV}
                  cursor={'pointer'}
                  alignItems='center'
                >
                  <Text fontSize='18px' color='white' fontWeight='800'>
                    Tải CV lên
                  </Text>
                </Flex>
              </Flex>
            ) : (
              <Flex gap='15px'>
                <Flex
                  w='200px'
                  h='50px'
                  bg='#F98820'
                  rounded='10px'
                  justifyContent='center'
                  alignItems='center'
                  onClick={openModalShowCV}
                  cursor='pointer'
                >
                  <Text fontSize='18px' color='white' fontWeight='800'>
                    Xem CV của tôi
                  </Text>
                </Flex>
                <Flex
                  w='200px'
                  h='50px'
                  rounded='10px'
                  justifyContent='center'
                  alignItems='center'
                  border='1px solid #F98820'
                  onClick={openModalCV}
                  cursor='pointer'
                >
                  <Text fontSize='18px' color='#F98820' fontWeight='800'>
                    Thay đổi CV
                  </Text>
                </Flex>
              </Flex>
            )}
          </Stack>
          {student.description && (
            <Text fontSize='16px' fontWeight='500' lineHeight='24px' p='40px'>
              {eProfile.short_des}
            </Text>
          )}
        </Stack>
      </Stack>
      {/* <Stack bg='#FFE9C1' rounded='10px' p='28px' gap='24px' alignItems='center'>
        <Stack alignSelf='stretch'>
          <Text fontSize='20px' fontWeight='600' lineHeight='18px' letterSpacing='0.2px'>
            Thống kê lượt xem từ nhà tuyển dụng
          </Text>
          <Text
            fontSize='18px'
            fontWeight='600'
            lineHeight='18px'
            letterSpacing='0.2px'
            color='#FF0404'
            fontStyle='italic'
          >
            Chỉ hiển thị riêng bạn
          </Text>
        </Stack>
        <Flex gap='54px' alignSelf='stretch' justifyContent='center'>
          <Stack justifyContent='center' alignItems='center' gap='16px'>
            <Text fontSize='36px' fontWeight='600' lineHeight='18px'>
              0
            </Text>
            <Text color='#9E9E9E' fontSize='20px' fontWeight='600'>
              Số lượt xem trong tuần
            </Text>
          </Stack>
          <Stack justifyContent='center' alignItems='center' gap='16px'>
            <Text fontSize='36px' fontWeight='600' lineHeight='18px'>
              0
            </Text>
            <Text color='#9E9E9E' fontSize='20px' fontWeight='600'>
              Số lượt xem trong tuần
            </Text>
          </Stack>
          <Stack justifyContent='center' alignItems='center' gap='16px'>
            <Text fontSize='36px' fontWeight='600' lineHeight='18px'>
              0
            </Text>
            <Text color='#9E9E9E' fontSize='20px' fontWeight='600'>
              Số lượt xem trong tuần
            </Text>
          </Stack>
        </Flex>
      </Stack> */}
      <Flex bg='white' p='20px' justifyContent='space-between' alignItems='center' rounded='12px'>
        <Stack gap='28px'>
          <Text fontSize='24px' fontWeight='800'>
            Giới thiệu về bản thân
          </Text>
          <Text fontSize='16px' fontWeight='500'>
            Hãy nhập thông tin Giới thiệu của bạn tại đây để nhà tuyển dụng có thể hiểu rõ hơn về
            bạn
          </Text>
          <Flex
            w='200px'
            h='50px'
            bg='#F98820'
            rounded='10px'
            justifyContent='center'
            alignItems='center'
            onClick={openModalPersonalInfo}
            cursor='pointer'
          >
            <Text fontSize='18px' color='white' fontWeight='800'>
              Thêm mục
            </Text>
          </Flex>
        </Stack>
        <Box>
          <Image src='/static/images/self_promote.png' width='150' height='60'></Image>
        </Box>
      </Flex>
      {student.education === null ? (
        <Flex bg='white' p='20px' justifyContent='space-between' rounded='12px' alignItems='center'>
          <Stack gap='28px'>
            <Text fontSize='24px' fontWeight='800'>
              Học vấn
            </Text>
            <Text fontSize='16px' fontWeight='500'>
              Hãy nhập thông tin Học vấn của bạn tại đây để nhà tuyển dụng có thể hiểu rõ hơn về bạn
            </Text>
            <Flex
              w='200px'
              h='50px'
              bg='#F98820'
              rounded='10px'
              justifyContent='center'
              alignItems='center'
              onClick={openModalEducation}
              cursor='pointer'
            >
              <Text fontSize='18px' color='white' fontWeight='800'>
                Thêm mục
              </Text>
            </Flex>
          </Stack>
          <Box>
            <Image src='/static/images/education.png' width='140' height='70'></Image>
          </Box>
        </Flex>
      ) : (
        <Stack
          bg='white'
          p='24px'
          alignItems='space-between'
          rounded='12px'
          justifyContent='center'
          gap='24px'
        >
          <Stack gap='28px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text fontSize='24px' fontWeight='800'>
                Học vấn
              </Text>
              <Flex onClick={openModalEducation} cursor='pointer'>
                <Text fontSize='48px' fontWeight='200'>
                  +
                </Text>
              </Flex>
            </Flex>
          </Stack>
          {student.education.map((education) => (
            <Stack
              justifyContent='center'
              gap='20px'
              borderBottom='1px solid #D7D7D7'
              _last={{ borderBottomWidth: 0 }}
            >
              <Flex justifyContent='space-between' alignItems='center'>
                <Flex alignItems='center' gap='12px'>
                  <Box bg='#FF9C43' rounded='full' p='12px'>
                    <Image src='/static/images/school.png' width='37' height='37'></Image>
                  </Box>
                  <Stack gap='12px'>
                    <Text fontSize='22px' fontWeight='700' lineHeight='18px'>
                      Học viện chính sách và phát triển
                    </Text>
                    <Stack gap='4px' fontSize='16px' fontWeight='500' lineHeight='18px'>
                      <Text>{education.time}</Text>
                      <Text>Chuyên ngành: {education.profession}</Text>
                      <Text>GPA: {education.GPA}</Text>
                    </Stack>
                  </Stack>
                </Flex>{' '}
                <Image src='/static/images/icon/edit2.svg' width='40' height='40'></Image>
              </Flex>
              <Box></Box>
            </Stack>
          ))}
        </Stack>
      )}

      {student === null ? (
        <Flex bg='white' p='20px' justifyContent='space-between' rounded='12px' alignItems='center'>
          <Stack gap='28px'>
            <Text fontSize='24px' fontWeight='800'>
              Kinh nghiệm
            </Text>
            <Text fontSize='16px' fontWeight='500'>
              Hãy nhập thông tin Kinh nghiệm của bạn tại đây để nhà tuyển dụng có thể hiểu rõ hơn về
              bạn
            </Text>
            <Flex
              w='200px'
              h='50px'
              bg='#F98820'
              rounded='10px'
              justifyContent='center'
              alignItems='center'
              onClick={openModalExperience}
              cursor='pointer'
            >
              <Text fontSize='18px' color='white' fontWeight='800'>
                Thêm mục
              </Text>
            </Flex>
          </Stack>
          <Box>
            <Image src='/static/images/experience.png' width='140' height='70'></Image>
          </Box>
        </Flex>
      ) : (
        <Stack
          bg='white'
          p='24px'
          alignItems='space-between'
          rounded='12px'
          justifyContent='center'
          gap='24px'
        >
          <Stack gap='28px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text fontSize='24px' fontWeight='800'>
                Kinh nghiệm
              </Text>
              <Flex onClick={openModalExperience} cursor='pointer'>
                <Text fontSize='48px' fontWeight='200'>
                  +
                </Text>
              </Flex>
            </Flex>
          </Stack>
          {student.experience.map((experience) => (
            <Stack
              justifyContent='center'
              gap='20px'
              borderBottom='1px solid #D7D7D7'
              _last={{ borderBottomWidth: 0 }}
              py='20px'
            >
              <Flex justifyContent='space-between' alignItems='center'>
                <Flex alignItems='center' gap='12px'>
                  <Box bg='#FF9C43' rounded='full' p='12px'>
                    <Image src='/static/images/school.png' width='37' height='37'></Image>
                  </Box>
                  <Stack gap='12px'>
                    <Text fontSize='22px' fontWeight='700' lineHeight='18px'>
                      Học viện chính sách và phát triển
                    </Text>
                    <Stack gap='8px' fontSize='16px' fontWeight='500' lineHeight='18px'>
                      <Text>{experience.time}</Text>
                      <Text>Chuyên ngành: {experience.title}</Text>
                      {experience.experience.map((e) => (
                        <Text>- {e}</Text>
                      ))}
                    </Stack>
                  </Stack>
                </Flex>{' '}
                <Image src='/static/images/icon/edit2.svg' width='40' height='40'></Image>
              </Flex>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
  const modalEducation = (
    <Modal isOpen={isModalEducationOpen} onClose={closeModalEducation} isCentered size='5xl'>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent>
        <ModalHeader borderBottom='1px solid #818181' fontSize='24px'>
          <Text as='span' color='#F98820'>
            Học vấn
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack p='24px 24px 32px 24px' justifyContent='center' alignItems='center'>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Trường:
              </Text>
              <Input
                p='24px 20px'
                placeholder='Trường:'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Chuyên ngành:
              </Text>
              <Input
                p='24px 20px'
                placeholder='Chuyên ngành:'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Chuyên ngành:
              </Text>
              <Checkbox>Tôi đang học ở đây</Checkbox>
            </Stack>
            <Flex gap='8px' alignSelf='stretch'>
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Bắt đầu:
                </Text>
                <Flex gap='8px'>
                  <Input
                    p='24px 20px'
                    placeholder='Tháng/Năm'
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                  ></Input>
                </Flex>
              </Stack>
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Kết thúc:
                </Text>
                <Flex gap='8px'>
                  <Input
                    p='24px 20px'
                    placeholder='Tháng/năm'
                    rounded='12px'
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
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Mô tả chi tiết
              </Text>
              <Textarea
                p='24px 20px'
                placeholder='Mô tả chi tiết...'
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
            <Flex
              p='12px'
              w='140px'
              mt='32px'
              rounded='12px'
              bg='#F8A353'
              justifyContent='center'
              alignItems='center'
              onClick={closeModalEducation}
              cursor='pointer'
            >
              <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                Cập nhật
              </Text>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
  const modalExperience = (
    <Modal isOpen={isModalExOpen} onClose={closeModalExperience} isCentered size='5xl'>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent>
        <ModalHeader borderBottom='1px solid #818181' fontSize='24px'>
          <Text as='span' color='#F98820'>
            Kinh nghiệm
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack p='24px 24px 32px 24px' justifyContent='center' alignItems='center'>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Công ty:
              </Text>
              <Input
                p='24px 20px'
                placeholder='Trường:'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Chức vụ:
              </Text>
              <Input
                p='24px 20px'
                placeholder='Chuyên ngành:'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Chuyên ngành:
              </Text>
              <Checkbox>Tôi đang làm việc ở đây:</Checkbox>
            </Stack>
            <Flex gap='8px' alignSelf='stretch'>
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Bắt đầu:
                </Text>
                <Flex gap='8px'>
                  <Input
                    p='24px 20px'
                    placeholder='Tháng/Năm'
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                  ></Input>
                </Flex>
              </Stack>
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Kết thúc:
                </Text>
                <Flex gap='8px'>
                  <Input
                    p='24px 20px'
                    placeholder='Tháng/năm'
                    rounded='12px'
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
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Mô tả chi tiết
              </Text>
              <Textarea
                p='24px 20px'
                placeholder='Mô tả chi tiết...'
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
            <Flex
              p='12px'
              w='140px'
              mt='32px'
              rounded='12px'
              bg='#F8A353'
              justifyContent='center'
              alignItems='center'
              onClick={closeModalExperience}
              cursor='pointer'
            >
              <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                Cập nhật
              </Text>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
  const modalCV = (
    <Modal
      isOpen={isModalCVOpen}
      onClose={() => {
        setIsModalCVOpen(false);
      }}
      isCentered
      size='5xl'
    >
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent>
        <ModalHeader borderBottom='1px solid #818181' fontSize='24px'>
          <Text as='span' color='#F98820'>
            Kinh nghiệm
          </Text>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Stack gap='8px' alignSelf='stretch' justifyContent='center' alignItems='center'>
            <Flex alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                CV của bạn
              </Text>
            </Flex>
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
                <Input
                  hidden
                  onChange={(e) => setMyCV(e.target.files[0])}
                  type='file'
                  // display={'none'}
                  id='cv'
                />
                <Image src='/static/images/upload_cloud.png' width='40' height='40'></Image>
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
            <Flex
              p='12px'
              w='140px'
              mt='32px'
              rounded='12px'
              bg='#F8A353'
              justifyContent='center'
              alignItems='center'
              onClick={closeModalCV}
              cursor='pointer'
            >
              <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                Cập nhật
              </Text>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
  const modalShowCV = (
    <Modal isOpen={isModalShowCVOpen} onClose={closeModalShowCV} isCentered size='5xl'>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent>
        <ModalHeader borderBottom='1px solid #818181' fontSize='24px'>
          <Text as='span' color='#F98820'>
            Kinh nghiệm
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap='8px' alignSelf='stretch' justifyContent='center' alignItems='center'>
            <Flex alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                CV của bạn
              </Text>
            </Flex>
            {cvLink && <PDFViewer url={cvLink} />}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
  const modalPersonalInfo = (
    <Modal isOpen={isModalPersonalInfoOpen} onClose={closeModalPersonalInfo} isCentered size='5xl'>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent>
        <ModalHeader borderBottom='1px solid #818181' fontSize='24px'>
          <Text as='span' color='#F98820'>
            Thông tin trang cá nhân
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack p='24px 24px 32px 24px' justifyContent='center' alignItems='center'>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Họ và tên:
              </Text>
              <Input
                p='24px 20px'
                placeholder='Họ và tên:'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Ngành nghề:
              </Text>
              <Input
                p='24px 20px'
                placeholder='Ngành nghề:'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            {student.education === null ? (
              <Flex alignSelf='stretch' cursor='pointer' onClick={openModalEducation}>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='#F6871F'>
                  + Thêm thông tin học vấn
                </Text>
              </Flex>
            ) : (
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Thông tin học vấn:
                </Text>
                <Select placeholder='Chọn trường/tổ chức' size='lg'>
                  {student.education.map((student) => (
                    <option value='option1'>{student.school}</option>
                  ))}
                </Select>
                <Flex
                  justifyContent='flex-end'
                  alignSelf='stretch'
                  cursor='pointer'
                  onClick={openModalEducation}
                >
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='#F6871F'>
                    + Thêm thông tin học vấn
                  </Text>
                </Flex>
              </Stack>
            )}
            {student.experience === null ? (
              <Flex alignSelf='stretch' cursor='pointer' onClick={openModalExperience}>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='#F6871F'>
                  + Thêm thông tin kinh nghiệm
                </Text>
              </Flex>
            ) : (
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Thông tin học vấn:
                </Text>
                <Select placeholder='Chọn công việc hiện tại' size='lg'>
                  {student.experience.map((student) => (
                    <option value='option1'>{student.title}</option>
                  ))}
                </Select>
                <Flex
                  justifyContent='flex-end'
                  alignSelf='stretch'
                  cursor='pointer'
                  onClick={openModalExperience}
                >
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='#F6871F'>
                    + Thêm thông tin kinh nghiệm
                  </Text>
                </Flex>
              </Stack>
            )}

            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Giới tính:
              </Text>
              <Flex gap='220px'>
                <Radio size='lg' colorScheme='orange' value='1' border='1px solid black'>
                  Nam
                </Radio>
                <Radio size='lg' colorScheme='orange' value='2' border='1px solid black'>
                  Nữ
                </Radio>
              </Flex>
            </Stack>
            <Flex gap='8px' alignSelf='stretch'>
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Ngày sinh:
                </Text>
                <Flex gap='8px'>
                  <Input
                    p='24px 20px'
                    placeholder='Ngày/Tháng/Năm'
                    rounded='12px'
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
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Địa chỉ hiện tại
              </Text>
              <Input
                p='24px 20px'
                placeholder='Nhập Địa chỉ hiện tại'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Email liên lạc
              </Text>
              <Input
                p='24px 20px'
                placeholder='Nhập Email liên lạc'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Số điện thoại liên lạc
              </Text>
              <Input
                p='24px 20px'
                placeholder='Nhập Số điện thoại liên lạc'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Liên kết
              </Text>
              <Input
                p='24px 20px'
                placeholder='Nhập tài khoản mạng xã hội'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Giới thiệu bản thân
              </Text>
              <Textarea
                p='24px 20px'
                placeholder='Mô tả chi tiết...'
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
            <Flex
              p='12px'
              w='140px'
              mt='32px'
              rounded='12px'
              bg='#F8A353'
              justifyContent='center'
              alignItems='center'
              onClick={closeModalPersonalInfo}
              cursor='pointer'
            >
              <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                Cập nhật
              </Text>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  const getUserAccount = async (id) => {
    try {
      const getUserAccount = await axios.post(`http://localhost:5000/student-details`, {
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
          short_des: userData.short_des,
          cv: userData.cv,
        });
        setCvLink(userData.cv);
        handleGetJobByCompany(userData.company_id);
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (router.query.id) {
      getUserAccount(id);
    } else {
      const user = localStorage.getItem('user');
      if (user) {
        let userData = JSON.parse(user);
        if (userData) {
          const { id, role_id } = userData;
          if (role_id == 3) {
            getUserAccount(id);
          }
        }
      }
    }
  }, [router]);

  return (
    <Box>
      <CandidateHeader />
      <Stack gap='24px' p='28px' justifyContent='center' alignItems='center' bg='#F0EAE9'>
        {studentInfo}
        {modalEducation}
        {modalExperience}
        {modalCV}
        {modalPersonalInfo}
        {modalShowCV}
      </Stack>
    </Box>
  );
}

export default StudentProfile;
