import styled from 'styled-components';

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: inline-flex;
`;
const SideBarSection = styled.section`
  width: 80px;
  background-color: #271C6F;
  box-shadow: 3px 0 15px #e5e9f0;
`;

const ContentSection = styled.div`
  background-color: #F6F5FC;
  height: 100%;
  width: 24%;
`;

const MainSection = styled.div`
  background-color: #FFF;
  height: 100%;
  width: 100%;
`;

const SearchBarSection = styled.section`
  height: 38px;
  width: 256px;
  margin: 10px 0;
  padding: 0 20px;
`;

const ItemsGridSection = styled.section`
  height: calc(100% - 88px);
  width: calc(100% - 28px);
  padding: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    -webkit-appearance: none;
    display: none;
  }
`;

export {
  RootContainer,
  SideBarSection,
  ContentSection,
  MainSection,
  SearchBarSection,
  ItemsGridSection
};