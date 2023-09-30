import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Button,
  Input,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import EmployerHeader from '../../components/layout/employer/header';
import StatusFrame from '../../components/layout/admin/statusFrame';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';

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
  status: [
    <StatusFrame text='Chưa duyệt' />,
    <StatusFrame text='Đã duyệt' />,
    <StatusFrame text='Không duyệt' />,
    <StatusFrame text='Hết hạn' />,
  ],
};

const BACK_END_PORT = 'http://localhost:5000';

function PostList() {
  const router = useRouter();

  const [userData, setUserData] = useState({});
  const [listJobPost, setListJobPost] = useState([]);

  const getEmployerById = async () => {
    try {
      if (localStorage.getItem('user')) {
        const userId = JSON.parse(localStorage.getItem('user'))?.id;
        if (userId) {
          const [getEmployerById, getJobPost] = await Promise.all([
            axios.post(`http://localhost:5000/employer/get-employer-by-id`, {
              id: userId,
            }),
            axios.post(`http://localhost:5000/job-post/get-all-job-post-by-id`, {
              user_account_id: userId,
            }),
          ]);
          if (getEmployerById.data.statusCode === 200) {
            setUserData(getEmployerById.data.data.employer_details[0]);
          }
          if (getJobPost.data.statusCode === 200) {
            setListJobPost(getJobPost.data.data);
          }
        }
      }
    } catch (error) {}
  };
  const [jobPostSelected, setJobPostSelected] = useState();
  const [listJobPostApplication, setListJobPostApplication] = useState([]);

  const handleSelectedJobId = async (jobId) => {
    setJobPostSelected(jobId); //
    const getJobPostApplicationById = await axios.post(
      `${BACK_END_PORT}/job-post-application/list-job-post-application`,
      { job_post_id: jobId },
    );
    if (getJobPostApplicationById.data.statusCode === 200) {
      setListJobPostApplication(getJobPostApplicationById.data.data);
    }
  };

  const jobItem = !listJobPost ? (
    listJobPost.map((item) => (
      <Flex p='16px' gap='20px' onClick={() => handleSelectedJobId(item.id)} cursor={'pointer'}>
        <Box w='100px' h='100px' bg='#323541'></Box>
        <Stack justifyContent='space-between' flex='1 0 0' alignSelf='stretch'>
          <Stack gap='4px'>
            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
              {item.title}
            </Text>
            <Text fontSize='14px' fontWeight='400'>
              {item.company_name}
            </Text>
          </Stack>
          <StatusFrame
            type={item?.state == '1' ? '0' : '1'}
            text={item?.state == '1' ? 'Chưa duyệt' : 'Đã duyệt'}
          />
        </Stack>
      </Flex>
    ))
  ) : (
    <Flex justifyContent='space-between' alignItems='center'>
      <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
        Bạn hiện chưa có tin tuyển dụng nào
      </Text>
      <Flex>
        <Link href='/employer/post-upload'>
          <IconButton
            icon={<IoIosAddCircleOutline style={{ width: '24px', height: '24px' }} />}
            borderRadius={'50%'}
            w={'40px'}
            h={'40px'}
            backgroundColor={'#e7e7ea'}
          />
        </Link>
      </Flex>
    </Flex>
  );

  useEffect(() => {
    getEmployerById();
  }, []);

  useEffect(() => {
    const checkModal = !!router.query.payment_status;
    const status = router.query.payment_status;

    if (checkModal) {
      if (status === '00') {
        alert('Giao dịch thành công');
      } else {
        alert('Có vấn đề khi giao dịch vui lòng thử lại');
      }
    }
  }, [router]);

  return (
    <Stack gap='26px' ml='316px'>
      <EmployerHeader />
      const ActionUNW = (
      <Flex p={'24px 40px 0 24px'} justifyContent={'space-between'}>
        <Flex>
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
              placeholder={'Tìm kiếm'}
              backgroundColor={'#e7e7ea'}
              fontSize={'16px'}
              _hover={{ outline: 'none' }}
              _focusVisible={{ outline: 'none' }}
            />
          </Flex>
          <Box w={'24px'}></Box>
          <Button
            w={'132px'}
            h={'40px'}
            backgroundColor={'#323541'}
            color={'#fff'}
            borderRadius={'20px'}
            fontSize={'14px'}
            fontWeight={'600'}
          >
            Tìm kiếm
          </Button>
        </Flex>
        <Flex>
          <Link href='/employer/post-upload'>
            <IconButton
              icon={<IoIosAddCircleOutline style={{ width: '24px', height: '24px' }} />}
              borderRadius={'50%'}
              w={'40px'}
              h={'40px'}
              backgroundColor={'#e7e7ea'}
            />
          </Link>
        </Flex>
      </Flex>
      );
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
                {jobItem}
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
                {jobPostSelected ? (
                  listJobPostApplication.map((jobApplication, index) => (
                    <Flex p='16px' gap='20px' key={index}>
                      <Box w='60px' h='60px' rounded='full' bg='#323541'></Box>
                      <Stack
                        justifyContent='space-between'
                        flex='1 0 0'
                        alignSelf='stretch'
                        gap='0px'
                      >
                        <Flex justifyContent='space-between'>
                          <Stack gap='4px'>
                            <Text fontSize='16px' fontWeight='600' lineHeight='24px'>
                              {jobApplication.full_name}
                            </Text>
                            <Text fontSize='14px' fontWeight='400'>
                              Java-Dev
                            </Text>
                          </Stack>
                          <Text fontSize='14px' fontWeight='600'>
                            17/08/2021
                          </Text>
                        </Flex>
                        <StatusFrame
                          text={
                            jobApplication.state == 0
                              ? 'Chưa duyệt'
                              : jobApplication.state == 1
                              ? 'Đã duyệt '
                              : 'Bị từ chối'
                          }
                        />
                      </Stack>
                    </Flex>
                  ))
                ) : (
                  <Flex>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Chưa có ứng viên gần đây
                    </Text>
                  </Flex>
                )}
              </Stack>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
}

export default PostList;
