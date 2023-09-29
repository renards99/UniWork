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
import { AiOutlineArrowDown } from 'react-icons/ai';
import EmployerHeader from '../../components/layout/employer/header';

function MyService() {
  const itemsPerPage = 12;
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
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

  const TabUNW = (
    <Tabs marginTop={'28px'}>
      <TabList paddingLeft={'24px'} borderBottom={'none'}>
        <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
          Tất cả
        </Tab>
        <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
          Dịch vụ đang chạy
        </Tab>
        <Tab fontSize={'16px'} fontWeight={'600'} color={'#323541'}>
          hết hạn
        </Tab>
      </TabList>
    </Tabs>
  );
  const TableContent = data.map((item, index) => {
    return (
      <Tr>
        <Td textAlign={'center'}>{index}</Td>
        <Td>{item.job_name}</Td>
        <Td>{item.job_name}</Td>
        <Td>{item.date}</Td>

        <Td textAlign={'center'}>
          {item.status == 1 ? (
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
          ) : item.status == 2 ? (
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
                Chưa duyệt
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
              <th style={{ width: '5%' }}>STT</th>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Dịch vụ{' '}
                  <Box fontSize='24px'>
                    <AiOutlineArrowDown />
                  </Box>
                </Flex>
              </th>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Tổng đơn
                  <Box fontSize='24px'>
                    <AiOutlineArrowDown />
                  </Box>
                </Flex>
              </th>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Ngày kích hoạt
                  <Box fontSize='24px'>
                    <AiOutlineArrowDown />
                  </Box>
                </Flex>
              </th>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Thời hạn
                  <Box fontSize='24px'>
                    <AiOutlineArrowDown />
                  </Box>
                </Flex>
              </th>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Trạng thái
                  <Box fontSize='24px'>
                    <AiOutlineArrowDown />
                  </Box>
                </Flex>
              </th>
            </Tr>
          </Thead>
          <Tbody>{TableContent}</Tbody>
        </Table>
      </TableContainer>
      <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} changePage={changePage} />;
    </>
  );

  return (
    <Box ml='316px'>
      <EmployerHeader />
      {TabUNW}
      {TableUNW}
    </Box>
  );
}

export default MyService;
