import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const Anchor = styled.a`
  box-shadow: 0 1px 0 0 currentColor;
  color: ${props => props.theme.colors.primary.base};
  font-weight: bold;
  &:hover {
    color: ${props => props.theme.colors.complimentary.dark};
  }
  margin: 12px;
`;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {html, frontmatter } = data.markdownRemark
  const {date, title, tags, path, description, published, core} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout headerlink={path}>
      <SEO
        title={title}
        description={description || core || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image} />
      <Container>
        <Content input={html} />
        <TagsBlock list={tags || []} />
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Anchor href={prev.frontmatter.path}>
              ← {prev.frontmatter.title}
            </Anchor>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Anchor href={next.frontmatter.path}>
              {next.frontmatter.title} →
            </Anchor>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        core
        published
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
