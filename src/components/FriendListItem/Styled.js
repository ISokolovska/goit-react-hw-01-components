import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 2px solid green;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 25px;
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  background-color: green;
  border-radius: 50px;
`;
