import { createContext, ReactNode, useCallback, useState } from "react";

type CalcContextData = {
  number1: string;
  number2: string;
  operator: '+' | '-' | 'x' | '/';
  total: number;
  insetNumberOne: (number: string) => void;
  insetOperator: (operation: '+' | '-' | 'x' | '/') => void;
  insetNumberTwo: (number: string) => void;
  calc: () => void;
  reset: () => void;
  delCharacter: () => void;
  resetTotal: () => void;
}

export const CalcContext = createContext({} as CalcContextData);

type CalcContextProviderProps = {
  children: ReactNode;
}

export function CalcContextProvider({ children }: CalcContextProviderProps) {
  const [number1, setNumber1] = useState<string>(null);
  const [number2, setNumber2] = useState<string>(null);
  const [operator, setOperator] = useState<'+' | '-' | 'x' | '/'>(null);
  const [total, setTotal] = useState(null);

  function resetNumbers() {
    setNumber1(null);
    setNumber2(null);
    setOperator(null);
  }

  const insetNumberOne = useCallback((character: string) => {
    if (character === '/' || character === '+' || character === '-' || character === 'x') return;

    if ((number1 === null || number1?.length === 0) && character === '0') return;

    if ((number1 === null || number1?.length === 0) && character === '.') {
      character = '0.';
    }

    const concatNumber = (number1 ? number1 : '') + character;

    setNumber1(concatNumber);
  }, [number1]);

  const insetOperator = useCallback((operation: '+' | '-' | 'x' | '/') => {
    if (number1.length > 0) {
      setOperator(operation);
    }
  }, [number1]);

  const insetNumberTwo = useCallback((character: string) => {
    if (number1 && operator) {
      if ((number2 === null || number2?.length === 0) && character === '0') return;

      if ((number2 === null || number2?.length === 0) && character === '.') {
        character = '0.';
      }

      const concatNumber = (number2 ? number2 : '') + character;

      setNumber2(concatNumber);
    }
  }, [number1, number2, operator]);

  const calc = useCallback(() => {
    if (number1 && number2 && operator) {
      switch(operator) {
        case '+': {
          setTotal(Number(number1) + Number(number2));
          resetNumbers();
          break;
        }

        case '-': {
          setTotal(Number(number1) - Number(number2));
          resetNumbers();
          break;
        }

        case 'x': {
          setTotal(Number(number1) * Number(number2));
          resetNumbers();
          break;
        }

        case '/': {
          setTotal(Number(number1) / Number(number2));
          resetNumbers();
          break;
        }

        default:
          break;
      }
    }
  }, [number1, number2, operator]);

  const reset = useCallback(() => {
    setNumber1(null);
    setNumber2(null);
    setOperator(null);
    setTotal(null);
  }, []);

  const delCharacter = useCallback(() => {
    if (number2) {
      setNumber2(number => {
        if (number.length === 1) {
          return null;
        }

        return number.slice(0, -1);
      });
      return;
    }

    if (operator) {
      setOperator(null);
      return;
    }

    if (number1) {
      setNumber1(number => {
        if (number.length === 1) {
          return null;
        }

        return number.slice(0, -1);
      });
    }
  }, [number1, number2, operator]);

  const resetTotal = useCallback(() => setTotal(null), []);
  
  return (
    <CalcContext.Provider value={{ 
      calc, 
      number1, 
      number2, 
      total, 
      operator, 
      insetNumberOne, 
      insetOperator, 
      insetNumberTwo,
      reset,
      resetTotal,
      delCharacter,
    }}>
      {children}
    </CalcContext.Provider>
  )
}