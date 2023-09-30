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

function SearchingSmallBusiness() {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  //get current Posts
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentEmployers = employers.slice(firstItemIndex, lastItemIndex);

  //change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const HomeContent = (
    <div >
      <CandidateHeader />
      <Flex
        h='465px'
        px='150px'
        display='flex'
        justifyContent='space-evenly'
        alignItems='flex-end'
        bg='#314965'
      >
        <Stack h='465px' bg='transparent' minW='30%' pt='50px' justifyContent='center'>
          <Text fontSize='40px' fontWeight='600' color='#FBC802' w='60%'>
            Khám phá 1000+ cửa hàng nổi bật
          </Text>
          <Text fontSize='16px' color='white' fontWeight='400'>
            Tra cứu thông tin cửa hàng và tìm kiếm nơi làm việc tốt nhất dành cho bạn
          </Text>
          <Flex
            mt='24px'
            py='4px'
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
              fontSize='2xl'
              rounded='full'
            >
              Tìm Kiếm
            </Button>
          </Flex>
        </Stack>
        <Box>
          <Image width='600' height='600' src='/static/images/home_page1.png' />
        </Box>
      </Flex>

      <Stack px='305px' py='50px' justifyContent='center' alignItems='center'>
        <Text fontSize='4xl' fontWeight='semibold '>
          Danh sách cửa hàng nổi bật
        </Text>
        <Flex alignItems='center' justifyContent='center' gap='32px'>
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {currentEmployers.map((employer) => {
              return (
                <Stack minH='380px' maxH='380px' minW='250px' maxW='250px' textAlign='center'>
                  <Image className='mx-auto' width='250' height='100' src={employer.image}></Image>
                  <Text fontSize='4xl' fontWeight='medium'>
                    {employer.Name}
                  </Text>
                  <Text fontSize='3xl'>{employer.Role} </Text>
                  <Text fontSize='2xl'>{employer.salary}</Text>
                </Stack>
              );
            })}
          </Grid>
        </Flex>
      </Stack>

      {/* <Paging
        itemsPerPage={itemsPerPage}
        totalItems={employers.length}
        changePage={changePage}
        bgColor='#F98820'
        tColor='white'
      /> */}
    </div>
  );
  return <div>{HomeContent}</div>;
}

export default SearchingSmallBusiness;
