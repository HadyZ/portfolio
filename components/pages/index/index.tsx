import { Box, Grid, Stack } from "@chakra-ui/core";
import LazyLoad from "react-lazyload";
import IProject from "models/project";
import dynamic from "next/dynamic";
import React, { FC } from "react";


const Jumbotron = dynamic(import("components/pages/index/jumbotron"));

const Projects = dynamic(
  import(/* webpackChunkName: "Projects" */ "components/pages/index/projects")
);
const SocialLinks = dynamic(
  import(/* webpackChunkName: "SocialLinks" */ "components/social-links")
);
const Navbar = dynamic(
  import(/* webpackChunkName: "Navbar" */ "components/navbar")
);
const Footer = dynamic(
  import(/* webpackChunkName: "Footer" */ "components/footer")
);

interface Props {
  projects: IProject[];
}

const Page: FC<Props> = ({
  projects = [],
}) => {

  return (
    <>
      <Box as="section">
        <Jumbotron />
      </Box>
      <SocialLinks />
      <Navbar />
      <Box alignItems="center" justifyItems="center">
        <Box maxW="6xl" mx="auto" >
          <Grid templateColumns={["1fr", "1fr", "1fr"]}>
            <Stack spacing={32} >
              <Box as="section">
                <LazyLoad once offset={100}>
                  <Projects projects={projects.slice(0, 6)} />
                </LazyLoad>
              </Box>
            </Stack>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
