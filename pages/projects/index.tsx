import Page from "components/pages/projects/base";
import { NextPage } from "next";
import IProject from "models/project";
import projectsData from "public/data/projects.json";
import Head from "next/head";

interface Props {
  projects: IProject[];
}

const ProjectsIndexPage: NextPage<Props> = ({ projects = [] }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Page projects={projects} />
    </>
  );
};

export async function getStaticProps() {
  const projects = projectsData;

  return {
    props: {
      projects,
    },
  };
}

export default ProjectsIndexPage;
