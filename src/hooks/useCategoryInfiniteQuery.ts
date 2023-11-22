import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCatgory } from "../api/Category";

export const useCategoryInfiniteQuery = (region = 0, type = 99) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["category"],
    queryFn: ({ pageParam }) => fetchCatgory({ pageParam, region, type }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.data.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });

  return { data, fetchNextPage, hasNextPage, isLoading };
};
