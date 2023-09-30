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
  const TableContent = data.map((item, index) => {
    return (
      <Tr>
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
    </>
  );
  return (
    <Box ml='316px'>
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
