import { useState } from "react";

const content = [
  {
    tab:"Section 1",
    content:"I'm the content of Section 1"
  },
  {
    tab:"Section 2",
    content:"I'm the content of Section 2"
  }
];

const useTab = (initialIndex, tabArray)=>{
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  //tabArray가 제공되지 않으면 함수가 실행안되게 강제종료
  if(!tabArray || !Array.isArray(tabArray)) return;
  return {
    currentItem: tabArray[currentIndex],
    changeCurrentIndex: setCurrentIndex
  }
};

function App() {
  const {currentItem,changeCurrentIndex} = useTab(0,content);

  return (
    <div className="App">
      {content.map((section,idx)=><button onClick={()=>changeCurrentIndex(idx)}>{section.tab}</button>)}
      <div>
        {currentItem.content}
      </div>
    </div>
  );
}

export default App;