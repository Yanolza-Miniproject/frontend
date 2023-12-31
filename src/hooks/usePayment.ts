import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { authInstance } from "./useAxios";
// 결제 생성
export const usePayment = () => {
  return useMutation({
    mutationFn: (orderId: number) => {
      return authInstance.post(`/orders/${orderId}/payments`);
    },
  });
};

//결제 목록 불러오기
export const useGetMyOrder = () => {
  return useQuery({
    queryFn: () => authInstance.get("/payment"),
    queryKey: ["payment"],
  });
};

// 결제 목록 불러오기(무한스크롤)
export const useGetMyOrderInfinite = () => {
  return useInfiniteQuery({
    queryKey: ["payment"],
    queryFn: ({ pageParam = 1 }) =>
      authInstance.get(`/payment?page=${pageParam}&pageSize=20`),
    getNextPageParam: (lastPage, allPages) => {
      // 만약 더 불러올 페이지가 있다면 페이지 번호를 반환함
      return lastPage.data.length === 20 ? allPages.length + 1 : undefined;
    },
    // initialPageParam 속성 추가
    initialPageParam: 1,
  });
};

// 주문 취소
export const useDeleteOrder = () => {
  return useMutation({
    mutationFn: (orderId: number) => {
      return authInstance.delete(`/orders/${orderId}`);
    },
  });
};
