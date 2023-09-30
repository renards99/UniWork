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
import { useRouter } from 'next/router';
import { convertToLocaleDateTime, totalPriceItemInCart } from '../../helper';

const BACK_END_PORT = 'http://localhost:5000';

function UserProfileEmployer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const router = useRouter();
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
      <StatusFrame type='0' text='Đã xác minh' />,
      <StatusFrame type='1' text='Chưa xác minh' />,
      <StatusFrame type='2' text='Đã cấm' />,
      <StatusFrame type='3' text='Không hoạt động' />,
      <StatusFrame type='4' text='Hết hạn' />,
    ],
  };

  const [eProfile, setEProfile] = useState({});
  const [posts, setPost] = useState([]);
  const handleGetJobByCompany = async (id) => {
    try {
      const getJob = await axios.post(`${BACK_END_PORT}/job-post/get-job-by-company`, {
        company_id: id,
      });
      if (getJob.data.statusCode === 200) {
        const jobData = getJob.data.data.list_job;
        setPost(
          jobData.map((job, index) => ({
            imageUrl: '../../public/static/images/applicationPost.png',
            title: job.title,
            salary: totalPriceItemInCart(job?.salary.toString(), 1) + ' VND',
            company: job.company_name,
            tags: [job.job_location, `${job.experience} năm kinh nghiệm`],
          })),
        );
      }
    } catch (err) {
      console.error(err);
    }
  };
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

  const getUserAccount = async (id) => {
    try {
      const getUserAccount = await axios.post(`http://localhost:5000/account-details`, {
        id,
      });
      if (getUserAccount.data.statusCode == 200) {
        const userData = getUserAccount.data.data.user_details[0];
        setEProfile({
          role:
            userData.role_id == 1
              ? 'Quản trị viên'
              : userData.role_id == 2
              ? 'Nhà tuyển dụng'
              : 'Ứng viên',
          email: userData.email,
          phone: userData.mobile_number,
          employees: userData.size,
          full_name: userData.full_name,
          image: userData.user_image,
          gender: userData.gender,
          id: userData.id,
          gender: userData.gender == 1 ? 'Nam' : userData.gender == 2 ? 'Nữ' : 'Không yêu cầu',
          job_type: userData.job_type_name,
          facebook_link: userData.facebook_link,

          subScriptionDate: convertToLocaleDateTime(userData.registration_date),
          taxCode: userData.tax_code,
          link: userData.company_website_url,
          address: userData.company_location,
          companyDescription: userData.company_description,
          companyName: userData.company_name,
          companyEmail: userData.company_email,
          companyPhone: userData.company_phone_number,
          size: userData.size,
          isVerified: userData.is_verified,
          is_banned: userData.is_banned,
        });
        handleGetJobByCompany(userData.company_id);
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getUserAccount(id);
    }
  }, [router]);

  const [tab, setTab] = useState(1);
  const handleTab = (index) => setTab(index);

  const handleBan = async () => {
    const banResponse = await axios.put(`${BACK_END_PORT}/ban-user`, {
      id: eProfile.id,
      is_banned: 1,
    });
    if (banResponse.data.statusCode == 200) {
      alert(`ban user successfully`);
      window.location.href = 'http://localhost:3000/admin/account-manager';
    }
  };
  handleUnban = async () => {
    const unbanResponse = await axios.put(`${BACK_END_PORT}/ban-user`, {
      id: eProfile.id,
      is_banned: 0,
    });
    if (unbanResponse.data.statusCode == 200) {
      alert(`unban user successfully`);
      window.location.href = 'http://localhost:3000/admin/account-manager';
    }
  };
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
                  <img
                    src={eProfile?.image}
                    width='100'
                    height='100'
                    style={{ borderRadius: '50%', height: '100px' }}
                  />
                </Box>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                  {eProfile?.full_name}
                </Text>
              </Flex>

              <Flex flex='1 0 0' alignItems='center' justifyContent='space-between'>
                <Stack gap='20px'>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Email:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      {eProfile?.email}
                    </Text>
                  </Flex>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Giới tính:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      {eProfile?.gender}
                    </Text>
                  </Flex>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Facebook:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      {eProfile?.facebook_link}
                    </Text>
                  </Flex>
                </Stack>
                <Stack gap='20px' alignItems='flex-start'>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Số điện thoại:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      {eProfile?.phone}
                    </Text>
                  </Flex>
                  <Flex gap='12px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Lĩnh vực hoạt động:
                    </Text>

                    <Text fontSize='14px' fontWeight='700' lineHeight='24px'>
                      {eProfile?.job_type}
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            </Stack>

            {eProfile.is_banned == 0 ? (
              <Flex
                onClick={toggleModal}
                justifyContent='center'
                alignItems='center'
                color='white'
                bg='#323541'
                rounded='20px'
                w='132px'
                mt='20px'
                py='8px'
                px='12px'
                fontSize='16px'
                cursor='pointer'
              >
                <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                  Cấm người dùng
                </Text>
              </Flex>
            ) : (
              <Flex
                onClick={toggleModal}
                justifyContent='center'
                alignItems='center'
                color='white'
                bg='#323541'
                rounded='20px'
                w='132px'
                mt='20px'
                py='8px'
                px='12px'
                fontSize='16px'
                cursor='pointer'
              >
                <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                  Bỏ cấm
                </Text>
              </Flex>
            )}
          </Box>
          <>
            {isModalOpen && (
              <Box
                position='fixed'
                top='0'
                left='0'
                width='100%'
                height='100%'
                backgroundColor='rgba(0, 0, 0, 0.5)'
                display='flex'
                justifyContent='center'
                alignItems='center'
                zIndex='1000'
              >
                <Box backgroundColor='#323541' padding='20px' borderRadius='12px'>
                  <Text color='white' fontSize='20px' mb='20px'>
                    {eProfile.is_banned == 0
                      ? 'Bạn có chắc muốn cấm tài khoản này?'
                      : 'Bạn có chắc muốn bỏ cấm tài khoản này?'}
                  </Text>
                  <Flex gap='20px' justifyContent='center' alignItems='center'>
                    <Flex
                      onClick={() => {
                        user.is_banned === 0 ? handleBan() : handleUnban();
                        setIsModalOpen(false);
                      }}
                      justifyContent='center'
                      alignItems='center'
                      color='white'
                      bg='#FF5733'
                      rounded='20px'
                      w='100px'
                      py='8px'
                      px='12px'
                      fontSize='16px'
                      cursor='pointer'
                    >
                      <Text fontSize='14px' fontWeight='600'>
                        Xác nhận
                      </Text>
                    </Flex>
                    <Flex
                      onClick={toggleModal}
                      justifyContent='center'
                      alignItems='center'
                      color='#323541'
                      bg='white'
                      rounded='20px'
                      w='100px'
                      py='8px'
                      px='12px'
                      fontSize='16px'
                      cursor='pointer'
                      border='1px solid #323541'
                    >
                      <Text fontSize='14px' fontWeight='600'>
                        Hủy
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            )}

            <Stack gap='0px' w='930px'>
              {/*... rest of your code */}
            </Stack>
          </>
        </Stack>
      ) : (
        <Grid templateColumns='repeat(3, 1fr)' h='90vh'>
          <GridItem colSpan='2' border='1px' borderColor='#D7D7D7'>
            {/*Left */}

            <Stack px='24px' pt='16px' pb='20px' gap='20px'>
              <Flex>
                {eProfile.isVerified == 0 ? (
                  <Box
                    backgroundColor={'#C7F5D9'}
                    w='134px'
                    padding='6px 10px'
                    h='28px'
                    borderRadius={'12px'}
                    margin={'0 auto'}
                    textAlign={'center'}
                  >
                    <Text fontSize={'14px'} fontWeight={'500'} color={'#036000'}>
                      Chưa xác minh
                    </Text>
                  </Box>
                ) : eProfile.isVerified == 1 ? (
                  <Box
                    backgroundColor={'#D3DFF9'}
                    w='134px'
                    padding='6px 10px'
                    h='28px'
                    borderRadius={'12px'}
                    margin={'0 auto'}
                    textAlign={'center'}
                  >
                    <Text fontSize={'14px'} fontWeight={'500'} color={'#0036AA'}>
                      Đã xác minh
                    </Text>
                  </Box>
                ) : (
                  <Box
                    backgroundColor={'#FFC0C0'}
                    w='134px'
                    padding='6px 10px'
                    h='28px'
                    borderRadius={'12px'}
                    margin={'0 auto'}
                    textAlign={'center'}
                  >
                    <Text fontSize={'14px'} fontWeight={'500'} color={'#BC0000'}>
                      Hết hạn
                    </Text>
                  </Box>
                )}
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
                          {eProfile.companyDescription}
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
                    <img
                      src={eProfile.image}
                      width='160'
                      height='160'
                      style={{ borderRadius: '50%', height: '160px' }}
                    />
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
                      Email:
                      {eProfile.companyEmail}
                    </Text>
                  </Flex>

                  <Flex alignItems='center' gap='4'>
                    <Box fontSize='24px'>
                      <FiPhone />
                    </Box>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Điện thoại:
                      {eProfile.companyPhone}
                    </Text>
                  </Flex>
                  <Flex gap='4'>
                    <Box fontSize='24px'>
                      <HiOutlineBuildingOffice2 />
                    </Box>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      {eProfile.size} nhân viên
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
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      )}
    </Stack>
  );
}
export default UserProfileEmployer;
