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
} from '@chakra-ui/react';
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
import StatusFrame from '../../components/layout/admin/statusFrame';
import { IoEllipse } from 'react-icons/io5';

function employerDetails() {
  const [tab, setTab] = useState(1);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('1');
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
  const menuData = {
    jobType: ['Shipper', 'Worker', 'Khác', '...'],
    scale: ['10-20', '25-90', '100-200', '...'],
    gender: ['Nam', 'Nữ'],
  };
  const handleEdit = () => setEdit(!edit);
  const handleToggle = () => setShow(!show);
  const handleTab = (value) => setTab(value);

  const employerInfo = (
    <Stack>
      {edit ? (
        <Flex gap='32px'>
          <Box>
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
                Thông tin doanh nghiệp
              </Text>
            </Flex>
            <Stack
              p='24px 24px 32px 24px'
              justifyContent='center'
              gap='24px'
              border='1px solid #818181'
            >
              <Flex alignItems='center' gap='20px' p='0px'>
                <Box bg='black' w='100px' h='100px'></Box>
                <Flex
                  w='132px'
                  p='8px 12px'
                  justifyContent='center'
                  alignItems='center'
                  gap='20px'
                  rounded='20px'
                  bg='#323541'
                >
                  <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='white'>
                    Đổi logo
                  </Text>
                </Flex>
              </Flex>
              <Stack gap='8px' p='0px'>
                <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                  Doanh nghiệp của bạn là:
                </Text>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction='row'>
                    <Radio value='1'>
                      <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Cửa hàng
                      </Text>
                    </Radio>
                    <Radio value='2'>
                      <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Cửa hàng
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
              <Stack gap='8px' p='0px'>
                <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                  Tên doanh nghiệp:
                </Text>
                <Input
                  p='24px 20px'
                  placeholder='Chi nhánh công ty cổ phần đầu tư xây dựng'
                  rounded='12px'
                  border='1px solid #323541'
                  focusBorderColor='none'
                  _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                  fontSize='16px'
                  fontWeight='600px'
                  lineHeight='24px'
                ></Input>
              </Stack>
              <Stack gap='8px' p='0px'>
                <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                  Email:
                </Text>
                <Input
                  p='24px 20px'
                  placeholder='Email'
                  rounded='12px'
                  border='1px solid #323541'
                  focusBorderColor='none'
                  _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                  fontSize='16px'
                  fontWeight='600px'
                  lineHeight='24px'
                  value='hanhfchinh@lechongvien.vn'
                ></Input>
              </Stack>
              <Stack gap='8px' p='0px'>
                <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                  Số điện thoại
                </Text>
                <Input
                  p='24px 20px'
                  placeholder='Số điện thoại'
                  rounded='12px'
                  border='1px solid #323541'
                  focusBorderColor='none'
                  _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                  fontSize='16px'
                  fontWeight='600px'
                  lineHeight='24px'
                ></Input>
              </Stack>
              <Stack gap='8px' p='0px'>
                <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                  Website:
                </Text>
                <Input
                  p='24px 20px'
                  placeholder='Https://'
                  rounded='12px'
                  border='1px solid #323541'
                  focusBorderColor='none'
                  _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                  fontSize='16px'
                  fontWeight='600px'
                  lineHeight='24px'
                ></Input>
              </Stack>
              <Stack gap='8px' p='0px'>
                <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                  Tên doanh nghiệp:
                </Text>
                <DropDown data={menuData.jobType} />
              </Stack>
              <Flex gap='20px' alignItems='center' p='0px'>
                <Stack gap='8px' p='0px' w='276px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Mã số thuế:
                  </Text>
                  <Input
                    p='24px 20px'
                    placeholder='Mã số thuế'
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                  ></Input>
                </Stack>
                <Stack gap='8px' p='0px' w='276px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Quy mô (Số Lượng nhân viên)
                  </Text>
                  <DropDown data={menuData.scale} />
                </Stack>
              </Flex>
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Mô tả doanh nghiệp
                </Text>
                <Textarea
                  p='24px 20px'
                  placeholder='Bạn hãy điền gì đó vào đây...'
                  rounded='12px'
                  border='1px solid #323541'
                  focusBorderColor='none'
                  _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                  fontSize='16px'
                  fontWeight='600px'
                  lineHeight='24px'
                  height='160px'
                ></Textarea>
              </Stack>
            </Stack>
            <Flex p='12px' justifyContent='flex-start' alignItems='center' gap='20px'>
              <Flex
                w='132px'
                p='8px 12px'
                justifyContent='center'
                alignItems='center'
                gap='20px'
                rounded='12px'
                bg='#323541'
                onClick={handleEdit}
                cursor='pointer'
              >
                <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='white'>
                  Lưu
                </Text>
              </Flex>
              <Flex
                w='132px'
                p='8px 12px'
                justifyContent='center'
                alignItems='center'
                gap='20px'
                rounded='12px'
                bg='white'
                border='1px solid #323541'
                onClick={handleEdit}
                cursor='pointer'
              >
                <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='#323541'>
                  Hủy
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Stack gap='28px'>
            <Flex
              w={'406px'}
              h={'40px'}
              p={'8px 12px'}
              backgroundColor={'#e7e7ea'}
              borderRadius={'40px'}
              alignItems={'center'}
            >
              <CiSearch color={'#323541'} style={{ width: '28px', height: '24px' }} />
              <Input
                placeHolder={'Tìm kiếm'}
                backgroundColor={'#e7e7ea'}
                fontSize={'16px'}
                _hover={{ outline: 'none' }}
                _focusVisible={{ outline: 'none' }}
              />
            </Flex>
            <Box>
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
                  Doanh nghiệp mới tạo
                </Text>
              </Flex>
              <Stack
                p='24px 24px 32px 24px'
                justifyContent='center'
                gap='24px'
                border='1px solid #818181'
              >
                {' '}
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
                          <Flex
                            w='132px'
                            p='8px 12px'
                            justifyContent='center'
                            alignItems='center'
                            gap='20px'
                            rounded='12px'
                            bg='#323541'
                          >
                            <Text
                              fontSize='14px'
                              fontWeight='400px'
                              lineHeight='24px'
                              color='white'
                            >
                              Chọn
                            </Text>
                          </Flex>
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
              </Stack>
            </Box>
          </Stack>
        </Flex>
      ) : (
        <Box>
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
                    cursor='pointer'
                    onClick={handleEdit}
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
                        CMC Global was born from 25 years of experience in the field of ICT and more
                        than 10 years of experience in the field of Outsourcing of CMC Technology
                        Group, with the mission of becoming a supplier of high quality software
                        engineer human resources, providing high quality software engineering human
                        resources. providing IT solutions and services to the international market.
                        Currently, CMC Global owns 700++ employees and a member company in Japan.
                        CMC Technology Group and CMC Global are proud to be one of the leading
                        enterprises in Vietnam in the field of software development and provision of
                        solutions and services. Sharing the same prerequisites for the development
                        of CMC Group: Creativity, Professionalism, Teamwork, CMC Global always
                        strives constantly to build a strong team, pioneering in Vietnamese
                        technology. and increasingly reaching out to the world. With the goal of
                        bringing CMC's high-tech products and services to the world, CMC Global is
                        building the first foundations with ambition: to have at least 2,000 people
                        working abroad by 2022; software and service revenue from the export market
                        is larger than the domestic market; products and services of world-class
                        standards. In the future, in addition to CMC Japan's member company in
                        Japan, CMC Global will open more branches in Asian countries such as
                        Singapore, Malaysia,....
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
        </Box>
      )}
    </Stack>
  );
  const licensePage = (
    <Stack w='100%'>
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
          Giấy phép kinh doanh
        </Text>
      </Flex>
      <Stack p='24px' justifyContent='center' gap='24px' border='1px solid #818181'>
        <Flex alignItems='flex-start' gap='20px'>
          <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
            Trạng thái:
          </Text>
          <StatusFrame text='Chưa duyệt'></StatusFrame>
        </Flex>
        <Flex gap='24px' alignItems='center'>
          <Stack justifyContent='space-between' flex='1 0 0'>
            <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
              Giấy phép kinh doanh/Giấy ủy quyền/Thẻ nhân viên
            </Text>
            <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
              Dung lượng file không quá 5MB
            </Text>
            <Stack
              py='20px'
              justifyContent='center'
              alignItems='center'
              rounded='12px'
              gap='12px'
              bg='#1311311A'
            >
              <Text color='#818181' fontSize='14px' fontWeight='600' lineHeight='24px'>
                Chọn hoặc kéo file vào đây
              </Text>
              <Flex
                w='101px'
                h='26px'
                p='8px 12px'
                justifyContent='center'
                alignItems='center'
                gap='20px'
                rounded='20px'
                bg='transparent'
                border='1px solid #323541'
              >
                <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='#323541'>
                  Chọn
                </Text>
              </Flex>
            </Stack>
          </Stack>
          <Stack justifyContent='space-between' flex='1 0 0'>
            <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
              Giấy tờ bổ sung
            </Text>
            <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
              Dung lượng file không quá 5MB
            </Text>
            <Stack
              py='20px'
              justifyContent='center'
              alignItems='center'
              rounded='12px'
              gap='12px'
              bg='#1311311A'
            >
              <Text color='#818181' fontSize='14px' fontWeight='600' lineHeight='24px'>
                Chọn hoặc kéo file vào đây
              </Text>
              <Flex
                w='101px'
                h='26px'
                p='8px 12px'
                justifyContent='center'
                alignItems='center'
                gap='20px'
                rounded='20px'
                bg='transparent'
                border='1px solid #323541'
              >
                <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='#323541'>
                  Chọn
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <Stack w='215px' justifyContent='center' alignItems='flex-start' gap='20px'>
        <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
          Tài liệu hướng dẫn
        </Text>
        <Flex gap='20px' alignItems='center'>
          <Box fontSize='16px'>
            <IoEllipse />
          </Box>
          <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
            Mẫu giấy uỷ quyền
          </Text>
        </Flex>
        <Flex gap='20px' alignItems='center'>
          <Box fontSize='16px'>
            <IoEllipse />
          </Box>
          <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
            Hướng dẫn đăng tải
          </Text>
        </Flex>
      </Stack>
      <Flex p='12px' justifyContent='flex-start' alignItems='center' gap='20px'>
        <Flex
          w='132px'
          p='8px 12px'
          justifyContent='center'
          alignItems='center'
          gap='20px'
          rounded='12px'
          bg='#323541'
          onClick={handleEdit}
          cursor='pointer'
        >
          <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='white'>
            Lưu
          </Text>
        </Flex>
        <Flex
          w='132px'
          p='8px 12px'
          justifyContent='center'
          alignItems='center'
          gap='20px'
          rounded='12px'
          bg='white'
          border='1px solid #323541'
          onClick={handleEdit}
          cursor='pointer'
        >
          <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='#323541'>
            Hủy
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
  const personalInfo = (
    <Stack gap='0' w='620px'>
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
          Giấy phép kinh doanh
        </Text>
      </Flex>
      <Stack p='24px' justifyContent='center' gap='20px' border='1px solid #818181'>
        <Flex gap='20px' alignItems='center' alignSelf='stretch'>
          <Box bg='#323541' w='100px' h='100px' rounded='full'></Box>
          <Flex
            w='132px'
            p='8px 12px'
            justifyContent='center'
            alignItems='center'
            gap='20px'
            rounded='12px'
            bg='#323541'
            border='1px solid #323541'
            cursor='pointer'
          >
            <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='white'>
              Đổi ảnh đại diện
            </Text>
          </Flex>
        </Flex>
        <Flex gap='20px' alignItems='center' alignSelf='stretch'>
          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
            Email:
          </Text>
          <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
            hanhfchinh@lechongvien.vn
          </Text>
        </Flex>

        <Stack gap='8px' p='0px'>
          <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
            Mã số thuế:
          </Text>
          <Input
            p='24px 20px'
            placeholder='Mã số thuế'
            rounded='12px'
            border='1px solid #323541'
            focusBorderColor='none'
            _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
            fontSize='16px'
            fontWeight='600px'
            lineHeight='24px'
          ></Input>
        </Stack>

        <Stack gap='8px' p='0px'>
          <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
            Tên doanh nghiệp:
          </Text>
          <DropDown data={menuData.jobType} />
        </Stack>
        <Flex gap='20px'>
          <Stack gap='8px' p='0px' flex='1 0 0'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Giới tính:
            </Text>
            <DropDown data={menuData.gender} />
          </Stack>
          <Stack gap='8px' p='0px' flex='1 0 0'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Điện thoại:
            </Text>
            <Input
              p='24px 20px'
              placeholder='Số điện thoại'
              rounded='12px'
              border='1px solid #323541'
              focusBorderColor='none'
              _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
              fontSize='16px'
              fontWeight='600px'
              lineHeight='24px'
            ></Input>
          </Stack>
        </Flex>
        <Stack gap='8px' p='0px'>
          <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
            Tên doanh nghiệp:
          </Text>
          <DropDown data={menuData.jobType} />
        </Stack>
        <Stack gap='8px' p='0px' flex='1 0 0'>
          <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
            Facebook:
          </Text>
          <Input
            p='24px 20px'
            placeholder='Nhập tài khoản facebook'
            rounded='12px'
            border='1px solid #323541'
            focusBorderColor='none'
            _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
            fontSize='16px'
            fontWeight='600px'
            lineHeight='24px'
          ></Input>
        </Stack>
      </Stack>
      <Flex p='12px' justifyContent='flex-start' alignItems='center' gap='20px'>
        <Flex
          w='132px'
          p='8px 12px'
          justifyContent='center'
          alignItems='center'
          gap='20px'
          rounded='12px'
          bg='#323541'
          onClick={handleEdit}
          cursor='pointer'
        >
          <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='white'>
            Lưu
          </Text>
        </Flex>
        <Flex
          w='132px'
          p='8px 12px'
          justifyContent='center'
          alignItems='center'
          gap='20px'
          rounded='12px'
          bg='white'
          border='1px solid #323541'
          onClick={handleEdit}
          cursor='pointer'
        >
          <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='#323541'>
            Hủy
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
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
              Giấy phép kinh doanh
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
        {tab === 3 ? employerInfo : tab === 2 ? licensePage : tab === 1 ? personalInfo : ''}
      </Stack>
    </Box>
  );
}

export default employerDetails;
