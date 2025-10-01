week2
tsx에 tailwind 적용해서 todolist 만들기

##tailwind 설치
1) 라이브러리 설치
npm install tailwindcss @tailwindcss/vite

2) vite.config.ts 파일에 아래 파일을 추가합니다.
</br>
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
</br>

3) index.css 상단에 아래 내용 추가
</br>
```
@import "tailwindcss";
```
</br>