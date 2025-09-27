## 2주차 React 알아보기 <이론>
- 키워드: 
SPA (Single Page Application),User Interface Library ,Functional Component (함수형 컴포넌트), Virtual DOM, 동시성 렌더링

- react가 렌더링되는 시점
컴포넌트의 state가 변경되었을 때,
컴포넌트가 상속받은 props가 변경되었을 때,
부모 컴포넌트가 리렌더링이 된 경우 자식 컴포넌트는 모두 리렌더링

- React의 일반적인 폴더 구조 </br>
```
ohtani-app/ // 앱의 이름
└── src/
    ├── assets/ // 이미지, 폰트, 스타일 파일(CSS, SCSS) 등 정적 자원을 관리합니다.
    │   ├── images/
    │   │   └── logo.png
    │   └── styles/
    │   │   └── global.css
    │   ├── fonts/
    │        └── custom-font.woff2
    ├── components/  // 재사용 가능한 UI 컴포넌트를 보관합니다. 
    │   ├── Button.tsx
    │   └── Modal.tsx
    ├── pages/ // 라우터(3주차 학습 내용)와 연계하여, 페이지 단위로 분리합니다.
    │   ├── Home.tsx
    │   └── About.tsx
    ├── hooks/ // 공통 로직, 상태 관리 로직을 캡슐화하여 재사용성을 높입니다.
    │   └── useAuth.ts
    │   └── useCustomFetch.ts
    ├── utils/ // 여러 곳에 재사용 가능한 유틸리티 함수와 헬퍼 함수 (날짜 포맷팅, 데이터 가공)
    │   └── formatDate.ts
    ├── apis/ // 외부 API 호출 및 통신 로직을 관리 REST API 엔드포인트 호출 함수 등.
    │   └── movie.ts
    ├── types/ // 타입스크립트의 인터페이스, 타입 별칭, 기타 타입 정의를 저장합니다. (API 요청 / 응답에 대한 타입)
    │   └── movie.ts
    ├── enums/ // 열거형(enum)을 정의하여 상수 값을 관리합니다. (사용자 역할, 상태 코드 등)
    │   └── userRoles.ts
    ├── App.tsx
    └── index.tsx
```
</br>

-typescript에서는 js와 달리, props의 타입을 정해주어야 합니다.
인터페이스로 이 타입을 지정하는데, 그 페이지에서만 쓰인다면 해당 페이지에서 정의해줘도 되지만 자주 쓰이는 경우 types폴더에 분리해주는 것도 좋습니다.

-TypeScript는 useState의 초기값을 보고 자동으로 타입을 추론합니다.
하지만 제네릭을 직접 명시하면 초기값 없이도 타입을 지정할 수 있고, 더 명확한 타입 제어가 가능합니다.</br>
```const [value, setValue] = useState<string | null>(null);```
</br>

-React는 상태를 즉시 업데이트하지 않고, 함수를 실행할 당시의 상태를 기억해 두는 렉시컬 환경(Lexical Environment)이라는 것을 사용합니다. 

```</br>
// setState는 두가지 방식으로 활용할 수 있다.

// 1. 한번에 값을 업데이트 (batch 방식)
// 16ms동안 변경된 값은 한번에(배치) 변경하기 때문에 n번 사용해도 +1만 됨
setCount(count + 1);

// 2. 이전 상태 값을 인자로 전달하여 업데이트 (prev라는 이름은 자유롭게 변경 가능);
// 이전 상태값을 인자로 전달하기 때문에 n번 사용하면 +n번 됨
setCount(prev => prev + 1);
```
</br>

-얕은 복사, 깊은 복사
자바스크립트에서 얕은 복사를 하게 되면 해당 객체의 주소를 참조하기 때문에, 원본값을 변경할 수 있습니다. 하지만, 실제 코드에서 원본값이 변경되는 경우는 중첩 객체뿐입니다.
1)중첩 객체없이 스프레드 연산자를 사용하는 경우</br>
```
const [person, setPerson] = useState({
  name: "김용민",
  age: 26,
  nickname: "매튜"
});

const newPerson = {...person}; // 얕은 복사
newPerson.nickname = "야호";

console.log(person.nickname); // 여전히 "매튜" 임을 확인할 수 있다.
```
</br>
2) 중첩 객체를 사용한 경우
</br>
```
const [person, setPerson] = useState({
  name: "이름",
  address: { city: "서울" } // 중첩 객체
});

const newPerson = { ...person }; // 얕은 복사
newPerson.address.city = "부산";

console.log(person.address.city); // "부산" (원본도 같이 바뀜!)
```
</br>

3) 깊은 복사는 객체 내부의 중첩된 모든 값까지 **완전히 새로운 복사본**을 만드는 방식입니다. 이 경우, 복사본을 수정해도 **원본 객체에는 전혀 영향이 없습니다.**

깊은 복사는 **재귀적으로** 객체의 모든 속성을 복사해야 하므로, 직접 구현하거나 `lodash`와 같은 라이브러리의 `cloneDeep`을 활용하거나, **`JSON 방식을 이용`**해서 **`깊은 복사`**를 진행합니다.
</br>
```
const newPersonDeep = JSON.parse(JSON.stringify(person)); // 깊은 복사
```
</br>

- useState에서 절대 하지 말아야 할 실수 3가지
https://www.youtube.com/watch?v=Rl6H2MyRBUk

</br>
```
const [count, setCount] = useState(heavyComputation());
```
</br>
heavyComputation() 즉시 실행하기 때문에 useState가 실행될때마다 heacyComputation이 샐행됩니다. React가 컴포넌트를 렌더링할 때마다 실행되는 것이기 때문에 위와 같은 방식보다는 lazy initialization을 적용하는 것이 좋습니다.
</br>
```
const [count, setCount] = useState(() => heavyComputation());
```
</br>
</br>
```
const [count, setCount] = useState(heavyComputation);
```
</br>
heavyComputation 괄호 없이 함수 이름만 전달하면 REact가 초기 state를 계산할때만 해당 함수를 호출합니다. 

- React의 useContext는 전역 상태 관리를 도와주는 훅입니다.
컴포넌트간 props drilling 없이 데이터를 공유할 수 있습니다.
기존 방식으로 부모 → 자식 → 손자 컴포넌트로 데이터를 전달하려면, props를 계속 내려줘야 합니다.(props-drilling)