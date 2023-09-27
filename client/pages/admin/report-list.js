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

function ReportList() {
  const itemsPerPage = 12;
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  const data = [
    {
      id: 1,
      title: 'Tuyển Android Dev',
      company: 'Công ty ABC',
      type: 'Báo cáo lừa đảo',
      date: '12/12/2022',
      status: 1,
    },
    {
      id: 2,
      title: 'Tuyển Java Dev cho website Nhật',
      company: 'Công ty Dược phẩm Long Châu',
      type: 'Báo cáo lừa đảo',
      date: '12/11/2022',
      status: 2,
    },
    {
      id: 3,
      title: 'Tuyển Android Dev',
      company: 'Công ty ABC',
      type: 'Báo cáo lừa đảo',
      date: '30/03/2022',
      status: 0,
    },
  ];

  const TableContent = data.map((item, index) => {
    return (
      <Tr>
        <Td textAlign={'center'}>{index}</Td>
        <Td>{item.title}</Td>
        <Td>{item.company}</Td>
        <Td>{item.type}</Td>
        <Td textAlign={'center'}>{item.date}</Td>

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
                Đã xử lí
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
                Bỏ qua
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
              <th style={{ width: '20%' }}>Tên Tiêu đề</th>
              <th style={{ width: '25%' }}>Tên công ty</th>
              <th style={{ width: '25%' }}>Báo cáo</th>
              <th style={{ width: '25%' }}>Ngày báo cáo</th>
              <th style={{ width: '25%' }}>Trạng thái</th>
            </Tr>
          </Thead>
          <Tbody>{TableContent}</Tbody>
        </Table>
      </TableContainer>
      <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} changePage={changePage} />;
    </>
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
      </TabList>
    </Tabs>
  );
  return (
    <Box ml='316px'>
      <HeaderAdmins title={'Quản lí tuyển dụng'} />
      {ActionUNW}
      {TabUNW}
      {TableUNW}
    </Box>
  );
}
export default ReportList;
