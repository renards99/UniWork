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
} from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { TbEditCircle } from 'react-icons/tb';
import Pagination from '../../components/paging';
import HeaderAdmins from '../../components/layout/header_admin';

import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
export default function JobManager() {
  const data = [
    {
      id: 1,
      job_name: 'Tuyển Android Dev',
      job_company: 'Công ty ABC',
      career: 'Công nghệ thông tin',
      date: '12/12/2022',
      status: 1,
    },
    {
      id: 2,
      job_name: 'Tuyển Java Dev cho website Nhật',
      job_company: 'Công ty Dược phẩm Long Châu',
      career: 'Công nghệ thông tin',
      date: '12/11/2022',
      status: 2,
    },
    {
      id: 3,
      job_name: 'Tuyển Android Dev',
      job_company: 'Công ty TNHH AFC',
      career: 'Công nghệ thông tin',
      date: '30/03/2022',
      status: 0,
    },
  ];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [dataUser, setDataUser] = useState([]);
  const [param, setParam] = useState({ search: '', role: '' });

  const [search, setSearch] = useState();
  const [role, setRole] = useState();
  const handleSearch = useCallback((value, role) => {
    setRole(role);
    setSearch(value);
    changePage(1);
    setParam({ ...param, search: value });
    getListAccounts(value, role);
  }, []);

  const getListAccounts = useCallback(
    async (search, role) => {
      try {
        const getListAccounts = await axios.post(`http://localhost:5000/job-post/get-all-post`, {
          ...param,
          search: search ? search : param.search,
          role: role ? role : param.role,
        });
        if (getListAccounts.data.statusCode === 200) {
          setDataUser(getListAccounts.data.data.list_user);
        } else {
        }
      } catch (error) {}
    },
    [param],
  );
  console.log(dataUser);
  useEffect(() => {
    getListAccounts();
  }, []);

  const slicedDataUser = dataUser.slice(startIndex, endIndex);

  const TableContent = slicedDataUser.map((item, index) => {
    console.log(item);
    return (
      <Tr>
        <Td textAlign={'center'}>{item.main_id}</Td>
        <Td>{item.title}</Td>
        <Td>{item.company_name}</Td>
        <Td>{item.job_type_name}</Td>
        <Td textAlign={'center'}>{formatDate(item.apply_at)}</Td>
        <Td textAlign={'center'}>
          {item.state == 2 ? (
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
          ) : item.state == 1 ? (
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
              <th style={{ width: '5%' }}>ID</th>
              <th style={{ width: '20%' }}>Tên công việc</th>
              <th style={{ width: '25%' }}>Tên công ty</th>
              <th>Ngành nghề</th>
              <th>Ngày đăng</th>
              <th style={{ width: '15%' }}>Trạng thái</th>
            </Tr>
          </Thead>
          <Tbody>{TableContent}</Tbody>
        </Table>
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={dataUser.length}
        changePage={changePage}
      />
    </>
  );

  const TabUNW = (
    <Tabs marginTop={'28px'}>
      <TabList paddingLeft={'24px'} borderBottom={'none'}>
        <Tab
          fontSize={'16px'}
          fontWeight={'600'}
          color={'#323541'}
          onClick={() => {
            changePage(1);
            handleSearch(search, '');
          }}
        >
          Tất cả bài đăng
        </Tab>
        <Tab
          fontSize={'16px'}
          fontWeight={'600'}
          color={'#323541'}
          onClick={() => {
            changePage(1);
            handleSearch(search, '1');
          }}
        >
          Chưa duyệt
        </Tab>
        <Tab
          fontSize={'16px'}
          fontWeight={'600'}
          color={'#323541'}
          onClick={() => {
            changePage(1);
            handleSearch(search, '2');
          }}
        >
          Đã duyệt
        </Tab>
        <Tab
          fontSize={'16px'}
          fontWeight={'600'}
          color={'#323541'}
          onClick={() => {
            changePage(1);
            handleSearch(search, '3');
          }}
        >
          Hết hạn
        </Tab>
      </TabList>
    </Tabs>
  );

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
            onChange={(e) => handleSearch(e.target.value, role)}
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
    <Box>
      <HeaderAdmins title={'Quản lí tuyển dụng'} />
      {ActionUNW}
      {TabUNW}
      {TableUNW}
    </Box>
  );
}
