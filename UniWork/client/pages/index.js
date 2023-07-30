require('isomorphic-fetch');
import Image from 'next/image';
import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';

function MyPage() {
	return (
		<div className='h-[670px] flex justify-between mx-auto items-center px-24'>
			<div>
				<div>
					<h1 className='font-bold text-8xl py-4 whitespace-nowrap'>
						Tìm công việc{' '}
						<span className='text-[#7dd7ad]'>
							{' '}
							an toàn,
							<br /> phù hợp{' '}
						</span>{' '}
						cho sinh viên
					</h1>
					<p className='text-3xl py-4'>
						Tìm công việc mới ngay với website Uniwork đơn giản
						<br />
						và dễ sử dụng cho người mới bắt đầu. Tìm việc
						<br />
						an toàn cho sinh viên chưa bao giờ dễ đến vậy với
						<br />
						Uniwork
					</p>
				</div>
				<div className='w-2/4'>
					<h4 className='text-3xl font-medium py-4'>
						Các từ khóa tìm việc trending:
					</h4>
					<div className='flex items-center justify-between text-3xl font-medium pb-4'>
						<p className='text-[#7dd7ad]'>Pha chế</p>
						<p className='text-[#7dd7ad]'>Shipper</p>
						<p className='text-[#7dd7ad]'>Mẫu ảnh</p>
					</div>
				</div>
				<div className=' mt-7 bg-white py-3  px-5 rounded-full flex justify-center items-center w-[66%]'>
					<RxMagnifyingGlass className='text-3xl mr-4' />
					<input
						className=' text-2xl outline-none'
						placeholder='Tìm việc hoặc từ khóa'></input>
					<div className='h-10 border-r-[1px] border-black mr-9'></div>
					<button className='p-2 text-2xl text-white font-bold px-16 rounded-full bg-[#7dd7ad]'>
						Search
					</button>
				</div>
			</div>
			<Image
				className='h-[600px] w-[600px] hidden lg:block '
				width='200'
				height='200'
				src='/static/images/recruit.png'></Image>
		</div>
	);
}

export default MyPage;
