import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Input,
  Textarea,
  MenuDivider,
} from '@chakra-ui/react';
import {
  HiChevronDown,
  HiOutlineMail,
  HiChevronUp,
  HiOutlineCurrencyDollar,
  HiBriefcase,
} from 'react-icons/hi';
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
import AdminPage from '.';
import DatePicker from '../../components/layout/admin/datePicker';
import Image from 'next/image';
import TempAvatar from '../../public/static/images/temporary_avatar.png';
import AdminHeader from '../../components/layout/admin/header';
import { useState } from 'react';
import StatusFrame from '../../components/layout/admin/statusFrame';
import DropDownStatus from '../../components/layout/admin/dropDownStatus';
function PostDetails() {
  const [menuIcon, setMenuIcon] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const handleActiveIcon = (value) => setActiveIcon(value);
  const handleMenuClick = () => setMenuIcon(!menuIcon);
  const [edit, setEdit] = useState(false);
  const handleEditClick = () => setEdit(!edit);
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

  const fakeData = {
    jobName: 'IT Comtor (Intern/Fresher)',
    salary: 'Tới 25 triệu',
    experience: 'Trên 2 năm',
    hiringNumber: '10 người',
    role: 'Nhân viên',
    workForm: 'Bán thời gian',
    gender: 'Không yêu cầu',
    description:
      ' Là cầu nối giữa khách hàng và team phát triển, tham gia cùng nhóm: phân tích, thực hiện,... các yêu cầu của dự án Biên dịch tài liệu tiếng Nhật cho các dự án phát triển phần mềm Phiên dịch các cuộc họp, truyền tải nội dung giữa team dự án và khách hàng Tham gia quản lý dự án, theo dõi và báo cáo tiến độ, điều hòa công việc giữa team dự án và khách hàng, đảm bảo sự hài hòa giúp dự án tiến hành thuận lợi.',
    requirements:
      'Tốt nghiệp đại học chuyên ngành liên quan Tiếng Nhật N1, giao tiếp thành thạo Không yêu cầu kinh nghiệm Làm việc có trách nhiệm, có tinh thần học hỏi cao Có kỹ năng đọc hiểu tài liệu Ý thức và thái độ tốt trong làm việc nhóm (teamwork) cũng như khi làm việc độc lập  Đi làm được fulltime.',
    benefits:
      'Thời gian làm việc: từ thứ 2 đến thứ 6 (checkin linh hoạt từ 8:00 - 9:00) Training on job, có mentor kèm cặp Cơ hội trở thành nhân viên chính thức sau thời gian thực tập Chế độ nghỉ Tết (DL, Nguyên đán), các ngày Lễ (30/4, 1/5, 2/9..) theo quy định của Nhà nước Thưởng các ngày lễ tết  Chế độ sinh nhật Chế độ du lịch, teambuilding hàng năm Môi trường trẻ trung thân thiện, career path rõ ràng Miễn phí trà, cafe, bánh kẹo tại pantry Công ty.',
    location: 'Hà Nội:  Tòa nhà Toyota Thanh Xuân, 315 Trường Chinh, Thanh Xuân, Hà Nội',
  };
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
              24/01/2022
            </Text>
          </Flex>
          <Flex alignItems='center' gap='12px'>
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              Ngày kết thúc:
            </Text>
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              24/02/2022
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
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              Trạng thái:
            </Text>
            <StatusFrame type='2' text='đã cấm' />
          </Flex>
          <Flex
            gap='20px'
            p='10px 12px 10px 24px'
            justifyContent='space-between'
            alignSelf='stretch'
            alignItems='center'
            border='1px solid #666666'
            rounded='12px'
          >
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              Số lần Vi Phạm: 0 Lần
            </Text>
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
              <ListItem>
                Là cầu nối giữa khách hàng và team phát triển, tham gia cùng nhóm: phân tích, thực
                hiện,... các yêu cầu của dự án
              </ListItem>
              <ListItem>Biên dịch tài liệu tiếng Nhật cho các dự án phát triển phần mềm</ListItem>
              <ListItem>
                Phiên dịch các cuộc họp, truyền tải nội dung giữa team dự án và khách hàng
              </ListItem>
              <ListItem>
                Tham gia quản lý dự án, theo dõi và báo cáo tiến độ, điều hòa công việc giữa team dự
                án và khách hàng, đảm bảo sự hài hòa giúp dự án tiến hành thuận lợi.
              </ListItem>
            </UnorderedList>
          </Flex>
        </Stack>
        {/*Candidate requirements*/}
        <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
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
        </Stack>
        {/*Benefits*/}
        <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
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
        </Stack>
        {/*Location*/}
        <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
          <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
            Địa điểm làm việc
          </Text>
          <Flex pl='0px' gap='10px' alignSelf='stretch' alignItems='flex-start'>
            <UnorderedList fontSize='14px' fontWeight='500' lineHeight='24px' pl='8px'>
              <ListItem>
                Hà Nội: Tòa nhà Toyota Thanh Xuân, 315 Trường Chinh, Thanh Xuân, Hà Nội
              </ListItem>
            </UnorderedList>
          </Flex>
        </Stack>
      </Stack>
    </GridItem>
  );
  const buttons = (
    <Flex alignItems='flex-start' gap='20px'>
      {!edit ? (
        <Flex gap='20px'>
          <Flex
            onClick={handleEditClick}
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
              Chỉnh sửa
            </Text>
          </Flex>
          <Flex
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
            Ẩn bài đăng
          </Flex>
        </Flex>
      ) : (
        <Flex gap='20px'>
          <Flex
            onClick={handleEditClick}
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
              Lưu
            </Text>
          </Flex>
          <Flex
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
            onClick={handleEditClick}
          >
            Hủy
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
