import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabPanel,
  TabList,
  TabPanels,
} from "@chakra-ui/react";
import SignUp from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
// import { box } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderwidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          <center>Chat-Crafter</center>
        </Text>
      </Box>
      <Box bg="white" w="100%" p={3} borderRadius="lg" borderwidth="1px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb={"1em"}>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
