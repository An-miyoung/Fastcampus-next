// __tests__/index.test.jsx

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import LectureItem from "../component/lecture/LectureItem";

describe("강의 아이템은", () => {
  it("썸네일을 갖고 있어야 한다.", () => {
    const { getByAltText } = render(<LectureItem />);

    const Thumb = getByAltText("초격차 패키지");

    expect(Thumb).toBeInTheDocument();
  });

  it("뱃지를 갖고 있어야 한다.", () => {
    const { getByText } = render(<LectureItem />);

    const Badge = getByText("평생소장");

    expect(Badge).toBeInTheDocument();
  });

  it("강의제목을 렌더링 할 수 있어야 한다.", () => {
    const { getByRole } = render(<LectureItem />);

    const Title = getByRole("heading", {
      name: "초격차 패키지: 한 번에 끝내는 AMS 인프라 구축과 DevOps 운영",
    });

    expect(Title).toBeInTheDocument();
  });

  it("강의설명을 렌더링해야 한다.", () => {
    const { getByText } = render(<LectureItem />);

    const Descr = getByText(
      /\개발\/운영\/아키텍트를 아우르는 AWS\/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요/
    );

    expect(Descr).toBeInTheDocument();
  });
});
