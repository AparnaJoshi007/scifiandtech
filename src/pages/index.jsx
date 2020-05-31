import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { SimpleHeader, PostList } from 'components';
import { Layout } from 'layouts';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  padding: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0;
  }
`;

const Anchor = styled.a`
  box-shadow: 0 1px 0 0 currentColor;
  color: ${props => props.theme.colors.primary.base};
  font-weight: bold;
  &:hover {
    color: ${props => props.theme.colors.complimentary.dark};
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const  edgesSiteData = data.allSite.edges[0];
  const { twitterLink }  = edgesSiteData.node.siteMetadata
  return (
    <Layout headerlink="/">
      <Helmet title={'Home Page'} />
      <SimpleHeader title={"Abracadabra"}>
          <div>Hi, I'm <Anchor href={twitterLink}>Aparna Joshi</Anchor>. I'm a technology enthusiast and an anime geek.</div>
          <div>Bringing a little bit of technology and lots of fiction by yours truly</div>
      </SimpleHeader>
      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, frontmatter } = node;
          const { cover, path, title, date, published, core } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              core={core}
              published={published}
            />
          );
        })}
      </PostWrapper>
      <Anchor href="/blog">View more</Anchor>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
              core: PropTypes.string,
              published: PropTypes.bool.isRequired
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allSite {
      edges {
        node {
          siteMetadata {
            twitterLink
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            published
            core
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "red" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
