import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Dhananjai Sharma!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar
      src="https://avatars.githubusercontent.com/u/71404936?s=400&u=75bc544c2c4b28b97d2e1b7f1f9b49a0514948cf&v=4"
      name="Dhananjai Sharma"
      size="2xl"
    />
    <Heading size="md">{greeting}</Heading>
    <VStack py="10">
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="2xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
