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
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import CandidateHeader from '../../components/layout/candidate/header';
import backgroundImg from '../../public/static/images/rectangle_33.png';
import DropDown from '../../components/layout/candidate/dropDownLocation';
import speakerIcon from '../../public/static/images/icon/speaker.svg';
import { useRouter } from 'next/router';
function JobSearching2() {
  const router = useRouter();
  const { query, location, experience, salary } = router.query;

  const backgroundFooter = '/static/images/footer_background.png';
  const trends = [
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
  ];
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

  const [tabState, setTabState] = useState(0);
  const toggleTab = (index) => {
    setTabState(index);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  //get current Posts
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentEmployers = employers.slice(firstItemIndex, lastItemIndex);

  //change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  const [value, setValue] = useState('1');

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
        <Tabs>
          <TabList borderBottom={'none'}>
            <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
              Tất cả tài khoản
            </Tab>
            <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
              Nhà tuyển dụng
            </Tab>
            <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
              Ứng viên
            </Tab>
            <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
              Quản trị viên
            </Tab>
          </TabList>
        </Tabs>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Text fontSize='16px' fontWeight='700' lineHeight='18px'>
              Ưu tiên hiển thị theo:
            </Text>
            <Radio value='1' size='lg' colorScheme='orange' border='1px solid black'>
              Liên quan
            </Radio>
            <Radio value='2' size='lg' colorScheme='orange' border='1px solid black'>
              Ngày đăng
            </Radio>
            <Radio value='3' size='lg' colorScheme='orange' border='1px solid black'>
              Ngày cập nhật
            </Radio>
            <Radio value='4' size='lg' colorScheme='orange' border='1px solid black'>
              Lương cao đến thấp
            </Radio>
            <Radio value='5' size='lg' colorScheme='orange' border='1px solid black'>
              Cần tuyển gấp
            </Radio>
          </Stack>
        </RadioGroup>
        <Flex gap='32px'>
          <Stack gap='32px' flex='1 0 0'>
            {fakeData.map((data) => (
              <Flex rounded='10px' bg='white' justifyContent='space-between'>
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
          <Stack gap='16px'>
            <Stack bg='white' w='320px' justifyContent='center' rounded='12px' p='20px'>
              <Stack alignItems='center'>
                <Image src='/static/images/avatar_icon.png' width='100' height='100'></Image>
              </Stack>
              <Stack gap='24px' flex='1 0 0'>
                <Text fontSize='24px' fontWeight='600' lineHeight='18px'>
                  Công ty ABC
                </Text>
                <Box borderTop='1px solid #CACACA'></Box>
                <Stack gap='16px'>
                  <Text fontSize='20px' fontWeight='600' lineHeight='18px' color='#727272'>
                    Senior HR
                  </Text>
                  <Flex gap='24px'>
                    <Flex gap='12px' alignItems='center'>
                      <Image src='/static/images/icon/speaker_2.svg' width='24' height='24'></Image>
                      <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#727272'>
                        14-18 triệu
                      </Text>
                    </Flex>
                    <Flex gap='12px' alignItems='center'>
                      <Image src='/static/images/business.png' width='24' height='24'></Image>
                      <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#727272'>
                        31/08/2023
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
                <Box borderTop='1px solid #CACACA'></Box>
                <Stack gap='16px'>
                  <Text fontSize='20px' fontWeight='600' lineHeight='18px' color='#727272'>
                    Nhân viên chuyển phát nhanh
                  </Text>
                  <Flex gap='24px'>
                    <Flex gap='12px' alignItems='center'>
                      <Image src='/static/images/business.png' width='24' height='24'></Image>
                      <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#727272'>
                        14-18 triệu
                      </Text>
                    </Flex>
                    <Flex gap='12px' alignItems='center'>
                      <Image src='/static/images/icon/speaker_2.svg' width='24' height='24'></Image>
                      <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#727272'>
                        31/08/2023
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
                <Box></Box>
                <Flex
                  bg='#F6871F'
                  padding='16px'
                  justifyContent='center'
                  alignItems='center'
                  rounded='12px'
                >
                  <Text fontSize='20px' color='white' fontWeight='500' lineHeight='18px'>
                    Tìm hiểu ngay
                  </Text>
                </Flex>
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

export default JobSearching2;
