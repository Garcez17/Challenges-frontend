import { useTheme } from "../hooks/useTheme";
import { Key } from "./Key";

export function Keypad() {
  const { theme } = useTheme();

  return (
    <section className={`
      flex 
      flex-col 
      gap-4 
      flex-1 
      rounded-xl 
      p-6
      ${theme === 'blue' ? 
        'bg-blue-500 ' : 
        theme === 'light' ? 
        'bg-grayish-400' :
        'bg-violet-700 '
      }
    `}>
      <div className="grid grid-cols-4 gap-4">
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key type="word" color="blue">DEL</Key>
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>+</Key>
        <Key>1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>-</Key>
        <Key>.</Key>
        <Key>0</Key>
        <Key>/</Key>
        <Key>x</Key>
      </div>
      <div className="flex gap-4">
        <Key type="word" color="blue">RESET</Key>
        <Key type="word" color="red">=</Key>
      </div>
    </section>
  )
}