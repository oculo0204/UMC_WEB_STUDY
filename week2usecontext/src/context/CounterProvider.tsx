import { createContext, useContext, useState, type ReactNode } from 'react';

// Context 타입 정의
interface CounterContextType {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

// Context 생성
export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

// Provider 컴포넌트
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider
      value={{ count, handleIncrement, handleDecrement }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// 커스텀 훅
export const useCount = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(
      'useCount는 반드시 CounterProvider 내부에서 사용되어야 합니다.'
    );
  }
  return context;
};
