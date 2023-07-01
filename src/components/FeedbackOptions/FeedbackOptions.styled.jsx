import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const FeedbackBtn = styled(Button)`
  text-transform: none;
  color: #111;
  text-transform: capitalize;
  font-size: 16;
  line-height: 1.5;
  background-color: '#ffffff';
  border-color: #111;
  &:hover,
  :active,
  :focus {
    border-color: #111;
    box-shadow: 0 0 0 1px rgba(37, 50, 63, 0.5);
  }
`;
