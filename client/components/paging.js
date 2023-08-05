import { HStack, Button, Hide, Flex, Stack, Text } from '@chakra-ui/react';
import { number } from 'prop-types';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Paging(props) {
  const router = useRouter();
  const pageNumbers = [];
  const totalItems = props.totalItems;
  const itemsPerPage = props.itemsPerPage;
  const changePage = props.changePage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const bgColor = router.pathname.includes('/Admin') ? '#D7D7D7' : '#F98820';
  const tColor = router.pathname.includes('/Admin') ? '#323541' : 'White';

  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (number) => {
    setCurrentPage(number);
    changePage(number);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    changePage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    changePage(currentPage + 1);
  };
  return (
    <Flex justifyContent='center' gap={12}>
      <Button
        sx={currentPage === 1 ? { visibility: 'hidden ' } : ''}
        rounded='full'
        boxSize={16}
        fontSize='2xl'
        onClick={prevPage}
        bg='transparent'
      >
        <BsChevronCompactLeft />
      </Button>
      <Flex
        sx={totalPages < 2 ? { visibility: 'hidden ' } : ''}
        justifyContent='center'
        alignItems='center'
        gap='10px'
      >
        {pageNumbers.map((number) => (
          <Stack
            opacity={number === currentPage ? '' : '0.2'}
            w='35px'
            h='35px'
            cursor='pointer'
            key={number}
            rounded='20px'
            fontSize='2xl'
            px='10px'
            py='6px'
            justifyContent='center'
            alignItems='center'
            bg={number === currentPage ? bgColor : ''}
            color={number === currentPage ? tColor : ''}
            borderColor={number === currentPage ? tColor : ''}
            onClick={() => {
              handlePageClick(number), changePage(number);
            }}
            borderWidth='1.5px'
          >
            <Text fontSize='14px' fontWeight='600' lineHeight='24px'>
              {' '}
              {number}
            </Text>
          </Stack>
        ))}
      </Flex>
      <Button
        sx={currentPage === totalPages ? { visibility: 'hidden ' } : ''}
        rounded='full'
        boxSize={16}
        fontSize='2xl'
        onClick={nextPage}
        bg='transparent'
      >
        <BsChevronCompactRight />
      </Button>
    </Flex>
  );
}

export default Paging;
