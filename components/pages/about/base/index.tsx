import React, { FC } from "react";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Image,
  Text,
  Link,
  useColorMode,
} from "@chakra-ui/core";
import withNavbarLayout from "lib/with-navbar-layout";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Page: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };

  const headingNode = () => {
    return (
      <Stack isInline spacing={4} alignItems="center">
        <Box>
          <Image
            objectFit="cover"
            src="/images/common/avatar.jpg"
            alt="Hady Zeitouny"
            size={20}
            bg={cardColor[colorMode]}
            color={cardBgColor[colorMode]}
            rounded="full"
            p={1}
          />
        </Box>
        <Box>
          <Stack spacing={2}>
            <Heading as="h1" size="xl">
              Hady Zeitouny
            </Heading>
            <Text>A little bit about me</Text>
          </Stack>
        </Box>
      </Stack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text fontWeight="bold">Business and Software Developer</Text>
        {/* <Text>
          I'm also a big fan of{" "}
          <Box as="span" fontWeight="bold">
            Java Script
          </Box>{" "}
          and have{" "}
          <Box as="span" fontWeight="bold">
            around 3 years
          </Box>{" "}
          experience with it. I'm eager to learn new frameworks.
        </Text> */}
        <Text>
          As a website builder, I have always been fascinated by the limitless
          possibilities that the digital space offers. With a passion for
          technology and design, I have honed my skills in web development,
          constantly seeking to improve my craft and stay on top of the latest
          trends and innovations. Whether it's designing sleek and user-friendly
          interfaces, writing clean and efficient code, or implementing SEO best
          practices, I take pride in delivering high-quality websites that not
          only look great but also perform exceptionally well. With an eye for
          detail and a commitment to excellence, I strive to create websites
          that not only meet my clients' needs but also exceed their
          expectations. Whether you're looking to build a small business website
          or a large-scale e-commerce platform, I am confident in my ability to
          deliver a website that will leave a lasting impression on your
          audience.
        </Text>
      </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <Stack spacing={4}>
        <Stack spacing={8}>
          <Heading as="h2" size="lg">
            Social profiles
          </Heading>
          <Text>You can find me in the following social websites:</Text>
        </Stack>
        <Box d="flex" alignItems="center">
          <Stack spacing={4} isInline>
            <Link
              py={2}
              px={4}
              href="https://github.com/HadyZ"
              rounded="md"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoLogoGithub} /> <Text>Github</Text>
              </Stack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://www.linkedin.com/in/hady-zeitouny/"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
              </Stack>
            </Link>
          </Stack>
        </Box>
      </Stack>
    );
  };

  return (
    <Box maxW="3xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Stack spacing={8}>
            {headingNode()}
            {bioDescriptionNode()}
            {socialLinksNode()}
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default withNavbarLayout(Page);
