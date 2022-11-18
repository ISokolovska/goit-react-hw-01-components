import styled from 'styled-components';
export const StatisticsWrapper = styled.section`
  margin-top: 30px;
  margin: 0 auto;
  width: 700px;
  border: 2px solid grey;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: baseline;
  padding: 0;
  margin: 0 auto;
  width: 700px;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  width: 175px;
  height: 150px;
`;

export const LabelStats = styled.span`
  font-weight: 900;
  margin-bottom: 25px;
  margin-top: 10px;
`;
