import { Box, Flex, Text, Stack, Input, Button } from '@chakra-ui/react';
import EmployerHeader from '../../components/layout/employer/header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserId(user.id);
      setEmail(user.email); // Adjust this depending on the actual structure of your stored user object
    }
  }, []);
  const handleSave = async () => {
    if (newPassword.length <= 6) {
      alert('New password must be more than 6 characters!');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
    try {
      // You will need to change this endpoint to your actual endpoint where you handle the password changing
      const response = await axios.post('http://localhost:5000/change-password', {
        id: userId,
        currentPassword,
        newPassword,
      });
      console.log(response);
      if (response.data.statusCode === 200) {
        alert('Password changed successfully!');
        window.location.href = 'http://localhost:3000/employer';
      } else {
        alert('Error changing password!');
      }
    } catch (error) {
      console.error('There was an error changing the password!', error);
    }
  };

  const handleCancel = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };
  return (
    <Box ml='316px'>
      <EmployerHeader />
      <Stack gap='0' w='620px' px='24px' pb='8px' pt='16px'>
        <Flex
          px='24px'
          pb='8px'
          pt='16px'
          bg='#323541'
          p='12px'
          fontSize='18px'
          roundedTop='12px'
          gap='12px'
          alignItems='flex-start'
        >
          <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
            Giấy phép kinh doanh
          </Text>
        </Flex>
        <Stack p='24px' justifyContent='center' gap='20px' border='1px solid #818181'>
          <Stack gap='8px' p='0px' cursor='none'>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Email:
            </Text>
            <Input
              p='24px 20px'
              value={email}
              rounded='12px'
              border='1px solid #323541'
              focusBorderColor='none'
              _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
              fontSize='16px'
              fontWeight='600px'
              lineHeight='24px'
              readOnly
              bg='#DEDEDE'
            ></Input>
          </Stack>

          <Stack gap='8px' p='0px'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Mật khẩu hiện tại:
            </Text>
            <Input
              p='24px 20px'
              placeholder='Mật khẩu hiện tại'
              rounded='12px'
              border='1px solid #323541'
              focusBorderColor='none'
              _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
              fontSize='16px'
              fontWeight='600px'
              lineHeight='24px'
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            ></Input>
          </Stack>

          <Flex gap='20px'>
            <Stack gap='8px' p='0px' flex='1 0 0'>
              <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                Mật khẩu mới:
              </Text>
              <Input
                p='24px 20px'
                placeholder='Mật khẩu mới'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              ></Input>
            </Stack>
          </Flex>
          <Stack gap='8px' p='0px' flex='1 0 0'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Nhập lại mật khẩu mới:
            </Text>
            <Input
              p='24px 20px'
              placeholder='Nhập lại mật khẩu mới'
              rounded='12px'
              border='1px solid #323541'
              focusBorderColor='none'
              _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
              fontSize='16px'
              fontWeight='600px'
              lineHeight='24px'
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            ></Input>
          </Stack>
        </Stack>
        <Flex p='12px' justifyContent='flex-start' alignItems='center' gap='20px'>
          <Flex
            w='132px'
            p='8px 12px'
            justifyContent='center'
            alignItems='center'
            gap='20px'
            rounded='12px'
            bg='#323541'
            cursor='pointer'
            onClick={handleSave}
          >
            <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='white'>
              Lưu
            </Text>
          </Flex>
          <Flex
            w='132px'
            p='8px 12px'
            justifyContent='center'
            alignItems='center'
            gap='20px'
            rounded='12px'
            bg='white'
            border='1px solid #323541'
            cursor='pointer'
            onClick={handleCancel}
          >
            <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='#323541'>
              Hủy
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}

export default ChangePassword;
