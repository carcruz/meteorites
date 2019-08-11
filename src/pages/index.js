import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMeteoriteLandingsCsv {
        edges {
          node {
            id
            GeoLocation
            reclat
            reclong
            year
            recclass
            name
            nametype
            fall
            mass__g_
          }
        }
      }
    }
  `);

  const filterdData = data.allMeteoriteLandingsCsv.edges.map(edge => edge.node);
  console.log(filterdData)

  return (
    <>
      <SEO title="Home" />
    </>
  );
};

export default IndexPage;
