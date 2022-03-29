import TagList from "../../component/tags/TagList";
import React from "react";
import { Lecture } from "../../interface/lecture";

interface Props {
  lecture: Lecture;
}

const LectureItem = ({ lecture }: Props): JSX.Element => {
  return (
    <div>
      <img src={lecture.thumbs} alt="초격차 패키지" />
      {/* <TagList tags={lecture.tags} /> */}
      <h3>{lecture.title}</h3>
      <p>{lecture.description}</p>
    </div>
  );
};

export default LectureItem;
