import { useEffect, useState } from 'react';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronDown,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from 'react-icons/bs';
import Paging from '../../components/paging';
import { RxDotFilled } from 'react-icons/rx';
import {
  Box,
  Input,
  Button,
  Icon,
  Text,
  Stack,
  Grid,
  Flex,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import CandidateHeader from '../../components/layout/candidate/header';
import backgroundImg from '../../public/static/images/rectangle_33.png';
import DropDown from '../../components/layout/candidate/dropDown';
import speakerIcon from '../../public/static/images/icon/speaker.svg';
import axios from 'axios';
import { totalPriceItemInCart } from '../../helper';
const BACK_END_PORT = 'http://localhost:5000';

function JobApply() {
  const [fakeData, setFakeData] = useState([]);

  const getListJob = async (id) => {
    try {
      const findAllJobPostings = await axios.post(`${BACK_END_PORT}/job-post/get-job-by-user-id`, {
        id,
      });
      if (findAllJobPostings.data.statusCode == 200) {
        const currentDate = new Date();
        setFakeData(
          findAllJobPostings.data.data.list_job.map((job, index) => ({
            // Replace 'job.expired_at' with the actual field name that contains the expiry date
            id: job.id,
            title: job.title,
            company: job.company_name,
            locations: job.company_location,
            remainingDays: 'Còn 30 ngày để ứng tuyển',
            time: 'Cập nhật 2h trước',
            salary: totalPriceItemInCart(job.salary.toString(), 1) + ' VND',
            tags: [''],
          })),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      const dataUser = JSON.parse(data);
      if (dataUser) {
        const { id } = dataUser;
        getListJob(id);
      }
    }
  }, []);

  const locations = ['Hà Giang', 'Tuyên Quang', 'Hà Nội', '...'];
  const experiences = ['Không Kinh Nghiệm', 'Trên 1 năm', 'Trên 2 năm', '...'];
  const salaries = ['1-5 triệu', '5-7 triệu', '20 triệu', '...'];
  const menuData = ['Trạng thái'];
  //change page

  const HomeContent = (
    <div>
      <CandidateHeader />

      <Stack px='80px' py='50px' gap='42px' bg='#F0EAE9'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Text fontSize='32px' fontWeight='700' lineHeight='18px'>
            Công việc đã ứng tuyển
          </Text>
          <DropDown data={menuData} />
        </Flex>
        <Stack gap='32px' flex='1 0 0'>
          {fakeData.length ? (
            fakeData.map((data) => (
              <Flex rounded='10px' bg='white' justifyContent='space-between' p='18px'>
                <Flex>
                  <Box>
                    <Image src='/static/images/avatar_icon.png' width='100' height='100'></Image>
                  </Box>
                  <Flex p='12px'>
                    <Stack gap='12px'>
                      <Text fontSize='24px' fontWeight='600' lineHeight='18px'>
                        {data.title}
                      </Text>
                      <Text fontSize='12px' fontWeight='700' lineHeight='18px'>
                        {data.company}
                      </Text>
                      {data.tags.map((tag) => (
                        <Text fontSize='12px' fontWeight='700' lineHeight='18px' color='#E76F00'>
                          {tag}
                        </Text>
                      ))}

                      <Flex gap='32px'>
                        <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                          <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                            {data.locations}
                          </Text>
                        </Flex>
                        <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                          <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                            {data.remainingDays}
                          </Text>
                        </Flex>
                        <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                          <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                            {data.time}
                          </Text>
                        </Flex>
                      </Flex>
                    </Stack>
                  </Flex>
                </Flex>
                <Stack justifyContent='space-between' p='12px'>
                  <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#E76F00'>
                    {data.salary}
                  </Text>
                  <Flex
                    rounded='12px'
                    bg='#F6871F'
                    p='8px'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Text fontSize='12px' fontWeight='600' lineHeight='18px' color='white'>
                      Xem CV
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            ))
          ) : (
            <Stack justifyContent='center' alignItems='center' gap='20px'>
              <Box width='300px' height='300px' bg='black'></Box>
              <Text fontSize='18px' fontWeight='700'>
                Bạn chưa ứng tuyển công việc nào!
              </Text>
              <Stack
                justifyContent='center'
                alignItems='center'
                fontSize='14px'
                color='#727272'
                fontWeight='500'
              >
                <Text>Bạn chưa ứng tuyển công việc nào!</Text>
                <Text>Bắt đầu sự nghiệp mơ ước với hàng nghìn việc làm chất lượng tại UniWork</Text>
              </Stack>
              <Flex
                justifyContent='center'
                alignItems='center'
                py='12px'
                px='20px'
                bg='#FF6B00'
                rounded='12px'
                onClick={() => {
                  window.location.href = 'http://localhost:3000/candidate/';
                }}
              >
                <Text fontSize='16px' fontWeight='600' color='white'>
                  Tìm việc ngay
                </Text>
              </Flex>
            </Stack>
          )}
        </Stack>
        <Stack gap='32px' flex='1 0 0'>
          <Text fontSize='32px' fontWeight='700' lineHeight='18px'>
            Việc làm phù hợp
          </Text>
          {fakeData.map((data) => (
            <Flex rounded='10px' bg='white' justifyContent='space-between' p='18px'>
              <Flex>
                <Box>
                  <Image src='/static/images/avatar_icon.png' width='100' height='100'></Image>
                </Box>
                <Flex p='12px'>
                  <Stack gap='12px'>
                    <Text fontSize='24px' fontWeight='600' lineHeight='18px'>
                      {data.title}
                    </Text>
                    <Text fontSize='12px' fontWeight='700' lineHeight='18px'>
                      {data.company}
                    </Text>
                    {data.tags.map((tag) => (
                      <Text fontSize='12px' fontWeight='700' lineHeight='18px' color='#E76F00'>
                        {tag}
                      </Text>
                    ))}

                    <Flex gap='32px'>
                      <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                        <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                          {data.locations}
                        </Text>
                      </Flex>
                      <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                        <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                          {data.remainingDays}
                        </Text>
                      </Flex>
                      <Flex rounded='12px' bg='#E3E3E3' p='8px'>
                        <Text fontSize='12px' fontWeight='600' lineHeight='18px'>
                          {data.time}
                        </Text>
                      </Flex>
                    </Flex>
                  </Stack>
                </Flex>
              </Flex>
              <Stack justifyContent='space-between' p='12px'>
                <Text fontSize='16px' fontWeight='700' lineHeight='18px' color='#E76F00'>
                  {data.salary}
                </Text>
                <Flex
                  rounded='12px'
                  bg='#F6871F'
                  p='8px'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Text fontSize='12px' fontWeight='600' lineHeight='18px' color='white'>
                    Xem CV
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </div>
  );
  return <div>{HomeContent}</div>;
}

export default JobApply;
