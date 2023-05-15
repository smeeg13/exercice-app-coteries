import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
        {/* Navbar Here if always same */}
          <Navbar/>
        {/* To display the rest of the page use outlet */}
        <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
            <Outlet />       
        </Flex>
        {/* Footer Here if always same */}
      </>
    );
};

export default Layout;