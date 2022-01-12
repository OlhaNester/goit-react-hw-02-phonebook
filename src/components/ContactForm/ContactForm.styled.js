import styled from 'styled-components';

export const Form = styled.div`
padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 10px 2px rgba(37, 23, 1, 0.2);
  :not(:last-child) {
  margin-bottom: 20px}`

export const Label = styled.label`
  margin-bottom: 15px;
  margin-left: 15px;
  font-weight: 700;
  font-size: 22px;
  color: rgb(105, 46, 3);`

export const Input = styled.input`
 margin-left: 15px;`



