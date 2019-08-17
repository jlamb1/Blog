import React from 'react';
import { Link } from 'gatsby';
import { getTagUrl } from '../../constants/urls.js';

export default function Tag({ tagName }) {
  return <Link to={getTagUrl(tagName)}>{tagName}</Link>;
}
