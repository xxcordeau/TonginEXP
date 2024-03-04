import styled from "styled-components";
import OptionPriceInputBox from "./optionPriceInputBox";
import { useEffect, useState } from "react";
import ChargeListComponent from "./chargeListComponent";
import { chargeData } from "../common/sampleData";

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0 0 0.7vw 0.7vw;
  background-color: white;
  box-shadow: 0 0.5vh 0.5vh rgba(0, 0, 0, 0.01),
    0 0.5vh 0.5vh rgba(0, 0, 0, 0.003);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 84vw;
  height: 100%;
  margin-top: 3vw;
  margin-bottom: 3vw;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 9vw;
`;

const PreviewBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4vw;
  font-weight: 500;
  width: 39vw;
  height: 6vw;
  border-radius: 0.6vw;
  border: 0.2vw solid black;
  &&:hover {
    cursor: pointer;
  }
`;

const ExportBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4vw;
  font-weight: 500;
  color: white;
  width: 39vw;
  height: 6vw;
  border-radius: 0.6vw;
  background-color: #ff7f3b;
  &&:hover {
    cursor: pointer;
  }
`;

const CBMArea = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 7vw;
  border-radius: 0.6vw;
  display: flex;
  justify-content: space-around;
`;

const CBMBox = styled.div`
  width: 40%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Title = styled.p`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 2.4vw;
  font-weight: 500;
`;

const Subtitle = styled.p`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.6vw;
  margin-top: 1vw;
`;

const PriceBox = styled.div`
  margin-left: 6vw;
  margin-right: 1vw;
  width: 12vw;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  /* border: 0.2vw solid black; */
  background-color: white;
  font-size: 2.4vw;
`;

const CalculatedListArea = styled.div`
  margin-top: 2vw;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChargeListArea = styled.div`
  width: 100%;
  display: flex;
`;

const PaymentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ListBox = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 7vw;
  border-radius: 0.6vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vw;
`;

const BalanceBox = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 16vw;
  border-radius: 0.6vw;
  display: flex;
  align-items: start;
  justify-content: center;
  margin-bottom: 2vw;
`;

const TotalChargeBox = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 12vw;
  border-radius: 0.6vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vw;
  border: 0.4vw solid #ff7f3b;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2vw;
`;

const Subtile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.6vw;
  margin-top: 1vw;
`;

const PriceInputArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 5vw;
  width: 30vw;
`;

const InputCBMBox = styled.div`
  display: flex;
  justify-content: center;
  width: 26vw;
  height: 100%;
  background-color: #dbdbdb;
  border-radius: 0.6vw;
  margin-right: 0.8vw;
  border: 0.2vw solid #dbdbdb;
`;

const TotalInputBox = styled.div`
  display: flex;
  justify-content: center;
  width: 26vw;
  height: 110%;
  background-color: #ff7f3b;
  border-radius: 0.6vw;
  margin-right: 0.8vw;
  border: 0.2vw solid #ff7f3b;
`;

const TotalInputNumber = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  color: white;
  font-size: 3vw;
  font-weight: 500;
  width: 80%;
`;

const InputCBMNumber = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  color: black;
  font-size: 2.2vw;
  font-weight: 400;
  width: 80%;
`;

const SubText = styled.p`
  font-size: 1.6vw;
  font-weight: 400;
  height: 3vw;
  display: flex;
  align-items: end;
  margin-top: 1vw;
