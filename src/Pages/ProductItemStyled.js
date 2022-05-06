import styled from "styled-components";

export const Color = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0 5px;
`;
