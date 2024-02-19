import React, { createContext, useState } from "react";
import fakeData from "fakeData.json";

export const LatterContextProvider = createContext(null);

//index.js에서 LatterContext 안에 있는 요소를 매개변수인 ({children})으로 가져온다.
//children: App
function LatterContext({ children }) {
  const [data, setData] = useState(fakeData);
  return (
    //Context.provider를 사용하여 props로 전달
    //{children} : LatterContext에서 받아온 children을 provider의 범위로 지정
    <LatterContextProvider.Provider value={{ data, setData }}>
      {children}
    </LatterContextProvider.Provider>
  );
}

export default LatterContext;
