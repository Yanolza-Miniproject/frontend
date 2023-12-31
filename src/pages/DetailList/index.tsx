import BookingCalendar from "../../components/DetailList/BookingCalendar";
import CardList from "../../components/DetailList/CardList/index.tsx";
import ProductImage from "../../components/DetailList/ProductImage";
import ProductInfo from "../../components/DetailList/ProductInfo/index.tsx";
import ProductTitle from "../../components/DetailList/ProductTitle";
import RoomList from "../../components/DetailList/RoomList/index.tsx";
import { useGetAccommodationDetail } from "../../hooks/useDetailFetch.ts";
import { useLocation } from "react-router-dom";
import * as Styled from "./DetailList.styles.ts";
import HeartClick from "../../components/Category/HeartClick/index.tsx";

const DetailList = () => {
  scroll(0, 0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const accommodationId = queryParams.get("accommodation-id");

  const { data: accommodationDetail } = useGetAccommodationDetail(
    Number(accommodationId),
  );

  if (!accommodationDetail || !accommodationDetail.data) {
    return <div></div>;
  }

  return (
    <Styled.container>
      <Styled.Layout>
        <ProductImage image={accommodationDetail.data.data.thumbnailUrl} />
        <Styled.DetailsContainer>
          <Styled.HorizontalContainer>
            <ProductTitle
              type={accommodationDetail.data.data.type}
              name={accommodationDetail.data.data.name}
            />
            <HeartClick
              likes={accommodationDetail.data.data.wishCount}
              likesClicked={accommodationDetail.data.data.isWish}
              accommodationId={accommodationDetail.data.data.id}
            />
          </Styled.HorizontalContainer>
          <ProductInfo
            address={accommodationDetail.data.data.address}
            infoDetail={accommodationDetail.data.data.infoDetail}
            phoneNumber={accommodationDetail.data.data.phoneNumber}
            homepage={accommodationDetail.data.data.homepage}
            checkIn={accommodationDetail.data.data.checkIn}
            checkOut={accommodationDetail.data.data.checkOut}
          />
        </Styled.DetailsContainer>
      </Styled.Layout>
      <CardList
        parking={accommodationDetail.data.data.categoryParking}
        cooking={accommodationDetail.data.data.categoryCooking}
        pickup={accommodationDetail.data.data.categoryPickup}
      />
      <BookingCalendar />
      <RoomList rooms={accommodationDetail.data.data.rooms} />
    </Styled.container>
  );
};

export default DetailList;
