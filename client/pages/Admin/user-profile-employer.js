import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';
import { HiChevronDown, HiOutlineMail } from 'react-icons/hi';
import { HiOutlineMapPin } from 'react-icons/hi2';

import { LiaNewspaperSolid } from 'react-icons/lia';
import { BsExclamationCircle, BsGlobe } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';
import AdminHeader from '../../components/layout/admin/header';
import { useCallback, useEffect, useState } from 'react';
import PostImage from '../../public/static/images/applicationPost.png';
import Paging from '../../components/paging';
import axios from 'axios';
import DropDownStatus from '../../components/layout/admin/dropDownStatus';
import StatusFrame from '../../components/layout/admin/statusFrame';
function UserProfileEmployer() {
  const menuData = {
    roles: ['Giám đốc', 'Nhân viên', 'Trợ lý', 'Quản lý', 'Phó phòng', 'Thực tập sinh'],
    workForm: [
      'Bán thời gian - Partime',
      'Toàn thời gian - Fulltime',
      'Làm việc từ xa - Remote',
      'Làm việc văn phòng và làm việc từ xa - Hybird',
    ],
    gender: ['nam', 'nữ', 'không yêu cầu'],
    status: [
      <StatusFrame text='Đã xác minh' />,
      <StatusFrame text='Chưa xác minh' />,
      <StatusFrame text='Đã cấm' />,
      <StatusFrame text='Không hoạt động' />,
      <StatusFrame text='Hết hạn' />,
    ],
  };

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
    description:
      'Công ty Cổ phần Công nghệ eUp (eUp) là một Công ty Công nghệ hàng đầu tại Việt Nam trong lĩnh vực cung cấp Giải pháp Học tập. Tới nay, eUp đã cho ra mắt nhiều ứng dụng học tập được hàng triệu triệu người dùng tại Việt Nam và trên toàn Thế giới yêu thích và sử dụng hằng ngày như ứng dụng Từ điển tiếng Nhật Mazii; Từ vựng và Ngữ pháp HeyJapanese; Từ điển tiếng Trung Hanzii; Đọc báo TODAI; Luyện thi Migii,… và rất nhiều ứng dụng rất thiết thực dành cho các ngôn ngữ khác như tiếng Pháp; Tây Ban Nha;... Với hơn 7 năm trong ngành Công nghệ Giáo dục, eUp luôn nỗ lực không ngừng để thực hiện sứ mệnh giúp hàng triệu triệu người học tiếp cận với hệ thống giải pháp học tập đơn giản, thông minh và tiện ích hơn bao giờ hết.',
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

  const [param, setParam] = useState({ role_id: 2 });
  const [userData, setUserData] = useState({});
  const [postData, setPostData] = useState([]);
  // const getAllPost = useCallback(async () => {
  //   try {
  //     const getAllPost = await axios.post(`http://localhost:5000/job-post/get-all-job-post`);
  //     if (getAllPost.data.statusCode === 200) {
  //       setPostData(getAllPost);
  //     } else {
  //     }
  //   } catch (error) {}
  // }, [param]);
  // useEffect(() => {
  //   getAllPost();
  // }, []);
  const getUserAccount = useCallback(async () => {
    try {
      const getUserAccount = await axios.post(`http://localhost:5000/account-details`, {
        ...param,
      });
      if (getUserAccount.data.statusCode === 200) {
        setUserData(getUserAccount.data.data.user_details);
      } else {
      }
    } catch (error) {}
  }, [param]);
  useEffect(() => {
    getUserAccount();
  }, []);
  const data = userData[0];

  // const getCompany = useCallback(async () => {
  //   try {
  //     const getCompany = await axios.post(`http://localhost:5000/company/get-company-by-id`, {
  //       ...param,
  //     });
  //     if (getCompany.data.statusCode === 200) {
  //       setUserData(getCompany.data.data.user_details);
  //     } else {
  //     }
  //   } catch (error) {}
  // }, [param]);
  // useEffect(() => {
  //   getCompany();
  // }, []);
  // console.log(userData);
  const [tab, setTab] = useState(1);
  const handleTab = (index) => setTab(index);
  return (
    <Stack gap='24px' ml='316px'>
      {/*Header*/}
      <AdminHeader />
      <Tabs padding='24px'>
        <TabList borderBottom={'none'}>
          <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'} onClick={() => handleTab(1)}>
            Nhà tuyển dụng
          </Tab>
          <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'} onClick={() => handleTab(2)}>
            Công ty
          </Tab>
          <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'} onClick={() => handleTab(3)}>
            Giấy phép kinh doanh
          </Tab>
        </TabList>
      </Tabs>
      {/*Profile Content*/}
      {tab === 1 ? (
        <Stack gap='0px' w='930px'>
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
              justifyContent='space-between'
            >
              <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
                Hotline CSKH & Hỗ trợ
              </Text>
              <Image></Image>
            </Flex>

            <Stack
              p='24px'
              justifyContent='center'
              gap='16px'
              border='1px'
              borderColor='#323541'
              roundedBottom='20px'
            >
              <Flex justifyContent='flex-start' alignItems='center' gap='20px'>
                <Box rounded='full' overflow='hidden'>
                  <Image src='/static/images/avatar_icon.png' width='100' height='100'></Image>
                </Box>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                  Ngô Thanh Toàn
                </Text>
              </Flex>

              <Flex flex='1 0 0' alignItems='center' justifyContent='space-between'>
                <Stack gap='20px'>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Email:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      hanhfchinh@lechongvien.vn
                    </Text>
                  </Flex>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Giới tính:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      Nam
                    </Text>
                  </Flex>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Facebook:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      https://www.facebook.com/nguyenthao404
                    </Text>
                  </Flex>
                </Stack>
                <Stack gap='20px' alignItems='flex-start'>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Số điện thoại:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      0393958505
                    </Text>
                  </Flex>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Lĩnh vực hoạt động:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      Nhân viên
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      ) : (
        <Grid templateColumns='repeat(3, 1fr)' h='90vh'>
          <GridItem colSpan='2' border='1px' borderColor='#D7D7D7'>
            {/*Left */}

            <Stack px='24px' pt='16px' pb='20px' gap='20px'>
              <Flex>
                <DropDownStatus data={menuData.status}></DropDownStatus>
              </Flex>{' '}
              {tab === 2 ? (
                <Box>
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
                        tColor='#323541'
                        bgColor='#D7D7D7'
                      />
                    </Stack>
                  </GridItem>
                </Box>
              ) : (
                <Stack gap='24px'>
                  <Stack
                    p='24px'
                    gap='16px'
                    rounded='12px'
                    border='1px solid #D7D7D7'
                    justifyContent='center'
                  >
                    <Flex alignSelf='stretch'>
                      <Text
                        fontSize='20px'
                        fontWeight='700'
                        lineHeight='28px'
                        letterSpacing='0.2px'
                      >
                        Giấy phép kinh doanh
                      </Text>
                    </Flex>
                    <Image src='/static/images/license.png' width='530' height='830'></Image>
                  </Stack>
                  <Stack p='24px' gap='16px' rounded='12px' border='1px solid #D7D7D7'>
                    <Text fontSize='20px' fontWeight='700' lineHeight='28px' letterSpacing='0.2px'>
                      Khác
                    </Text>
                    <Text fontSize='14px' fontWeight='400' color='#818181'>
                      Không có
                    </Text>
                  </Stack>
                </Stack>
              )}
            </Stack>
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
                      {/* {data.registration_date} */}
                      09/12/2002
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
                      Email:
                      {/* {data.email} */}
                    </Text>
                  </Flex>

                  <Flex alignItems='center' gap='4'>
                    <Box fontSize='24px'>
                      <FiPhone />
                    </Box>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Điện thoại:
                      {/* {data.mobile_number} */}
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
      )}
    </Stack>
  );
}
export default UserProfileEmployer;
