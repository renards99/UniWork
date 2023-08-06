import {
  Flex,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from '@chakra-ui/react';
import { LuBellDot } from 'react-icons/lu';
import { HiChevronDown } from 'react-icons/hi';
import { FaCircleUser } from 'react-icons/fa6';

export default function HeaderAdmins({ title }) {
  return (
    <Flex
      justifyContent={'space-between'}
      padding={'28px 24px 14px 24px'}
      borderBottom={'2px solid #D7D7D7'}
    >
      <Text fontSize={30} fontWeight={'bold'}>
        {title}
      </Text>
      <Flex>
        <IconButton
          icon={<LuBellDot style={{ width: '24px', height: '24px' }} />}
          w={'48px'}
          h={'48px'}
          borderRadius={'50%'}
          backgroundColor={'var(--black-10, rgba(19, 17, 49, 0.10))'}
        />
        <Box w={'30px'}></Box>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<HiChevronDown style={{ width: '24px', height: '24px' }} />}
            leftIcon={<FaCircleUser style={{ width: '24px', height: '24px' }} />}
            h={'48px'}
            w={'218px'}
            borderRadius={'40px'}
            fontSize={'16px'}
            fontFamily={'500'}
            lineHeight={'24px'}
            backgroundColor={'var(--black-10, rgba(19, 17, 49, 0.10))'}
          >
            Administrator
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
