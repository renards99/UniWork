import {
  Box,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Collapse,
  Input,
  Button,
  Radio,
  RadioGroup,
  Textarea,
  Image,
} from '@chakra-ui/react';
import CandidateHeader from '../../components/layout/candidate/header';
import DropDown from '../../components/layout/candidate/dropDown';
function changeAccountInfo() {
  const menuData = {
    job: ['Chọn ngành nghề', 'CNTT', 'IT'],
  };
  return (
    <Stack justifyContent='center' alignItems='center' >
      <CandidateHeader />

      <Stack gap='0' w='930px' px='24px' justifyContent='center' alignItems='center'>
        <Flex
          px='24px'
          pb='8px'
          pt='16px'
          bg='#F6871F'
          p='12px'
          fontSize='18px'
          roundedTop='12px'
          gap='12px'
          alignItems='flex-start'
          alignSelf='stretch'
        >
          <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
            Cài đặt thông tin cá nhân
          </Text>
        </Flex>
        <Stack
          p='24px'
          justifyContent='center'
          gap='20px'
          border='1px solid #F6871F'
          alignSelf='stretch'
        >
          <Stack gap='8px' p='0px' cursor='none'>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Email:
            </Text>
            <Input
              p='24px 20px'
              value='hanhchinh@lechongvien.vn'
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
              Họ và tên:
            </Text>
            <Input
              p='24px 20px'
              placeholder='Nhập họ tên'
              rounded='12px'
              border='1px solid #323541'
              focusBorderColor='none'
              _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
              fontSize='16px'
              fontWeight='600px'
              lineHeight='24px'
            ></Input>
          </Stack>
          <Flex gap='20px'>
            <Stack gap='8px' p='0px' flex='1 0 0'>
              <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
                Số điện thoại:
              </Text>
              <Input
                p='24px 20px'
                placeholder='Nhập số điện thoại'
                rounded='12px'
                border='1px solid #323541'
                focusBorderColor='none'
                _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
                fontSize='16px'
                fontWeight='600px'
                lineHeight='24px'
              ></Input>
            </Stack>
          </Flex>

          <Flex p='12px' justifyContent='center' alignItems='center' gap='20px'>
            <Flex
              w='132px'
              p='8px 12px'
              justifyContent='center'
              alignItems='center'
              gap='20px'
              rounded='12px'
              bg='#F6871F'
              cursor='pointer'
            >
              <Text fontSize='14px' fontWeight='400px' lineHeight='24px' color='white'>
                Lưu
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default changeAccountInfo;
