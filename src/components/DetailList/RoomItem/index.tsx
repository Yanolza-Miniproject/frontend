import React, { useMemo } from "react";
import * as Styled from "./RoomItem.styles";
import formatNumber from "../../../utils/formatNumber";
import { RoomItemProps } from "./RoomItem.types";
import personIcon from "../../../assets/svg/person-icon.svg";
// import { formatDateToYYMMDD } from "../../../utils/formatDate";
import { formatDate } from "../../../utils/formatDate";
import { useLocation, useNavigate } from "react-router-dom";
import Empty from "../../../assets/image/empty_medium.png";

const RoomItem: React.FC<
  RoomItemProps & { checkInDate: Date; checkOutDate: Date }
> = ({ id, name, price, capacity, roomImages, RoomInventory, checkInDate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const accommodationId = queryParams.get("accommodation-id");

  const remainingInventory = useMemo(() => {
    if (!checkInDate || !RoomInventory) {
      return "데이터 없음";
    }

    const checkInDateString = formatDate(checkInDate);
    const inventoryData = RoomInventory.find(
      (inv) => inv.date === checkInDateString,
    );

    return inventoryData ? `${inventoryData.inventory}개` : "확인 불가";
  }, [checkInDate, RoomInventory]);

  const handleRoomClick = () => {
    navigate(`/detail?accommodation-id=${accommodationId}&room-id=${id}`);
  };

  //img empty set
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = Empty;
  };

  return (
    <Styled.ItemWrapper onClick={handleRoomClick}>
      <Styled.ImageContainer>
        <Styled.ItemImage
          src={roomImages}
          alt={`${name} 이미지`}
          onError={handleError}
        />
      </Styled.ImageContainer>
      <Styled.ItemDetails>
        <Styled.ItemName>{name}</Styled.ItemName>
        <Styled.CapacityPriceContainer>
          <Styled.CapacityContainer>
            <Styled.IconImage src={personIcon} alt="person 아이콘" />
            <Styled.ItemCapacity>최대 인원: {capacity}명</Styled.ItemCapacity>
          </Styled.CapacityContainer>
          <Styled.InventoryPriceContainer>
            <Styled.ItemInventory>
              남은 객실: {remainingInventory}
            </Styled.ItemInventory>
            <Styled.ItemPrice>₩{formatNumber(price)}</Styled.ItemPrice>
          </Styled.InventoryPriceContainer>
        </Styled.CapacityPriceContainer>
      </Styled.ItemDetails>
    </Styled.ItemWrapper>
  );
};

export default RoomItem;
