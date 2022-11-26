import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box color="black" background="white" borderRadius="12">
      <Image
        src={imageSrc}
        alt={title}
        borderBottomRadius="18"
        borderTopRadius="12"
      />
      <VStack px="2" py="2" align="left" spacing={4}>
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="grey">
          {description}
        </Text>
        <HStack alignItems="center" spacing={2}>
          <Text fontSize="xs">See More</Text>
          <FontAwesomeIcon size="xs" icon={faArrowRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
