import React from 'react';
import PropTypes from 'prop-types';
import StoryTile, { StoryTilePropTypes } from '../../../components/StoryTile/StoryTile';
import { HeadingSt, StoriesListSt, StoriesSt } from './Stories.css';

export default function Stories({ stories }) {
  const list = stories.map(item => <li key={item.id}><StoryTile {...item} /></li>);

  return (
    <StoriesSt>
      <HeadingSt>Stories</HeadingSt>
      <StoriesListSt>
        {list}
      </StoriesListSt>
    </StoriesSt>
  );
}

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape(StoryTilePropTypes))
};

Stories.defaultProps = {
  stories: []
};
