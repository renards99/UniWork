import { Box, Flex, Text, Stack, Grid, GridItem, Collapse, Input, Button } from '@chakra-ui/react';
import { HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { HiMiniMapPin, HiOutlineMapPin } from 'react-icons/hi2';
import { CiSearch } from 'react-icons/ci';
import { LiaNewspaperSolid } from 'react-icons/lia';
import { BsExclamationCircle, BsGlobe } from 'react-icons/bs';
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

function employerDetails() {
  const [tab, setTab] = useState(3);
  const [show, setShow] = useState(false);
  const itemFilter = { location: ['Hà Nội', 'Hà Giang', 'Kon tum'] };
  const fakeData = [
    {
      title: 'NHÂN VIÊN HÀNH CHÍNH NHÂN SỰ - 1 NĂM KINH NGHIỆM THU NHẬP 9TR-12TR',
      company: 'CÔNG TY CỔ PHẦN MODERN LIGHT VIỆT NAM',
      salary: '9-12 triệu',
      location: 'Hà Nội',
      expiredAt: 'Còn 12 ngày nữa để ứng tuyển',
      image: '',
    },
    {
      title: 'NHÂN VIÊN HÀNH CHÍNH NHÂN SỰ - 1 NĂM KINH NGHIỆM THU NHẬP 9TR-12TR',
      company: 'CÔNG TY CỔ PHẦN MODERN LIGHT VIỆT NAM',
      salary: '9-12 triệu',
      location: 'Hà Nội',
      expiredAt: 'Còn 12 ngày nữa để ứng tuyển',
      image: '',
    },
    {
      title: 'NHÂN VIÊN HÀNH CHÍNH NHÂN SỰ - 1 NĂM KINH NGHIỆM THU NHẬP 9TR-12TR',
      company: 'CÔNG TY CỔ PHẦN MODERN LIGHT VIỆT NAM',
      salary: '9-12 triệu',
      location: 'Hà Nội',
      expiredAt: 'Còn 12 ngày nữa để ứng tuyển',
      image: '',
    },
  ];
  const companyDetails = {
    phone: '0393958404',
    link: 'https://cmcglobal.com.vn/',
    location: 'Tòa nhà Toyota Thanh Xuân, 315 Trường Chinh, Thanh Xuân, Hà Nội',
  };
  const handleToggle = () => setShow(!show);
  const handleTab = (value) => setTab(value);
  // const employerInfo = <Text></Text>
  return (
    <Box>
      <EmployerHeader />

      <Stack alignItems='flex-start' gap='24px' p='28px'>
        <Flex alignItems='flex-start' display='inline-flex' gap='12px'>
          <Flex
            p='4px 0px'
            alignItems='center'
            gap='8px'
            cursor='pointer'
            onClick={() => handleTab(1)}
            borderBottom={tab === 1 ? '2px solid #323541' : 'none'}
            opacity={tab === 1 ? '1' : '0.5'}
          >
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              Thông tin cá nhân
            </Text>
          </Flex>
          <Flex
            p='4px 0px'
            alignItems='center'
            gap='8px'
            cursor='pointer'
            onClick={() => handleTab(2)}
            borderBottom={tab === 2 ? '2px solid #323541' : 'none'}
            opacity={tab === 2 ? '1' : '0.5'}
          >
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              giấy phép kinh doanh
            </Text>
          </Flex>
          <Flex
            p='4px 0px'
            alignItems='center'
            gap='8px'
            onClick={() => handleTab(3)}
            borderBottom={tab === 3 ? '2px solid #323541' : 'none'}
            opacity={tab === 3 ? '1' : '0.5'}
            cursor='pointer'
          >
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              Thông tin doanh nghiệp
            </Text>
          </Flex>
        </Flex>
        {tab === 3 ? (
          <Stack>
            {' '}
            <Stack flexShrink='0' gap='0' w='full' h='335px' pos='relative'>
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
                bg='white'
                rounded='full'
                w='162px'
                h='162px'
                pos='absolute'
                top='150px'
                left='36px'
                overflow='hidden'
              ></Flex>
              <Flex
                bg='#323541'
                w='full'
                h='104px'
                roundedBottom='12px'
                alignItems='center'
                justifyContent='center'
              >
                <Flex gap='98px'>
                  <Stack>
                    <Text fontSize='24px' fontWeight='800' lineHeight='32px' color='white'>
                      CÔNG TY CỔ PHẦN MODERN LIGHT VIỆT NAM
                    </Text>
                    <Flex gap='12px'>
                      <Flex
                        fontSize='16px'
                        gap='12px'
                        fontWeight='500'
                        color='white'
                        justifyContent='center'
                      >
                        <Box fontSize='24px'>
                          <BsGlobe />
                        </Box>
                        <Text lineHeight='24px'>https://cmcglobal.com.vn/</Text>
                      </Flex>
                      <Flex
                        fontSize='16px'
                        gap='12px'
                        fontWeight='500'
                        color='white'
                        justifyContent='center'
                      >
                        <Box fontSize='24px'>
                          <HiOutlineBuildingOffice2 />
                        </Box>
                        <Text lineHeight='24px'>125-199 nhân viên</Text>
                      </Flex>
                    </Flex>
                  </Stack>
                  <Box>
                    <Flex
                      justifyContent='center'
                      alignItems='center'
                      bg='#323541'
                      color='white'
                      rounded='20px'
                      py='8px'
                      px='12px'
                      fontSize='16px'
                      gap='20px'
                      border='1px solid white'
                    >
                      <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Edit Profile
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Stack>
            <Grid templateColumns='repeat(3, 1fr)' h='90vh' mt='52px'>
              <GridItem colSpan='2'>
                {/*Left */}
                <Stack gap='24px'>
                  <Box colSpan='2' border='1px' borderColor='#D7D7D7' rounded='xl'>
                    <Stack p='12px' pos='relative'>
                      <Text fontSize='20px' fontWeight='600'>
                        Giới Thiệu Công Ty
                      </Text>
                      <Collapse startingHeight={94} in={show}>
                        <Text fontSize='16px' fontWeight='semibold' color='#727272'>
                          CMC Global was born from 25 years of experience in the field of ICT and
                          more than 10 years of experience in the field of Outsourcing of CMC
                          Technology Group, with the mission of becoming a supplier of high quality
                          software engineer human resources, providing high quality software
                          engineering human resources. providing IT solutions and services to the
                          international market. Currently, CMC Global owns 700++ employees and a
                          member company in Japan. CMC Technology Group and CMC Global are proud to
                          be one of the leading enterprises in Vietnam in the field of software
                          development and provision of solutions and services. Sharing the same
                          prerequisites for the development of CMC Group: Creativity,
                          Professionalism, Teamwork, CMC Global always strives constantly to build a
                          strong team, pioneering in Vietnamese technology. and increasingly
                          reaching out to the world. With the goal of bringing CMC's high-tech
                          products and services to the world, CMC Global is building the first
                          foundations with ambition: to have at least 2,000 people working abroad by
                          2022; software and service revenue from the export market is larger than
                          the domestic market; products and services of world-class standards. In
                          the future, in addition to CMC Japan's member company in Japan, CMC Global
                          will open more branches in Asian countries such as Singapore,
                          Malaysia,....
                        </Text>
                      </Collapse>
                      <Flex
                        cursor='pointer'
                        py='12px'
                        fontSize='16px'
                        fontWeight='semibold'
                        color='#727272'
                        alignItems='center'
                        gap='6'
                        bg='white'
                        w='full'
                        onClick={handleToggle}
                      >
                        <Text>Xem Thêm</Text>
                        {show ? (
                          <Box transition='transform 0.3s ease-in-out'>
                            <HiChevronDown />
                          </Box>
                        ) : (
                          <Box transform='rotate(-180deg)' transition='transform 0.3s ease-in-out'>
                            <HiChevronDown />
                          </Box>
                        )}
                      </Flex>
                    </Stack>
                  </Box>
                  <GridItem colSpan='2'>
                    <Flex
                      px='24px'
                      pb='8px'
                      pt='16px'
                      bg='#323541'
                      p='12px'
                      fontSize='18px'
                      roundedTop='12px'
                      gap='12px'
                      alignItems='flex-start'
                    >
                      <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
                        Tin tuyển dụng
                      </Text>
                    </Flex>
                    <Stack
                      py='24px'
                      px='12px'
                      justifyContent='space-between'
                      gap='12px'
                      roundedBottom='20px'
                      border='1px'
                      borderColor='#D7D7D7'
                    >
                      <Flex
                        justifyContent='space-between'
                        alignSelf='stretch'
                        alignItems='center'
                        p='0px'
                      >
                        <Flex gap='24px'>
                          <Flex
                            w={'406px'}
                            h={'40px'}
                            py='22px'
                            pl='24px'
                            pr='12px'
                            border='1px solid #818181'
                            backgroundColor={'white'}
                            borderRadius={'12px'}
                            alignItems={'center'}
                          >
                            <CiSearch color={'#323541'} style={{ width: '28px', height: '24px' }} />
                            <Input
                              border='none'
                              placeHolder={'Tìm kiếm'}
                              backgroundColor={'white'}
                              fontSize={'16px'}
                              _hover={{ outline: 'none' }}
                              _focusVisible={{ outline: 'none' }}
                              // value={search}
                              // onChange={(e) => handleSearch(e.target.value)}
                            />
                          </Flex>
                          <DropDown data={itemFilter.location} />
                          <Button
                            w={'132px'}
                            h={'40px'}
                            py='22px'
                            px={'24px'}
                            backgroundColor={'#323541'}
                            color={'#fff'}
                            borderRadius={'12px'}
                            fontSize={'14px'}
                            fontWeight={'600'}
                            lineHeight='24px'
                          >
                            Tìm kiếm
                          </Button>
                        </Flex>
                      </Flex>
                      {fakeData.map((post) => {
                        return (
                          <Flex
                            px='12px'
                            py='16px'
                            alignItems='flex-start'
                            gap='38px'
                            rounded='12px'
                            border='1px'
                            borderColor='#D7D7D7'
                            _hover={{ bgColor: '#1311311A' }}
                            transition='0.3s'
                          >
                            <Box flexShrink='0'>
                              <Image src={PostImage} width='100' height='100'></Image>
                            </Box>
                            <Stack
                              justifyContent='space-between'
                              flex='1 0 0'
                              alignSelf='stretch'
                              alignItems='flex-start'
                              gap='20px'
                            >
                              <Flex
                                alignItems='flex-start'
                                alignSelf='stretch'
                                justifyContent='space-between'
                                gap='4px'
                              >
                                <Stack alignItems='flex-start'>
                                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                                    {post.title}
                                  </Text>
                                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                                    {post.company}
                                  </Text>
                                </Stack>
                                <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                                  {post.salary}
                                </Text>
                              </Flex>
                              <Flex gap='8px'>
                                <Flex
                                  py='2px'
                                  px='8px'
                                  alignItems='flex-start'
                                  bg='#D7D7D7'
                                  rounded='4px'
                                >
                                  <Text
                                    fontSize='12px'
                                    fontWeight='500'
                                    lineHeight='20px'
                                    color='#323541'
                                  >
                                    {post.location}
                                  </Text>
                                </Flex>
                                <Flex
                                  py='2px'
                                  px='8px'
                                  alignItems='flex-start'
                                  bg='#D7D7D7'
                                  rounded='4px'
                                >
                                  <Text
                                    fontSize='12px'
                                    fontWeight='500'
                                    lineHeight='20px'
                                    color='#323541'
                                  >
                                    {post.expiredAt}
                                  </Text>
                                </Flex>
                              </Flex>
                            </Stack>
                          </Flex>
                        );
                      })}
                      {/* <Paging
                  itemsPerPage={itemsPerPage}
                  totalItems={posts.length}
                  changePage={changePage}
                  tColor='#323541'
                  bgColor='#D7D7D7'
                /> */}
                    </Stack>
                  </GridItem>
                </Stack>
              </GridItem>
              {/*Right*/}
              <GridItem>
                <Box px='24px'>
                  <Flex
                    px='24px'
                    pb='8px'
                    pt='16px'
                    bg='#323541'
                    p='12px'
                    fontSize='18px'
                    roundedTop='12px'
                    gap='12px'
                    alignItems='flex-start'
                  >
                    <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Thông tin liên hệ
                    </Text>
                  </Flex>
                  <Stack
                    p='24px'
                    justifyContent='center'
                    gap='12px'
                    roundedBottom='20px'
                    border='1px'
                    borderColor='#D7D7D7'
                  >
                    <Flex gap='20px'>
                      <Box fontSize='24px'>
                        <FiPhone />
                      </Box>
                      <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                        {companyDetails.phone}
                      </Text>
                    </Flex>
                    <Flex gap='20px'>
                      <Box fontSize='24px'>
                        <BsGlobe />
                      </Box>
                      <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                        {companyDetails.link}
                      </Text>
                    </Flex>
                    <Flex gap='20px'>
                      <Box fontSize='24px'>
                        <HiMiniMapPin />
                      </Box>
                      <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                        {companyDetails.location}
                      </Text>
                    </Flex>

                    <Stack gap='20px'>
                      <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Địa chỉ trụ sở chính:
                      </Text>
                      <Box bg='#D9D9D9' h='full' w='full'></Box>
                    </Stack>
                  </Stack>
                </Box>
              </GridItem>
            </Grid>
          </Stack>
        ) : tab === 2 ? (
          <Text>this is license</Text>
        ) : tab === 1 ? (
          <Text>this is something</Text>
        ) : (
          ''
        )}
      </Stack>
    </Box>
  );
}

export default employerDetails;
