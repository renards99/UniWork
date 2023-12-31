import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { HiOutlineMail, HiOutlineCurrencyDollar, HiBriefcase } from 'react-icons/hi';
import DropDown from '../../components/layout/admin/dropDown';
import { HiOutlineMapPin, HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { GiPlayerTime } from 'react-icons/gi';
import { LiaNewspaperSolid } from 'react-icons/lia';
import {
  BsExclamationCircle,
  BsGlobe,
  BsFillPersonPlusFill,
  BsPersonVcardFill,
  BsGenderAmbiguous,
} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import DatePicker from '../../components/layout/admin/datePicker';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';
import AdminHeader from '../../components/layout/admin/header';
import { useEffect, useState } from 'react';
import StatusFrame from '../../components/layout/admin/statusFrame';
import DropDownStatus from '../../components/layout/admin/dropDownStatus';
import axios from 'axios';
import { useRouter } from 'next/router';
import { totalPriceItemInCart, convertToLocaleDateTime } from '../../helper';
const BACK_END_PORT = 'http://localhost:5000';

function PostDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [menuIcon, setMenuIcon] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const handleApprove = async () => {
    const currentDate = new Date();
    const applyDate = new Date(fakeData.applyDate); // replace applyAt with the actual apply date variable
    const fullName = JSON.parse(localStorage.getItem('user'))?.full_name;
    const userId = JSON.parse(localStorage.getItem('user'))?.id;
    const isActive = applyDate < currentDate ? 1 : 0;
    const aprrovePost = await axios.put(`${BACK_END_PORT}/job-post/update-job-post`, {
      id: id,
      state: 2,
      is_active: isActive,
    });
    const log = await axios.post(`${BACK_END_PORT}/user-log/create-user-log`, {
      user_account_id: userId,
      description: `Quản trị viên ${fullName} đã duyệt bài đăng: ${fakeData.jobName} -id: ${id}`,
    });

    if (aprrovePost.data.statusCode == 200) {
      try {
        const emailRes = await axios.post(`${BACK_END_PORT}/send-email`, {
          to: `${eProfile.email}`, // Replace with the user's email address
          subject: 'uniwork: Thông Báo Duyệt Bài Đăng',
          text: 'Chúc mừng! Bài đăng của bạn trên uniwork đã được duyệt thành công.',
        });
        console.log('Email sent response:', emailRes.data);
      } catch (error) {
        console.error('Error sending email via API:', error);
      }
      alert(`update post successfully`);

      window.location.href = 'http://localhost:3000/admin/job-manager';
    }
  };
  const handleDeny = async () => {
    const denyPost = await axios.put(`${BACK_END_PORT}/job-post/update-job-post`, {
      id: id,
      state: 4,
    });
    const log = await axios.post(`${BACK_END_PORT}/user-log/create-user-log`, {
      user_account_id: userId,
      description: `Quản trị viên ${fullName} đã từ chối bài đăng: ${fakeData.jobName} -id: ${id}`,
    });
    if (denyPost.data.statusCode == 200) {
      alert(`deny post successfully`);
      window.location.href = 'http://localhost:3000/admin/job-manager';
    }
  };
  const handleHide = async () => {
    const hidePost = await axios.put(`${BACK_END_PORT}/job-post/update-job-post`, {
      id: id,
      state: 5,
    });
    const log = await axios.post(`${BACK_END_PORT}/user-log/create-user-log`, {
      user_account_id: userId,
      description: `Quản trị viên ${fullName} đã ẩn bài đăng: ${fakeData.jobName} -id: ${id}`,
    });
    if (hidePost.data.statusCode == 200) {
      alert(`hide post successfully`);
      window.location.href = 'http://localhost:3000/admin/job-manager';
    }
  };
  const handleShow = async () => {
    const hidePost = await axios.put(`${BACK_END_PORT}/job-post/update-job-post`, {
      id: id,
      state: 2,
    });
    const log = await axios.post(`${BACK_END_PORT}/user-log/create-user-log`, {
      user_account_id: userId,
      description: `Quản trị viên ${fullName} đã bỏ ẩn bài đăng: ${fakeData.jobName} -id: ${id}`,
    });
    if (hidePost.data.statusCode == 200) {
      alert(`Show post successfully`);
      window.location.href = 'http://localhost:3000/admin/job-manager';
    }
  };
  const [edit, setEdit] = useState(false);
  const [fakeData, setFakeData] = useState({});
  const [eProfile, setEProfile] = useState({});

  const handleJobPost = async (id) => {
    try {
      const getJobDetail = await axios.post(`${BACK_END_PORT}/job-post/get-job-post-by-id`, { id });
      if (getJobDetail.data.statusCode == 200) {
        const jobData = getJobDetail.data.data[0];
        setFakeData({
          applied: jobData.apply_at,
          expired: jobData.expired_at,
          jobName: jobData.title,
          salary: totalPriceItemInCart(jobData.salary.toString(), 1),
          experience: jobData.experience + ' năm',
          hiringNumber: `${jobData.hire_number} người`,
          role: 'Nhân viên',
          workForm: jobData.work_hours ? 'Bán thời gian' : 'Toàn thời gian',
          gender: jobData.gender == 1 ? 'Nam' : jobData.gender == 2 ? 'Nữ' : 'Không yêu cầu',
          description: jobData.job_description,
          requirements: '??????',
          benefits: '??????',
          image: jobData.user_image,
          state: jobData.state,
          applyDate: jobData.apply_at,
        });
        setEProfile({
          companyName: jobData.company_name,
          role:
            jobData.role == 1 ? 'Quản trị viên' : jobData.role == 2 ? 'Nhà tuyển dụng' : 'Ứng viên',
          subScriptionDate: convertToLocaleDateTime(jobData.registration_date),
          taxCode: jobData.tax_code,
          email: jobData.email,
          phone: jobData.mobile_number,
          employees: jobData.size,
          link: jobData.company_website_url,
          address: jobData.company_location,
          description: jobData.job_description,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (id) {
      handleJobPost(id);
    }
  }, [router]);

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
      <StatusFrame text='Chưa duyệt' />,
      <StatusFrame text='Đã duyệt' />,
      <StatusFrame text='Không duyệt' />,
      <StatusFrame text='Hết hạn' />,
    ],
  };

  const status = (
    <Box rounded='xl'>
      <Flex alignItems='flex-start' alignSelf='stretch' justifyContent='space-between'>
        <Stack
          py='12px'
          px='24px'
          justifyContent='center'
          gap='12px'
          alignSelf='stretch'
          border='1px solid #666666'
          rounded='12px'
          w='300px'
        >
          <Flex alignItems='center' gap='12px'>
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              Ngày khởi tạo:
            </Text>
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              {convertToLocaleDateTime(fakeData?.applied)}
            </Text>
          </Flex>
          <Flex alignItems='center' gap='12px'>
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              Ngày kết thúc:
            </Text>
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              {convertToLocaleDateTime(fakeData?.expired)}
            </Text>
          </Flex>
        </Stack>
        <Stack gap='12px' alignItems='flex-start'>
          {/*Status*/}
          {/*
          <Menu matchWidth>
            <MenuButton
              _hover='none'
              _focus={{ bg: 'none' }}
              _expanded={{ bg: 'none' }}
              bg='none'
              as={Button}
              gap='20px'
              py='22px'
              pl='24px'
              pr='12px'
              justifyContent='space-between'
              alignSelf='stretch'
              alignItems='center'
              border='1px solid #666666'
              rounded='12px'
              onClick={handleMenuClick}
              rightIcon={
                menuIcon ? (
                  <Box transition='transform 0.3s ease-in-out' fontSize='24px'>
                    <HiChevronDown />
                  </Box>
                ) : (
                  <Box
                    transform='rotate(-180deg)'
                    transition='transform 0.3s ease-in-out'
                    fontSize='24px'
                  >
                    <HiChevronDown />
                  </Box>
                )
              }
            >
              <Flex gap='20px'>
                <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                  Trạng thái:
                </Text>
                <StatusFrameGreen text='Đã Duyệt' />
              </Flex>
            </MenuButton>
            <MenuList rounded='10px' border='1px solid #323541'>
              <MenuItem bg='none'>
                <StatusFrameGrey text='Chưa Duyệt' />
              </MenuItem>
            </MenuList>
          </Menu>
            */}
          <Flex
            gap='20px'
            p='10px 12px 10px 24px'
            justifyContent='space-between'
            alignSelf='stretch'
            alignItems='center'
            border='1px solid #666666'
            rounded='12px'
          >
            {fakeData.state == 2 ? (
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
                  Đã duyệt
                </Text>
              </Box>
            ) : fakeData.state == 1 ? (
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
                  Chưa duyệt
                </Text>
              </Box>
            ) : fakeData.state == 3 ? (
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
            ) : fakeData.state == 4 ? (
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
                  Từ chối
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
                  Bài đã ẩn
                </Text>
              </Box>
            )}
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
  const details = (
    <GridItem colSpan='2'>
      <Flex
        px='24px'
        pb='8px'
        pt='16px'
        bg='#323541'
        fontSize='18px'
        roundedTop='12px'
        gap='12px'
        alignItems='flex-start'
      >
        <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
          Chi tiết tin tuyển dụng
        </Text>
      </Flex>
      <Stack
        p='24px 24px 32px 24px'
        justifyContent='center'
        alignItems='center'
        alignSelf='stretch'
        gap='20px'
        roundedBottom='12px'
        border='1px'
        borderColor='#666666'
      >
        <Stack alignItems='flex-start' gap='12px' alignSelf='stretch'>
          <Text fontSize='20px' fontWeight='600' lineHeight='28px' letterSpacing='0.2px'>
            IT Comtor (Itern/Fresher)
          </Text>
          <Flex
            justifyContent='space-between'
            p='10px 0px'
            alignItems='center'
            gap='20px'
            alignSelf='stretch'
            rounded='8px'
          >
            {/*First Collumn*/}
            <Stack alignItems='flex-start' gap='32px'>
              {/*Salary*/}
              <Flex width='172px' alignItems='flex-start' gap='12px'>
                <Box fontSize='24px'>
                  <HiOutlineCurrencyDollar />
                </Box>
                <Stack alignItems='flex-start' gap='8px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Mức lương
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {fakeData.salary}
                  </Text>
                </Stack>
              </Flex>
              {/*position*/}
              <Flex width='172px' alignItems='flex-start' gap='12px'>
                <Box fontSize='24px'>
                  <BsPersonVcardFill />
                </Box>
                <Stack alignItems='flex-start' gap='8px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Cấp bậc
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {fakeData.role}
                  </Text>
                </Stack>
              </Flex>
            </Stack>
            {/*Second Collumn*/}
            <Stack alignItems='flex-start' gap='32px'>
              {/*Work Form*/}
              <Flex width='172px' alignItems='flex-start' gap='12px'>
                <Box fontSize='24px'>
                  <HiBriefcase />
                </Box>
                <Stack alignItems='flex-start' gap='8px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Hình thức làm việc
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {fakeData.workForm}
                  </Text>
                </Stack>
              </Flex>
              {/*experience*/}
              <Flex width='172px' alignItems='flex-start' gap='12px'>
                <Box fontSize='24px'>
                  <GiPlayerTime />
                </Box>
                <Stack alignItems='flex-start' gap='8px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Kinh Nghiệm
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {fakeData.experience}
                  </Text>
                </Stack>
              </Flex>
            </Stack>
            {/*Third Collumn*/}
            <Stack alignItems='flex-start' gap='32px'>
              {/*Hiring*/}
              <Flex width='172px' alignItems='flex-start' gap='12px'>
                <Box fontSize='24px'>
                  <BsFillPersonPlusFill />
                </Box>
                <Stack alignItems='flex-start' gap='8px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Số lượng tuyển
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {fakeData.hiringNumber}
                  </Text>
                </Stack>
              </Flex>
              {/*Gender*/}
              <Flex width='172px' alignItems='flex-start' gap='12px'>
                <Box fontSize='24px'>
                  <BsGenderAmbiguous />
                </Box>
                <Stack alignItems='flex-start' gap='8px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Giới tính
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {fakeData.gender}
                  </Text>
                </Stack>
              </Flex>
            </Stack>
          </Flex>
        </Stack>
        {/*Description*/}
        <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
            Mô tả công việc
          </Text>
          <Flex pl='0px' gap='10px' alignSelf='stretch' alignItems='flex-start'>
            <UnorderedList fontSize='14px' fontWeight='500' lineHeight='24px' pl='8px'>
              {fakeData?.description &&
                fakeData?.description.split('.').map((item, index) => {
                  if (index + 1 != fakeData?.description.split('.').length)
                    return <ListItem>{item}</ListItem>;
                })}

              {/* <ListItem>Biên dịch tài liệu tiếng Nhật cho các dự án phát triển phần mềm</ListItem>
              <ListItem>
                Phiên dịch các cuộc họp, truyền tải nội dung giữa team dự án và khách hàng
              </ListItem>
              <ListItem>
                Tham gia quản lý dự án, theo dõi và báo cáo tiến độ, điều hòa công việc giữa team dự
                án và khách hàng, đảm bảo sự hài hòa giúp dự án tiến hành thuận lợi.
              </ListItem> */}
            </UnorderedList>
          </Flex>
        </Stack>
        {/*Candidate requirements*/}

        {/* <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
            Yêu cầu ứng viên
          </Text>
          <Flex pl='0px' gap='10px' alignSelf='stretch' alignItems='flex-start'>
            <UnorderedList fontSize='14px' fontWeight='500' lineHeight='24px' pl='8px'>
              <ListItem>Tốt nghiệp đại học chuyên ngành liên quan</ListItem>
              <ListItem>Tiếng Nhật N1, giao tiếp thành thạo Không yêu cầu kinh nghiệm</ListItem>
              <ListItem>
                Làm việc có trách nhiệm, có tinh thần học hỏi cao Có kỹ năng đọc hiểu tài liệu
              </ListItem>
              <ListItem>
                Ý thức và thái độ tốt trong làm việc nhóm (teamwork) cũng như khi làm việc độc lập
              </ListItem>
              <ListItem>Đi làm được fulltime.</ListItem>
            </UnorderedList>
          </Flex>
        </Stack> */}

        {/*Benefits*/}

        {/* <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
            Quyền lợi
          </Text>
          <Flex pl='0px' gap='10px' alignSelf='stretch' alignItems='flex-start'>
            <UnorderedList fontSize='14px' fontWeight='500' lineHeight='24px' pl='8px'>
              <ListItem>
                Thời gian làm việc: từ thứ 2 đến thứ 6 (checkin linh hoạt từ 8:00 - 9:00)
              </ListItem>
              <ListItem>Training on job, có mentor kèm cặp</ListItem>
              <ListItem>Cơ hội trở thành nhân viên chính thức sau thời gian thực tập</ListItem>
              <ListItem>
                Chế độ nghỉ Tết (DL, Nguyên đán), các ngày Lễ (30/4, 1/5, 2/9..) theo quy định của
                Nhà nước Thưởng các ngày lễ tết Chế độ sinh nhật
              </ListItem>
              <ListItem>Chế độ du lịch, teambuilding hàng năm.</ListItem>
              <ListItem>Môi trường trẻ trung thân thiện, career path rõ ràng.</ListItem>
              <ListItem>Miễn phí trà, cafe, bánh kẹo tại pantry Công ty.</ListItem>
            </UnorderedList>
          </Flex>
        </Stack> */}

        {/*Location*/}
        <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
            Địa điểm làm việc
          </Text>
          <Flex pl='0px' gap='10px' alignSelf='stretch' alignItems='flex-start'>
            <UnorderedList fontSize='14px' fontWeight='500' lineHeight='24px' pl='8px'>
              <ListItem>{eProfile?.address}</ListItem>
            </UnorderedList>
          </Flex>
        </Stack>
      </Stack>
    </GridItem>
  );
  const buttons = (
    <Flex alignItems='flex-start' gap='20px'>
      {(fakeData.state == 1 || fakeData.state == 4) && (
        <Flex gap='20px'>
          {/* Duyệt bài Button */}
          <Flex
            onClick={handleApprove}
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
              Duyệt bài
            </Text>
          </Flex>

          {/* Từ chối Button */}
          <Flex
            onClick={handleDeny}
            justifyContent='center'
            alignItems='center'
            color='#323541'
            bg='white'
            rounded='20px'
            w='132px'
            mt='20px'
            py='8px'
            px='12px'
            fontSize='16px'
            cursor='pointer'
            border='1px'
            borderColor='#323541'
          >
            <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
              Từ chối
            </Text>
          </Flex>
        </Flex>
      )}

      {fakeData.state == 2 && (
        <Flex gap='20px'>
          {/* Ẩn bài Button */}
          <Flex
            onClick={handleHide}
            justifyContent='center'
            alignItems='center'
            color='#323541'
            bg='white'
            rounded='20px'
            w='132px'
            mt='20px'
            py='8px'
            px='12px'
            fontSize='16px'
            cursor='pointer'
            border='1px'
            borderColor='#323541'
          >
            <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
              Ẩn bài
            </Text>
          </Flex>
        </Flex>
      )}
      {fakeData.state == 5 && (
        <Flex gap='20px'>
          {/* Ẩn bài Button */}
          <Flex
            onClick={handleShow}
            justifyContent='center'
            alignItems='center'
            color='#323541'
            bg='white'
            rounded='20px'
            w='132px'
            mt='20px'
            py='8px'
            px='12px'
            fontSize='16px'
            cursor='pointer'
            border='1px'
            borderColor='#323541'
          >
            <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
              Hiển Thị
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );

  const editPost = (
    <GridItem colSpan='2'>
      <Stack>
        {/*candidate requirements*/}
        <Stack gap='0'>
          <Flex
            px='24px'
            pb='8px'
            pt='16px'
            bg='#323541'
            fontSize='18px'
            roundedTop='12px'
            gap='12px'
            alignItems='flex-start'
          >
            <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
              Chỉ tiêu về ứng viên
            </Text>
          </Flex>
          <Stack
            p='24px 24px 32px 24px'
            alignItems='center'
            alignSelf='stretch'
            gap='20px'
            roundedBottom='12px'
            border='1px'
            borderColor='#666666'
          >
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Công việc
              </Text>
              <Input
                p='24px 20px'
                placeholder='Công việc'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Mức lương
              </Text>
              <Input
                p='24px 20px'
                placeholder='Mức Lương'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Kinh nghiệm
              </Text>
              <Input
                p='24px 20px'
                placeholder='Kinh nghiệm'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
            <Flex justifyContent='space-between' alignSelf='stretch' alignItems='center'>
              <Stack gap='8px' alignItems='flex-start' w='276px'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Số lượng tuyển
                </Text>
                <Input
                  p='24px 20px'
                  placeholder='Số lượng tuyển'
                  rounded='12px'
                  border='1px solid #323541'
                  focusBorderColor='none'
                  _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                  fontSize='16px'
                  fontWeight='600px'
                  lineHeight='24px'
                ></Input>
              </Stack>
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch' w='276px'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Cấp bậc
                </Text>
                {/*Role*/}
                <DropDown data={menuData.roles} />
              </Stack>
            </Flex>
          </Stack>
        </Stack>
        {/*Job Description Editing*/}
        <Stack gap='0'>
          <Flex
            px='24px'
            pb='8px'
            pt='16px'
            bg='#323541'
            fontSize='18px'
            roundedTop='12px'
            gap='12px'
            alignItems='flex-start'
          >
            <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
              Chỉnh sửa mô tả công việc
            </Text>
          </Flex>
          <Stack
            p='24px 24px 32px 24px'
            alignItems='center'
            alignSelf='stretch'
            gap='20px'
            roundedBottom='12px'
            border='1px'
            borderColor='#666666'
          >
            <Flex justifyContent='space-between' alignSelf='stretch' alignItems='center'>
              <Stack gap='8px' alignItems='flex-start' w='276px'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Hình thức làm việc
                </Text>
                <DropDown data={menuData.workForm} />
              </Stack>
              <Stack gap='8px' alignItems='flex-start' alignSelf='stretch' w='276px'>
                <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                  Thời hạn đăng
                </Text>
                <Flex alignItems='center' alignSelf='stretch'>
                  <DatePicker />
                  <Input
                    rounded='0px 12px 12px 0px'
                    p='24px 20px'
                    placeholder='Thời hạn đăng'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                  ></Input>
                </Flex>
              </Stack>
            </Flex>

            <Stack gap='8px' alignItems='flex-start' w='276px' alignSelf='flex-start'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Giới tính
              </Text>
              <DropDown data={menuData.gender} />
            </Stack>
          </Stack>
        </Stack>
        {/*Job Description*/}
        <Stack gap='0'>
          <Flex
            px='24px'
            pb='8px'
            pt='16px'
            bg='#323541'
            fontSize='18px'
            roundedTop='12px'
            gap='12px'
            alignItems='flex-start'
          >
            <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
              Mô tả công việc
            </Text>
          </Flex>
          <Stack
            p='24px 24px 32px 24px'
            alignItems='center'
            alignSelf='stretch'
            gap='20px'
            roundedBottom='12px'
            border='1px'
            borderColor='#666666'
          >
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Mô tả công việc
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
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Yêu cầu ứng viên
              </Text>
              <Textarea
                p='24px 20px'
                placeholder='Những yêu cầu về ứng viên...'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
                height='120px'
              ></Textarea>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Quyền lợi
              </Text>
              <Textarea
                p='24px 20px'
                placeholder='Quyền lời của ứng viên khi đến công ty...'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
                height='120px'
              ></Textarea>
            </Stack>
            <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Địa điểm làm việc
              </Text>
              <Textarea
                p='24px 20px'
                placeholder='Địa điểm văn phòng'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
                height='120px'
              ></Textarea>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </GridItem>
  );
  const leftContent = (
    <GridItem colSpan='2' border='1px' borderColor='#D7D7D7'>
      <Box px='24px' pt='16px' pb='20px'>
        {edit ? (
          editPost
        ) : (
          <Stack>
            {status}
            {details}
          </Stack>
        )}
        {buttons}
      </Box>
    </GridItem>
  );
  const rightContent = (
    <GridItem border='1px' borderColor='#D7D7D7'>
      <Stack py='18px' px='80px'>
        <Flex justifyContent='flex-end' fontSize='24px'>
          <BsExclamationCircle />
        </Flex>
        <Stack gap='40px'>
          <Stack p='12px' justifyContent='center' alignItems='center' fontWeight='semibold'>
            <Box overflow='hidden' rounded='full'>
              <img
                src={fakeData?.image}
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
        </Stack>
      </Stack>
    </GridItem>
  );
  return (
    <Box ml='316px'>
      {/*Header*/}
      <AdminHeader />

      {/*Post details Content*/}
      <Grid templateColumns='repeat(3, 1fr)' h='90vh'>
        {/*Left */}
        {leftContent}
        {/*Right*/}
        {rightContent}
      </Grid>
    </Box>
  );
}

export default PostDetails;
