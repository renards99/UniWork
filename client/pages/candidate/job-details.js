import { useState } from 'react';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronDown,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from 'react-icons/bs';
import Paging from '../../components/paging';
import { RxDotFilled } from 'react-icons/rx';
import {
  Box,
  Input,
  Button,
  Icon,
  Text,
  Stack,
  Grid,
  Flex,
  Tab,
  Tabs,
  TabList,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { MdOpenInNew } from 'react-icons/md';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { BsBuilding } from 'react-icons/bs';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import CandidateHeader from '../../components/layout/candidate/header';
import backgroundImg from '../../public/static/images/rectangle_33.png';
import DropDown from '../../components/layout/candidate/dropDown';
import speakerIcon from '../../public/static/images/icon/speaker.svg';

function JobDetails() {
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
    {
      id: 3,
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
    {
      id: 4,
      title: 'Nhân viên thiết kế chuyên viên tư vấn thiết kế lĩnh vực kiến trúc',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI GLOBAL ',
      locations: 'Hà Nội, HCM',
      remainingDays: 'Còn 30 ngày để ứng tuyển',
      time: 'Cập nhật 2h trước',
      salary: '25-30TRIỆU',
      tags: [''],
    },
  ];
  const locations = ['Hà Giang', 'Tuyên Quang', 'Hà Nội', '...'];
  const experiences = ['Không Kinh Nghiệm', 'Trên 1 năm', 'Trên 2 năm', '...'];
  const salaries = ['1-5 triệu', '5-7 triệu', '20 triệu', '...'];

  const HomeContent = (
    <div>
      <CandidateHeader />
      <Flex
        h='465px'
        px='150px'
        display='flex'
        justifyContent='space-evenly'
        alignItems='flex-end'
        bg='#333333'
      >
        <Box h='465px' bg='transparent' minW='30%' pt='50px'>
          <Text className='unw-homepage-text' color='white'>
            Tìm Việc Làm
          </Text>
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
            mb='20px'
            rounded='xl'
          />

          <Box display='flex' justifyContent='space-between'>
            <Select
              focusBorderColor='#F98820'
              borderColor='transparent'
              icon={<Icon as={BsChevronDown} />}
              className='unw-homepage-select'
              bg='gray.100'
              size='lg'
              rounded='xl'
            >
              <option selected hidden disabled>
                Địa Điểm
              </option>
              {locations.map((location) => {
                return <option>{location}</option>;
              })}
            </Select>
            <Select
              focusBorderColor='#F98820'
              borderColor='transparent'
              icon={<Icon as={BsChevronDown} />}
              className='unw-homepage-select'
              bg='gray.100'
              size='lg'
              mx='90px'
              rounded='xl'
            >
              <option selected hidden disabled>
                Kinh Nghiệm
              </option>
              {experiences.map((exp) => {
                return <option>{exp}</option>;
              })}
            </Select>
            <Select
              focusBorderColor='#F98820'
              borderColor='transparent'
              icon={<Icon as={BsChevronDown} />}
              className='unw-homepage-select'
              bg='gray.100'
              size='lg'
              rounded='xl'
            >
              <option selected hidden disabled>
                Mức Lương
              </option>
              {salaries.map((salary) => {
                return <option>{salary}</option>;
              })}
            </Select>
          </Box>
          <Button bg='#F98820' textColor='white' py='16px' px='30px' mt='16px' fontSize='2xl'>
            Tìm Kiếm
          </Button>
        </Box>
        <Box>
          <Image width='600' height='600' src='/static/images/home_page1.png' />
        </Box>
      </Flex>
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
                    - Công việc cụ thế sẽ trao đối trực tiếp khi phóng vấn.
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
              >
                <Text fontSize='16px' color='white' fontWeight='700' lineHeight='40px'>
                  Ứng tuyển
                </Text>
              </Flex>
              <Text fontSize='14px' fontWeight='500'>
                Hạn nộp hồ sơ: 09/08/2023.
              </Text>
            </Stack>
            <Stack gap='24px'>
              <Text fontSize='32px' fontWeight='700' lineHeight='18px'>
                Việc làm liên quan
              </Text>
              {fakeData.map((data) => (
                <Flex rounded='10px' bg='white' justifyContent='space-between' p='24px'>
                  <Flex>
                    <Box>
                      <Image src='/static/images/avatar_icon.png' width='100' height='100'></Image>
                    </Box>
                    <Flex p='12px'>
                      <Stack gap='12px'>
                        <Text fontSize='24px' fontWeight='600' lineHeight='18px'>
                          {data.title}
                        </Text>
                        <Text fontSize='12px' fontWeight='700' lineHeight='18px'>
                          {data.company}
                        </Text>
                        {data.tags.map((tag) => (
                          <Text fontSize='12px' fontWeight='700' lineHeight='18px' color='#E76F00'>
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
                        Không có yêu cầu kinh nghiệm
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
                        100 người
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
                        Toàn thời Giang
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
                        Không yêu cầu
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
