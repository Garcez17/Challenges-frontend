import { Display } from "../components/Display"
import { Header } from "../components/Header"
import { Keypad } from "../components/Keypad"
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { theme } = useTheme();

  if (!theme) return (
    <div className="bg-blue-900 h-screen flex items-center justify-center">
      <p className="text-white">Loading...</p>
    </div>
  )

  return (
    <div className={`
      text-white
      ${theme === 'blue' ? 
        'bg-blue-300' : 
        theme === 'light' ? 
        'bg-gray-100 text-white' :
        'bg-violet-800'
      }
    `}>
      <div className="max-w-xl h-full min-h-screen flex flex-col py-8 px-5 sm:px-16 gap-8 m-auto">
        <Header />
        <main className="flex flex-col gap-8">
          <Display />
          <Keypad />
        </main>
      </div>
    </div>
  )
}