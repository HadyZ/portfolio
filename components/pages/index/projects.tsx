import React, { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Link as _Link,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";
import IProject from "../../../models/project";
import { IoMdArrowRoundForward } from "react-icons/io";

interface Props {
  projects: IProject[];
  hideViewAllLinksNode?: boolean;
}

const projects: FC<Props> = ({
  projects = [],
  hideViewAllLinksNode = false,
}) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "gray.900", dark: "gray.100" };
  const cardColor = { light: "gray.100", dark: "gray.900" };

  const viewAllLinksNode = () => {
    if (hideViewAllLinksNode) return false;

    return (
      <Link href="/projects">
        <_Link p={2} href="/projects" rounded="md">
          <Stack spacing={2} isInline alignItems="center" marginTop="2rem">
            <Box fontWeight="bold">View all projects</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </Stack>
        </_Link>
      </Link>
    );
  };

  const headingNode = () => {};

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  return (
    <Stack spacing={4}>
      {headingNode()}
      <Stack spacing={8}>
        {projects.map((project: IProject, index: number) => {
          return (
            <Box
              key={index}
              bg={cardBgColor[colorMode]}
              color={cardColor[colorMode]}
              p={8}
              rounded="md"
              shadow="md"
              mt={index == 0 ? 8 : 0}
            >
              <a href={project.url} target="_blank" rel="noopener">
                <Stack spacing={4}>
                  {titleNode(project.title)}
                  {descriptionNode(project.description)}
                </Stack>
              </a>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default projects;
