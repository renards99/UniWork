import { useEffect, useState } from 'react';
import { BsChevronDown, BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Box, Input, Button, Icon, Text, Stack, Grid, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import CandidateHeader from '../../components/layout/candidate/header';
import DropDown from '../../components/layout/candidate/dropDownLocation';
import speakerIcon from '../../public/static/images/icon/speaker.svg';
import axios from 'axios';
import Pagination from '../../components/paging';
import { useRouter } from 'next/router';
import { totalPriceItemInCart } from '../../helper';

const BACK_END_PORT = 'http://localhost:5000';

function LandingPage() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [trends, setTrends] = useState([]);

  const router = useRouter();

  const backgroundFooter = '/static/images/footer_background.png';

  const [query, setQuery] = useState('');
  const [location, setLocation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [salary, setSalary] = useState(null);

  const unSortedLocations = [
    'An Giang',
    'Kon Tum',
    'Bà Rịa – Vũng Tàu',
    'Lai Châu',
    'Bắc Giang',
    'Lâm Đồng',
    'Bắc Kạn',
    'Lạng Sơn',
    'Bạc Liêu',
    'Lào Cai',
    'Bắc Ninh',
    'Long An',
    'Bến Tre',
    'Nam Định',
    'Bình Định',
    'Nghệ An',
    'Bình Dương',
    'Ninh Bình',
    'Bình Phước',
    'Ninh Thuận',
    'Bình Thuận',
    'Phú Thọ',
    'Cà Mau',
    'Phú Yên',
    'Cần Thơ',
    'Quảng Bình',
    'Cao Bằng',
    'Quảng Nam',
    'Đà Nẵng',
    'Quảng Ngãi',
    'Đắk Lắk',
    'Quảng Ninh',
    'Đắk Nông',
    'Quảng Trị',
    'Điện Biên',
    'Sóc Trăng',
    'Đồng Nai',
    'Sơn La',
    'Đồng Tháp',
    'Tây Ninh',
    'Gia Lai',
    'Thái Bình',
    'Hà Giang',
    'Thái Nguyên',
    'Hà Nam',
    'Thanh Hóa',
    'Hà Nội',
    'Thừa Thiên Huế',
    'Hà Tĩnh',
    'Tiền Giang',
    'Hải Dương',
    'TP Hồ Chí Minh',
    'Hải Phòng',
    'Trà Vinh',
    'Hậu Giang',
    'Tuyên Quang',
    'Hòa Bình',
    'Vĩnh Long',
    'Hưng Yên',
    'Vĩnh Phúc',
    'Khánh Hòa',
    'Yên Bái',
    'Kiên Giang',
  ];

  const locations = unSortedLocations.sort((a, b) =>
    a.localeCompare(b, 'en', { sensitivity: 'base' }),
  );

  const experiences = ['Dưới 1 năm', '1 năm', '2 năm', '3 năm', '4 năm', '5 năm', 'Trên 5 năm'];
  const salaries = ['dưới 5 triệu', '5-7 triệu', '7-15 triệu', '15-30 triệu', 'Trên 30 triệu'];

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (query) queryParams.append('query', query);
    if (location) queryParams.append('location', location);
    if (experience) queryParams.append('experience', experience);
    if (salary) queryParams.append('salary', salary);

    // Redirect to search results page with the parameters
    router.push(`/candidate/job_searching2?${queryParams.toString()}`);
  };
  const topCarreer = [
    {
      id: 1,
      image: '/static/images/business.png',
      title: 'Kinh doanh / bán hàng',
      quantity: '12312 việc làm',
    },
    {
      id: 2,
      image: '/static/images/business.png',
      title: 'Kinh doanh / bán hàng',
      quantity: '12312 việc làm',
    },
  ];

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
  ];
  const slides = [
    {
      url: 'https://www.careerabroad.ca/wp-content/uploads/2016/02/job.jpg',
    },
    {
      url: 'https://www.boydcorp.com/images/careers/Career-Opportunities.jpg',
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
  const [tabState, setTabState] = useState(0);
  const toggleTab = (index) => {
    setTabState(index);
  };
  const nextTab = () => {
    const isLastTab = tabState === 3;
    const newTab = isLastTab ? 0 : tabState + 1;
    setTabState(newTab);
  };
  const preTab = () => {
    const isFirstTab = tabState === 0;
    const newTab = isFirstTab ? 3 : tabState - 1;
    setTabState(newTab);
  };
  //get current Posts
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentEmployers = employers.slice(firstItemIndex, lastItemIndex);

  const getListTrendingJob = async () => {
    try {
      const listTrendingJob = await axios.post(`${BACK_END_PORT}/job-post/get-all-active-job-post`);
      if (listTrendingJob.data.statusCode === 200) {
        setTrends(listTrendingJob.data.data);
      }
    } catch (e) {}
  };
  const handleJobDetail = (id) => {
    router.push({
      pathname: `/candidate/job-details/${id}`,
    });
  };

  const TrendContent = trends.map((trend) => {
    return (
      <Stack
        rounded='10px'
        p='20px 10px'
        gap='20px'
        bg='white'
        cursor={'pointer'}
        onClick={() => handleJobDetail(trend.id)}
      >
        <Flex gap='14px'>
          <Box bg='black' boxSize='60px' rounded='full'></Box>
          <Stack gap='12px'>
            <Flex gap='8px' alignItems='center'>
              {trend.tag === 1 ? (
                <Flex rounded='12px' bg='#F98820' p=' 10px 20px'>
                  <Text
                    color='white'
                    fontSize='16px'
                    fontWeight='600'
                    lineHeight='10px'
                    letterSpacing='0.2px'
                  >
                    Gấp
                  </Text>
                </Flex>
              ) : trend.tag === 2 ? (
                <Flex rounded='12px' bg='#D22F2F' p=' 10px 20px'>
                  <Text
                    color='White'
                    fontSize='16px'
                    fontWeight='600'
                    lineHeight='10px'
                    letterSpacing='0.2px'
                  >
                    Hot
                  </Text>
                </Flex>
              ) : (
                ''
              )}

              <Text fontSize='16px' fontWeight='700' lineHeight='18px' letterSpacing='0.2px'>
                {trend.title}
              </Text>
            </Flex>
            <Text
              color='#727272'
              fontSize='14px'
              fontWeight='700'
              lineHeight='18px'
              letterSpacing='0.2px'
            >
              {trend.company_name}
            </Text>
          </Stack>
        </Flex>
        <Flex gap='8px'>
          <Flex rounded='12px' bg='#F4F5F5' p=' 10px 20px'>
            <Text fontSize='16px' fontWeight='600' lineHeight='10px' letterSpacing='0.2px'>
              {totalPriceItemInCart(trend?.salary.toString(), 1)} VND
            </Text>
          </Flex>
          <Flex rounded='12px' bg='#F4F5F5' p=' 10px 20px'>
            <Text fontSize='16px' fontWeight='600' lineHeight='10px' letterSpacing='0.2px'>
              {trend?.job_location}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    );
  });
  const slicedData = TrendContent.slice(startIndex, endIndex);

  const HomeContent = (
    <div>
      <CandidateHeader />
      <Flex
        h='465px'
        px='150px'
        display='flex'
        justifyContent='space-evenly'
        alignItems='flex-end'
        bgImage="url('static/images/rectangle_33.png')" // Replace with your image path
        bgSize='cover'
        bgPosition='center'
        bgRepeat='no-repeat'
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
              onChange={(e) => setLocation(e.target.value)}
              defaultValue='' // for a controlled component
            >
              <option value='' hidden disabled>
                Địa Điểm
              </option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
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
              onChange={(e) => setExperience(e.target.value + 1)}
              defaultValue=''
            >
              <option value='' hidden disabled>
                Kinh Nghiệm
              </option>
              {experiences.map((exp, index) => (
                <option key={exp} value={index}>
                  {exp}
                </option>
              ))}
            </Select>
            <Select
              focusBorderColor='#F98820'
              borderColor='transparent'
              icon={<Icon as={BsChevronDown} />}
              className='unw-homepage-select'
              bg='gray.100'
              size='lg'
              rounded='xl'
              onChange={(e) => setSalary(e.target.value)}
              defaultValue=''
            >
              <option value='' hidden disabled>
                Mức Lương
              </option>
              {salaries.map((sal, index) => (
                <option key={sal} value={index}>
                  {sal}
                </option>
              ))}
            </Select>
          </Box>
          <Button
            bg='#F98820'
            textColor='white'
            py='16px'
            px='30px'
            mt='16px'
            fontSize='2xl'
            onClick={handleSearch}
          >
            Tìm Kiếm
          </Button>
        </Box>
        <Box>
          <Image width='600' height='600' src='/static/images/home_page1.png' />
        </Box>
      </Flex>
      <>
        <Stack px='305px' py='50px' gap='32px' bg='#F0EAE9'>
          <Text fontSize='32px' fontWeight='800' lineHeight='40px' letterSpacing='0.1px'>
            Việc làm hấp dẫn
          </Text>
          <Flex justifyContent='space-between' alignItems='center'>
            <DropDown data={locations} />
            <Flex gap='24px'>
              <Box fontSize='42px' cursor='pointer' onClick={preTab}>
                <BsArrowLeftCircle />
              </Box>
              <Flex
                alignItems='center'
                justifyContent='center'
                p='12px'
                bg={tabState === 0 ? 'orange' : 'white'}
                rounded='12px'
                onClick={() => toggleTab(0)}
                cursor='pointer'
              >
                <Text
                  color={tabState === 0 ? 'white' : 'black'}
                  fontSize='16px'
                  fontWeight='700'
                  lineHeight='18px'
                  letterSpacing='0.2px'
                >
                  Ngẫu nhiên
                </Text>
              </Flex>

              <Flex
                alignItems='center'
                justifyContent='center'
                p='12px'
                bg={tabState === 1 ? 'orange' : 'white'}
                rounded='12px'
                onClick={() => toggleTab(1)}
                cursor='pointer'
              >
                <Text
                  color={tabState === 1 ? 'white' : 'black'}
                  fontSize='16px'
                  fontWeight='700'
                  lineHeight='18px'
                  letterSpacing='0.2px'
                >
                  Hà Nội
                </Text>
              </Flex>
              <Flex
                alignItems='center'
                justifyContent='center'
                p='12px'
                bg={tabState === 2 ? 'orange' : 'white'}
                rounded='12px'
                onClick={() => toggleTab(2)}
                cursor='pointer'
              >
                <Text
                  color={tabState === 2 ? 'white' : 'black'}
                  fontSize='16px'
                  fontWeight='700'
                  lineHeight='18px'
                  letterSpacing='0.2px'
                >
                  Cầu Giấy
                </Text>
              </Flex>
              <Flex
                alignItems='center'
                justifyContent='center'
                p='12px'
                bg={tabState === 3 ? 'orange' : 'white'}
                rounded='12px'
                onClick={() => toggleTab(3)}
                cursor='pointer'
              >
                <Text
                  color={tabState === 3 ? 'white' : 'black'}
                  fontSize='16px'
                  fontWeight='700'
                  lineHeight='18px'
                  letterSpacing='0.2px'
                >
                  Hồ Chí Minh
                </Text>
              </Flex>
              <Box fontSize='42px' onClick={nextTab} cursor='pointer'>
                <BsArrowRightCircle />
              </Box>
            </Flex>
          </Flex>
          <Grid templateColumns='repeat(3, 1fr)' gap='30px'>
            {slicedData}
          </Grid>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={TrendContent.length}
            changePage={changePage}
          />
        </Stack>
      </>
      <Stack px='305px' py='50px'>
        <Text fontSize='4xl' fontWeight='semibold '>
          Công ty hàng đầu
        </Text>
        <Flex alignItems='center' justifyContent='center' gap='32px'>
          <Box fontSize='42px' cursor='pointer'>
            <BsArrowLeftCircle />
          </Box>
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {currentEmployers.map((employer) => {
              return (
                <Stack minH='380px' maxH='380px' minW='250px' maxW='250px' textAlign='center'>
                  <Image className='mx-auto' width='250' height='100' src={employer.image}></Image>
                </Stack>
              );
            })}
          </Grid>
          <Box fontSize='42px' cursor='pointer'>
            <BsArrowRightCircle />
          </Box>
        </Flex>
      </Stack>
      <Stack px='305px' py='50px'>
        <Text fontSize='4xl' fontWeight='semibold '>
          Cửa hàng uy tín
        </Text>
        <Flex alignItems='center' justifyContent='center' gap='32px'>
          <Box fontSize='42px' cursor='pointer'>
            <BsArrowLeftCircle />
          </Box>
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {currentEmployers.map((employer) => {
              return (
                <Stack minH='380px' maxH='380px' minW='250px' maxW='250px' textAlign='center'>
                  <Image className='mx-auto' width='250' height='100' src={employer.image}></Image>
                </Stack>
              );
            })}
          </Grid>
          <Box fontSize='42px' cursor='pointer'>
            <BsArrowRightCircle />
          </Box>
        </Flex>
      </Stack>
      <Stack px='305px' py='50px' gap='32px' bg='#F0EAE9'>
        <Text fontSize='32px' fontWeight='800' lineHeight='40px' letterSpacing='0.1px'>
          Top ngành nghề nổi bật
        </Text>
        <Grid templateColumns='repeat(4, 1fr)' gap='30px'>
          {topCarreer.map((career) => {
            return (
              <Stack
                rounded='10px'
                p='20px 10px'
                gap='20px'
                bg='white'
                justifyContent='center'
                alignItems='center'
              >
                <Image src={career.image} width='75' height='75' />
                <Text fontSize='20px' fontWeight='800' lineHeight='40px' letterSpacing='0.2px'>
                  Kinh doanh / bán hàng
                </Text>
                <Text
                  color='#FF6B00'
                  fontSize='16px'
                  fontWeight='800'
                  lineHeight='40px'
                  letterSpacing='0.2px'
                >
                  12312 việc làm
                </Text>
              </Stack>
            );
          })}
        </Grid>
      </Stack>
      <Stack
        h='400px'
        backgroundImage={`url(${backgroundFooter})`}
        backgroundSize='cover' // Adjust background properties as needed
        backgroundRepeat='no-repeat'
        justifyContent='center'
      >
        <Stack justifyContent='center' w='50%' alignItems='center'>
          <Stack gap='24px'>
            <Flex gap='12px' alignItems='center'>
              <Image src={speakerIcon}></Image>
              <Text
                color='white'
                fontSize='24px'
                fontWeight='700'
                lineHeight='18px'
                letterSpacing='0.2px'
              >
                Dành cho nhà tuyển dụng
              </Text>
            </Flex>
            <Text
              color='white'
              fontSize='42px'
              fontWeight='700'
              lineHeight='18px'
              letterSpacing='0.2px'
            >
              Bạn có vị trí cần đăng tuyển ?
            </Text>
            <Text
              color='white'
              fontSize='16px'
              fontWeight='700'
              lineHeight='18px'
              letterSpacing='0.2px'
            >
              Chung tôi có nhiều giải pháp tối ưu phù hợp nhiều loại hình công ty và tiêu chuẩn
              riêng
            </Text>
            <Flex
              p='24px'
              bg='#30B685'
              w='50%'
              justifyContent='center'
              rounded='10px'
              alignItems='center'
            >
              <Text
                color='white'
                fontSize='24px'
                fontWeight='500'
                lineHeight='18px'
                letterSpacing='0.2px'
              >
                Đăng tin tuyển dụng
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );

  useEffect(() => {
    getListTrendingJob();
  }, []);

  return <div>{HomeContent}</div>;
}

export default LandingPage;
