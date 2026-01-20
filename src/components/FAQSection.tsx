import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    question: "Безопасен ли KAGE для моего аккаунта?",
    answer: "KAGE использует продвинутые методы обхода античитов, но использование любых читов всегда несет риск блокировки. Мы регулярно обновляем защиту, но не можем гарантировать 100% безопасность."
  },
  {
    question: "Как быстро активируется подписка?",
    answer: "Подписка активируется автоматически в течение 1-2 минут после оплаты. Вы получите письмо с инструкциями на указанный email."
  },
  {
    question: "На сколько аккаунтов действует лицензия?",
    answer: "Одна лицензия привязывается к одному Minecraft никнейму. Для использования на нескольких аккаунтах нужно приобрести несколько подписок."
  },
  {
    question: "Какие функции входят в KAGE?",
    answer: "KAGE включает полный набор функций: KillAura, Fly, Speed, X-Ray, ESP, Auto-Clicker, Criticals, Velocity, NoFall и многое другое. Все функции постоянно обновляются."
  },
  {
    question: "Работает ли KAGE на серверах с античитом?",
    answer: "Да, KAGE специально разработан для обхода популярных античитов. Мы постоянно мониторим обновления античитов и оперативно обновляем защиту."
  },
  {
    question: "Можно ли продлить подписку?",
    answer: "Да, вы можете продлить подписку в любой момент. Новый срок будет добавлен к текущей активной подписке."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: "#09090B" }} id="faq">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Icon name="HelpCircle" className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Ответы на вопросы</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">вопросы</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Всё что нужно знать о KAGE
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-gradient-to-br from-zinc-900/50 to-black/50 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-zinc-400 leading-relaxed pt-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <Icon name="ChevronDown" className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-4">Не нашли ответ на свой вопрос?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.gg/kage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 border border-purple-500/50 text-purple-300 font-bold rounded-xl hover:bg-purple-600/30 transition-all"
            >
              <Icon name="MessageCircle" className="w-5 h-5" />
              Задать вопрос в Discord
            </a>
            <a
              href="https://t.me/kage_support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 border border-blue-500/50 text-blue-300 font-bold rounded-xl hover:bg-blue-600/30 transition-all"
            >
              <Icon name="Send" className="w-5 h-5" />
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
