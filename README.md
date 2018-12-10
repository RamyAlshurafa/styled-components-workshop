# styled-components-workshop
Styled-components workshop for GSG community

## Stage-0 (Setting up)
In this stage we will setting up the core files for the workshop.
```bash
cd stage-0
npm i
npm start
```
## stage-1 (The old school)
In this stage we will build a simple `To Do` React app with ordinary css style.
you can find the source code [here](https://github.com/christiannwamba/scotch-react-todo).
```bash
cd stage-1
npm i
npm start
```
- we have created a `ToDoApp` directory inside `stage-1/src/` with `index.js` and `ToDoApp.css` files.
- we used `BEM` styling convention.

## stage-2 (switch to styled-components)
In this stage we will switch to `styled-components`.
```bash
cd stage-2
npm i
npm install styled-components
npm start
```
- Create `StyledComponents.js` file.
  In `StyledComponents.js` add `import styled from 'styled-components';`.
- Create new components using `styled-components` with same style in `ToDoApp.css`.
  for example:
  ```css
  .to-do-app {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
  }

  .to-do-app__heading--sub{
    color: #61dafb;
    font-size: 20px;
    font-family: 'Bree Serif', serif;
    font-weight: 100;
    margin: 10px auto;
  }
  ```
  would be:
  ```js
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
  ```
- In `ToDoApp/index.js`
  ```js
  import { ToDoWrapper, SubHeading, ... } from './StyledComponents'
  ```
- Replace the HTML tags with the new components.
  ```HTML
  <div className="to-do-app">
    <h4 className="to-do-app__heading to-do-app__heading--sub">Add your To-Do's here</h4>
  </div>
  ```
  ```HTML
  <ToDoWrapper>
    <SubHeading>Add your To-Dos here</SubHeading>
    ...
  </ToDoWrapper>
  ```
### Looks more prettier? :smirk:
  - Now you can delete `ToDoApp.css` :smiling_imp: