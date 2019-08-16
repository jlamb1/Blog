import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Tag from '../components/common/tag.js';
import styles from '../components/common/tag.module.less';

export default function AllTags({ pageContext: { tags } }) {
  const tagPills = tags.map(i => (
    <li>
      <Tag key={i} tagName={i} />
    </li>
  ));
  return (
    <Layout title="All Tags">
      <SEO title="All Tags" keywords={tags} />
      <h1>All Topics</h1>
      <ul className={styles.tagList}>{tagPills}</ul>
    </Layout>
  );
}
