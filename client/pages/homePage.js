import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
function HomePage() {
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
	return (
		//Slider
		<div className='max-w-[1240px] h-[420px] w-full m-auto py-16 px-4 relative group'>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full rounded-2xl bg-cover bg-center duration-500'></div>
			{/*left arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/*right arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className='flex top-4 justify-center py-2'>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer'>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
}

export default HomePage;
