import { Text, Box, Flex } from '@chakra-ui/react';
function StatusFrameGrey(props) {
  const text = props.text;
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      backgroundColor={'#D7D7D7'}
      w='134px'
      padding='6px 10px'
      h='28px'
      borderRadius={'12px'}
      margin={'0 auto'}
      textAlign={'center'}
    >
      <Text fontSize={'14px'} fontWeight={'500'} color={'#666666'}>
        {text}
      </Text>
    </Flex>
  );
}

export default StatusFrameGrey;