`;

export default function ContractComponent(props: any) {
  const { detailData, articleDataList, optionData } = props;

  const [movingCBM, setMovingCBM] = useState<number>(0);
  const [discardCBM, setDiscardCBM] = useState<number>(0);
  const [optionTotalCharge, setOptionTotalCharge] = useState<number>(0);
  const [inputChargeList, setInputChargeList] = useState(chargeData);

  console.log("optionData>>>");
  console.log(optionData);

  // CBM계산을 위한 함수
  const calculateTotalCBM = (articleDataList: any) => {
    let movingSum = 0;
    let discardSum = 0;

    articleDataList.forEach((item: any) => {
      const articleData = item.articleData;
      articleData.forEach((article: any) => {
        // 운반, 경유는 이사물량으로 합계
        if (
          article.article.carryType === 0 ||
          article.article.carryType === 3
        ) {
          movingSum += article.article.cbm;

          // 폐기, 하역은 폐기물량으로 합계
        } else if (
          article.article.carryType === 1 ||
          article.article.carryType === 2
        ) {
          discardSum += article.article.cbm;
        }
        // 방치는 계산 안함
      });
    });

    setMovingCBM(movingSum);
    setDiscardCBM(discardSum);
  };

  // 옵션 품목 금액 합계 계산
  const calculateTotalOptionCharge = (optionData: any) => {
    let totalOptionCharge = 0;
    optionData.optionService.forEach((item: any) => {
      totalOptionCharge += item.optionPayment;
    });
    setOptionTotalCharge(totalOptionCharge);
  };

  useEffect(() => {
    calculateTotalCBM(articleDataList);
    calculateTotalOptionCharge(optionData);
  }, [articleDataList, optionData]);

  return (
    <ContentBox>
      <Wrapper>
        <InputArea>
          <CBMArea>
            <CBMBox>
              <Title>이사물량</Title>
              {/* <Subtitle>/Moving Quantity</Subtitle> */}
              <PriceBox>{movingCBM}</PriceBox>
              <Subtitle>CBM</Subtitle>
            </CBMBox>
            <CBMBox>
              <Title>폐기물량</Title>
              {/* <Subtitle>/Discard Quantity</Subtitle> */}
              <PriceBox>{discardCBM}</PriceBox>
              <Subtitle>CBM</Subtitle>
            </CBMBox>
          </CBMArea>
          <CalculatedListArea>
            <ListBox>
              <TitleArea>
                <Title>입주청소서비스 비용</Title>
                <Subtile>/CleaningService Charge</Subtile>
              </TitleArea>
              <PriceInputArea>
                <InputCBMBox>
                  <InputCBMNumber>
                    {
                      optionData.livingService.movingCleaningService
                        .servicePayment
                    }
                  </InputCBMNumber>
                </InputCBMBox>
                <SubText>원</SubText>
              </PriceInputArea>
            </ListBox>
            <ListBox>
              <TitleArea>
                <Title>정리수납서비스 비용</Title>
                <Subtile>/OrganizationService Charge</Subtile>
              </TitleArea>
              <PriceInputArea>
                <InputCBMBox>
                  <InputCBMNumber>
                    {
                      optionData.livingService.organizationStorageService
                        .servicePayment
                    }
                  </InputCBMNumber>
                </InputCBMBox>
                <SubText>원</SubText>
              </PriceInputArea>
            </ListBox>
            <ListBox>
              <TitleArea>
                <Title>탈취살균서비스 비용</Title>
                <Subtile>/DeodorizationService Charge</Subtile>
              </TitleArea>
              <PriceInputArea>
                <InputCBMBox>
                  <InputCBMNumber>
                    {
                      optionData.livingService.deodorizationService
                        .servicePayment
                    }
                  </InputCBMNumber>
                </InputCBMBox>
                <SubText>원</SubText>
              </PriceInputArea>
            </ListBox>
            <ListBox>
              <TitleArea>
                <Title>옵션 비용(분해/설치)</Title>
                <Subtile>/Option Charge</Subtile>
              </TitleArea>
              <PriceInputArea>
                <InputCBMBox>
                  <InputCBMNumber>{optionTotalCharge}</InputCBMNumber>
                </InputCBMBox>
                <SubText>원</SubText>
              </PriceInputArea>
            </ListBox>
          </CalculatedListArea>
          <ChargeListArea>
            <ChargeListComponent
              inputChargeList={inputChargeList}
              setInputChargeList={setInputChargeList}
            ></ChargeListComponent>
          </ChargeListArea>
        </InputArea>
        <ButtonArea>
          <PreviewBtn>견적서 미리보기</PreviewBtn>
          <ExportBtn>견적서 내보내기</ExportBtn>
        </ButtonArea>
      </Wrapper>
    </ContentBox>
  );
}