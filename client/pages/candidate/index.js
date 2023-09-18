import { useEffect, useState } from 'react';
import { BsChevronDown, BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Box, Input, Button, Icon, Text, Stack, Grid, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import CandidateHeader from '../../components/layout/candidate/header';
import DropDown from '../../components/layout/candidate/dropDownLocation';
import speakerIcon from '../../public/static/images/icon/speaker.svg';
import axios from 'axios';
import { useRouter } from 'next/router';

const BACK_END_PORT = 'http://localhost:5000';

function LandingPage() {
  const router = useRouter();
  const backgroundFooter = '/static/images/footer_background.png';
  const [trends, setTrends] = useState([
    {
      id: 1,
      avatar: '',
      title: 'Nhân viên thiết kế. in ấn.....',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI...',
      salary: '25-30TRIỆU',
      location: 'Hà Nội',
      tag: 1,
    },
    {
      id: 2,
      avatar: '',
      title: 'Nhân viên thiết kế. in ấn.....',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI...',
      salary: '25-30TRIỆU',
      location: 'Hà Nội',
      tag: 2,
    },
    {
      id: 3,
      avatar: '',
      title: 'Nhân viên thiết kế. in ấn.....',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI...',
      salary: '25-30TRIỆU',
      location: 'Hà Nội',
      tag: 1,
    },
    {
      id: 4,
      avatar: '',
      title: 'Nhân viên thiết kế. in ấn.....',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI...',
      salary: '25-30TRIỆU',
      location: 'Hà Nội',
      tag: 0,
    },
    {
      id: 5,
      avatar: '',
      title: 'Nhân viên thiết kế. in ấn.....',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI...',
      salary: '25-30TRIỆU',
      location: 'Hà Nội',
      tag: 1,
    },
    {
      id: 6,
      avatar: '',
      title: 'Nhân viên thiết kế. in ấn.....',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI...',
      salary: '25-30TRIỆU',
      location: 'Hà Nội',
      tag: '1',
    },
    {
      id: 7,
      avatar: '',
      title: 'Nhân viên thiết kế. in ấn.....',
      company: 'CÔNG TY ABC CỔ PHẦN VÀ THƯƠNG MẠI...',
      salary: '25-30TRIỆU',
      location: 'Hà Nội',
      tag: 1,
    },
  ]);
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

    {
      id: 3,
      image: '/static/images/business.png',
      title: 'Kinh doanh / bán hàng',
      quantity: '12312 việc làm',
    },
    {
      id: 4,
      image: '/static/images/business.png',
      title: 'Kinh doanh / bán hàng',
      quantity: '12312 việc làm',
    },
    {
      id: 5,
      image: '/static/images/business.png',
      title: 'Kinh doanh / bán hàng',
      quantity: '12312 việc làm',
    },
    {
      id: 6,
      image: '/static/images/business.png',
      title: 'Kinh doanh / bán hàng',
      quantity: '12312 việc làm',
    },
    {
      id: 7,
      image: '/static/images/business.png',
      title: 'Kinh doanh / bán hàng',
      quantity: '12312 việc làm',
    },
    {
      id: 8,
      image: '/static/images/business.png',
      title: 'Kinh doanh / bán hàng',
      quantity: '12312 việc làm',
    },
  ];
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  //get current Posts
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentEmployers = employers.slice(firstItemIndex, lastItemIndex);

  //change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  const getListTrendingJob = async () => {
    try {
      const listTrendingJob = await axios.post(`${BACK_END_PORT}/job-post/get-all-job-post`);
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
              {trend.salary}
            </Text>
          </Flex>
          <Flex rounded='12px' bg='#F4F5F5' p=' 10px 20px'>
            <Text fontSize='16px' fontWeight='600' lineHeight='10px' letterSpacing='0.2px'>
              {trend.job_location}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    );
  });

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
          {TrendContent}
        </Grid>
      </Stack>
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
                  <Text fontSize='4xl' fontWeight='medium'>
                    {employer.Name}
                  </Text>
                  <Text fontSize='3xl'>{employer.Role} </Text>
                  <Text fontSize='2xl'>{employer.salary}</Text>
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
                  <Text fontSize='4xl' fontWeight='medium'>
                    {employer.Name}
                  </Text>
                  <Text fontSize='3xl'>{employer.Role} </Text>
                  <Text fontSize='2xl'>{employer.salary}</Text>
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
      {/* <Paging
        itemsPerPage={itemsPerPage}
        totalItems={employers.length}
        changePage={changePage}
        bgColor='#F98820'
        tColor='white'
      /> */}
    </div>
  );

  useEffect(() => {
    getListTrendingJob();
  }, []);

  console.log(trends);
  return <div>{HomeContent}</div>;
}

export default LandingPage;
