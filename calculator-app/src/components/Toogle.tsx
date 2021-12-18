import { useState } from "react"
import { useTheme } from "../hooks/useTheme";

export function Toogle() {
  const { toogleTheme, theme } = useTheme();

  return (
    <div className="w-20 flex flex-col self-start gap-1">
      <div className="flex justify-evenly">
        <button className="text-sm" onClick={() => toogleTheme('blue')}>1</button>
        <button className="text-sm" onClick={() => toogleTheme('light')}>2</button>
        <button className="text-sm" onClick={() => toogleTheme('purple')}>3</button>
      </div>
      <div className={`
        flex 
        justify-between 
        w-full 
        h-6
        rounded-2xl 
        px-2 
        py-1
        ${theme === 'blue' ? 
          'bg-blue-500' : 
          theme === 'light' ? 
          'bg-grayish-400' :
          'bg-violet-700'
        }
      `}>
        <button 
          className={`
            h-full 
            w-4 
            rounded-2xl 
            bg-red-500
            ${theme !== 'blue' && 'opacity-0'}
          `}
          onClick={() => toogleTheme('blue')}
        />
        <button 
          className={`
            h-full 
            w-4 
            bg-orange-700
            rounded-2xl 
            ${theme !== 'light' && 'opacity-0'}
          `}
          onClick={() => toogleTheme('light')}
        />
        <button 
          className={`
            h-full 
            w-4 
            bg-cyan-500
            rounded-2xl 
            ${theme !== 'purple' && 'opacity-0'}
          `}
          onClick={() => toogleTheme('purple')}
        />
      </div>
    </div>
  )
}