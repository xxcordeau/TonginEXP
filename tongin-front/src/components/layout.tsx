import styled from "styled-components";
import CustomButton from "./common/customButton";
import { Outlet, useNavigate } from "react-router-dom";
import UserIcon from "./icon/userIcon";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
  background-color: white;
  box-shadow: 1vw 1vw 1vw 1vw #adadad10;
`;

const Image = styled.img.attrs({})`
  margin-left: 2vh;
  width: 3.6vh;
  height: 3.6vh;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vh;
  height: 3.4vh;
  font-size: 2vh;
  font-weight: 600;
  color: #ff7f3b;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 8vh;
  height: 4vh;
`;
const MidBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vh;
  height: 4vh;
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 10vh;
  height: 4vh;
`;
const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2vw;
  color: #545454;
`;

const MyPageText = styled.div``;
const HomeHeader = () => {
  const navigate = useNavigate();

  const logout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("loginUser");
      navigate("/login");
    }
  };

  const goHome = () => {
    navigate("/");
  };
  const goProfile = () => {
    navigate("profile");
  };

  return (
    <>
      <Header>
        <LeftBox onClick={goHome}>
          <Image
            src="../img/tongin_logo.png"
            alt="로고 이미지"
            width={"10vw"}
            height={"10vw"}
          />
        </LeftBox>
        <MidBox>
          <Title>전자계약시스템</Title>
        </MidBox>
        <RightBox>
          <MyPage onClick={goProfile}>
            <UserIcon width={"3vw"} fill={"#545454"} />
            <MyPageText>{"내 정보"}</MyPageText>
          </MyPage>

          {/* <CustomButton
            onClick={logout}
            width={"6vh"}
            height={"3.2vh"}
            size={"1.2vh"}
            radius={"0.4vh"}
            text={"로그아웃"}
          ></CustomButton> */}
        </RightBox>
      </Header>
    </>
  );
};
export default function Layout() {
  return (
    <>
      <HomeHeader />
      <Outlet></Outlet>
    </>
  );
}
