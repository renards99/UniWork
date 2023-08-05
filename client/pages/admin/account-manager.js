import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Button,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Image from 'next/image';
import { LuBellDot } from 'react-icons/lu';
import { HiChevronDown } from 'react-icons/hi';
import { FaCircleUser } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import ShieldCheck from '../../public/static/images/icon/shield_check.svg';
import ShieldWarning from '../../public/static/images/icon/shield_warning.svg';
import Pagination from '../../components/paging';

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

  const TableContent = data.map((item, index) => {
    return (
      <Tr>
        <Td fontSize={'14px'} fontWeight={'500'} textAlign={'center'}>
          {index}
        </Td>
        <Td fontSize={'14px'} fontWeight={'500'}>
          {item.job_name}
        </Td>
        <Td fontSize={'14px'} fontWeight={'500'}>
          {item.email}
        </Td>
        <Td fontSize={'14px'} fontWeight={'500'}>
          {item.role == 0 ? 'Quản trị viên' : item.role == 1 ? 'Nhà tuyển dụng' : 'Sinh viên'}
        </Td>
        <Td fontSize={'14px'} fontWeight={'500'} textAlign={'center'}>
          {item.date}
        </Td>
        <Td fontSize={'14px'} fontWeight={'500'} textAlign={'center'}>
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
        <Td fontSize={'14px'} fontWeight={'500'} textAlign={'center'}>
          {item.ban ? (
            <Image src={ShieldCheck} style={{ margin: '0 auto' }} />
          ) : (
            <Image src={ShieldWarning} style={{ margin: '0 auto' }} />
          )}
        </Td>
      </Tr>
    );
  });

  return (
    <Box>
      <Flex
        justifyContent={'space-between'}
        padding={'28px 24px 14px 24px'}
        borderBottom={'2px solid #D7D7D7'}
      >
        <Text fontSize={30} fontWeight={'bold'}>
          Quản lí tài khoản
        </Text>
        <Flex>
          <IconButton
            icon={<LuBellDot style={{ width: '24px', height: '24px' }} />}
            w={'48px'}
            h={'48px'}
            borderRadius={'50%'}
            backgroundColor={'var(--black-10, rgba(19, 17, 49, 0.10))'}
          />
          <Box w={'30px'}></Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<HiChevronDown style={{ width: '24px', height: '24px' }} />}
              leftIcon={<FaCircleUser style={{ width: '24px', height: '24px' }} />}
              h={'48px'}
              w={'218px'}
              borderRadius={'40px'}
              fontSize={'16px'}
              fontFamily={'500'}
              lineHeight={'24px'}
              backgroundColor={'var(--black-10, rgba(19, 17, 49, 0.10))'}
            >
              Administrator
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
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
        <TableContainer marginTop={'16px'} p={'0 24px'}>
          <Table variant='simple' marginTop={'16px'} p={'0 24px'}>
            <Thead>
              <Tr>
                <th
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#323541',
                    textAlign: 'center',
                    padding: '10px 2px',
                    border: '1px solid',
                    borderTopLeftRadius: '12px',
                    width: '5%',
                  }}
                >
                  STT
                </th>
                <th
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#323541',
                    textAlign: 'center',
                    padding: '10px 2px',
                    border: '1px solid',
                    width: '20%',
                  }}
                >
                  Tên
                </th>
                <th
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#323541',
                    textAlign: 'center',
                    padding: '10px 2px',
                    border: '1px solid',
                    width: '25%',
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#323541',
                    textAlign: 'center',
                    padding: '10px 2px',
                    border: '1px solid',
                    width: '10%',
                  }}
                >
                  Chức năng
                </th>
                <th
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#323541',
                    textAlign: 'center',
                    padding: '10px 2px',
                    border: '1px solid',
                    width: '10%',
                  }}
                >
                  Ngày đăng kí
                </th>
                <th
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#323541',
                    textAlign: 'center',
                    padding: '10px 2px',
                    border: '1px solid',
                    width: '15%',
                  }}
                >
                  Trạng thái
                </th>
                <th
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#323541',
                    textAlign: 'center',
                    padding: '10px 2px',
                    border: '1px solid',
                    borderTopRightRadius: '12px',
                    width: '5%',
                  }}
                >
                  Cấm
                </th>
              </Tr>
            </Thead>
            <Tbody>{TableContent}</Tbody>
          </Table>
        </TableContainer>
        <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} changePage={changePage} />;
      </Tabs>
    </Box>
  );
}
