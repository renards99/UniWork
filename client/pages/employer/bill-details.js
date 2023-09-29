import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Input,
  Textarea,
  MenuDivider,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa6';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import EmployerHeader from '../../components/layout/employer/header';
import { useEffect, useState } from 'react';
import { toatalInCart, totalPriceItemInCart } from '../../helper';
import { IoNewspaperOutline } from 'react-icons/io5';
function BillDetails() {
  const data = [
    {
      id: 1,
      job_name: 'Dịch vụ đăng bài tuyển dụng trong 4 tuần',
      price: '2.000.000 đ',
      career: 'Công nghệ thông tin',
      capacity: '1',

      total: '2.000.000 đ',
    },
    {
      id: 2,
      job_name: 'Dịch vụ đăng bài tuyển dụng trong 4 tuần',
      price: '2.000.000 đ',
      career: 'Công nghệ thông tin',
      capacity: '2',

      total: '4.000.000 đ',
    },
    {
      id: 3,
      job_name: 'Tuyển Android Dev',
      price: '2.000.000 đ',
      career: 'Công nghệ thông tin',
      capacity: '3',
      total: '6.000.000 đ',
    },
  ];
  const TableContent = data.map((item, index) => {
    return (
      <Tr>
        <Td>{item.job_name}</Td>
        <Td>
          <Flex alignItems='center' justifyContent='center'>
            {item.price}
          </Flex>
        </Td>
        <Td>
          {' '}
          <Flex alignItems='center' justifyContent='center'>
            {item.capacity}
          </Flex>
        </Td>

        <Td textAlign={'center'}>{item.total}</Td>
      </Tr>
    );
  });

  const TableUNW = (
    <Box ml='316px'>
      <TableContainer marginTop={'28px'}>
        <Table variant='simple' className='unw-table-custom'>
          <Thead>
            <Tr>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Dịch vụ
                </Flex>
              </th>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Đơn giá
                </Flex>
              </th>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Số lượng
                </Flex>
              </th>
              <th style={{ width: '20%' }}>
                <Flex alignItems='center' justifyContent='center' gap='20px'>
                  Thành tiền
                </Flex>
              </th>
            </Tr>
          </Thead>
          <Tbody>
            {TableContent}
            <tr>
              <Stack px='20px'>
                <Flex alignItems='center' gap='12px'>
                  <Box fontSize='24px'>
                    <IoNewspaperOutline />
                  </Box>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Chi tiết thanh toán
                  </Text>
                </Flex>
                <Flex alignItems='center' justifyContent='space-between' flex='1 0 0'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Tổng tiền
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    3.000.000đ
                  </Text>
                </Flex>
              </Stack>
            </tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
  return (
    <Box>
      <EmployerHeader />
      <Stack gap='22px' p='30px'>
        <Flex gap='24px' alignItems='center'>
          <Stack gap='0px' flex='1 0 0'>
            <Stack alignSelf='stretch' p='16px 24px 8px 24px' bg='#323541' roundedTop='12px'>
              <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                Thông tin khách hàng
              </Text>
            </Stack>
            <Stack
              alignSelf='stretch'
              p='24px 24px 32px 24px'
              gap='12px'
              justifyContent='center'
              border='1px solid #818181'
              roundedBottom='12px'
            >
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Thông tin thanh toán: Công ty Cổ phần Công nghệ eUp
              </Text>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Mã sô thuế: 0212730426-018
              </Text>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Địa chỉ: Tổ 2 phường Minh Khai thành phố Hà Giang
              </Text>
            </Stack>
          </Stack>
          <Stack gap='0px' overflow='hidden' flex='1 0 0'>
            <Stack alignSelf='stretch' p='16px 24px 8px 24px' bg='#323541' roundedTop='12px'>
              <Text fontSize='16px' fontWeight='600' lineHeight='24px' color='white'>
                Thông tin đơn hàng
              </Text>
            </Stack>
            <Stack
              alignSelf='stretch'
              p='24px 24px 32px 24px'
              gap='12px'
              justifyContent='center'
              border='1px solid #818181'
              roundedBottom='12px'
            >
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Thông tin thanh toán:
              </Text>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Mã hóa đơn: 9393820103203
              </Text>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Ngày thanh toán: 24 / 02 / 2022
              </Text>
            </Stack>
          </Stack>
        </Flex>
        {TableUNW}
      </Stack>
    </Box>
  );
}

export default BillDetails;
