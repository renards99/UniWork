import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Button,
  Input,
  Textarea,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import DropDown from '../../components/layout/employer/dropDown';
import { FiPhone } from 'react-icons/fi';
import AdminPage from '.';

import DatePicker from 'react-datepicker';
import EmployerHeader from '../../components/layout/employer/header';
import { useCallback, useState, useEffect } from 'react';
import { differenceInDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

import axios from 'axios';

const menuData = {
  roles: ['Giám đốc', 'Nhân viên', 'Trợ lý', 'Quản lý', 'Phó phòng', 'Thực tập sinh'],
  workForm: [
    'Bán thời gian - Partime',
    'Toàn thời gian - Fulltime',
    'Làm việc từ xa - Remote',
    'Làm việc văn phòng và làm việc từ xa - Hybird',
  ],
  gender: ['nam', 'nữ', 'không yêu cầu'],
};

function PostUpload() {
  const [title, setTitle] = useState('');
  const [workHours, setWorkHours] = useState('');
  const [experience, setExperience] = useState('');
  const [serviceId, setServiceId] = useState(0);
  const [jobTypeId, setJobTypeId] = useState(0);
  const [postById, setPostById] = useState(0);
  const [companyId, setCompanyId] = useState(0);
  const [hireNumber, setHireNumber] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setjobLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [gender, setGender] = useState('');
  const [jobType, setJobType] = useState([]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const calculateDifference = () => {
    if (startDate && endDate) {
      return differenceInDays(endDate, startDate);
    }
    return '';
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

  const handleSave = () => {
    const emptyFields = [];

    if (!title.trim()) emptyFields.push('Title');
    if (!workHours.trim()) emptyFields.push('Work Hours');
    if (!serviceId) emptyFields.push('Service ID');
    if (!jobTypeId) emptyFields.push('Job Type ID');
    if (!postById) emptyFields.push('Post By ID');
    if (!companyId) emptyFields.push('Company ID');
    if (!hireNumber.trim()) emptyFields.push('Hire Number');
    if (!jobDescription.trim()) emptyFields.push('Job Description');
    if (!jobLocation.trim()) emptyFields.push('Job Location');
    if (!salary.trim()) emptyFields.push('Salary');
    if (!gender.trim()) emptyFields.push('Gender');

    if (emptyFields.length > 0) {
      alert(`The following fields are empty: ${emptyFields.join(', ')}`);
      return;
    }

    // Logic to save data goes here
    console.log('Data saved:', {
      title,
      workHours,
      serviceId,
      jobTypeId,
      postById,
      companyId,
      hireNumber,
      jobDescription,
      jobLocation,
      salary,
      gender,
    });
  };
  return (
    <Box>
      <EmployerHeader />
      <Grid templateColumns='repeat(3, 1fr)' h='90vh' mt='52px' px='24px'>
        <GridItem colSpan='2'>
          {/*Left */}
          <Stack gap='24px'>
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
                  Đăng tin tuyển dụng
                </Text>
              </Flex>
              <Stack
                py='24px'
                px='12px'
                justifyContent='space-between'
                gap='20px'
                roundedBottom='20px'
                border='1px'
                borderColor='#D7D7D7'
              >
                <Stack gap='8px' p='0px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Tiêu đề:
                  </Text>
                  <Input
                    p='24px 20px'
                    placeholder='Tên tiêu đề    '
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></Input>
                </Stack>
                <Stack gap='8px' p='0px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Mức lương:
                  </Text>
                  <Input
                    p='24px 20px'
                    placeholder='Mức lương'
                    rounded='12px'
                    border='1px solid #323541'
                    focusBorderColor='none'
                    _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                    fontSize='16px'
                    fontWeight='600px'
                    lineHeight='24px'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  ></Input>
                </Stack>
                <Stack gap='8px' p='0px'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Kinh nghiệm:
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
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  ></Input>
                </Stack>
                <Flex gap='20px' alignItems='center' alignSelf='stretch'>
                  <Stack gap='8px' p='0px' flex='1 0 0'>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Số lượng tuyển:
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
                      value={hireNumber}
                      onChange={(e) => setHireNumber(e.target.value)}
                    ></Input>
                  </Stack>
                  <Stack gap='8px' p='0px' flex='1 0 0'>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Ngành nghề:
                    </Text>
                    <DropDown data={jobType} selected={jobTypeId} onChange={setJobTypeId} />
                  </Stack>
                </Flex>
              </Stack>
            </GridItem>
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
                  Chỉ tiêu tuyển dụng
                </Text>
              </Flex>
              <Stack
                py='24px'
                px='12px'
                justifyContent='space-between'
                gap='20px'
                roundedBottom='20px'
                border='1px'
                borderColor='#D7D7D7'
              >
                <Flex gap='20px' alignItems='center' alignSelf='stretch'>
                  <Stack gap='8px' p='0px' flex='1 0 0'>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Hình thức làm việc:
                    </Text>
                    <DropDown data={menuData.roles} />
                  </Stack>
                  <Stack gap='8px' p='0px' flex='1 0 0'>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      Giới tính:
                    </Text>
                    <DropDown data={menuData.roles} />
                  </Stack>
                </Flex>
                <Stack gap='8px' p='0px' flex='1 0 0'>
                  <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                    Thời hạn đăng
                  </Text>
                  <Flex>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
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
                      value={calculateDifference() ? `${calculateDifference()} days` : ''}
                      readOnly
                    />
                  </Flex>
                </Stack>
              </Stack>
            </GridItem>
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
                  Chỉ tiêu tuyển dụng
                </Text>
              </Flex>
              <Stack
                py='24px'
                px='12px'
                justifyContent='space-between'
                gap='20px'
                roundedBottom='20px'
                border='1px'
                borderColor='#D7D7D7'
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
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  ></Textarea>
                </Stack>
                <Stack gap='8px' alignItems='flex-start' alignSelf='stretch'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Địa điểm làm việc:
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
                    value={jobLocation}
                    onChange={(e) => setjobLocation(e.target.value)}
                  ></Textarea>
                </Stack>
              </Stack>
            </GridItem>
          </Stack>
        </GridItem>
        {/*Right*/}
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
                  Dịch vụ
                </Text>
              </Flex>
              <RadioGroup>
                <Stack
                  p='24px'
                  justifyContent='center'
                  gap='16px'
                  border='1px'
                  borderColor='#D7D7D7'
                >
                  <Radio size='lg' colorScheme='blackAlpha' value='1'>
                    <Text fontSize='14px' fontWeight='400' lineHeight='24px'>
                      Add Label Hot
                    </Text>
                  </Radio>
                  <Flex justifyContent='space-between' alignItems='center'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Bài đăng 0 ngày:
                    </Text>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      0đ
                    </Text>
                  </Flex>
                  <Flex justifyContent='space-between' alignItems='center'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Add label Hot:
                    </Text>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      1.000.000đ
                    </Text>
                  </Flex>
                </Stack>
                <Stack
                  p='24px'
                  justifyContent='center'
                  gap='16px'
                  border='1px'
                  borderColor='#D7D7D7'
                  roundedBottom='20px'
                >
                  <Flex justifyContent='space-between' alignItems='center'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Total:
                    </Text>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      1.000.000đ
                    </Text>
                  </Flex>
                </Stack>
              </RadioGroup>
              <Button
                mt='24px'
                w='100%'
                px='24px'
                py='22px'
                backgroundColor={'white'}
                color={'#323541'}
                borderRadius={'20px'}
                fontSize={'14px'}
                fontWeight={'600'}
                lineHeight='24px'
                border='1px solid #323541'
              >
                Xác nhận thanh toán
              </Button>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default PostUpload;
