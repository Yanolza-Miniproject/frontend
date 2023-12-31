import MyList from "../../components/MyPage/MyList/index";
import Header from "../../components/MyPage/Header/index";
import * as Styled from "./MyPage.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MyPage = () => {
  const token = sessionStorage.getItem("refreshToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token]);

  return (
    <Styled.Container>
      <Header />
      <MyList />
    </Styled.Container>
  );
};

export default MyPage;
