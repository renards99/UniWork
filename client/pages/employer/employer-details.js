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
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState(1);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('1');
  const [userData, setUserData] = useState({});
  const [jobType, setJobType] = useState([]);
  const [employerId, setEmployerId] = useState(0);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedJobType, setSelectedJobType] = useState(0);
  const [facebookLink, setFacebookLink] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const getEmployerById = useCallback(async () => {
    try {
      console.log('im in' + JSON.parse(localStorage.getItem('user')).id);

      const getEmployerById = await axios.post(
        `http://localhost:5000/employer/get-employer-by-id`,
        {
          id: JSON.parse(localStorage.getItem('user')).id,
        },
      );

      if (getEmployerById.data.statusCode === 200) {
        setUserData(getEmployerById.data.data.employer_details[0]);
        setIsLoading(false); // Set loading to false once data is fetched
        console.log(getEmployerById.data.data.employer_details[0]);
        console.log('employer detail');
      } else {
        setIsLoading(false); // Even if there's an error in response, set loading to false
      }
    } catch (error) {
      setIsLoading(false); // If there's an error, set loading to false
    }
  }, []);
  useEffect(() => {
    getEmployerById();
  }, [getEmployerById]);

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
    scale: ['10-20', '25-90', '100-200', '200-1000', 'Trên 1000'],
    gender: ['Nam', 'Nữ', 'Khác'],
  };
  const sizeMapping = {
    1: '10-20 nhân viên',
    2: '25-90 nhân viên',
    3: '100-200 nhân viên',
    4: '200-1000 nhân viên',
    5: 'Trên 1000 nhân viên',
  };
  const handleEdit = () => setEdit(!edit);
  const handleToggle = () => setShow(!show);
  const handleTab = (value) => setTab(value);
  const handleEditProfile = async () => {
    try {
      await axios.put(`http://localhost:5000/update-account`, {
        id: employerId,
        full_name: employerName,
        mobile_number: phoneNumber,
        gender: selectedGender,
      });
      await axios.put(`http://localhost:5000/employer/update-employer`, {
        user_account_id: employerId,
        job_type_id: selectedJobType,
        facebook_link: facebookLink,
        company_id: userData.company_id,
      });
      alert('Profile updated successfully.');
    } catch (error) {}
  };
  const getListJobType = useCallback(async () => {
    try {
      const getListJobType = await axios.post(`http://localhost:5000/job-type/get-all-job-type`);
      if (getListJobType.data.statusCode === 200) {
        setJobType(getListJobType.data.data.map((item) => item.job_type_name));
        console.log(getListJobType.data.data);
      } else {
      }
    } catch (error) {}
  }, []);
  useEffect(() => {
    getListJobType();
  }, []);
  // Define a function to handle the selection change
  const handleGenderChange = (selectedValue) => {
    console.log('Selected gender:', selectedValue);
    setSelectedGender(selectedValue);
    console.log(selectedGender);
  };
  const handleJobTypeChange = (selectedValue) => {
    setSelectedJobType(selectedValue);
  };
  const handleFacebookLinkChange = (e) => {
    const newValue = e.target.value;
    setFacebookLink(newValue);
  };
  useEffect(() => {
    setEmail(userData.email);
    setEmployerId(userData.user_account_id);
    setSelectedGender(userData.gender);
    setFacebookLink(userData.facebook_link);
    setEmployerName(userData.full_name);
    setPhoneNumber(userData.mobile_number);
    setSelectedJobType(userData.job_type_id);
  }, [userData]);

  // phan sua thong tin doanh nghiep

  const isValidEmail = (email) => {
    // Regular expression pattern for a simple email validation
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  };

  const [companyType, setCompanyType] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [taxCode, setTaxCode] = useState('');
  const [selectedSize, setSelectedSize] = useState(0);
  const [description, setDescription] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');

  const handleCompanyTypeChange = (e) => setCompanyType(String(e));
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handleCompanyPhoneChange = (e) => setCompanyPhone(e.target.value);
  const handleWebsiteChange = (e) => setWebsite(e.target.value);
  const handleTaxCodeChange = (e) => setTaxCode(e.target.value);
  const handleSelectedSizeChange = (e) => setSelectedSize(e);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCompanyLocationChange = (e) => setCompanyLocation(e.target.value);
  const handleCompanyEmailChange = (e) => {
    setCompanyEmail(e.target.value);
  };

  useEffect(() => {
    setCompanyType(userData.type);
    setCompanyName(userData.company_name);
    setCompanyEmail(userData.company_email);
    setCompanyPhone(userData.company_phone_number);
    setWebsite(userData.company_website_url);
    setTaxCode(userData.tax_code);
    setSelectedSize(userData.size);
    setDescription(userData.company_description);
    setCompanyLocation(userData.company_location);
    console.log(userData);
  }, [userData]);

  const areAllFieldsFilledCompany = () => {
    return (
      companyName &&
      companyEmail &&
      companyPhone &&
      website &&
      taxCode &&
      description &&
      selectedSize
    );
  };

  const handleSave = async () => {
    if (!isValidEmail(companyEmail)) {
      setEmailError('Please enter a valid email.');
      alert('Please enter a valid email.');
      return;
    } else {
      setEmailError('');
    }

    if (areAllFieldsFilledCompany()) {
      const companyId = userData.company_id;

      if (!companyId) {
        // Check if companyId is null or undefined
        // If companyId doesn't exist, only run the logic to create the company
        const createResponse = await axios.post('http://localhost:5000/company/create-company', {
          type: companyType,
          company_name: companyName,
          company_email: companyEmail,
          company_phone_number: companyPhone,
          tax_code: taxCode,
          size: selectedSize,
          company_location: companyLocation,
          company_description: description,
          company_website_url: website,
        });

        const createdCompanyId = createResponse.data.data.id;
        console.log(createResponse);

        await axios.put('http://localhost:5000/employer/update-employer', {
          user_account_id: employerId,
          job_type_id: selectedJobType,

          company_id: createdCompanyId,
          facebook_link: facebookLink,
        });
        alert('Company created successfully.');
        return; // Return to stop the rest of the function from running
      }

      handleEdit();
      try {
        // First, check if the company exists
        const response = await axios.post(`http://localhost:5000/company/get-company-by-id`, {
          id: companyId,
        });

        if (response.data.statusCode === 200) {
          // If company exists, send an update request
          await axios.put(`http://localhost:5000/company/update-company`, {
            id: companyId,
            type: companyType,
            company_name: companyName,
            company_email: companyEmail,
            company_phone_number: companyPhone,
            tax_code: taxCode,
            size: selectedSize,
            company_location: companyLocation,
            company_description: description,
            company_website_url: website,
          });
          alert('Company updated successfully.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    } else {
      alert('Please fill all the fields before saving.');
    }
  };

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
                <RadioGroup onChange={handleCompanyTypeChange} value={String(companyType)}>
                  <Stack direction='row'>
                    <Radio value='1'>
                      <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Cửa hàng
                      </Text>
                    </Radio>
                    <Radio value='2'>
                      <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Công ty
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
                  value={companyName}
                  onChange={handleCompanyNameChange}
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
                  value={companyEmail}
                  onChange={handleCompanyEmailChange}
                ></Input>
                {emailError && <Text color='red'>{emailError}</Text>}
              </Stack>
              <Stack gap='8px' p='0px'>
                <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                  Số điện thoại:
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
                  value={companyPhone}
                  onChange={handleCompanyPhoneChange}
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
                  value={website}
                  onChange={handleWebsiteChange}
                ></Input>
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
                    value={taxCode}
                    onChange={handleTaxCodeChange}
                  ></Input>
                </Stack>
                <Stack gap='8px' p='0px' w='276px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Quy mô (Số Lượng nhân viên)
                  </Text>
                  <DropDown
                    data={menuData.scale}
                    selected={selectedSize}
                    onChange={handleSelectedSizeChange}
                  />
                </Stack>
              </Flex>
              <Stack gap='8px' p='0px'>
                <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                  Địa chỉ:
                </Text>
                <Input
                  p='24px 20px'
                  placeholder='Địa chỉ'
                  rounded='12px'
                  border='1px solid #323541'
                  focusBorderColor='none'
                  _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                  fontSize='16px'
                  fontWeight='600px'
                  lineHeight='24px'
                  value={companyLocation}
                  onChange={handleCompanyLocationChange}
                ></Input>
              </Stack>
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
                  value={description}
                  onChange={handleDescriptionChange}
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
                onClick={handleSave}
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
                    {companyName}
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
                      <Text lineHeight='24px'>{website}</Text>
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
                      <Text lineHeight='24px'>{sizeMapping[selectedSize]}</Text>
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
                        {description}
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
                      {companyPhone}
                    </Text>
                  </Flex>
                  <Flex gap='20px'>
                    <Box fontSize='24px'>
                      <BsGlobe />
                    </Box>
                    <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                      {website}
                    </Text>
                  </Flex>
                  <Flex gap='20px'>
                    <Box fontSize='24px'>
                      <HiMiniMapPin />
                    </Box>
                    <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                      {companyLocation}
                    </Text>
                  </Flex>
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
          Thông tin cá nhân
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
            {email}
          </Text>
        </Flex>

        <Stack gap='8px' p='0px'>
          <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
            Họ và tên:
          </Text>
          <Input
            p='24px 20px'
            placeholder='Họ và tên'
            rounded='12px'
            border='1px solid #323541'
            focusBorderColor='none'
            _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
            fontSize='16px'
            fontWeight='600px'
            lineHeight='24px'
            value={employerName}
            onChange={(e) => setEmployerName(e.target.value)}
          ></Input>
        </Stack>

        <Flex gap='20px'>
          <Stack gap='8px' p='0px' flex='1 0 0'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Giới tính:
            </Text>
            <DropDown
              data={menuData.gender}
              selected={selectedGender}
              onChange={handleGenderChange}
            />
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></Input>
          </Stack>
        </Flex>

        <Stack gap='8px' p='0px'>
          <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
            Lĩnh vực hoạt động (ngành nghề):
          </Text>
          <DropDown data={jobType} selected={selectedJobType} onChange={handleJobTypeChange} />
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
            value={facebookLink}
            onChange={handleFacebookLinkChange}
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
          onClick={handleEditProfile}
          cursor='pointer'
        >
          <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='white'>
            Lưu
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
