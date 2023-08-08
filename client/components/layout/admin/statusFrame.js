import { Text, Box, Flex } from '@chakra-ui/react';
export default function StatusFrame(props) {
  const text = props.text;
  const tColor =
    text === 'Chưa duyệt'
      ? '#818181'
      : text === 'Đã duyệt'
      ? '#048500'
      : text === 'Không duyệt'
      ? '#E1000a0'
      : text === 'Hết hạn'
      ? '#FF7613'
      : '';
  const bgColor =
    text === 'Chưa duyệt'
      ? '#1311311A'
      : text === 'Đã duyệt'
      ? '#C7F5D9'
      : text === 'Không duyệt'
      ? '#FFC0C0'
      : text === 'Hết hạn'
      ? '#FFEACB'
      : '';
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      backgroundColor={bgColor}
      w='134px'
      padding='6px 10px'
      h='28px'
      borderRadius={'12px'}
      margin={'0 auto'}
      textAlign={'center'}
    >
      <Text fontSize={'14px'} fontWeight={'500'} color={tColor}>
        {text}
      </Text>
    </Flex>
  );
}
