import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListComponent from "./listComponent";
import API from "../../API/API";
import HomeSearchComponent from "../common/homeSearchComponent";

const SearchContainer = styled.div`
  width: 90vw;
  height: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TabMenu = styled.ul`
  // 탭 메뉴들 포함하고 있는 영역
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-top: 10px;
  width: 100%;
  height: 5vw;
  :hover {
    cursor: pointer;
  }
  .submenu {
    // 각 탭하나당 CSS
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17vw;
    height: 100%;
    padding: 3vw;
    font-size: 2vw;
    transition: 0.2s;
    border-radius: 0.4vw 0.4vw 0px 0px;
    background-color: #ebebeb;
    color: black;
  }

  .focused {
    background-color: #ff7f3b;
    color: white;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 0.6vw 0.6vw;
  /* background-color: white; */
  padding: 1vw 0 1vw 0;
`;

// 견적리스트 탭
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
`;

export default function TabComponent() {
  const [receiptList, setReceiptList] = useState<any[]>([]); // receipt list
  const [currentTab, setCurrentTab] = useState(0); // current tab
  const [invoiceList, setInvoiceList] = useState<any[]>([]); // quotation list
  const [uncontractedList, setUncontractedList] = useState<any[]>([]); // uncontracted list
  const [contractList, setContractList] = useState<any[]>([]); // contract list
  const [worklist, setWorklist] = useState<any[]>([]); // work list

  const menuArr = [
    { name: "견적리스트", content: "견적리스트 영역" },
    { name: "미계약리스트", content: "미계약 리스트 영역" },
    { name: "계약리스트", content: "계약 리스트 영역" },
    { name: "작업리스트", content: "작업리스트 영역" },
    { name: "전체보기", content: "전체리스트 영역" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginUser = JSON.parse(localStorage.getItem("loginUser") || "{}");
        const requestParam = {
          headers: {
            empCod: loginUser.empCod,
          },
        };
        const response = await API.get("/receipt/list", requestParam);
        const data = response.data.receiptList;
        setReceiptList(data);
      } catch (error) {
        console.error("Error fetching receipt list:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateLists = () => {
      setInvoiceList(
        receiptList.filter((content) =>
          ["11", "12", "13"].includes(content.statusCode)
        )
      );
      setUncontractedList(
        receiptList.filter((content) =>
          ["14", "21"].includes(content.statusCode)
        )
      );
      setContractList(
        receiptList.filter((content) => content.statusCode === "22")
      );
      setWorklist(
        receiptList.filter((content) =>
          ["31", "32", "41"].includes(content.statusCode)
        )
      );
    };

    updateLists();
  }, [receiptList]);

  const onSearchInputFocus = () => {
    setCurrentTab(4); // "전체보기" 탭으로 설정
  };

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <>
      <SearchContainer>
        <HomeSearchComponent onFocus={onSearchInputFocus} />
      </SearchContainer>
      <TabMenu>
        {menuArr.map((item, index) => (
          <li
            key={index}
            className={index === currentTab ? "submenu focused" : "submenu"}
            onClick={() => selectMenuHandler(index)}
          >
            {item.name}
          </li>
        ))}
      </TabMenu>
      <ContentBox>
        {currentTab === 0 && (
          <ListBox>
            <ListComponent currentList={invoiceList} />
          </ListBox>
        )}
        {currentTab === 1 && (
          <ListBox>
            <ListComponent currentList={uncontractedList} />
          </ListBox>
        )}
        {currentTab === 2 && (
          <ListBox>
            <ListComponent currentList={contractList} />
          </ListBox>
        )}
        {currentTab === 3 && (
          <ListBox>
            <ListComponent currentList={worklist} />
          </ListBox>
        )}
        {currentTab === 4 && (
          <ListBox>
            <ListComponent currentList={receiptList} />
          </ListBox>
        )}
      </ContentBox>
    </>
  );
}
