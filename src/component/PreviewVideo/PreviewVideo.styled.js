import styled from "styled-components";

export const ListContainer = styled.ul`
  list-style: none;
  position: absolute;
  right: 5px;
`;

export const ListItem = styled.div`
  ul {
    list-style: none;
    margin: 0;
    margin: 8px 0;

    li {
      padding: 8px 12px;

      background-color: #c8d6e5;
      :nth-of-type(even) {
        background-color: #576574;
        color: #fff;
      }
    }
  }
  .path {
    color: #10ac84;
  }
`;

export const ListTitleItem = styled.span`
  margin-right: 5px;
`;
