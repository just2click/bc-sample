import React, { useState, useEffect } from 'react';

import SideBar from '../../components/SideBar';
import Search from '../../components/SearchBar';
import Grid from '../../components/Grid';

import Get from '../../api/Get';
import Constants from '../../utils/Constants';
import useSearch from '../../hooks/useSearch';

import {
  RootContainer,
  SideBarSection,
  ContentSection,
  ItemsGridSection,
  SearchBarSection,
  MainSection
} from './Main.styled';

Constants.FuseOptions.keys = ['name', 'title'];

function Main() {
  const [items, setItems] = useState({});
  const [dataType, setDataType] = useState();

  useEffect(() => {
    try {
      (async () => {
        const userData = await Get.userItems('repos');
        setItems(state => {
          const newState = { ...state };
          newState.repos = userData.data;
          return newState;
        });
        setDataType('repos');
      })();
    } catch (e) {
      console.log({ e });
    }
  }, []);

  const fetch = async what => {
    const split = what.split(' ');
    const type = split.reduce((acc, curr, i) => {
      return acc
        .concat(curr.toLowerCase())
        .concat(i !== split.length - 1 ? '_' : '');
    }, '');
    if (!items[type]) {
      const userData = await Get.userItems(type);
      const data = type === 'repos' ? userData.data : userData.data.items
      setItems(state => {
        const newState = { ...state };
        newState[type] = data;
        return newState;
      });
    }
    setDataType(type);
  };

  const { results, search, searchTerm, placeholder } = useSearch({
    data: items[dataType],
    placeholder: dataType,
    options: Constants.FuseOptions
  });

  return (
    <RootContainer>
      <SideBarSection>
        <SideBar handler={fetch} />
      </SideBarSection>
      <ContentSection>
        <SearchBarSection>
          <Search handler={e => search(e.target.value)} value={searchTerm} placeholder={placeholder} />
        </SearchBarSection>
        <ItemsGridSection>
          <Grid items={results} />
        </ItemsGridSection>
      </ContentSection>
      <MainSection>

      </MainSection>
    </RootContainer>
  );
}

export default Main;