import { useCalc } from "../hooks/useCalc"
import { useTheme } from "../hooks/useTheme";

export function Display() {
  const { theme } = useTheme();
  const { number1, number2, operator, total } = useCalc();

  return (
    <section className={`
      h-24 
      rounded-xl
      p-6 
      flex 
      justify-end
      gap-2
      ${theme === 'blue' ?
        'bg-blue-800' : 
        theme === 'light' ? 
        'bg-gray-50 text-grayish-900' :
        'bg-violet-700 text-yellow-500'
      }
    `}>
      {total ? <span className="text-4xl">{total}</span> : (
        <>
          <span className="text-4xl">{number1 ?? 0}</span>
          {operator && <span className="text-4xl">{operator}</span>}
          {number2 && <span className="text-4xl">{number2}</span>}
        </>
      )}
    </section>
  )
}