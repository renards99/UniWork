import { Text, Box, Flex } from '@chakra-ui/react';
export default function StatusFrame(props) {
  const text = props.text;
  const type = props.type;
  const tColor =
    type === '0'
      ? '#4881FC'
      : type === '1'
      ? '#048500'
      : type === '2'
      ? '#E10000'
      : type === '3'
      ? '#818181'
      : type === '4'
      ? '#FF7613'
      : '';
  const bgColor =
    type === '0'
      ? '#E5EBFA'
      : type === '1'
      ? '#C7F5D9'
      : type === '2'
      ? '#FFD7D7'
      : type === '3'
      ? '#1311311A'
      : type === '4'
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
      textAlign={'center'}
    >
      <Text fontSize={'14px'} fontWeight={'500'} color={tColor}>
        {text}
      </Text>
    </Flex>
  );
}
