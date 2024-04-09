import styled, { css } from "styled-components";

const Wrapper = styled.div<{ index: number }>`
  height: 2.1vw;
  display: flex;
  align-items: center;
  border-bottom: 0.1vw solid gray;
  ${(props) =>
    props.index % 2 &&
    css`
      background-color: #f4f4f4;
    `}
`;

const Wrapper2 = styled.div<{ index: number }>`
  height: 2.1vw;
  display: flex;
  align-items: center;
  border-top: 0.12vw solid gray;
  ${(props) =>
    props.index % 2 &&
    css`
      background-color: #f4f4f4;
    `}
`;

const KorNameBox = styled.div`
  width: 54%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-weight: 500;
`;
const EngNameBox = styled.div`
  width: 46%;
  height: 1vw;
  display: flex;
  justify-content: start;
  align-items: end;
  border-left: 0.1vw solid gray;
  padding-left: 0.5vw;
  font-size: 0.6vw;
  font-weight: 100;
`;

export default function ContractProductNameComponent(props: any) {
  const { articleDataList } = props;
  return (
    <>
      {articleDataList.map((item: any, index: number) => {
        return (
          <Wrapper key={index} index={index}>
            <KorNameBox>{item.article.articleName}</KorNameBox>
            <EngNameBox>{item.article.articleNameEng}</EngNameBox>
          </Wrapper>
        );
      })}
      {articleDataList.length === 14 ? (
        <>
          <Wrapper index={articleDataList.length}>
            <KorNameBox></KorNameBox>
            <EngNameBox></EngNameBox>
          </Wrapper>
          <Wrapper2 index={articleDataList.length + 1}>
            <KorNameBox>소계</KorNameBox>
            <EngNameBox>Total</EngNameBox>
          </Wrapper2>
        </>
      ) : (
        <Wrapper2 index={articleDataList.length}>
          <KorNameBox>소계</KorNameBox>
          <EngNameBox>Total</EngNameBox>
        </Wrapper2>
      )}
    </>
  );
}
