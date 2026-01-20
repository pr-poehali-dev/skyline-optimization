import { useState } from "react"
import Icon from "@/components/ui/icon"
import { TermsModal } from "./TermsModal"
import { PrivacyModal } from "./PrivacyModal"

export function Footer() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const footerLinks = {
    "О проекте": ["О нас", "Наша команда", "Блог"],
    "Информация": ["Тарифы", "Обновления", "FAQ"],
    "Поддержка": ["Discord", "Telegram", "Помощь"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/e983c995-d981-4b7a-b0ff-0fc5f17314b9.png" 
                alt="KAGE Logo" 
                className="w-8 h-8 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" 
              />
              <span className="text-white font-black text-2xl tracking-wider bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">KAGE</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 font-medium">
              🐺 Премиальный чит для Hytale с невидимой защитой от античитов.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-500 hover:text-purple-400 transition-all hover:scale-125">
                <Icon name="MessageCircle" className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-purple-400 transition-all hover:scale-125">
                <Icon name="Send" className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-purple-400 transition-all hover:scale-125">
                <Icon name="Youtube" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href={link === 'FAQ' ? '#faq' : link === 'Тарифы' ? '#pricing' : '#'}
                      onClick={(e) => {
                        if (link === 'FAQ' || link === 'Тарифы') {
                          e.preventDefault()
                          document.getElementById(link === 'FAQ' ? 'faq' : 'pricing')?.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-medium text-sm mb-4">Правовая информация</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setTermsOpen(true)}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm text-left"
                >
                  Условия использования
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setPrivacyOpen(true)}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm text-left"
                >
                  Политика конфиденциальности
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2024 KAGE. Все права защищены.</p>
          <p className="flex items-center gap-2">
            <Icon name="Shield" className="w-4 h-4 text-green-400" />
            Безопасная оплата • Мгновенная активация
          </p>
        </div>
      </div>

      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  )
}