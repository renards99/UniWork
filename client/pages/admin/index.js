import { Text, Flex, Input, Stack, Box, Button } from '@chakra-ui/react';
import { MdArrowBackIosNew, MdContactSupport, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useCallback, useState } from 'react';

export default function AdminPage(props) {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [datePublic, setDatePublic] = useState();
  const [datePublicSetting, setDatePublicSetting] = useState(0);

  const dayInWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  let dayInMonth = new Date(year, month + 1, 0).getDate();
  let prevDayInMonth = new Date(year, month, 0).getDate();
  let firstDay = new Date(year, month, 1).getDay();

  const WeekHTML = dayInWeek.map((item) => {
    return (
      <Text w={'26px'} textAlign={'center'}>
        {item}
      </Text>
    );
  });

  let day = [];
  for (let index = 1; index <= dayInMonth; index++) {
    day.push(index);
  }

  let CalenderHTML = Array(5).fill(Array(7).fill(null));
  let store = 0;

  CalenderHTML = CalenderHTML.map((arr, index) => {
    if (index == 0) {
      return (
        <Flex
          justifyContent={'space-between'}
          marginTop={'10px'}
          fontSize={'12px'}
          fontWeight={'500'}
        >
          {arr.map((item, i) => {
            if (i < firstDay) {
              return (
                <Text
                  w={'26px'}
                  paddingTop={'4px'}
                  h={'26px'}
                  borderRadius={
                    datePublic == `${prevDayInMonth - firstDay + 1 + i}-prev` ? '50%' : 0
                  }
                  background={
                    datePublic == `${prevDayInMonth - firstDay + 1 + i}-prev` ? '#323541' : '#fff'
                  }
                  color={
                    datePublic == `${prevDayInMonth - firstDay + 1 + i}-prev` ? '#fff' : '#bababa'
                  }
                  textAlign={'center'}
                  cursor={'pointer'}
                  onClick={() => setDatePublic(`${prevDayInMonth - firstDay + 1 + i}-prev`)}
                >
                  {prevDayInMonth - firstDay + 1 + i}
                </Text>
              );
            } else {
              store = i - firstDay;
              return (
                <Text
                  w={'26px'}
                  paddingTop={'4px'}
                  h={'26px'}
                  borderRadius={datePublic == `${day[i - firstDay]}` ? '50%' : 0}
                  background={datePublic == `${day[i - firstDay]}` ? '#323541' : '#fff'}
                  color={datePublic == `${day[i - firstDay]}` ? '#fff' : '#000'}
                  textAlign={'center'}
                  cursor={'pointer'}
                  onClick={() => setDatePublic(`${day[i - firstDay]}`)}
                >
                  {day[i - firstDay]}
                </Text>
              );
            }
          })}
        </Flex>
      );
    } else {
      let continueDay = 0;
      return (
        <Flex
          justifyContent={'space-between'}
          marginTop={'10px'}
          fontSize={'12px'}
          fontWeight={'500'}
        >
          {arr.map((item, i) => {
            store = store + 1;
            if (day[store] != undefined) {
              return (
                <Text
                  w={'26px'}
                  paddingTop={'4px'}
                  h={'26px'}
                  borderRadius={datePublic == `${day[store]}` ? '50%' : 0}
                  background={datePublic == `${day[store]}` ? '#323541' : '#fff'}
                  color={datePublic == `${day[store]}` ? '#fff' : '#000'}
                  textAlign={'center'}
                  cursor={'pointer'}
                  id={`${day[store]}`}
                  onClick={(e) => {
                    setDatePublic(e.target.id);
                  }}
                >
                  {day[store]}
                </Text>
              );
            } else {
              continueDay += 1;
              return (
                <Text
                  w={'26px'}
                  paddingTop={'4px'}
                  h={'26px'}
                  borderRadius={datePublic == `${continueDay}-next` ? '50%' : 0}
                  background={datePublic == `${continueDay}-next` ? '#323541' : '#fff'}
                  color={datePublic == `${continueDay}-next` ? '#fff' : '#bababa'}
                  textAlign={'center'}
                  cursor={'pointer'}
                  id={`${continueDay}-next`}
                  onClick={(e) => setDatePublic(e.target.id)}
                >
                  {continueDay}
                </Text>
              );
            }
          })}
        </Flex>
      );
    }
  });

  const nextMonth = useCallback(() => {
    if (month > 11) {
      setYear(year + 1);
      setMonth(0);
    } else setMonth(month + 1);
  }, [month, year]);

  const prevMonth = useCallback(() => {
    if (month <= 0) {
      setYear(year - 1);
      setMonth(11);
    } else setMonth(month - 1);
  }, [month, year]);

  return (
    <Flex
      w={'652px'}
      h={'324px'}
      border={'1px solid'}
      borderRadius={'16px'}
      p={'28px 20px 24px'}
      fontSize={'14px'}
      fontWeight={'500'}
      justifyContent={'space-around'}
    >
      <Stack w={'132px'}>
        <Text>Thời hạn đăng</Text>
        <Box h={'12px'}></Box>
        <Stack>
          <Text
            p={'4px 8px'}
            h={'32px'}
            backgroundColor={datePublicSetting == 1 ? '#e8e8eb' : '#fff'}
            onClick={() => setDatePublicSetting(1)}
            cursor={'pointer'}
          >
            1 ngày
          </Text>
          <Text
            p={'4px 8px'}
            h={'32px'}
            backgroundColor={datePublicSetting == 2 ? '#e8e8eb' : '#fff'}
            onClick={() => setDatePublicSetting(2)}
            cursor={'pointer'}
          >
            7 ngày
          </Text>
          <Text
            p={'4px 8px'}
            h={'32px'}
            backgroundColor={datePublicSetting == 3 ? '#e8e8eb' : '#fff'}
            onClick={() => setDatePublicSetting(3)}
            cursor={'pointer'}
          >
            14 ngày
          </Text>
          <Text
            p={'4px 8px'}
            h={'32px'}
            backgroundColor={datePublicSetting == 4 ? '#e8e8eb' : '#fff'}
            onClick={() => setDatePublicSetting(4)}
            cursor={'pointer'}
          >
            30 ngày
          </Text>
          <Text
            p={'4px 8px'}
            h={'32px'}
            backgroundColor={datePublicSetting == 5 ? '#e8e8eb' : '#fff'}
            onClick={() => setDatePublicSetting(5)}
          >
            Tùy chỉnh
          </Text>
        </Stack>
      </Stack>
      <Box w={'1px'} h={'272px'} background={'#323541'} margin={'0 20px'}></Box>
      <Stack w={'308px'}>
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          fontSize={'14px'}
          fontWeight={'600'}
        >
          <Box onClick={prevMonth} cursor={'pointer'}>
            <MdArrowBackIosNew />
          </Box>
          <Box w={'30px'}></Box>
          <Text>Tháng {month + 1}</Text>
          <Text>{year}</Text>
          <Box w={'30px'}></Box>
          <Box onClick={nextMonth} cursor={'pointer'}>
            <MdOutlineArrowForwardIos />
          </Box>
        </Flex>
        <Flex
          justifyContent={'space-between'}
          marginTop={'15px'}
          fontSize={'14px'}
          fontWeight={'500'}
        >
          {WeekHTML}
        </Flex>
        {CalenderHTML}
      </Stack>
      <Box w={'1px'} h={'272px'} background={'#323541'} margin={'0 20px'}></Box>
      <Stack w={'132px'} fontSize={'12px'} justifyContent={'space-evenly'}>
        <Box>
          <Text>Bắt đầu</Text>
          <Box h={'10px'}></Box>
          <Input type='datetime-local' />
        </Box>
        <Box>
          <Text>Kết thúc</Text>
          <Box h={'10px'}></Box>
          <Input type='datetime-local' />
        </Box>
        <Button borderRadius={'20px'} padding={'8px 16px'} background={'#323541'} color={'#fff'}>
          Áp dụng
        </Button>
      </Stack>
    </Flex>
  );
}

export async function getServerSideProps() {
  const BACK_END_PORT = 'http://localhost:5000'

  return { props: { port: BACK_END_PORT } };
}
