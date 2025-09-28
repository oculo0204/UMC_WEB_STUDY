StrictMode는 전체 파일 렌더링을 두번 실행하여
개발 모드에서 콘솔이 덜 찍힌다던가, 자잘한 오류가 발생하는 것을 막아주지만 굳이 쓸 필요는 없습니다.
src/App.tsx
src/App.css
index.html
localhost로 요청을 하면 vite dev server가 index.html를 가져와서 실행해줍니다. 아래처럼 root라는 빈 div 태그가 왔기 때문에 js를 요청하게 됩니다.
원래 브라우저는 .tsx 같은 걸 바로 이해 못하기 때문에  이렇게 나눠서 불러오는 식으로 동작하게 됩니다.
index.html </br>
```
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
```
</br>
실제 main.tsx를 보면 root라는 클래스이름의 div의 것을 불러오는 것을 알 수 있습니다. </br>
```
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
</br>
이런식으로 react같은 클라이언트 사이드 렌더링의 경우에는 처음에 모든 js를 불러오기 때문에 초기 렌더링이 느리다는 단점이 있습니다. next js와 같은 서버 사이드 렌더링의 경우에는 특정 일부 필요한 부분만 받아올 수 있어 각광받고 있습니다. 
---

main.tsx와 App.tsx가 분리되어 있는 이유는?
main.tsx는 앱의 진입점 역할을 하면 전역설정들을 담당합니다. 그 안에 있는 App.tsx는 애플리케이션의 화면 구조를 정의하는 컴포넌트로 이렇게 컴포넌트를 분리하면 유지보수가 쉽습니다.