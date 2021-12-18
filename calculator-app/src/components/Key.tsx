import { useTheme } from "../hooks/useTheme";
import { useTypeCharacter } from "../hooks/useTypeCharacter";

type KeyProps = 
  |  {
      children: string;
      type?: 'default' | 'word';
      color?: 'blue' | 'red';
    } 
  | {
      children: string;
      type: 'default' | 'word';
      color: 'blue' | 'red';
    }

export function Key({ children, type, color = null }: KeyProps) {
  const { typeCharacter } = useTypeCharacter(children);
  const { theme } = useTheme();

  return (
    <button 
      className={`
        flex
        flex-1
        items-center 
        justify-center 
        h-16 
        rounded-lg
        border-b-4
        ${color === null && `
          ${theme === 'blue' ? 
            'bg-grayish-150 border-b-grayish-250 hover:bg-grayish-250' : 
            theme === 'light' ? 
            'bg-grayish-100 border-b-grayish-300 hover:bg-grayish-300' :
            'bg-violet-600 border-b-violet-450 hover:bg-violet-450'
          }
        `}
        ${color === 'blue' && `
          ${theme === 'blue' ? 
            'bg-blue-200 border-b-blue-350 hover:bg-blue-350' : 
            theme === 'light' ? 
            'bg-cyan-600 border-b-cyan-700 hover:bg-cyan-700' :
            'bg-violet-500 border-b-violet-450 hover:bg-violet-450'
          }
        `}
        ${color === 'red' && `
          ${theme === 'blue' ? 
            'bg-red-500 border-b-red-800 hover:bg-red-800' : 
            theme === 'light' ? 
            'bg-orange-700 border-b-orange-800 hover:bg-orange-800' :
            'bg-cyan-500 border-b-cyan-400 hover:bg-cyan-400'
          }
        `}
      `}
      onClick={typeCharacter}
    >
      <span className={`
        self-center 
        ${type === 'word' ?
          `text-xl ${theme === 'purple' && children === '=' && 'text-blue-900'}` : 
          `
          text-3xl
          ${theme === 'blue' ? 
            'text-blue-300' : 
            theme === 'light' ? 
            'text-grayish-900' :
            'text-yellow-500'
          }`
        }
      `}>
        {children}
      </span>
    </button>
  )
}