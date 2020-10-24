import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SideBarTitle,
  SideBarItem,
  ItemContainer,
  ItemIcon
} from './SideBar.styled';

import Constants from '../../utils/Constants';

function SideBar({ handler }) {
  const [toggleStatus, setToggleStatus] = useState([
    true,
    ...new Array(Constants.SideBarItems.length - 1).fill(false)
  ]);

  return (
    <>
      <SideBarTitle></SideBarTitle>
      {Constants.SideBarItems.map((val, i) => {
        const key = i;
        return (
          <SideBarItem key={key}>
            <ItemContainer
              bg={toggleStatus[i] && '#5233B6'}
              onClick={() => {
                handler(val.text);
                setToggleStatus(status => {
                  return status.map((s, idx) => i === idx);
                });
              }}>
              <ItemIcon color={(toggleStatus[i] && '#A1A3B2') || undefined}>
                {val.icon}
              </ItemIcon>
            </ItemContainer>
          </SideBarItem>
        );
      })}
    </>
  );
}

SideBar.propTypes = {
  handler: PropTypes.func
};

SideBar.defaultProps = {
  handler: () => {}
};
export default SideBar;