import styled from 'styled-components';
import logoImage from '../../assets/images/bc-logo.png'

const SideBarTitle = styled.div`
  background-image: url(${logoImage});
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  height: 32px;
  justify-content: left;
  padding: 0 12px;
  margin: 24px 0;
  width: 32px;
`;

const SideBarItem = styled.div`
  width: 100%;
  height: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const ItemActiveTick = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${props => (props.bg ? props.bg : 'white')};
`;

const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 15px;
  background-position: center center;
  background-repeat: no-repeat;
  color: ${props => (props.color ? props.color : '#DEE1E7')};
  svg {
    height: 100%;
    width: 100%;
  }
`;

const ItemText = styled.span`
  font-size: 16px;
  color: ${props => (props.color ? props.color : '#DEE1E7')};
`;

export {
  SideBarTitle,
  SideBarItem,
  ItemContainer,
  ItemActiveTick,
  ItemIcon,
  ItemText
};