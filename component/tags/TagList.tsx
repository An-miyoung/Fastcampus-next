import React from "react";
import { Tag } from "../../interface/lecture";

interface Props {
  tags: [Tag];
}

const TagList = ({ tags }: Props): JSX.Element => {
  const tagList = tags.map((tag) => {
    return <span key={tag.id}>{tag.name}</span>;
  });
  return <div>{tags}</div>;
};

export default TagList;
