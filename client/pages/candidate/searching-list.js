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
  border,
  InputGroup,
  InputLeftElement,
  Avatar,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import CandidateHeader from '../../components/layout/candidate/header';
import backgroundImg from '../../public/static/images/rectangle_33.png';
import DropDown from '../../components/layout/candidate/dropDownLocation';
import speakerIcon from '../../public/static/images/icon/speaker.svg';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { GiFlexibleStar } from 'react-icons/gi';

function SearchingList() {
  const topEmployer = [
    { image: '/static/images/avatar_icon.png' },
    { image: '/static/images/avatar_icon.png' },
    { image: '/static/images/avatar_icon.png' },
    { image: '/static/images/avatar_icon.png' },
    { image: '/static/images/avatar_icon.png' },
    { image: '/static/images/avatar_icon.png' },
    { image: '/static/images/avatar_icon.png' },
    { image: '/static/images/avatar_icon.png' },
  ];
  const fakeData = [
    {
      id: 1,
      title: 'Nhân viên thiết kế chuyên viên tư vấn thiết kế lĩnh vực kiến trúc',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI GLOBAL ',
      locations: 'Hà Nội, HCM',
      info: 'Cty hoạt động và phân phối được liệu và mĩ phẩm . công ty hoạt động trên nhiều năm. với quy mô hoan 100 nhân vien',
      remainingDays: 'Còn 30 ngày để ứng tuyển',
      time: 'Cập nhật 2h trước',
      salary: '25-30 TRIỆU',
      tags: [''],
    },
    {
      id: 2,
      title: 'Nhân viên thiết kế chuyên viên tư vấn thiết kế lĩnh vực kiến trúc',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI GLOBAL ',
      locations: 'Hà Nội, HCM',
      info: 'Cty hoạt động và phân phối được liệu và mĩ phẩm . công ty hoạt động trên nhiều năm. với quy mô hoan 100 nhân vien',
      remainingDays: 'Còn 30 ngày để ứng tuyển',
      time: 'Cập nhật 2h trước',
      salary: '25-30 TRIỆU',
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
      info: 'Cty hoạt động và phân phối được liệu và mĩ phẩm . công ty hoạt động trên nhiều năm. với quy mô hoan 100 nhân vien',
      remainingDays: 'Còn 30 ngày để ứng tuyển',
      time: 'Cập nhật 2h trước',
      salary: '25-30 TRIỆU',
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
      info: 'Cty hoạt động và phân phối được liệu và mĩ phẩm . công ty hoạt động trên nhiều năm. với quy mô hoan 100 nhân vien',
      remainingDays: 'Còn 30 ngày để ứng tuyển',
      time: 'Cập nhật 2h trước',
      salary: '25-30 TRIỆU',
      tags: [''],
    },
    {
      id: 5,
      title: 'Nhân viên thiết kế chuyên viên tư vấn thiết kế lĩnh vực kiến trúc',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI GLOBAL ',
      locations: 'Hà Nội, HCM',
      info: 'Cty hoạt động và phân phối được liệu và mĩ phẩm . công ty hoạt động trên nhiều năm. với quy mô hoan 100 nhân vien',
      remainingDays: 'Còn 30 ngày để ứng tuyển',
      time: 'Cập nhật 2h trước',
      salary: '25-30 TRIỆU',
      tags: [''],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  //get current Posts
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentData = fakeData.slice(firstItemIndex, lastItemIndex);

  //change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const HomeContent = (
    <div>
      <CandidateHeader />
      <Flex px='150px' gap='40px' alignItems='center' bg='#01004C'>
        <Stack bg='transparent' minW='30%' pt='50px' justifyContent='center'>
          <Text fontSize='24px' fontWeight='700' color='white'>
            Tìm kiếm thông tin công ty dể Uniwwork kết nối bạn với những cơ hội việc làm phù hợp
            nhất
          </Text>

          <Flex
            mt='24px'
            py='8px'
            px='8px'
            _placeholder={{ color: '#737B7D' }}
            placeholder='Mô tả công việc'
            bg='gray.100'
            alignItems='center'
            rounded='full'
          >
            <InputGroup>
              <InputLeftElement pointerEvents='none' fontSize='20px'>
                <HiMiniMagnifyingGlass color='gray.300' />
              </InputLeftElement>
              <Input bg='transparent' fontSize='2xl' variant='unstyled' placeholder='Tìm kiếm' />
            </InputGroup>

            <Button
              bg='#4BC290'
              textColor='white'
              py='16px'
              px='30px'
              fontSize='24px'
              rounded='full'
            >
              <Box fontSize='24px'>
                <HiMiniMagnifyingGlass color='white' />
              </Box>
              Tìm Kiếm
            </Button>
          </Flex>
        </Stack>
        <Box>
          <Image width='600' height='600' src='/static/images/hiring.png' />
        </Box>
      </Flex>
      <Stack bg='#F0EAE9' gap='32px'>
        <Flex gap='32px' px='150px' justifyContent='center' alignItems='flex-start' pt='40px'>
          <Stack gap='16px'>
            {currentData.map((data) => (
              <Flex rounded='10px' bg='white' justifyContent='space-between' p='18px'>
                <Flex>
                  <Box>
                    <Image src='/static/images/avatar_icon.png' width='100' height='100'></Image>
                  </Box>
                  <Stack p='12px' gap='20px'>
                    <Flex alignItems='center' gap='20px'>
                      <Text fontSize='18px' fontWeight='600'>
                        {data.company}
                      </Text>
                      <Text fontSize='20px' fontWeight='600' color='#9E9E9E'>
                        Đang tuyển 0 vị trí
                      </Text>
                    </Flex>
                    <Stack gap='12px'>
                      <Flex gap='20px'>
                        <Image src='/static/images/icon/address.svg' width='24' height='24'></Image>
                        <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#727272'>
                          {data.locations}
                        </Text>
                      </Flex>
                      <Flex gap='20px'>
                        <Image src='/static/images/icon/info.svg' width='24' height='24'></Image>
                        <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#727272'>
                          {data.info}
                        </Text>{' '}
                      </Flex>
                    </Stack>
                  </Stack>
                </Flex>
              </Flex>
            ))}
          </Stack>
          <Stack p='20px' bg='white' gap='20px' flexBasis='20%' alignItems='center'>
            <Text fontSize='24px' fontWeight='600' alignSelf='start'>
              Nhà tuyển dụng hàng đầu
            </Text>
            <Flex
              p='16px'
              wrap='wrap'
              justifyContent='space-between'
              alignItems='center'
              gap='24px'
            >
              {topEmployer.map((employer) => (
                <Box>
                  <Avatar size='2xl' src=''></Avatar>
                </Box>
              ))}
            </Flex>
          </Stack>
        </Flex>

        <Paging
          itemsPerPage={itemsPerPage}
          totalItems={fakeData.length}
          changePage={changePage}
          bgColor='#F98820'
          tColor='white'
        />
      </Stack>
    </div>
  );
  return <div>{HomeContent}</div>;
}

export default SearchingList;
