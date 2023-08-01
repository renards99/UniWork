import { HStack, Button } from '@chakra-ui/react';
import { number } from 'prop-types';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState } from 'react';

function Paging(props) {
	const pageNumbers = [];
	const totalEmployers = props.totalEmployers;
	const itemsPerPage = props.itemsPerPage;
	const changePage = props.changePage;
	const totalPages = Math.ceil(totalEmployers / itemsPerPage);
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
		<div>
			<HStack justifyContent='center'>
				<Button rounded='full' boxSize={16} fontSize='2xl' onClick={prevPage}>
					<BsChevronCompactLeft />
				</Button>
				{pageNumbers.map((number) => (
					<Button
						key={number}
						rounded='full'
						boxSize={16}
						fontSize='2xl'
						bg={number === currentPage ? '#F98820' : ''}
						color={number === currentPage ? 'white' : ''}
						onClick={() => {
							handlePageClick(number), changePage(number);
						}}>
						{number}
					</Button>
				))}

				<Button rounded='full' boxSize={16} fontSize='2xl' onClick={nextPage}>
					<BsChevronCompactRight />
				</Button>
			</HStack>
		</div>
	);
}

export default Paging;
