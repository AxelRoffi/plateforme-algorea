'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Puis-je importer mes cours existants ?',
    answer: 'Oui, Algoréa permet d\'importer facilement vos contenus depuis d\'autres plateformes LMS comme Moodle, Canvas, ou Blackboard. Notre équipe peut vous accompagner dans le processus de migration.',
  },
  {
    question: 'Comment l\'IA personnalise-t-elle l\'apprentissage ?',
    answer: 'Notre IA analyse les patterns d\'apprentissage, les performances et les préférences de chaque étudiant pour proposer des parcours adaptatifs, recommander du contenu pertinent et identifier les domaines nécessitant plus d\'attention.',
  },
  {
    question: 'Quelles intégrations sont disponibles ?',
    answer: 'Algoréa s\'intègre avec plus de 100 outils populaires : Google Workspace, Microsoft 365, Zoom, Teams, Slack, Canvas, et bien d\'autres. Une API complète est également disponible pour les intégrations personnalisées.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: 'Absolument. Nous utilisons un chiffrement AES 256-bit, sommes conformes RGPD, et hébergeons vos données dans des centres certifiés ISO 27001. Vos données vous appartiennent et ne sont jamais vendues à des tiers.',
  },
  {
    question: 'Proposez-vous un support technique ?',
    answer: 'Oui, nous offrons un support par email pour tous les plans, un support prioritaire pour le plan Pro, et un support dédié 24/7 pour le plan Enterprise. Une base de connaissances complète est également disponible.',
  },
  {
    question: 'Puis-je personnaliser l\'apparence de ma plateforme ?',
    answer: 'Oui, vous pouvez personnaliser les couleurs, logos, et domaine. Le plan Enterprise offre des options de personnalisation avancées et un white-labeling complet.',
  },
  {
    question: 'Comment fonctionne la facturation ?',
    answer: 'Nous contacter pour plus d\'informations sur nos options de facturation.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Questions fréquentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Trouvez rapidement les réponses aux questions les plus courantes 
            sur Algoréa et ses fonctionnalités.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Notre équipe de support est là pour vous aider. Contactez-nous et nous 
              vous répondrons dans les plus brefs délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Contacter le support
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
                Base de connaissances
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              &lt; 2min
            </div>
            <div className="font-semibold text-gray-900 dark:text-white mb-2">
              Temps de réponse support
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Support prioritaire disponible
            </div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              24/7
            </div>
            <div className="font-semibold text-gray-900 dark:text-white mb-2">
              Support Enterprise
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Assistance dédiée permanente
            </div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              500+
            </div>
            <div className="font-semibold text-gray-900 dark:text-white mb-2">
              Articles d&apos;aide
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Documentation complète
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}