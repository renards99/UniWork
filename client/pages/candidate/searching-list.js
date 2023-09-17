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
} from '@chakra-ui/react';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import CandidateHeader from '../../components/layout/candidate/header';
import backgroundImg from '../../public/static/images/rectangle_33.png';
import DropDown from '../../components/layout/candidate/dropDownLocation';
import speakerIcon from '../../public/static/images/icon/speaker.svg';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

function SearchingList() {
  const locations = ['Hà Giang', 'Tuyên Quang', 'Hà Nội', '...'];
  const experiences = ['Không Kinh Nghiệm', 'Trên 1 năm', 'Trên 2 năm', '...'];
  const salaries = ['1-5 triệu', '5-7 triệu', '20 triệu', '...'];
  const employers = [
    {
      image: '/static/images/food_store.png',
      Name: 'Nhà Cơm Phương Nguyễn',
      Role: 'Shipper',
      salary: '100k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Cơm Quang Anh',
      Role: 'Phụ Bếp',
      salary: '80k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Ảnh Cưới Lan Anh',
      Role: 'Chụp Ảnh',
      salary: '200k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
    {
      image: '/static/images/food_store.png',
      Name: 'Tạp Hóa Sky Mart',
      Role: 'Nhân Viên bán hàng',
      salary: '70k/1h',
    },
  ];
  const fakeData = [
    {
      id: 1,
      title: 'Nhân viên thiết kế chuyên viên tư vấn thiết kế lĩnh vực kiến trúc',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI GLOBAL ',
      locations: 'Hà Nội, HCM',
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
        <Flex gap='32px' px='150px' justifyContent='center' pt='40px'>
          <Stack gap='16px'>
            {currentData.map((data) => (
              <Flex rounded='10px' bg='white' justifyContent='space-between' p='18px'>
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
                    {data.salary}
                  </Text>
                  <Flex
                    rounded='12px'
                    bg='#F6871F'
                    p='8px'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Text fontSize='12px' fontWeight='600' lineHeight='18px' color='white'>
                      Xem CV
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            ))}
          </Stack>
          <Image src='/static/images/recruiterTop.png' width='350' height='800'></Image>
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
