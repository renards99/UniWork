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
import { useRouter } from 'next/router';

//format date
const options = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

export default function AccountManager() {
  const router = useRouter();

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
        const getListAccounts = await axios.post(`http://localhost:5000/list-accounts`, {
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
  useEffect(() => {
    getListAccounts();
  }, []);

  const slicedDataUser = dataUser.slice(startIndex, endIndex);
  const TableContent = slicedDataUser.map((item) => {
    return (
      <Tr
        cursor={'pointer'}
        onClick={() => {
          item.role_name == 'Nhà tuyển dụng'
            ? router.push(`/admin/user-profile-employer?id=${item.id}`)
            : item.role_name == 'Ứng viên'
            ? router.push(`/admin/user-profile-student?id=${item.id}`)
            : router.push('/admin');
        }}
      >
        <Td textAlign={'center'}>{item.id}</Td>
        <Td>{item.fullname}</Td>
        <Td>{item.email}</Td>
        <Td>{item.role_name}</Td>
        <Td textAlign={'center'}>
          {new Intl.DateTimeFormat('en-GB', options).format(new Date(item.registration_date))}
        </Td>
        <Td textAlign={'center'}>
          {item.is_verified ? (
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
          {item.is_banned ? (
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
              <th style={{ width: '5%' }}>ID</th>
              <th style={{ width: '20%' }}>Tên</th>
              <th style={{ width: '25%' }}>Email</th>
              <th>Vai trò</th>
              <th>Ngày đăng kí</th>
              <th style={{ width: '15%' }}>Trạng thái</th>
              <th style={{ width: '5%' }}>Cấm</th>
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
      ;
    </>
  );
  //
  //
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
          Tất cả tài khoản
        </Tab>
        <Tab
          fontSize={'16px'}
          fontWeight={'600'}
          color={'#323541'}
          onClick={() => {
            changePage(1);
            handleSearch(search, 'Nhà tuyển dụng');
          }}
        >
          Nhà tuyển dụng
        </Tab>
        <Tab
          fontSize={'16px'}
          fontWeight={'600'}
          color={'#323541'}
          onClick={() => {
            changePage(1);
            handleSearch(search, 'Ứng viên');
          }}
        >
          Ứng viên
        </Tab>
        <Tab
          fontSize={'16px'}
          fontWeight={'600'}
          color={'#323541'}
          onClick={() => {
            handleSearch(search, 'Quản trị viên');
            changePage(1);
          }}
        >
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
          placeholder={'Tìm kiếm'}
          backgroundColor={'#e7e7ea'}
          fontSize={'16px'}
          _hover={{ outline: 'none' }}
          _focusVisible={{ outline: 'none' }}
          value={search}
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
  );

  return (
    <Box ml='316px'>
      <HeaderAdmins title={'Quản lí tài khoản'} />
      {ActionUNW}
      {TabUNW}
      {TableUNW}
    </Box>
  );
}
