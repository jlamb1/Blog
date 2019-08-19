import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import styles from './BrandedHeader.module.less';
import Logo from '../../content/assets/cargurus-logo.svg';

export default function BrandedHeader() {
  return (
    <nav className={styles.brandedHeader}>
      <Link aria-label="HomePage Link" to="/" className={styles.logoWrap}>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link to="/tags/">All Topics</Link>
          </li>
          <li>
            <a href="/rss.xml">RSS</a>
          </li>
          <li className={styles.socialIconSpacing}>
            <a aria-label="github" href="https://github.com/cargurus/Blog">
              <FontAwesomeIcon role="button" icon={faGithub} />
            </a>
          </li>
          <li>
            <a aria-label="twitter" href="https://twitter.com/cargurus/">
              <FontAwesomeIcon role="button" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
