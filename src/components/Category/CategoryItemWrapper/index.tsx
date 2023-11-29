import * as Styled from "./CategoryItemWrapper.styles";
import { CategoryProps } from "../../../pages/Category/Category.types";
import CategoryItem from "../CatgoryItem";
import { CategoryItemWrapperProps } from "./CategoryItemWrapper.types";

const CategoryItemWrapper = ({ data }: CategoryItemWrapperProps) => {
  return (
    <Styled.CategoryItemWrapper>
      {data[0].data.length !== 0 ? (
        data.map((pageData) => {
          return pageData.data.map((item: CategoryProps) => {
            return <CategoryItem key={item.id} data={item} />;
          });
        })
      ) : (
        <h1>검색 결과가 없습니다.</h1>
      )}
    </Styled.CategoryItemWrapper>
  );
};

export default CategoryItemWrapper;
