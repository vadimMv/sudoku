import styled from 'styled-components';

export const ButtonStart = styled.button`
  background:  "palevioletred" : "white";
  color:  "white" : "palevioletred";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color:white;
`;
export const MButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
export const HButton = styled(Button)`
  color: red;
  border-color: red;
`;
export const StyledTable = styled.table`
margin : auto;
tr:first-child td {
	border-top-color: black;
}
tr:nth-child(3n) td {
	border-bottom-color: black;
}
td {
	border: 1px solid lightgrey;
	height: 50px;
	width: 50px;
}
td:first-child {
	border-left-color: black;
}
td:nth-child(3n) {
	border-right-color: black;
}
`;
export const Wrapper = styled.section`
 margin:12px auto;
`;
export const Numbers = styled.div`
 padding: 0.5em;
 margin: 0.5em auto;
 border: 2px solid blue;
 color:blue;
 border-radius: 3px;
 width 33.33%;
 background-color:#8de2f7;
 display: flex;
 justify-content: space-around;
`;
export const Digit = styled.span`
 padding :5px;
 border: 1px solid blue;
 color:blue;
 width: 35px;
 height: 35px;
`;
export const PButton = styled(Button)`
  color: green;
  border-color: green;
`;
export const FButton = styled(Button)`
  color: blue;
  border-color: blue;
`;
export const HMButton = styled(Button)`
  color:${props => props.pr ? "white" : "blue"};
  border-color: blue;
  background: ${props => props.pr ? "blue" : "white"};
`;
export const Result = styled.div`
  width:66%;
  margin: 4rem auto;
`;
export const UndoButton = styled.button`
   border-radius: 50%;
   color: red;
   border-color: red;
  `;