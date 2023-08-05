import { Flex, Text, Icon, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import SideElement from './SideElement';
import NextLink from 'next/link';

export default function SideItem({
  icon,
  title,
  handleSetActiveSideBar,
  active,
  navSize,
  suffixIcon,
  value,
  href,
  sideBarActive,
}) {
  return (
    <>
      <Flex
        marginTop='10px'
        flexDir='column'
        w='100%'
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        onClick={() => handleSetActiveSideBar(value)}
        fontSize={'15px'}
      >
        <Menu placement='right'>
          <Link
            as={!suffixIcon && NextLink}
            backgroundColor={active && '#464954'}
            p={3}
            borderRadius={8}
            _hover={{ textDecor: 'none', backgroundColor: '#464954', color: '#fff' }}
            color={active || value == 99 ? '#fff' : '#686868'}
            w={navSize == 'large' && '100%'}
            href={!suffixIcon ? href : '#'}
            display={'flex'}
            justifyContent={'center'}
          >
            <MenuButton w='80%' padding={'3px 0'}>
              <Flex justifyContent={'space-between'}>
                <Flex>
                  <Icon as={icon} fontSize='xl' width={'20px'} h={'20px'} />
                  <Text ml={5} whiteSpace='nowrap' display={navSize == 'small' ? 'none' : 'flex'}>
                    {title}
                  </Text>
                </Flex>
                {suffixIcon && <Icon as={suffixIcon} fontSize='xl' width={'20px'} h={'20px'} />}
              </Flex>
            </MenuButton>
          </Link>
        </Menu>
      </Flex>
      {suffixIcon && active && sideBarActive == 3 && (
        <SideElement navSize={(navSize, active)} href={href} sideBarActive={sideBarActive} />
      )}
    </>
  );
}
