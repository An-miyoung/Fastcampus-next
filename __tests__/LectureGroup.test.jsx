// __tests__/index.test.jsx

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import LectureGroup from "../component/lecture/LectureGroup";

describe("강의목록은", () => {
  it("제목을 갖고 있어야 한다.", () => {
    const { getByText } = render(<LectureGroup />);

    const lectureTitle = getByText("이번주 베스트셀링 강의");

    expect(lectureTitle).toBeInTheDocument();
  });

  it("뱃지를 갖고 있어야 한다.", () => {
    const { getByText } = render(<LectureGroup />);

    const Badge = getByText("Best");

    expect(Badge).toBeInTheDocument();
  });
});
