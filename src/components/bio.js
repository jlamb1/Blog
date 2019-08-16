/* eslint-disable quotes */
/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import styles from './bio.module.less';

const bioQuery = graphql`
  query BioQuery {
    avatar: allFile(
      filter: { absolutePath: { regex: "//content/assets/authors/" } }
    ) {
      nodes {
        base
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

function Bio({ author, children }) {
  if (!author) {
    return null;
  }
  const { name, avatar, twitter, github } = author;
  // todo: this needs to be broken up better
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const currentAuthorsImage = data.avatar.nodes.find(
          a => a.base === avatar,
        );
        return (
          <div className={styles.bio}>
            {currentAuthorsImage && (
              <Image
                fixed={currentAuthorsImage.childImageSharp.fixed}
                alt={name}
                style={{
                  marginRight: '0.75rem',
                  marginBottom: 0,
                  minWidth: 40,
                  borderRadius: '100%',
                }}
                imgStyle={{
                  borderRadius: '50%',
                }}
              />
            )}
            <span className={styles.nameWrap}>
              <div className={styles.social}>
                <p>{name}</p>
                <span className={github && twitter ? styles.socialIcons : ''}>
                  {twitter && (
                    <a href={`https://twitter.com/${twitter}`}>
                      <FontAwesomeIcon
                        role="button"
                        icon={faTwitter}
                        size="sm"
                      />
                    </a>
                  )}
                  {github && (
                    <a href={`https://github.com/${github}`}>
                      <FontAwesomeIcon
                        role="button"
                        icon={faGithub}
                        size="sm"
                      />
                    </a>
                  )}
                </span>
              </div>
              {/* this is my hacky way of putting the date here */}
              {children}
            </span>
          </div>
        );
      }}
    />
  );
}

export default Bio;
