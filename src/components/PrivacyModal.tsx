import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { createPortal } from "react-dom"
import Icon from "@/components/ui/icon"

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl z-10 max-h-[80vh] overflow-y-auto"
          >
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-purple-500/50 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10" />
              
              <div className="relative p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center transition-colors group z-10"
                >
                  <Icon name="X" className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                </button>

                <div className="mb-6">
                  <h2 className="text-3xl font-black text-white mb-2">Политика конфиденциальности</h2>
                  <p className="text-zinc-400 text-sm">Последнее обновление: 20 января 2026</p>
                </div>

                <div className="space-y-6 text-zinc-300">
                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">1. Сбор данных</h3>
                    <p className="text-sm leading-relaxed mb-2">
                      Мы собираем только необходимые данные для предоставления услуг:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Email адрес для активации подписки</li>
                      <li>Minecraft никнейм для привязки лицензии</li>
                      <li>Данные платежей (обрабатываются платежной системой)</li>
                      <li>IP адрес для защиты от мошенничества</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">2. Использование данных</h3>
                    <p className="text-sm leading-relaxed">
                      Ваши данные используются исключительно для предоставления услуг KAGE, активации подписки, 
                      технической поддержки и защиты от несанкционированного доступа.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">3. Защита данных</h3>
                    <p className="text-sm leading-relaxed">
                      Мы применяем современные технологии шифрования для защиты ваших данных. Все платежи обрабатываются 
                      через сертифицированные платежные системы с поддержкой 3D-Secure.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">4. Передача данных третьим лицам</h3>
                    <p className="text-sm leading-relaxed">
                      Мы не продаем и не передаем ваши личные данные третьим лицам. Исключение составляют платежные 
                      системы для обработки транзакций.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-white mb-3">5. Ваши права</h3>
                    <p className="text-sm leading-relaxed mb-2">
                      Вы имеете право:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Запросить удаление своих данных</li>
                      <li>Получить копию сохраненных данных</li>
                      <li>Отозвать согласие на обработку</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
