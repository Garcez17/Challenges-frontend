import { useTheme } from "../hooks/useTheme";
import { Toogle } from "./Toogle";

export function Header() {
  const { theme } = useTheme();
  return (
    <header className={`flex h-12 w-full justify-between ${theme === 'light' ? 'text-grayish-900' : theme === 'purple' ? 'text-yellow-500' : ''}`}>
      <h1>calc</h1>

      <div className="flex items-end gap-8">
        <span className="text-sm">THEME</span>
        <Toogle />
      </div>
    </header>
  )
}