
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  height: 120px;
  width: 400px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 15px;
  padding: 15px;
  background: white;
  box-shadow: 2px 1px 3px #e0e5ec;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Text = styled.div`
  position: relative;
  margin-bottom: 15px;
  height: ${props => props.height && '1.6em'};
  font-size: ${props => (props.size && props.size) || '16px'};
  font-weight: ${props => (props.weight && props.weight) || ''};
  color: ${props => (props.color && props.color) || '#9D9FB0'};
  overflow: hidden;
`;

const FAB = styled.div`
  display: flex;
  height: 32px;
  margin-top: -50px;
  border-radius: 8px;
  float: right;
  color: white;
  box-shadow: 4px 4px 10px #c9d8db;
  background-color: #2879ff;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  padding: 0 8px;
`;

const Separator = styled.hr`
  position: relative;
  height: 2px;
  margin: 10px 0;
  background: #f2f4f8;
  border: none;
`;

const Button = styled.div`
  display: flex;
  width: 64px;
  padding: 5px;
  margin-right: 5px;
  float: right;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 10px;
  border: 2px solid #2879ff;
  color: #2879ff;
  margin-top: -50px;
  cursor: pointer;
  :hover {
    background: #2879ff;
    color: white;
    box-shadow: 2px 0 7px #c9d8db;
  }
`;

export { Container, Content, Text, FAB, Separator, Button };