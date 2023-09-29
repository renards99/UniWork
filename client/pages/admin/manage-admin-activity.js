import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Flex,
  Text,
  Input,
  Button,
  Box,
  Tabs,
  TabList,
  Tab,
  IconButton,
  Stack,
  Avatar,
} from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { TbEditCircle } from 'react-icons/tb';
import Pagination from '../../components/paging';
import HeaderAdmins from '../../components/layout/header_admin';
import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

function ManageAdminActivity() {
  const [logList, setLogList] = useState([]);
  const [userId, setUserId] = useState(0);

  const getAdminLog = useCallback(async () => {
    try {
      const getAdminLog = await axios.post(`http://localhost:5000/user-log/get-user-log-by-id`, {
        user_account_id: userId,
      });
      console.log(getAdminLog);
      if (getAdminLog.data.statusCode === 200) {
        setLogList(getAdminLog.data.data);
        console.log(getAdminLog.data.data);
        console.log('haha');
      } else {
      }
    } catch (error) {}
  }, [userId]);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.id);
    }

    getAdminLog();
  }, [getAdminLog]);

  const activityData = [
    {
      date: '29 Tháng 8, 2023',
      activity: [
        {
          avatar: '',
          adminName: 'Quản trị viên Nguyễn Uyên',
          action: 'vừa duyệt bài đăng của nhà tuyển dụng empoyern_o1@.gmail.com',
        },
      ],
    },

    {
      date: '30 Tháng 8, 2023',
      activity: [
        {
          avatar: '',
          adminName: 'Quản trị viên Nguyễn Uyên',
          action: 'vừa duyệt bài đăng của nhà tuyển dụng empoyern_o1@.gmail.com',
        },
      ],
    },
    {
      date: '31 Tháng 8, 2023',
      activity: [
        {
          avatar: '',
          adminName: 'Quản trị viên Nguyễn Uyên',
          action: 'vừa duyệt bài đăng của nhà tuyển dụng empoyern_o1@.gmail.com',
        },
      ],
    },
    {
      date: '1 Tháng 9, 2023',
      activity: [
        {
          avatar: '',
          adminName: 'Quản trị viên Nguyễn Uyên',
          action: 'vừa duyệt bài đăng của nhà tuyển dụng empoyern_o1@.gmail.com',
        },
      ],
    },
  ];
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
            placeHolder={'Tìm kiếm'}
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
        <IconButton
          icon={<IoIosAddCircleOutline style={{ width: '24px', height: '24px' }} />}
          borderRadius={'50%'}
          w={'40px'}
          h={'40px'}
          backgroundColor={'#e7e7ea'}
        />
        <Box w={'20px'}></Box>
        <IconButton
          icon={<TbEditCircle style={{ width: '24px', height: '24px' }} />}
          borderRadius={'50%'}
          w={'40px'}
          h={'40px'}
          backgroundColor={'#e7e7ea'}
        />
      </Flex>
    </Flex>
  );

  return (
    <Box ml='316px'>
      <HeaderAdmins title={'Nhật ký hoạt động'} />
      {ActionUNW}
      <Stack gap='20px' p='24px'>
        {logList.map((data, index) => (
          <Stack gap='20px' key={index}>
            <Text fontSize='22px' fontWeight='600' lineHeight='24px'>
              {data.created_at}
            </Text>
            <Flex _last={{ borderBottomWidth: 0 }} borderBottom='1px solid #BABABA' py='20px'>
              <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
              <Text fontSize='20px' fontWeight='600' lineHeight='24px'>
                {data.description}
              </Text>
            </Flex>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
export default ManageAdminActivity;
