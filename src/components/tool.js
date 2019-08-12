import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

if (typeof fetch !== 'function') {
  global.fetch = require('node-fetch-polyfill');
}

const csv = require('d3-fetch').csv;

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
  
  csv(filteredData.publicURL).then(data => {
    console.log(data);
  })

  return (
    <>
      <h1>tool</h1>
    </>
  );
};

export default Tool;