// import React, { createContext } from "react";
// import { useState } from "react";

// export const HomeContextProvider = createContext(null);

// ////index.js에서 HomeContext 안에 있는 요소를 매개변수인 ({children})으로 가져온다.
// //children: App
// function HomeContext({ children }) {
//   const [selectedMember, setSelectedMember] = useState("");
//   return (
//     //Context.provider를 사용하여 props로 전달
//     //{children} : HomeContext에서 받아온 children을 provider의 범위로 지정
//     <HomeContextProvider.Provider value={{ selectedMember, setSelectedMember }}>
//       {children}
//     </HomeContextProvider.Provider>
//   );
// }

// export default HomeContext;
