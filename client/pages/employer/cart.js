import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa6';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import EmployerHeader from '../../components/layout/employer/header';
import { useEffect, useState } from 'react';
import { toatalInCart, totalPriceItemInCart } from '../../helper';
function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleChangeQuantity = (status, info_item_id) => {
    if (status == 1) {
      if (localStorage.getItem('cart_items') !== null) {
        let cart_items = localStorage.getItem('cart_items');
        cart_items = JSON.parse(cart_items);
        cart_items.forEach((item) => {
          item.id == info_item_id ? (item.quantity += 1) : null;
        });
        setCartItems(cart_items);
        localStorage.setItem('cart_items', JSON.stringify(cart_items));
      }
    } else {
      if (localStorage.getItem('cart_items') !== null) {
        let cart_items = localStorage.getItem('cart_items');
        cart_items = JSON.parse(cart_items);
        // check quantity = 0 delete from cart_items
        let checkQuantity = false;
        let ind;
        cart_items.forEach((item, index) => {
          item.id == info_item_id ? (item.quantity -= 1) : null;
          if (item.quantity == 0) {
            checkQuantity = true;
            ind = index;
          }
        });
        checkQuantity ? cart_items.splice(ind, 1) : null;
        setCartItems(cart_items);
        localStorage.setItem('cart_items', JSON.stringify(cart_items));
      }
    }
  };

  const handleDeleteItems = (index) => {
    if (localStorage.getItem('cart_items') !== null) {
      let cart_items = localStorage.getItem('cart_items');
      cart_items = JSON.parse(cart_items);
      cart_items.splice(index, 1);
      setCartItems(cart_items);
      localStorage.setItem('cart_items', JSON.stringify(cart_items));
    }
  }

  useEffect(() => {
    if (localStorage.getItem('cart_items') !== null) {
      let cart_items = localStorage.getItem('cart_items');
      cart_items = JSON.parse(cart_items);
      setCartItems(cart_items);
    }
  }, []);

  const CART_BODY = cartItems.map((item, index) => {
    return (
      <Tr>
        <Td>
          <Checkbox size='lg'></Checkbox>
        </Td>
        <Td fontSize='14px' fontWeight='600' lineHeight='24px'>
          {item.title}
        </Td>
        <Td fontSize='14px' fontWeight='600' lineHeight='24px'>
          {item.price}
        </Td>
        <Td>
          <Flex gap='8px' fontSize='24px' alignItems='center'>
            <Box cursor='pointer' color='#D7D7D7'>
              <AiFillPlusSquare onClick={() => handleChangeQuantity(1, item.id)} />
            </Box>
            <Text fontSize='14px'>{item.quantity}</Text>
            <Box cursor='pointer' color='#D7D7D7'>
              <AiFillMinusSquare onClick={() => handleChangeQuantity(0, item.id)} />
            </Box>
          </Flex>
        </Td>
        <Td fontSize='14px' fontWeight='600' lineHeight='24px' color='#4881FC'>
          {totalPriceItemInCart(item.price, item.quantity)}
        </Td>
        <Td>
          <Box fontSize='24px' color='#E10000'>
            <FaTrash onClick={() => handleDeleteItems(index)} />
          </Box>
        </Td>
      </Tr>
    );
  });

  return (
    <Box>
      <EmployerHeader />
      <Grid templateColumns='repeat(3, 1fr)' h='90vh' mt='52px' px='24px'>
        <GridItem colSpan='2'>
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
                  Giỏ hàng của tôi
                </Text>
              </Flex>
              <TableContainer
                border='1px'
                borderColor='#D7D7D7'
                roundedBottom='20px'
                py='24px'
                px='12px'
              >
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Tên dịch vụ
                      </Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Đơn giá (VND)
                      </Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Số lượng
                      </Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Số tiền (VND)
                      </Th>
                      <Th fontSize='14px' fontWeight='600' lineHeight='24px'>
                        Thao tác
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>{CART_BODY}</Tbody>
                </Table>
              </TableContainer>
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
                  Thông tin đơn hàng
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
                <Flex justifyContent='space-between'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Tổng giá trị đơn hàng
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {toatalInCart(cartItems)} VND
                  </Text>
                </Flex>
                <Box borderBottom='1px solid #D7D7D7'></Box>
                <Flex justifyContent='space-between'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    Tổng tiền chưa bao gồm VAT
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {toatalInCart(cartItems)} VND
                  </Text>
                </Flex>
                <Box borderBottom='1px solid #D7D7D7'></Box>
                <Flex justifyContent='space-between'>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    VAT (8%)
                  </Text>
                  <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                    {toatalInCart(cartItems, 0.08, 0)} VND
                  </Text>
                </Flex>
                <Box borderBottom='1px solid #D7D7D7'></Box>
                <Flex justifyContent='space-between'>
                  <Stack gap='0px'>
                    <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                      Tổng giá trị đơn hàng
                    </Text>
                    <Text fontSize='12px' fontWeight='400' lineHeight='20px'>
                      (Đã bao gồm VAT)
                    </Text>
                  </Stack>

                  <Text fontSize='20px' fontWeight='700' lineHeight='24px' letterSpacing='0.2px'>
                    {toatalInCart(cartItems, 0.08)} VND
                  </Text>
                </Flex>
                <Flex justifyContent='space-between'>
                  <Checkbox size='lg'>
                    <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
                      Tôi đồng ý với các{' '}
                      <Text as='span' color='#E10000'>
                        Điều khoản
                      </Text>{' '}
                      của UniWork.
                    </Text>
                  </Checkbox>
                </Flex>
                <Flex
                  justifyContent='center'
                  alignItems='center'
                  color='#FFFFFF'
                  bg='#323541'
                  rounded='20px'
                  mt='20px'
                  py='8px'
                  px='12px'
                  fontSize='16px'
                  cursor='pointer'
                >
                  Tạo đơn hàng
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Cart;
