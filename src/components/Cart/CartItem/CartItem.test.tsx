import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import CartItem from ".";
import calculateNightCount from "../../../utils/calculateNightCount";
import formatNumber from "../../../utils/formatNumber";

export const testData = {
  id: 1,
  accommodationName: "라마다 제주시티 호텔",
  roomUrl: "",
  roomName: "스위트 더블",
  price: 210000,
  numberOfGuests: 2,
  checkInAt: "2023-11-30",
  checkOutAt: "2023-12-02",
};

const createWrapper = () => {
  const queryClient = new QueryClient();

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const props = {
  item: testData,
  cart: [testData],
  select: [],
  setSelect: () => {},
  index: 0,
  estimatedPrice: [testData],
  setSelected: () => {},
  setEstimatedPrice: () => {},
  setCart: () => {},
};

describe("장바구니 페이지 개별 아이템 테스트", () => {
  test("아이템이 선택된 상태가 아니면 색상이 #ececec 이여야 한다.", async () => {
    render(<CartItem {...props} select={[false]} />, {
      wrapper: createWrapper(),
    });

    const checkbox = screen.getAllByRole("checkbox");
    expect(checkbox.length).toBe(1);

    const checkboxStyle = getComputedStyle(checkbox[0]);
    expect(checkboxStyle.borderColor).toBe("#ececec");
  });

  test("아이템이 선택된 상태면 색상이 #ff5100 이여야 한다.", async () => {
    render(<CartItem {...props} select={[true]} />, {
      wrapper: createWrapper(),
    });

    const checkbox = screen.getAllByRole("checkbox");
    expect(checkbox.length).toBe(1);

    const checkboxStyle = getComputedStyle(checkbox[0]);
    expect(checkboxStyle.borderColor).toBe("#ff5100");
  });

  test("아이템의 정보가 데이터에 맞게 표시되어야 한다.", async () => {
    render(<CartItem {...props} select={[true]} />, {
      wrapper: createWrapper(),
    });

    const name = screen.queryByText(`${testData.accommodationName}`);
    const type = screen.queryByText(`: ${testData.roomName}`);
    const number = screen.queryByText(`: ${testData.numberOfGuests}명`);
    const price = screen.queryByText(
      `₩${formatNumber(
        testData.price *
          calculateNightCount(testData.checkInAt, testData.checkOutAt),
      )}`,
    );

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
