// __tests__/index.test.jsx

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Banner from "../component/Banner";

describe("Banner", () => {
  it("배너가 렌더링되어야 한다.", () => {
    const { getByText } = render(<Banner />);

    const banner = getByText("Banner");

    expect(banner).toBeInTheDocument();
  });
});
