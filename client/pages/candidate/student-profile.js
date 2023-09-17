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
import EmployerHeader from '../../components/layout/employer/header';
import { useCallback, useEffect, useState } from 'react';
import PostImage from '../../public/static/images/applicationPost.png';
import Paging from '../../components/paging';
import axios from 'axios';
import DropDown from '../../components/layout/employer/dropDown';
import StatusFrame from '../../components/layout/admin/statusFrame';
import { IoEllipse } from 'react-icons/io5';

function StudentProfile() {
  const student = {
    id: '1',
    name: 'Nguyen Van A',
    title: 'Thực tập sinh kế toán',
    description:
      'Hiện tại là sinh viên tốt nghiệp chuyên ngành Kế toán - Kiểm toán đang chờ bằng và đã làm trong lĩnh vực mà cụ thể là kế toán với kinh nghiệm 6 tháng. Tuy kinh nghiệm còn hạn chế nhưng mục tiêu của em là được làm đúng chuyên ngành mình đã học và mong muốn học hỏi để có thêm nhiều kinh nghiệm, nên em mong muốn xin vào công ty làm thực tập để từ đó trau dồi thêm kiến thức, kinh nghiệm thực tế cho bản thân.',
    cv: '0',
    education: [
      { time: '2019-2023', profession: 'Kế toán, kiểm toán', GPA: '3.0' },
      { time: '2019-2023', profession: 'Kế toán, kiểm toán', GPA: '3.0' },
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
  const employerInfo = (
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
        ></Box>
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
        <Stack bg='white' roundedBottom='12px'>
          <Flex gap='98px' pl='20px' py='8px' justifyContent='flex-end'>
            <Stack>
              <Text fontSize='24px' fontWeight='800' lineHeight='32px'>
                CÔNG TY CỔ PHẦN MODERN LIGHT VIỆT NAM
              </Text>
              {student.title === null ? (
                ''
              ) : (
                <Flex fontSize='16px' fontWeight='500'>
                  <Text lineHeight='24px'>{student.title}</Text>
                </Flex>
              )}
            </Stack>
            <Box>
              <Image src='/static/images/icon/Edit.svg' width='30' height='30'></Image>
            </Box>
          </Flex>{' '}
          <Stack px='20px' py='28px'>
            {student.cv === '1' ? (
              <Flex gap='15px'>
                <Flex
                  w='200px'
                  h='50px'
                  bg='#F98820'
                  rounded='10px'
                  justifyContent='center'
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
                >
                  <Text fontSize='18px' color='#F98820' fontWeight='800'>
                    Thay đổi CV
                  </Text>
                </Flex>{' '}
              </Flex>
            )}
          </Stack>
          {student.description != null ? (
            <Text fontSize='16px' fontWeight='500' lineHeight='24px' p='40px'>
              {student.description}
            </Text>
          ) : (
            ''
          )}
        </Stack>
      </Stack>
      <Stack bg='#FFE9C1' rounded='10px' p='28px' gap='24px' alignItems='center'>
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
      </Stack>
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
              <Text fontSize='48px' fontWeight='200'>
                +
              </Text>
            </Flex>
          </Stack>
          {student.education.map((education) => (
            <Stack justifyContent='center' gap='20px'>
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
              <Box border='1px solid gray'></Box>
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
                Học vấn
              </Text>
              <Text fontSize='48px' fontWeight='200'>
                +
              </Text>
            </Flex>
          </Stack>
          {student.experience.map((experience) => (
            <Stack justifyContent='center' gap='20px'>
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
              <Box border='1px solid gray'></Box>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );

  return (
    <Box>
      <EmployerHeader />

      <Stack gap='24px' p='28px' justifyContent='center' alignItems='center' bg='#F0EAE9'>
        {employerInfo}
      </Stack>
    </Box>
  );
}

export default StudentProfile;
