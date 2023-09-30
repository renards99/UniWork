import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsChevronDown } from 'react-icons/bs';
import Paging from '../components/paging';
import { RxDotFilled } from 'react-icons/rx';
import { Box, Input, Button, Icon, Text, Stack, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import Header from '../components/layout/header';
export default function HomePage() {
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
  const slides = [
    {
      url: 'https://www.careerabroad.ca/wp-content/uploads/2016/02/job.jpg',
    },
    {
      url: 'https://www.boydcorp.com/images/careers/Career-Opportunities.jpg',
    },
    {
      url: 'https://intracen.org/sites/default/files/styles/content_full/public/media/image/media_image/2022/03/08/job-opportunities-02.jpg?itok=xJscdSNp',
    },
    {
      url: 'https://cdn2.vectorstock.com/i/1000x1000/16/71/career-opportunities-at-job-fair-were-hiring-vector-28351671.jpg',
    },
    {
      url: 'https://www.eusa.eu/documents/eusa/News/2018/join_our_team.jpg',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const [tabState, setTabState] = useState(1);
  const toggleTab = (index) => {
    setTabState(index);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  //get current Posts
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentEmployers = employers.slice(firstItemIndex, lastItemIndex);
  const back_end_port = 'http://localhost:5000';
  //change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const HomeContent = (
    <div>
      <Header back_end_port={back_end_port} />

      <Box h='465px' px='150px' display='flex' justifyContent='space-evenly'>
        <Box h='465px' bg='transparent' minW='30%' pt='50px'>
          <h1 className='unw-homepage-text'>Tìm Việc Làm</h1>
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
      </Box>
      <Box px='305px' py='50px' h='1300px'>
        <Text fontSize='4xl' fontWeight='semibold '>
          Thông tin tuyển dụng
        </Text>
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
      </Box>
      <Paging
        itemsPerPage={itemsPerPage}
        totalItems={employers.length}
        changePage={changePage}
        bgColor='#F98820'
        tColor='white'
      />
    </div>
  );
  return <div>{HomeContent}</div>;
}
export async function getServerSideProps() {
  const BACK_END_PORT = 'http://localhost:5000';

  return { props: { port: BACK_END_PORT } };
}