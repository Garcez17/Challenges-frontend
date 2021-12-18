import { useCalc } from "./useCalc";

export function useTypeCharacter(character: string) {
  const { 
    insetNumberOne, 
    insetOperator, 
    insetNumberTwo, 
    number1, 
    number2, 
    operator, 
    reset,
    delCharacter,
    total,
    resetTotal,
    calc 
  } = useCalc();

  const typeCharacter = () => {
    if (character === 'RESET') {
      reset();
  
      return;
    }
  
    if (character === 'DEL') {
      if (total) {
        reset();
        
        return;
      }
      
      delCharacter();
  
      return;
    }
  
    if (character === '=') {
      calc();
  
      return;
    } else {
      if (total) {
        resetTotal();
      }
    }
  
    if ((character === '/' || character === '+' || character === '-' || character === 'x') && number1) {
      insetOperator(character);
  
      return;
    }
  
    if (!operator && !number2) {
      insetNumberOne(String(character));
  
      return;
    }
  
    if (number1 && operator) {
      insetNumberTwo(String(character));
    }
  }
  
  return { typeCharacter };
}