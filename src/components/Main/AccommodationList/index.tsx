import * as Styled from "./AccommodationList.styles";
import HeartClick from "../../Category/HeartClick";
import {
  AccommodationData,
  AccommodationListProps,
} from "./AccommodationList.types";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { random } from "lodash";
import formatNumber from "../../../utils/formatNumber";
import Empty from "../../../assets/image/empty.png";

export const AccommodationList = ({
  accommodations,
  title,
  isRandomAccomData,
}: AccommodationListProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  //img empty set
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = Empty;
  };

  return (
    <>
      <Styled.Title>{title}</Styled.Title>
      <Styled.AccomList
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: random(0.4, 1.2),
          delay: 0.1,
          ease: "easeInOut",
        }}
        ref={ref}
        isRandomAccomData={isRandomAccomData}
      >
        {accommodations?.map((item: AccommodationData) => (
          <Styled.ItemContainer key={item.id}>
            <Styled.ItemLink to={`/detailList?accommodation-id=${item.id}`}>
              <Styled.ItemPicture>
                <img
                  src={`${item.thumbnailUrl}`}
                  alt={item.name}
                  onError={handleError}
                />
              </Styled.ItemPicture>

              <Styled.ItemInfo>
                <Styled.ItemInfoFirstColumn>
                  <h3 className="item-name">{item.name}</h3>
                  {item.lowest_price ? (
                    <h3 className="item-price">
                      ₩{formatNumber(item.lowest_price)}
                      원부터
                    </h3>
                  ) : (
                    <h3 className="item-price">가격 정보 없음</h3>
                  )}
                </Styled.ItemInfoFirstColumn>
                <Styled.ItemInfoSecondColumn>
                  <HeartClick
                    likes={item.wishCount}
                    likesClicked={item.isWish}
                    accommodationId={String(item.id)}
                  />
                </Styled.ItemInfoSecondColumn>
              </Styled.ItemInfo>
            </Styled.ItemLink>
          </Styled.ItemContainer>
        ))}
      </Styled.AccomList>
    </>
  );
};
