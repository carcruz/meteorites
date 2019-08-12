import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as d3 from 'd3';

const Tool = () => {
  const query = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "csv" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const filteredData = query.allFile.edges[0].node
  
  d3.csv(filteredData.publicURL).then(data => {
    console.log(data);
  })

  return (
    <>
      <h1>tool</h1>
    </>
  );
};

export default Tool;