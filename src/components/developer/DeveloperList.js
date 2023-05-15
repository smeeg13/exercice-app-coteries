import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import DevelopperCard from "./DeveloperCard";

const DevelopperList = ({ developers }) => {
  return (
    <Box px="4">
      {developers?.length === 0 ? (
        <Text fontSize="xl" textAlign="center">
          No Developpers in the team yet...
        </Text>
      ) : (

        <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px="10px" py="6">
      {developers?.map((dev) => <DevelopperCard key={dev.id} developer={dev} />)}
    </SimpleGrid>
        
      )}
    </Box>
  );
};

export default DevelopperList;
