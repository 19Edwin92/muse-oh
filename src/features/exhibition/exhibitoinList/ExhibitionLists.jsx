import React, { useState } from "react";
import { useInterserctionObserver } from "../../../hooks/artgram/newArtgram/useIntersectionObserver";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  HeaderCategorySelect,
  HeaderTagSelect,
  HeaderWhenSelect,
  HeaderWhereSelect,
} from "./ExhibitionHeaderSelect";
import { useGetExhibitioninfinity } from "../../../hooks/exhibition/useGetExhibitioninfinity";

function ExhibitionLists() {
  //헤더
  const navigator = useNavigate();
  const [whenVisible, setWhenVisible] = useState(false);
  const [whereVisible, setWhereVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const selectHandler = (e) => {
    const { name } = e.target;
    if (name === "when") {
      setWhenVisible(!whenVisible);
      setWhereVisible(false);
      setCategoryVisible(false);
      setTagVisible(false);
    } else if (name === "where") {
      setWhereVisible(!whereVisible);
      setWhenVisible(false);
      setCategoryVisible(false);
      setTagVisible(false);
    } else if (name === "category") {
      setCategoryVisible(!categoryVisible);
      setWhereVisible(false);
      setWhenVisible(false);
      setTagVisible(false);
    } else if (name === "tag") {
      setTagVisible(!tagVisible);
      setCategoryVisible(false);
      setWhereVisible(false);
      setWhenVisible(false);
    }
  };
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetExhibitioninfinity();
  let merged = data?.pages.length > 0 ? [].concat(...data?.pages) : [];
  const { ref } = useInterserctionObserver(fetchNextPage);
  console.log("merged", merged);
  return (
    <ExhibitionWrap>
      <ExhibitionHeader>
        <HeaderTitle>전시</HeaderTitle>
        <HeaderFilterWrap>
          <FilterSelect name="when" onClick={selectHandler}>
            When
            <SelectBox visible={whenVisible}>진행중</SelectBox>
          </FilterSelect>
          <FilterSelect name="where" onClick={selectHandler}>
            Where
            <SelectBox visible={whereVisible}>
              <HeaderWhereSelect />
            </SelectBox>
          </FilterSelect>
          <FilterSelect name="category" onClick={selectHandler}>
            Category
            <SelectBox visible={categoryVisible}>
              <HeaderCategorySelect />
            </SelectBox>
          </FilterSelect>
          <FilterSelect name="tag" onClick={selectHandler}>
            Tag
            <SelectBox visible={tagVisible}>
              <HeaderTagSelect />
            </SelectBox>
          </FilterSelect>
          <FilterInputWrap>
            <FilterSearch Placeholder="검색"></FilterSearch>
            <FilterButton>검색하기</FilterButton>
          </FilterInputWrap>
        </HeaderFilterWrap>
      </ExhibitionHeader>
      {isLoading || isError ? (
        <div>로딩 중...</div>
      ) : (
        merged.map((item) => (
          <ExhibitionItem key={item.exhibitionId}>
            <ImageBox src={item.postImage} />
            <ExhibitionInfoBox>
              <ExhibitionDate>
                {item.startDate.slice(2, 10).replace(/-/g, ".") +
                  " - " +
                  item.endDate.slice(2, 10).replace(/-/g, ".")}
              </ExhibitionDate>
              <ExhibitionTitleWrap>
                <ExhibitonTitle>{item.exhibitionTitle}</ExhibitonTitle>
                <ExhibitonSecondTitle>부제목 입니다</ExhibitonSecondTitle>
              </ExhibitionTitleWrap>
            </ExhibitionInfoBox>
            <ExhibitionInfoDetailBox>
              <ExhibitionDatailInfo>
                <DatailInfo>
                  <InfoBox>
                    <Info>
                      <span>●</span>
                      <div>
                        <div>장소</div>
                        <div>{item.location}</div>
                      </div>
                    </Info>
                    <Info>
                      <span>●</span>
                      <div>
                        <div>관람료</div>
                        <div>{item.entranceFee}</div>
                      </div>
                    </Info>
                  </InfoBox>
                  <InfoBox>
                    <Info>
                      <span>●</span>
                      <div>
                        <div>작가</div>
                        <div>{item.authorNickName}</div>
                      </div>
                    </Info>
                    <Info>
                      <span>●</span>
                      <div>
                        <div>작품수</div>
                        <div>{item.artWorkCnt}</div>
                      </div>
                    </Info>
                  </InfoBox>
                  {/* {item.location}
        {item.entranceFee}
        {item.authorNickName}
        {item.artWorkCnt} */}
                </DatailInfo>
                <ExhibitionHashTag>
                  {/* {item.tagName?.map((tag) => {
            return <span>{tag}</span>;
          })} */}
                  <span>#tagg</span>
                  <span>#tag</span>
                  <span>#tag</span>
                </ExhibitionHashTag>
              </ExhibitionDatailInfo>

              <ExhibitionMore
                onClick={() => {
                  navigator(`/exhibition/detail/${item.exhibitionId}`);
                }}
              >
                <span>M</span>
                <span>O</span>
                <span>R</span>
                <span>E</span>
              </ExhibitionMore>
            </ExhibitionInfoDetailBox>
          </ExhibitionItem>
        ))
      )}
      <HiddenRef
        ref={ref}
        children={hasNextPage ? "fetchNextPage요청" : "마지막페이지"}
      />
    </ExhibitionWrap>
  );
}

export default ExhibitionLists;

const HiddenRef = styled.div`
  margin-top: 10px;
  color: transparent;
`;
const ExhibitionWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
  padding: 0 76px;
  overflow: hidden;
`;
const Info = styled.div`
  width: 160px;
  display: flex;
`;
const InfoBox = styled.div`
  display: flex;
`;
const DatailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 300px;
`;
const ExhibitionHashTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const ExhibitonTitle = styled.span`
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
`;
const ExhibitonSecondTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
const Div = styled.div`
  background-color: #a6d6a6;
  font-size: 40px;
  height: 380px;
`;

const SelectBox = styled.div`
  z-index: 2;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 49px;
  display: ${({ visible }) =>
    visible ? "block" : "none"}; //버튼식으로 hidden,block 으로 껏키가능 select
`;

const ExhibitionHeader = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 48px;
`;

const HeaderFilterWrap = styled.div`
  display: flex;
  flex: 1;
  gap: 24px;
  background: #ffffff;
`;

const FilterSelect = styled.button`
  all: unset; // 모든 기본 스타일 초기화
  box-sizing: border-box;
  width: 200px;
  height: 49px;
  background: #ffffff;
  font-size: 18px;
  border-bottom: 1px solid #5b5b5b;
  padding: 12px 20px;
  position: relative;
  :hover {
    background-color: #f3f3f3;
  }
  /* cursor: pointer; */
`;

const FilterInputWrap = styled.div`
  flex: 1;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 4px;
  margin-left: 24px;
  position: relative;
`;

const FilterSearch = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 12px;
  border-radius: 4px;
`;

const FilterButton = styled.button`
  height: 100%;
  // background: inherit; //!부모의 속성을 따라가는
  background: transparent;
  font-size: 17px;
  font-weight: bold;
  padding: 0 12px;
  position: absolute;
  right: 0;
`;

const ExhibitionItem = styled.div`
  display: flex;
  box-sizing: border-box;
  font-size: 25px;
  height: 380px;
  background: #d9d9d9;
`;

const ImageBox = styled.img`
  width: 266px;
  height: auto;
  object-fit: cover;
`;

const ExhibitionInfoBox = styled.div`
  font-size: 1em; //!부모 따라가기 em이랑 rem
  max-width: 690px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
  position: relative;
`;

const ExhibitionDate = styled.p`
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;
  color: #5a5a5a;
`;

const ExhibitionTitleWrap = styled.div`
  gap: 6px;
  position: absolute;
  bottom: 63px;
  right: 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ExhibitionDatailInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px dashed gray;
  padding: 60px 80px;
  box-sizing: border-box;
`;

const ExhibitionMore = styled.div`
  display: flex;
  max-width: 76px;
  flex: 1;
  flex-direction: column;
  border-left: 1px dashed gray;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

const ExhibitionInfoDetailBox = styled.div`
  max-width: 569px;
  display: flex;
  flex: 1;
  flex-direction: row;
`;