import { useState } from "react"
import { AuthModal } from "./AuthModal"
import { PurchaseModal } from "./PurchaseModal"

const defaultPlan = {
  name: "1 Неделя",
  price: "799",
  period: "неделя",
  description: "Оптимальный выбор"
}

export function Navbar() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/20 bg-[#09090B]/90 backdrop-blur-xl">
        <div className="w-full flex justify-center px-6 py-4">
          <div className="w-full max-w-4xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/e983c995-d981-4b7a-b0ff-0fc5f17314b9.png" 
                alt="KAGE Logo" 
                className="w-10 h-10 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" 
              />
              <span className="text-white font-bold text-xl tracking-wider bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">KAGE</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-zinc-400 hover:text-purple-400 transition-colors font-medium">
                Функции
              </a>
              <a href="#pricing" className="text-sm text-zinc-400 hover:text-purple-400 transition-colors font-medium">
                Тарифы
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-purple-400 transition-colors font-medium">
                Discord
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-purple-400 transition-colors font-medium">
                FAQ
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setAuthModalOpen(true)} className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">
                Войти
              </button>
              <button
                onClick={() => setPurchaseModalOpen(true)}
                className="text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 py-2 rounded-lg font-bold transition-all shadow-lg shadow-purple-500/30"
              >
                Купить
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <PurchaseModal isOpen={purchaseModalOpen} onClose={() => setPurchaseModalOpen(false)} plan={defaultPlan} />
    </>
  )
}