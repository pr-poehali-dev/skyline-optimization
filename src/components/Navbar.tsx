import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Eclipse" className="w-5 h-5 text-white" />
            <span className="text-white font-semibold tracking-wider">KAGE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Решения
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Технологии
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Безопасность
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              О нас
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Контакты
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Консультация
            </a>
            <a
              href="#"
              className="text-sm text-white bg-zinc-800 hover:bg-zinc-700 px-3.5 py-1.5 rounded-md border border-zinc-700 transition-colors"
            >
              Начать
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}