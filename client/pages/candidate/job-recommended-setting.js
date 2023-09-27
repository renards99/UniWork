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
} from '@chakra-ui/react';

import DropDown from '../../components/layout/candidate/dropDown';
import Image from 'next/image';
import CandidateHeader from '../../components/layout/candidate/header';
function JobRecommendedSetting() {
  const menuData = {
    job: ['Chọn ngành nghề', 'CNTT', 'IT'],
  };
  return (
    <Stack justifyContent='center' alignItems='center' gap='0'>
      <CandidateHeader />
      <Image src='/static/images/job_recommended_image.png' width='930' height='300'></Image>
      <Stack gap='0' w='980px' px='24px' justifyContent='center' alignItems='center'>
        <Flex
          px='24px'
          pb='8px'
          pt='16px'
          bg='#F6871F'
          p='12px'
          fontSize='18px'
          gap='12px'
          alignItems='flex-start'
          alignSelf='stretch'
        >
          <Text color='white' fontSize='16px' fontWeight='500' lineHeight='24px'>
            Cài đặt gợi ý việc làm
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
            <Stack gap='8px' alignItems='flex-start'>
              <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
                Giới tính:
              </Text>
              <Flex gap='22px'>
                <Radio size='lg' colorScheme='orange' value='1' border='1px solid black'>
                  Nam
                </Radio>
                <Radio size='lg' colorScheme='orange' value='2' border='1px solid black'>
                  Nữ
                </Radio>{' '}
                <Radio size='lg' colorScheme='orange' value='3' border='1px solid black'>
                  Không bắt buộc
                </Radio>
              </Flex>
            </Stack>
            <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
              Vị trí công việc:
            </Text>
            <Input
              p='24px 20px'
              placeholder='nhập vị trí công việc'
              rounded='12px'
              border='1px solid #323541'
              focusBorderColor='none'
              _placeholder={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px' }}
              fontSize='16px'
              fontWeight='600px'
              lineHeight='24px'
            ></Input>
          </Stack>
          <Stack gap='8px' p='0px'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Ngành nghề:
            </Text>

            <DropDown data={menuData.job}></DropDown>
          </Stack>
          <Stack gap='8px' p='0px'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Kinh nghiệm:
            </Text>

            <DropDown data={menuData.job}></DropDown>
          </Stack>
          <Stack gap='8px' p='0px'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Mức lương:
            </Text>

            <DropDown data={menuData.job}></DropDown>
          </Stack>
          <Stack gap='8px' p='0px'>
            <Text fontSize='14px' fontWeight='500' lineHeight='24px'>
              Địa điểm làm việc:
            </Text>

            <DropDown data={menuData.job}></DropDown>
          </Stack>
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

export default JobRecommendedSetting;
