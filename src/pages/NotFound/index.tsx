import * as Styled from "./NotFound.styles";
import NotFoundArrow from "../../assets/svg/notfound1.svg";
import NotFoundGps from "../../assets/svg/notfound2.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <Styled.Container>
      <Styled.IconWrapper>
        <img src={NotFoundGps} alt="page-not-found" className="gps-icon" />
        <img src={NotFoundArrow} alt="page-not-found" className="arrow-icon" />
      </Styled.IconWrapper>
      <Styled.TextWrapper>
        <span className="main-text">🥲 헉.. 숙소를 찾을 수 없어요!</span>
        <span className="text">다른 도움이 필요하세요?</span>
        <div className="text-btn">
          <button onClick={handleGoBack}>뒤로가기</button>
          <a href="/search">
            <button>다시 검색하기</button>
          </a>
        </div>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default NotFound;
