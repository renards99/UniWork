import {
  Flex,
  Stack,
  Text,
  Avatar,
  Box,
  transition,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { LuBellDot } from 'react-icons/lu';
import tempAvatar from '../../../public/static/images/recruit.png';
import Image from 'next/image';
import ellipse from '../../../public/static/images/icon/ellipse_124.svg';

function Notifications() {
  const fakeData = [
    {
      image: tempAvatar,
      text: 'Nhà tuyển dụng ABC Group vừa có một bài tuyển dụng cần duyệt',
      time: '2h trước',
      role: 'Nhà tuyển dụng',
    },
  ];
  return (
    <Menu>
      <MenuButton
        p='12px'
        w={'48px'}
        h={'48px'}
        as={Button}
        borderRadius={'40px'}
        fontSize={'16px'}
        fontFamily={'500'}
        lineHeight={'24px'}
        backgroundColor={'var(--black-10, rgba(19, 17, 49, 0.10))'}
      >
        <Box fontSize='24px'>
          <LuBellDot />
        </Box>
      </MenuButton>
      <MenuList bg='none' border='none' p='0px'>
        <Stack
          left='-120px'
          pos='fixed'
          p='28px 0px'
          gap='20px'
          w='432px'
          rounded='20px'
          bg='#FFFFFF'
          boxShadow='0px 3px 8px 1px #BABABA'
        >
          <Flex p='0px 20px' justifyContent='space-between' alignItems='center' alignSelf='stretch'>
            <Text fontSize='20px' fontWeight='700' lineHeight='28px' letterSpacing='0.2px'>
              Thông báo
            </Text>
            <Text fontSize='14px' fontWeight='500' lineHeight='normal' textDecor='underline'>
              Đánh dấu là đã đọc
            </Text>
          </Flex>

          <Stack flex='1 0 0' alignItems='flex-start' gap='0px' justifyContent='center'>
            {fakeData.map((item) => {
              return (
                <Flex
                  flexShrink='0'
                  gap='12px'
                  alignItems='flex-start'
                  p='20px'
                  borderTop='1px solid #1311311A'
                  _hover={{ backgroundColor: '#1311311A', transition: '0.3s' }}
                >
                  <Image src={tempAvatar} width='36' height='36'></Image>
                  <Stack justifyContent='center' alignItems='flex-start' gap='4px' flex='1 0 0 '>
                    <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                      {item.text}
                    </Text>
                    <Flex alignItems='center' gap='8px'>
                      <Text fontSize='12px' fontWeight='500' lineHeight='20px' color='#818181'>
                        {item.time}
                      </Text>
                      <Image src={ellipse} />
                      <Text fontSize='12px' fontWeight='500' lineHeight='20px' color='#818181'>
                        {item.role}
                      </Text>
                    </Flex>
                  </Stack>
                </Flex>
              );
            })}
          </Stack>
        </Stack>
      </MenuList>
    </Menu>
  );
}

export default Notifications;
