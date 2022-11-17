import styled from 'styled-components';

export const Description = styled.div`
  width: 700px;
  border: 1px solid lightgrey;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  width: 350px;
  height: 370px;
`;

export const Name = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 45px;
  font-weight: 900;
`;

export const Tag = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: grey;
`;

export const Location = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  width: 700px;
  border: 1px solid lightgrey;
  background-color: #dcdcdc;
`;

export const StatsWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 60px;
`;

export const StatsLabel = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 400;
  color: grey;
`;

export const StatsQuantity = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: black;
`;
