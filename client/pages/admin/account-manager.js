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
} from '@chakra-ui/react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import ShieldCheck from '../../public/static/images/icon/shield_check.svg';
import ShieldWarning from '../../public/static/images/icon/shield_warning.svg';
import Pagination from '../../components/paging';
import HeaderAdmins from '../../components/layout/header_admin';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function AccountManager() {
  const itemsPerPage = 12;
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  const data = [
    {
      id: 1,
      job_name: 'Java Dev',
      email: 'alma.lawson@gmail.com',
      role: 1,
      date: '12/12/2022',
      status: 1,
      ban: 1,
    },
    {
      id: 2,
      job_name: 'Android Dev',
      email: 'dols.chambers@gmail.com',
      role: 1,
      date: '30/05/2022',
      status: 0,
      ban: 1,
    },
    {
      id: 3,
      job_name: 'Java Dev',
      email: 'tanya.hill@gmail.com',
      role: 1,
      date: '24/01/2022',
      status: 0,
      ban: 0,
    },
  ];
  const [dataUser, setDataUser] = useState([]);
  const [param, setParam] = useState({ offset: 0, limit: 3, search: '' });
  const [search, setSearch] = useState();
  const handleSearch = useCallback((value) => {
    setSearch(value);
    setParam({ ...param, search: value });
    getListAccounts(value);
  }, []);

  const getListAccounts = useCallback(
    async (search) => {
      try {
        const getListAccounts = await axios.post(
          `http://localhost:5000/company/get-company-by-id`,
          {
            ...param,
            search: search ? search : param.search,
          },
        );
        if (getListAccounts.data.statusCode === 200) {
          setDataUser(getListAccounts.data.data.list_user);
        } else {
        }
      } catch (error) {}
    },
    [param],
  );
  useEffect(() => {
    getListAccounts();
  }, []);
  const TableContent = dataUser.map((item, index) => {
    return (
      <Tr>
        <Td textAlign={'center'}>{index}</Td>
        <Td>{item.job_name}</Td>
        <Td>{item.email}</Td>
        <Td>
          {item.role == 0 ? 'Quản trị viên' : item.role == 1 ? 'Nhà tuyển dụng' : 'Sinh viên'}
        </Td>
        <Td textAlign={'center'}>{item.date}</Td>
        <Td textAlign={'center'}>
          {item.status ? (
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
                Đã xác minh
              </Text>
            </Box>
          ) : (
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
                Chưa xác minh
              </Text>
            </Box>
          )}
        </Td>
        <Td textAlign={'center'}>
          {item.ban ? (
            <Image src={ShieldCheck} style={{ margin: '0 auto' }} />
          ) : (
            <Image src={ShieldWarning} style={{ margin: '0 auto' }} />
          )}
        </Td>
      </Tr>
    );
  });

  const TableUNW = (
    <>
      <TableContainer marginTop={'28px'} p={'0 40px'}>
        <Table variant='simple' className='unw-table-custom'>
          <Thead>
            <Tr>
              <th style={{ width: '5%' }}>STT</th>
              <th style={{ width: '20%' }}>Tên</th>
              <th style={{ width: '25%' }}>Email</th>
              <th>Chức năng</th>
              <th>Ngày đăng kí</th>
              <th style={{ width: '15%' }}>Trạng thái</th>
              <th style={{ width: '5%' }}>Cấm</th>
            </Tr>
          </Thead>
          <Tbody>{TableContent}</Tbody>
        </Table>
      </TableContainer>
      <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} changePage={changePage} />;
    </>
  );

  const TabUNW = (
    <Tabs marginTop={'28px'}>
      <TabList paddingLeft={'24px'} borderBottom={'none'}>
        <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
          Tất cả tài khoản
        </Tab>
        <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
          Nhà tuyển dụng
        </Tab>
        <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
          Ứng viên
        </Tab>
        <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
          Quản trị viên
        </Tab>
      </TabList>
    </Tabs>
  );

  const ActionUNW = (
    <Flex p={'24px 0 0 24px'}>
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
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
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
  );

  return (
    <Box>
      <HeaderAdmins title={'Quản lí tài khoản'} />
      {ActionUNW}
      {TabUNW}
      {TableUNW}
    </Box>
  );
}
