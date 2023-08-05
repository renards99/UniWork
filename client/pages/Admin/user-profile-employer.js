import { Box, Flex, Text, Stack, Grid, GridItem, Collapse } from '@chakra-ui/react';
import { HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { LuBellDot } from 'react-icons/lu';
import { IoPersonCircle } from 'react-icons/io5';
import { LiaNewspaperSolid } from 'react-icons/lia';
import { BsExclamationCircle, BsGlobe } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';

import { useState } from 'react';
import PostImage from '../../public/static/images/applicationPost.png';
import Paging from '../../components/paging';
function UserProfileEmployer() {
  const eProfile = {
    companyName: 'Data Management Officer',
    role: 'Nhà tuyển dụng',
    subScriptionDate: '11/11/2023',
    taxCode: '0212730426-018',
    email: 'Hoang123@gmail.com',
    phone: '091234567',
    employees: '125-199',
    link: 'DMO.vn',
    address: 'Tòa nhà Toyota Thanh Xuân, 315 Trường Chinh, Thanh Xuân, Hà Nội',
  };
  const posts = [
    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },
    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },
    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },
    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },
    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },
    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },

    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },
    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },
    {
      imageUrl: '../../public/static/images/applicationPost.png',
      title: 'Nhân Viên Thiết Kế UI/UX (UI/UX Designer)',
      salary: '14-20 Triệu',
      company: 'Công ty Cổ Phần Công nghệ eUp',
      tags: ['Hà Nội', 'Còn 29 ngày để ứng tuyển', 'Cập nhật 7 giờ trước'],
    },
  ];
  const [show, setShow] = useState(false);
  //Paging
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  //get current Posts
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentPosts = posts.slice(firstItemIndex, lastItemIndex);
  //change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const handleToggle = () => setShow(!show);
  return (
    <div>
      {/*Header*/}
      <Flex
        h='10vh'
        justifyContent='space-between'
        alignItems='center'
        border='1px'
        borderColor='#D7D7D7'
        px='36px'
      >
        <Text fontSize='30px' fontWeight='700' lineHeight='38px'>
          Quản lý tài khoản
          <Text as='span' fontSize='24px' fontWeight='800' lineHeight='32px'>
            &gt;
          </Text>
          <Text as='span' fontSize='20px' fontWeight='600' lineHeight='20px' letterSpacing='0.2px'>
            Thông tin tài khoản
          </Text>
        </Text>
        <Flex gap='24px' justifyContent='flex-end' alignItems='flex-start'>
          <Flex
            alignItems='flex-start'
            fontSize='24px'
            bg='#E8E8EB'
            p='12px'
            rounded='40px'
            cursor='pointer'
            gap='10px'
          >
            <LuBellDot />
          </Flex>
          <Flex
            rounded='40px'
            fontSize='24px'
            p='12px'
            alignItems='flex-start'
            gap='18px'
            bg='#E8E8EB'
          >
            <IoPersonCircle />
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Administrator
            </Text>
            <HiChevronDown />
          </Flex>
        </Flex>
      </Flex>
      {/*Profile Content*/}

      <Grid templateColumns='repeat(3, 1fr)' h='90vh'>
        <GridItem colSpan='2' border='1px' borderColor='#D7D7D7'>
          {/*Left */}
          <Box px='24px' pt='16px' pb='20px'>
            <Box colSpan='2' border='1px' borderColor='#D7D7D7' rounded='xl'>
              <Stack p='12px' pos='relative'>
                <Text fontSize='20px' fontWeight='600'>
                  Giới Thiệu Công Ty
                </Text>
                <Collapse startingHeight={94} in={show}>
                  <Text fontSize='16px' fontWeight='semibold' color='#727272'>
                    {' '}
                    {eProfile.description}
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
                justifyContent='center'
                gap='12px'
                roundedBottom='20px'
                border='1px'
                borderColor='#D7D7D7'
              >
                {currentPosts.map((post) => {
                  return (
                    <Flex
                      px='12px'
                      py='16px'
                      alignItems='flex-start'
                      gap='20px'
                      rounded='8px'
                      border='1px'
                      borderColor='#D7D7D7'
                    >
                      <Box flexShrink='0'>
                        <Image src={PostImage} width='100' height='100'></Image>
                      </Box>
                      <Stack
                        justifyContent='space-between'
                        flex='1 0 0'
                        alignSelf='stretch'
                        alignItems='flex-start'
                      >
                        <Flex
                          alignItems='flex-start'
                          alignSelf='stretch'
                          justifyContent='space-between'
                        >
                          <Stack alignItems='flex-start' gap='4px'>
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
                          {post.tags.map((tag) => {
                            return (
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
                                  {tag}
                                </Text>
                              </Flex>
                            );
                          })}
                        </Flex>
                      </Stack>
                    </Flex>
                  );
                })}
                <Paging
                  itemsPerPage={itemsPerPage}
                  totalItems={posts.length}
                  changePage={changePage}
                />
              </Stack>
            </GridItem>
          </Box>
        </GridItem>
        {/*Right*/}
        <GridItem border='1px' borderColor='#D7D7D7'>
          <Stack py='18px' px='80px'>
            <Flex justifyContent='flex-end' fontSize='24px'>
              <BsExclamationCircle />
            </Flex>
            <Stack gap='40px'>
              <Stack p='12px' justifyContent='center' alignItems='center' fontWeight='semibold'>
                <Box overflow='hidden' rounded='full'>
                  <Image src={TempAvatar} width='160' height='160'></Image>
                </Box>
                <Text fontSize='24px' fontWeight='800' lineHeight='32px'>
                  {eProfile.companyName}
                </Text>
                <Text fontSize='20px' fontWeight='600' lineHeight='28px' letterSpacing='0.2px'>
                  {eProfile.role}
                </Text>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                  Ngày đăng ký:{' '}
                  <Text as='span' fontSize='14px' fontWeight='500' lineHeight='24px'>
                    {eProfile.subScriptionDate}
                  </Text>
                </Text>
              </Stack>
              <Stack>
                <Flex gap='12px' alignItems='center'>
                  <Box w='4px' bg='#323541' height='28px' rounded='20px'></Box>
                  <Text fontSize='21px' fontWeight='bold'>
                    Thông tin nhà tuyển dụng
                  </Text>
                </Flex>
              </Stack>

              <Stack
                borderColor='#323541'
                border='1px'
                rounded='12px'
                py='20px'
                px='28px'
                alignItems='flex-start'
                gap='16px'
              >
                <Flex gap='4'>
                  <Box fontSize='24px'>
                    <LiaNewspaperSolid />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Mã Số Thuế: {eProfile.taxCode}
                  </Text>
                </Flex>
                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>
                    <HiOutlineMail />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Email: {eProfile.email}
                  </Text>
                </Flex>

                <Flex alignItems='center' gap='4'>
                  <Box fontSize='24px'>
                    <FiPhone />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Điện thoại: {eProfile.phone}
                  </Text>
                </Flex>
                <Flex gap='4'>
                  <Box fontSize='24px'>
                    <HiOutlineBuildingOffice2 />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    {eProfile.employees} nhân viên
                  </Text>
                </Flex>
                <Flex gap='4'>
                  <Box fontSize='24px'>
                    <BsGlobe />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Link: {eProfile.link}
                  </Text>
                </Flex>
                <Flex gap='4'>
                  <Box fontSize='24px'>
                    <HiOutlineMapPin />
                  </Box>
                  <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                    Địa chỉ: {eProfile.address}
                  </Text>
                </Flex>
              </Stack>
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
              >
                <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                  Chỉnh sửa thông tin
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </div>
  );
}
export default UserProfileEmployer;
