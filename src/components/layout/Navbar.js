import { Button, Flex, HStack, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      shadow="md"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
  
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link to="/" color="teal" as={RouterLink} fontWeight="bold">
          Home
        </Link>
        <Spacer />
        <HStack>
          <Button
            ml="auto"
            colorScheme="teal"
            size="sm"
            as={RouterLink}
            to="/create"
          >
            New Developper
          </Button>
          <Button
            ml="auto"
            colorScheme="teal"
            size="sm"
            as={RouterLink}
            to="/"
          >
            See All Developpers
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
