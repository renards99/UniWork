import Link from 'next/link';
import { Box, Flex, Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,  useDisclosure, Button, Text, Input, Stack, Checkbox} from '@chakra-ui/react';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import Logo from "../../public/static/images/logo.png";
import Avatar from '../../public/static/images/avatar_icon.png';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import axios from 'axios';

export default function Header(props) {
	const router = useRouter();
	const [itemSelected, setItemSelected] = useState(0);
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [forgetPassword, setForgetPassword] = useState(false);
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("")

	const handleUser = useCallback((value) => {
		setUser(value)
	}, [user])

	const handlePassword = useCallback((value) => {
		setPassword(value)
	}, [password])

	const changeForgetPassword = useCallback(()=>{
		setForgetPassword(!forgetPassword)
	},[forgetPassword])

	const loginAccount = useCallback(async()=>{
		const submitData = {
			user,
			password,
		};
		try {
			const login = await axios.post(`${props.back_end_port}/login`, submitData, {
				withCredentials: true
			})
			if (login.data.statusCode === 200) {
				localStorage.setItem("user", JSON.stringify({
					...login.data.data.dataValues,
					token: login.data.data.accessToken,
				  }))
			}
			if (login.data.data.dataValues.role_id == 1) {
				router.push("/admin")
			}
			if (login.data.data.dataValues.role_id == 2) {
				router.push("/employer")
			}
			if (login.data.data.dataValues.role_id == 3) {
				router.push("/student")
			}
		} catch (error) {
			console.log(error)
		}
		
	},[props.back_end_port, user, password]);

	const LoginPopup = <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
	<ModalOverlay />
	<ModalContent>
	  <ModalCloseButton />
	  <ModalBody className={"unw-login-form"} minHeight={!forgetPassword ?  "500px" : "420px"}>
	  <Text fontSize={24} marginTop={"20px"} textAlign={"center"} fontWeight={"bold"}>{!forgetPassword ? "Đăng nhập" : "Quên mật khẩu"}</Text>
		{
			!forgetPassword ? <Stack padding={"0 10px"} marginTop={"10px"}>
			<div className='h-auto max-w-[400px] bg-white'>
			<div className='text-center'>
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
						placeholder='Email/ Số điện thoại' onChange={(e)=>{handleUser(e.target.value)}} value={user}/>
					<input
						className='p-4 text-xl border border-gray-400 focus:outline-none my-4 rounded-md'
						type='password'
						placeholder='Mật khẩu' onChange={(e)=>{handlePassword(e.target.value)}} value={password} />
					<button
						className='bg-[#F98820] text-white rounded-md text-xl p-3'
						type='submit'
						onClick={loginAccount}>
						Đăng nhập
					</button>
				</div>
				<div className='flex justify-between p-4'>
					<div className='flex items-center'>
						<input type='checkbox' className='mr-2 cursor-pointer'></input>
						<label className='font-medium text-lg'>Nhớ mật khẩu</label>
					</div>
					<a className='text-lg text-[#F98820] cursor-pointer' onClick={changeForgetPassword}>
						Quên mật khẩu?
					</a>
				</div>

				<div className='flex-grow h-[1px] bg-black'></div>
				<div className='p-4 text-lg'>
					Mới sử dụng lần đầu?{' '}
					<a className='text-[#F98820] cursor-pointer'>Đăng Ký Ngay</a>
				</div>
				<Box height={5}></Box>
			</div>
		</div>
		</Stack> : <Stack>
			<Text className={'title'} marginTop={"30px"}>Nhập email/sdt của bạn để khôi phục mật khẩu của bạn. bạn sẽ nhận được một tin nhắn có hướng dẫn để giúp bạn giải quyết các vấn đề của mình</Text>
			<Input className={'unw-input'} placeholder='Email hoặc số điện thoại'  marginTop={"20px"} fontSize={"1.125rem"}/>
			<Box height={"10px"}></Box>

			<Button className={"unw-forget-password-button"}>Gửi</Button>
			<Box height={"10px"}></Box>
		
			<Text className='unw-forget-password-return' onClick={changeForgetPassword}>Quay lại giao diện đăng nhập</Text>
		</Stack>
		}
		
	  </ModalBody>
	</ModalContent>
  </Modal>

	return (
		<>
		{LoginPopup}
		<Flex justifyContent={"space-between"} padding={"20px 43px"} alignItems={"center"} className='unw-navbar'>
			<Box>
				<Link href={'/'}>
					<Image src={Logo} height={"42"} width={"177"}/>
				</Link>
			</Box>
		   <Flex alignItems={"center"}>
					<Box className='item'><Text fontSize={16} fontWeight={"bold"} color={router.pathname === "/" ? "#FF6B00" : "#000"}><Link href={'/'}>Trang chủ</Link></Text></Box>
					<Box className='item'><Text fontSize={16} fontWeight={"bold"} color={router.pathname.includes("/information") ? "#FF6B00" : "#000"}><Link href={'#'}>Thông tin tài khoản</Link></Text></Box>
					<Box className='item'><Text fontSize={16} fontWeight={"bold"} color={router.pathname.includes("/job") ? "#FF6B00" : "#000"}><Link href={"#"}>Tìm việc làm</Link></Text></Box>
					<Box className='item'><Text><Image src={Avatar} onClick={onOpen}/></Text></Box>
		   </Flex>
		</Flex>
		</>
	);
}