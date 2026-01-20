import Icon from "@/components/ui/icon"

export function Footer() {
  const footerLinks = {
    "Функции": ["Combat", "Visuals", "Movement", "Stealth", "Все функции"],
    "Информация": ["Тарифы", "Обновления", "FAQ", "Статус серверов"],
    "Поддержка": ["Discord", "Telegram", "Документация", "Гайды"],
    "Правовая информация": ["Условия использования", "Политика конфиденциальности", "Возврат средств"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Eclipse" className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-xl tracking-wider">KAGE</span>
            </div>
            <p className="text-zinc-500 text-sm mb-6">
              Премиальный чит для Hytale с невидимой защитой от античитов.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-500 hover:text-purple-400 transition-colors">
                <Icon name="MessageCircle" className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-purple-400 transition-colors">
                <Icon name="Send" className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-purple-400 transition-colors">
                <Icon name="Youtube" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2024 KAGE. Все права защищены.</p>
          <p className="flex items-center gap-2">
            <Icon name="Shield" className="w-4 h-4 text-green-400" />
            Безопасная оплата • Мгновенная активация
          </p>
        </div>
      </div>
    </footer>
  )
}