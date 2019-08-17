import React from 'react';
import 'katex/dist/katex.min.css';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio.js';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tag from '../components/common/tag.js';
import styles from './blog-post.module.less';
import tagStyles from '../components/common/tag.module.less';
import './blog-post.less';
import 'prismjs/themes/prism.css';

class BlogPostTemplate extends React.Component {
  getTags() {
    if (!this.props.data.markdownRemark.frontmatter.tags) {
      return null;
    }
    const tags = this.props.data.markdownRemark.frontmatter.tags
      .map(a => a.toLowerCase())
      .sort()
      .map(tag => (
        <li>
          <Tag key={tag} tagName={tag} />
        </li>
      ));
    return (
      <div className={styles.tagWrap}>
        Tagged In:
        <ul className={tagStyles.tagInline}>{tags}</ul>
      </div>
    );
  }

  getAuthor() {
    const authorId = this.props.data.markdownRemark.frontmatter.author;
    if (!authorId) {
      return null;
    }
    return this.props.data.allAuthorsJson.nodes.find(i => i.id === authorId);
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next, featuredImages = [] } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          images={featuredImages}
        />
        <h1>{post.frontmatter.title}</h1>
        <Bio author={this.getAuthor()}>
          <time className={styles.time}>{post.frontmatter.date}</time>
        </Bio>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {this.getTags()}
        <hr className={styles.hr} />

        <ul className={styles.navButtons}>
          <li>
            {previous && (
              <Link
                to={previous.frontmatter.permalink || previous.fields.slug}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={next.frontmatter.permalink || next.fields.slug}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    allAuthorsJson {
      nodes {
        id
        name
        avatar
        twitter
        github
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 180)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        tags
        permalink
      }
    }
  }
`;
