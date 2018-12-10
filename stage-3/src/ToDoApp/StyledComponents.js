import styled from 'styled-components';

export const ToDoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
`

export const SubHeading = styled.h4`
  color: #61dafb;
  font-size: 20px;
  font-family: 'Bree Serif', serif;
  font-weight: 100;
  margin: 10px auto;
`

export const Header = styled.header`
  background: #2980b9;
  height: 50px;
`

export const MainHeading = styled.h1`
  color: #fff;
  line-height: 50px;
  font-size: 32px;
  font-family: 'Bree Serif', serif;
  font-weight: 100;
`

export const Form = styled.form`
  min-height: 50px;
  background: #ced3d4de;
`

export const Input = styled.input`
  border: solid 1px #60c1da;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-weight: 600;
  margin: 0.85em 0;
  padding: 6px 24px;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  color: #60c1da;
  outline: none;
`
export const Button = styled(Input)`
  border: solid 1px #${(props)=> props.delete ? 'e90c27' : '60c1da'};
  background-color: #${(props)=> props.delete ? 'e90c27' : '60c1da'};
  color: #fff
`

// export const AddButton = styled.button`
//   border: solid 1px #60c1da;
//   border-radius: 4px;
//   color: #fff;
//   cursor: pointer;
//   display: inline-block;
//   font: inherit;
//   font-weight: 600;
//   margin: 0.85em 0;
//   padding: 6px 24px;
//   text-align: center;
//   vertical-align: middle;
//   background-color: #60c1da;
// `
// export const DeleteButton = styled.button`
//   border: solid 1px #e90c27;
//   border-radius: 4px;
//   color: #fff;
//   cursor: pointer;
//   display: inline-block;
//   font: inherit;
//   font-weight: 600;
//   margin: 0.85em 0;
//   padding: 6px 24px;
//   text-align: center;
//   vertical-align: middle;
//   background-color: #e90c27;
// `

export const ToDoList = styled.div`
  border: 1px solid #fff
`

export const ToDoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 2px auto;
`

export const Text = styled.p`
  color: #fff
`