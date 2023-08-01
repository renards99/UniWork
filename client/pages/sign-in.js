import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

function SignIn() {
	return (
		<div className='h-auto max-w-[400px] bg-white m-auto px-28 '>
			<div className='text-center'>
				<h1 className='p-4 font-bold text-xl my-4 '>Đăng nhập vào UniWork</h1>
				<div className='p-4 bg-blue-500 text-white text-xl font-medium rounded-md my-4 items-center flex justify-between cursor-pointer'>
					<BsFacebook className='text-4xl'></BsFacebook>
					<a className='mr-5'>Tiếp Tục với Facebook</a>
				</div>
				<div className='p-4 border border-black text-xl font-medium rounded-md my-8 items-center flex justify-between cursor-pointer'>
					<FcGoogle className='text-4xl'></FcGoogle>
					<a className='mr-5'>Tiếp Tục với Google</a>
				</div>
				<div className='my-4 flex items-center'>
					<div class='flex-grow h-[1px] bg-black'></div>
					<span className='px-2 text-xl font-semibold'>Hoặc</span>
					<div class='flex-grow h-[1px] bg-black'></div>
				</div>
				<div className='flex flex-col '>
					<input
						className='p-4 text-xl border border-gray-400 focus:outline-none my-4 rounded-md'
						type='text'
						placeholder='Email/ Tên đăng nhập'></input>
					<input
						className='p-4 text-xl border border-gray-400 focus:outline-none my-4 rounded-md'
						type='password'
						placeholder='mật khẩu'></input>
					<button
						className='bg-[#57CC99] text-white rounded-md text-xl p-3'
						type='submit'>
						Đăng nhập
					</button>
				</div>
				<div className='flex justify-between p-4'>
					<div className='flex items-center'>
						<input type='checkbox' className='mr-2 cursor-pointer'></input>
						<label className='font-medium text-lg'>Nhớ mật khẩu</label>
					</div>
					<a className='text-lg text-[#57CC99] cursor-pointer'>
						Quên mật khẩu?
					</a>
				</div>

				<div className='flex-grow h-[1px] bg-black'></div>
				<div className='p-4 text-lg'>
					Mới sử dụng lần đầu?{' '}
					<a className='text-[#57CC99] cursor-pointer'>Đăng Ký Ngay</a>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
