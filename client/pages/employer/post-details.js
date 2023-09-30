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
import { CiSearch } from 'react-icons/ci';
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
import EmployerHeader from '../../components/layout/employer/header';
import { useState } from 'react';
import StatusFrame from '../../components/layout/admin/statusFrame';
import DropDownStatus from '../../components/layout/admin/dropDownStatus';
import PostImage from '../../public/static/images/applicationPost.png';
function PostDetails() {
  const [menuIcon, setMenuIcon] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const handleActiveIcon = (value) => setActiveIcon(value);
  const handleMenuClick = () => setMenuIcon(!menuIcon);

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
  const itemFilter = { location: ['Hà Nội', 'Hà Giang', 'Kon tum'] };

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
          <DropDownStatus data={menuData.status} />
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
      <GridItem colSpan='2' mt='24px'>
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
          <Flex justifyContent='space-between' alignSelf='stretch' alignItems='center' p='0px'>
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
                    <Flex py='2px' px='8px' alignItems='flex-start' bg='#D7D7D7' rounded='4px'>
                      <Text fontSize='12px' fontWeight='500' lineHeight='20px' color='#323541'>
                        {post.location}
                      </Text>
                    </Flex>
                    <Flex py='2px' px='8px' alignItems='flex-start' bg='#D7D7D7' rounded='4px'>
                      <Text fontSize='12px' fontWeight='500' lineHeight='20px' color='#323541'>
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
    </GridItem>
  );

  const leftContent = (
    <GridItem colSpan='2'>
      <Box px='24px' pt='16px' pb='20px'>
        <Stack>
          {status}
          {details}
        </Stack>
      </Box>
    </GridItem>
  );
  const rightContent = (
    <GridItem>
      <Stack gap='24px'>
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
              Ứng viên tuyển gần đây
            </Text>
          </Flex>

          <Stack
            p='24px'
            justifyContent='center'
            gap='16px'
            border='1px'
            borderColor='#D7D7D7'
            roundedBottom='20px'
          >
            <Flex p='16px' gap='20px'>
              <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
              <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch' gap='0px'>
                <Flex justifyContent='space-between'>
                  <Stack gap='4px'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Nguyễn văn A
                    </Text>
                    <Text fontSize='14px' fontWeight='400'>
                      Java-Dev
                    </Text>
                  </Stack>
                  <Text fontSize='14px' fontWeight='600'>
                    17/08/2021
                  </Text>
                </Flex>
                <StatusFrame text='Chưa duyệt' />
              </Stack>
            </Flex>
            <Flex p='16px' gap='20px'>
              <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
              <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch' gap='0px'>
                <Flex justifyContent='space-between'>
                  <Stack gap='4px'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Nguyễn văn A
                    </Text>
                    <Text fontSize='14px' fontWeight='400'>
                      Java-Dev
                    </Text>
                  </Stack>
                  <Text fontSize='14px' fontWeight='600'>
                    17/08/2021
                  </Text>
                </Flex>
                <StatusFrame text='Chưa duyệt' />
              </Stack>
            </Flex>
            <Flex p='16px' gap='20px'>
              <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
              <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch' gap='0px'>
                <Flex justifyContent='space-between'>
                  <Stack gap='4px'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Nguyễn văn A
                    </Text>
                    <Text fontSize='14px' fontWeight='400'>
                      Java-Dev
                    </Text>
                  </Stack>
                  <Text fontSize='14px' fontWeight='600'>
                    17/08/2021
                  </Text>
                </Flex>
                <StatusFrame text='Chưa duyệt' />
              </Stack>
            </Flex>
            <Flex p='16px' gap='20px'>
              <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
              <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch' gap='0px'>
                <Flex justifyContent='space-between'>
                  <Stack gap='4px'>
                    <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                      Nguyễn văn A
                    </Text>
                    <Text fontSize='14px' fontWeight='400'>
                      Java-Dev
                    </Text>
                  </Stack>
                  <Text fontSize='14px' fontWeight='600'>
                    17/08/2021
                  </Text>
                </Flex>
                <StatusFrame text='Chưa duyệt' />
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </GridItem>
  );
  return (
    <div ml='316px'>
      {/*Header*/}
      <EmployerHeader />

      {/*Post details Content*/}
      <Grid templateColumns='repeat(3, 1fr)' h='90vh'>
        {/*Left */}
        {leftContent}
        {/*Right*/}
        {rightContent}
      </Grid>
    </div>
  );
}

export default PostDetails;
