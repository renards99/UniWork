import classNames from 'classnames/bind';

function Header() {
	return (
		<header>
			<div className='p-8 px-16 flex justify-between mx-auto items-center'>
				<h1 className=' w-full text-5xl font-semibold text-[#7dd7ad]'>Logo</h1>
				<ul className='flex w-[1200px] font-medium text-xl'>
					<li className='p-4 whitespace-nowrap '>Trang chủ</li>
					<li className='p-4 whitespace-nowrap'>Dành cho nhà tuyển dụng</li>
					<li className='p-4 whitespace-nowrap'>Dành cho ứng viên</li>
					<li className='p-4 whitespace-nowrap'>Đăng nhập</li>
					<li className='p-4 whitespace-nowrap text-white ml-10 bg-[#7dd7ad] rounded-full'>
						Đăng ký cho tài khoản
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
