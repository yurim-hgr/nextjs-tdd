import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from ".";

describe("검색페이지 통합테스트", () => {
  it("검색어 입력후 엔터 키를 입력하면 검색된 앨범을 보여준다.", async () => {
    render(<Search />);
    // const inputBox = screen.getByRole("textbox");
    // //검색어 입력
    // fireEvent.change(inputBox, { target: { value: "아이유" } });
    // //API 호출
    // fireEvent.keyDown(inputBox, { key: "Enter" });
    // await waitFor(() => {
    //   //렌더링 결과 확인
    //   expect(screen.queryByText("조각집")).toBeInTheDocument();
    // });
  });
});
