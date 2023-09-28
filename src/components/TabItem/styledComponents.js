import styled from 'styled-components'

export const Tab = styled.li``

export const LanguageButton = styled.button`
  background-color: ${props => (props.isActive ? '#db1c48' : '#ffffff')};
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  cursor: pointer;
  border: 2px solid #db1c48;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 8px 20px 8px 20px;
  border-radius: 20px;
  font-size: 15px;
`
