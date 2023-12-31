import { render, screen } from "@testing-library/react";
import { createWrapper } from "../../../test/test.utils";
import userEvent from "@testing-library/user-event";
import CategoryItem from "./";

const testData = {
  id: String(53096),
  name: "비진도 바다이야기 펜션",
  address: "경상남도 통영시 한산면 외항길 78",
  phoneNumber: "055-642-6171",
  type: 4,
  wishCount: 644,
  thumbnailUrl:
    "https://res.cloudinary.com/dtf6uf7vi/image/upload/v1700183654/Home/testid.jpg",
  lowest_price: 488,
  isWish: true,
  categoryParking: 1,
  categoryCooking: 1,
  categoryPickup: 1,
  viewCount: 707,
  checkIn: "18:00",
  checkOut: "12:00",
  infoDetail: "통영 바다를 한눈에 담은 펜션",
  room_count: 5,
};

describe("CategoryItem Test", () => {
  test("CategoryItem", () => {
    if ("IntersectionObserver" in window) {
      const wrapper = createWrapper();
      render(<CategoryItem data={testData} />, { wrapper });
    }
  });

  test("카테고리 아이템을 누르면 해당 숙소의 상세페이지로 이동합니다.", () => {
    if ("IntersectionObserver" in window) {
      const router = jest.fn();
      const user = userEvent;
      const wrapper = createWrapper();

      render(<CategoryItem data={testData} />, { wrapper });

      const button = screen.getByTestId("individual-item");
      user.click(button);

      expect(router).toHaveBeenCalledWith(testData.id);
    }
  });

  test("알록달록한 카테고리 아이콘을 누르면 해당 카테고리의 숙소만 보여줍니다.", () => {
    if ("IntersectionObserver" in window) {
      const wrapper = createWrapper();
      render(<CategoryItem data={testData} />, { wrapper });

      const button = screen.getByTestId("category-parking");
      userEvent.click(button);

      expect(screen.getByTestId("category-parking")).toHaveStyle(
        "background-color: #ff6b6b",
      );
    }
  });
});
