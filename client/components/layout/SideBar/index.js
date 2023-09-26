import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Flex, Stack, Text, useToast, Box } from '@chakra-ui/react';
import { CiLogout } from 'react-icons/ci';
import { AiOutlineSetting } from 'react-icons/ai';
import { SlHandbag } from 'react-icons/sl';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { HiOutlineUsers } from 'react-icons/hi';
import { AiOutlinePieChart } from 'react-icons/ai';
import SideItem from './SideItem';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LogoAdmin from '../../../public/static/images/logo_admin.png';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function SideBarAdmin(props) {
  const toast = useToast();
  const toastIdRef = useRef();
  const router = useRouter();
  const path = {
    revenue: '/admin/revenue',
    account: '/admin/account-manager',
    job: '/admin/job-manager',
    setting: '/admin/setting',
    report: '/admin/report',
  };
  const [navSize, changeNavSize] = useState('large');
  const [sideBarActive, setActiveSideBar] = useState(0);
  const handleSetActiveSideBar = useCallback(
    async (value) => {
      if (value == 99) {
        try {
          const logOut = await axiosJWT.post(`${props.back_end_port}/logout`);
          if (logOut.data.statusCode == 200) {
            router.push('/');
          }
        } catch (err) {
          if (err.response.data.statusCode == 401) {
            toastIdRef.current = toast({
              title: 'Phiên của bạn đã hết hạn.',
              description: 'Phiên đã hết hạn vui lòng đăng nhập lại.',
              status: 'error',
              isClosable: true,
              position: 'top',
              duration: 2000,
            });
          } else {
            toastIdRef.current = toast({
              title: err.response.data.data.message,
              description: 'Không thể đăng xuất. Làm ơn hãy thử lại.',
              status: 'error',
              isClosable: true,
              position: 'top',
              duration: 2000,
            });
          }
        }
        return;
      }

      if (sideBarActive == value && value == 2) value = 4;
      setActiveSideBar(value);
      Cookies.set('sideBarActive', value);
    },
    [sideBarActive],
  );
  useEffect(() => {
    const value = Cookies.get('sideBarActive');
    setActiveSideBar(value);
  }, []);
  return (
    <Flex
      h='100vh'
      float='left'
      boxShadow='0 4px 12px 0 #888'
      w={navSize == 'small' ? '75px' : '312px'}
      flexDir='column'
      justifyContent='space-between'
      id='bom-side-bar'
      backgroundColor={'#323541'}
      position='fixed'
    >
      <Stack>
        <Link href={'/'} style={{ margin: '36px 0 95px' }}>
          <Image src={LogoAdmin} height={'40'} width={'170'} style={{ margin: '0 auto' }} />
        </Link>
        <Flex
          p='0 10%'
          flexDir='column'
          w='100%'
          alignItems={navSize == 'small' ? 'center' : 'flex-start'}
          as='nav'
        >
          <SideItem
            navSize={navSize}
            icon={AiOutlinePieChart}
            title='Thống kê số liệu'
            handleSetActiveSideBar={handleSetActiveSideBar}
            active={sideBarActive == 0 ? true : false}
            value={0}
            href={path.revenue}
          />
          <SideItem
            navSize={navSize}
            icon={HiOutlineUsers}
            title='Quản lí tài khoản'
            handleSetActiveSideBar={handleSetActiveSideBar}
            active={sideBarActive == 1 ? true : false}
            value={1}
            href={path.account}
          />
          <SideItem
            navSize={navSize}
            icon={SlHandbag}
            title='Quản lí tuyển dụng'
            handleSetActiveSideBar={handleSetActiveSideBar}
            active={sideBarActive == 2 ? true : false}
            value={2}
            href={path.job}
          />
          <SideItem
            navSize={navSize}
            icon={SlHandbag}
            title='Quản lí dịch vụ'
            handleSetActiveSideBar={handleSetActiveSideBar}
            active={sideBarActive == 2 ? true : false}
            value={2}
            href={path.job}
          />
          <SideItem
            navSize={navSize}
            icon={SlHandbag}
            title='Hộp thư'
            handleSetActiveSideBar={handleSetActiveSideBar}
            active={sideBarActive == 2 ? true : false}
            value={2}
            href={path.job}
          />
          <SideItem
            navSize={navSize}
            icon={AiOutlineSetting}
            handleSetActiveSideBar={handleSetActiveSideBar}
            title='Báo cáo/Hỗ trợ'
            active={sideBarActive == 3 ? true : false}
            value={4}
            sideBarActive={sideBarActive}
            href={path.report}
          />
          <SideItem
            navSize={navSize}
            icon={SlHandbag}
            title='Danh sách hóa đơn'
            handleSetActiveSideBar={handleSetActiveSideBar}
            active={sideBarActive == 2 ? true : false}
            value={2}
            href={path.job}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
