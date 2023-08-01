import { useState } from 'react';
import {
	BsChevronCompactLeft,
	BsChevronCompactRight,
	BsChevronDown,
} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Box, Input, Button, Icon, Text, Stack, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
function HomePage() {
	const locations = ['Hà Giang', 'Tuyên Quang', 'Hà Nội', '...'];
	const experiences = ['Không Kinh Nghiệm', 'Trên 1 năm', 'Trên 2 năm', '...'];
	const salaries = ['1-5 triệu', '5-7 triệu', '20 triệu', '...'];
	const employers = [
		{
			image: '/static/images/food_store.png',
			Name: 'Nhà Cơm Phương Nguyễn',
			Role: 'Shipper',
			salary: '100k/1h',
		},
		{
			image: '/static/images/food_store.png',
			Name: 'Cơm Quang Anh',
			Role: 'Phụ Bếp',
			salary: '80k/1h',
		},
		{
			image: '/static/images/food_store.png',
			Name: 'Ảnh Cưới Lan Anh',
			Role: 'Chụp Ảnh',
			salary: '200k/1h',
		},
		{
			image: '/static/images/food_store.png',
			Name: 'Tạp Hóa Sky Mart',
			Role: 'Nhân Viên bán hàng',
			salary: '70k/1h',
		},
		{
			image: '/static/images/food_store.png',
			Name: 'Tạp Hóa Sky Mart',
			Role: 'Nhân Viên bán hàng',
			salary: '70k/1h',
		},
		{
			image: '/static/images/food_store.png',
			Name: 'Tạp Hóa Sky Mart',
			Role: 'Nhân Viên bán hàng',
			salary: '70k/1h',
		},
		{
			image: '/static/images/food_store.png',
			Name: 'Tạp Hóa Sky Mart',
			Role: 'Nhân Viên bán hàng',
			salary: '70k/1h',
		},
		{
			image: '/static/images/food_store.png',
			Name: 'Tạp Hóa Sky Mart',
			Role: 'Nhân Viên bán hàng',
			salary: '70k/1h',
		},
		{
			image: '/static/images/food_store.png',
			Name: 'Tạp Hóa Sky Mart',
			Role: 'Nhân Viên bán hàng',
			salary: '70k/1h',
		},
	];
	const slides = [
		{
			url: 'https://www.careerabroad.ca/wp-content/uploads/2016/02/job.jpg',
		},
		{
			url: 'https://www.boydcorp.com/images/careers/Career-Opportunities.jpg',
		},
		{
			url: 'https://intracen.org/sites/default/files/styles/content_full/public/media/image/media_image/2022/03/08/job-opportunities-02.jpg?itok=xJscdSNp',
		},
		{
			url: 'https://cdn2.vectorstock.com/i/1000x1000/16/71/career-opportunities-at-job-fair-were-hiring-vector-28351671.jpg',
		},
		{
			url: 'https://www.eusa.eu/documents/eusa/News/2018/join_our_team.jpg',
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};
	const [tabState, setTabState] = useState(1);
	const toggleTab = (index) => {
		setTabState(index);
	};

	const Navbar = <></>;
	const HomeContent = (
		<div>
			<Box h='465px' px='150px' display='flex' justifyContent='space-evenly'>
				<Box h='465px' bg='transparent' minW='30%' pt='50px'>
					<h1 className='unw-homepage-text'>Tìm Việc Làm</h1>
					<Input
						focusBorderColor='#F98820'
						borderColor='transparent'
						_placeholder={{ color: '#737B7D' }}
						placeholder='Mô tả công việc'
						bg='gray.100'
						padding='16px'
						fontSize='2xl'
						fontWeight='medium'
						boxShadow='md'
						mb='20px'
						rounded='xl'
					/>
					<Box display='flex' justifyContent='space-between'>
						<Select
							focusBorderColor='#F98820'
							borderColor='transparent'
							icon={<Icon as={BsChevronDown} />}
							className='unw-homepage-select'
							bg='gray.100'
							size='lg'
							rounded='xl'>
							<option selected hidden disabled>
								Địa Điểm
							</option>
							{locations.map((location) => {
								return <option>{location}</option>;
							})}
						</Select>
						<Select
							focusBorderColor='#F98820'
							borderColor='transparent'
							icon={<Icon as={BsChevronDown} />}
							className='unw-homepage-select'
							bg='gray.100'
							size='lg'
							mx='90px'
							rounded='xl'>
							<option selected hidden disabled>
								Kinh Nghiệm
							</option>
							{experiences.map((exp) => {
								return <option>{exp}</option>;
							})}
						</Select>
						<Select
							focusBorderColor='#F98820'
							borderColor='transparent'
							icon={<Icon as={BsChevronDown} />}
							className='unw-homepage-select'
							bg='gray.100'
							size='lg'
							rounded='xl'>
							<option selected hidden disabled>
								Mức Lương
							</option>
							{salaries.map((salary) => {
								return <option>{salary}</option>;
							})}
						</Select>
					</Box>
					<Button
						bg='#F98820'
						textColor='white'
						py='16px'
						px='30px'
						mt='16px'
						fontSize='2xl'>
						Tìm Kiếm
					</Button>
				</Box>
				<Box>
					<Image width='600' height='600' src='/static/images/home_page1.png' />
				</Box>
			</Box>
			<Box px='305px' py='50px'>
				<Text fontSize='4xl' fontWeight='semibold '>
					Thông tin tuyển dụng
				</Text>
				<Grid templateColumns='repeat(4, 1fr)' gap={6}>
					{employers.map((employer) => {
						return (
							<Stack
								minH='380px'
								maxH='380px'
								minW='250px'
								maxW='250px'
								textAlign='center'>
								<Image
									className='mx-auto'
									width='250'
									height='100'
									src={employer.image}></Image>
								<Text fontSize='4xl' fontWeight='medium'>
									{employer.Name}
								</Text>
								<Text fontSize='3xl'>{employer.Role} </Text>
								<Text fontSize='2xl'>{employer.salary}</Text>
							</Stack>
						);
					})}
				</Grid>
			</Box>
		</div>
	);
	return (
		<div>
			{Navbar}
			{HomeContent}
		</div>
		//Slider
		// <div className='max-w-[1240px] h-[420px] w-full m-auto py-16 px-4 relative group'>
		// 	<div
		// 		style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
		// 		className='w-full h-full rounded-2xl bg-cover bg-center duration-500'></div>
		// 	{/*left arrow */}
		// 	<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
		// 		<BsChevronCompactLeft onClick={prevSlide} size={30} />
		// 	</div>
		// 	{/*right arrow */}
		// 	<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
		// 		<BsChevronCompactRight onClick={nextSlide} size={30} />
		// 	</div>
		// 	<div className='flex top-4 justify-center py-2'>
		// 		{slides.map((slide, slideIndex) => (
		// 			<div
		// 				key={slideIndex}
		// 				onClick={() => goToSlide(slideIndex)}
		// 				className='text-2xl cursor-pointer'>
		// 				<RxDotFilled />
		// 			</div>
		// 		))}
		// 	</div>
		// 	<div>
		// 		<div className='bg-white grid-cols-4 grid items-center text-center'>
		// 			<div
		// 				className={
		// 					tabState === 1
		// 						? 'border-t-2 text-2xl p-4 cursor-pointer border-t-[#7dd7ad] text-[#7dd7ad] font-medium'
		// 						: 'border-t-2 text-2xl p-4 hover:border-t-gray-400 cursor-pointer font-medium'
		// 				}
		// 				onClick={() => toggleTab(1)}>
		// 				Tin tuyển dụng mới nhất
		// 			</div>
		// 			<div
		// 				className={
		// 					tabState === 2
		// 						? 'border-t-2 text-2xl p-4 cursor-pointer border-t-[#7dd7ad] text-[#7dd7ad] font-medium'
		// 						: 'border-t-2 text-2xl p-4 hover:border-t-gray-400 cursor-pointer font-medium'
		// 				}
		// 				onClick={() => toggleTab(2)}>
		// 				Tin tuyển dụng mới nhất
		// 			</div>
		// 			<div
		// 				className={
		// 					tabState === 3
		// 						? 'border-t-2 text-2xl p-4 cursor-pointer border-t-[#7dd7ad] text-[#7dd7ad] font-medium'
		// 						: 'border-t-2 text-2xl p-4 hover:border-t-gray-400 cursor-pointer font-medium'
		// 				}
		// 				onClick={() => toggleTab(3)}>
		// 				Tin tuyển dụng mới nhất
		// 			</div>
		// 			<div
		// 				className={
		// 					tabState === 4
		// 						? 'border-t-2 text-2xl p-4 cursor-pointer border-t-[#7dd7ad] text-[#7dd7ad] font-medium'
		// 						: 'border-t-2 text-2xl p-4 hover:border-t-gray-400 cursor-pointer font-medium'
		// 				}
		// 				onClick={() => toggleTab(4)}>
		// 				Tin tuyển dụng mới nhất
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default HomePage;
