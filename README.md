<main style = "background: linear-gradient(to right,#c88ddd , #9ceafe); margin: 5px; padding: 10px">
<h1 style =" display: flex;flex-direction: column;
  align-items: center; padding-top: 20px">React 개인 과제</h1>

<h2>주제:  그룹 아티스트 팬레터함</h2>

**<p style="font-size:20px">필수 구현 사항**</p>

- 팬레터 CRUD 구현(작성, 조회, 수정, 삭제)
- 아티스브려 게시물 조회 기능 구현
- 원하는 아티스트에게 팬레터 등록 구현
- 팬레터 상세 화면 구현
- 상세화면에서 팬레터 내용 수정 구현
- 상세화면에서 팬레터 삭제 구현

---

## **<p style = "font-size:20px">프로젝트 진행 과정**</p>

**<p style = "font-size:18px">1. 프로젝트 셋업</p>**

- CRA boilerplate 로 프로젝트 생성

- pages, components, shared, assets 폴더 작성 및 필요 컴포넌트 사전 작성
- styled-components, react-router-dom 설치
- jsconfig.json (src 폴더 기준 절대경로 설정)

<br/>

**<p style = "font-size:18px">2. 브랜치 생성</p>**

- 배포: "main"
- 개발: "dev"
- 기능별: “props-drilling”, "context"

<br/>

**<p style = "font-size:18px">3. 브랜치별 기능 구현 </p>**
**3-1. props-drilling 브랜치**

- 리스트 UI 구현

- 팬레터 입력창 작성 후 등록 구현

- 팬레터 클릭 시 상세화면으로 이동 구현

- 상세화면 UI 구현

- 삭제 기능 구현

- 수정 기능 구현
  <br/>
  <br/>

**3-2. context 브랜치**

- 지역상태 및 전역 상태 관리로 분리
  <br/>

---

<br/>

**<p style="font-size:20px">느낀점**</p>

<br/>
<div style ="border: 1px solid white; border-radius: 5px; padding: 5px">
<p style ="font-size:18px">1. styled-components 장점 및 단점<p>

컴포넌트처럼 이름을 정할 수 있다는 점이 좋았습니다. 코드 읽는 입장에서 어떤 부분에 대한 코드인지 파악하기 좋았고 삼항연산자를 통해 조건에 다른 CSS 요소를 입힐 수 있어 편리하였다. 하지만, 네이밍도 너무 많이 쓰다 보면 현재 styled-components를 파악하기 어려워 모든 것을 styled-components로 만들려는 건 오히려 단점이 된다.
<br/>

---

<요약>

장점: 공통 요소의 스타일을 적용할 때 재사용할 수 있는 부분과 특정 조건에 따른 조건부 스타일링이 가능하다는 점이 styled-components의 장점으로 생각합니다.

<br/>
단점: styled-components를 너무 많이 사용하면 네이밍이 헷갈릴 수 있습니다.

</div>
<br/>
<div style ="border: 1px solid white; border-radius: 5px; padding: 5px">
<p style ="font-size:18px">2. context API 장점 및 단점</p>

props를 전달하는 과정에서 부모 컴포넌트에서 데이터를 전달받은 자식 컴포넌트가, 다시 하위 컴포넌트로 데이터를 전달해야 하는 props-drilling이 발생하였다. 이를 해결하기 위해 사용했던 context API는 전역으로 state를 관리하여 필요한 컴포넌트에게 state를 전달할 수 있어 편리하였고 또한, 여러 컴포넌트끼리 공유도 되어 복잡했었던 코드가 많이 축소된 걸 볼 수 있었다. 그렇다고 모든 state를 context에서 관리하기에는 context 자체 의존성이 너무 높아져 지역 state와 나누어 관리해야 한다고 생각한다.

---

<요약>  
 장점: props drilling으로 불편하게 관리하던 state를 context api로 리팩터링할 수 있었다.<br/>
단점: context의 의존성을 생각하여 지역 state와 전역 state를 나누어 관리하기

</div>
</main>
