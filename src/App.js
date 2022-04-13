import { useState } from "react";

const useInput = (initialValue, validator)=>{
  //true일때만 value값이 바뀌어야 한다.
  let willUpdate = true;
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: {value}
    } = event;
    //validator라는 함수가 넘어오면 그 함수에서 전달해주는 값에 따라
    //willUpdate가 변경되어야 한다.
    if(typeof validator === "function") willUpdate = validator(value);
    //willUpdate가 true일때만 input의 value를 바꾼다.
    if(willUpdate) setValue(value);
  }
  return { value, onChange };
}

function App() {
  //글자수가 10자 이하일때는 true를 리턴한다.
  const chkLen = (value) => value.length <= 10;
  const name = useInput("Mr.",chkLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" placeholder="Name" {...name} />
    </div>
  );
}

export default App;