import projectsData from "public/data/projects.json";
import Page from "components/pages/index";
import IProject from "models/project";
import siteConfig from "config/site";
import { NextPage } from "next";
import Head from "next/head";

//@ts-ignore

interface Props {
  projects: IProject[];
}

const IndexPage: NextPage<Props> = ({ projects = [] }) => {
  return (
    <>
      <Head>
        <title>{`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}</title>
      </Head>
      <Page
        projects={projects}
      />
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

export default IndexPage;
