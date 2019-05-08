import React from 'react';
import PropTypes from 'prop-types';
import { AuthorSt, StoryTileSt, TitleSt } from './StoryTile.css';

export const StoryTilePropTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default function StoryTile({ author, title }) {
  return (
    <StoryTileSt>
      <TitleSt>
        {title}
      </TitleSt>
      <AuthorSt>
        {author}
      </AuthorSt>
    </StoryTileSt>
  );
}

StoryTile.propTypes = StoryTilePropTypes;
