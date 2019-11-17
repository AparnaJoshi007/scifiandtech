import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';
import { getRules } from 'axe-core';

const Tags = ({ data }) => {
  const { group } = data.allMarkdownRemark;
  const tags = group.map((tag) => tag.fieldValue)
  return (
    <Layout headerlink="/tags">
      <Header title="Tags Page">ScifiandTech</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
};


export const query = graphql`
query {
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`;