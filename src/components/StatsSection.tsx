'use client'

import { Users, BookOpen, Trophy, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    icon: Users,
    value: '700,000+',
    label: 'Participants/an',
    description: 'Concours Castor et autres projets',
  },
  {
    icon: BookOpen,
    value: '24/7',
    label: 'Support disponible',
    description: 'Assistance technique dédiée',
  },
  {
    icon: Trophy,
    value: 'Robuste',
    label: 'Millions d\'utilisateurs',
    description: 'Plateforme éprouvée et fiable',
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Pays utilisateurs',
    description: 'Présence internationale étendue',
  },
]

const achievements = [
  {
    year: '2020',
    title: 'Lancement d\'Algoréa',
    description: 'Première version de la plateforme',
  },
  {
    year: '2021',
    title: '10,000 utilisateurs',
    description: 'Première étape importante franchie',
  },
  {
    year: '2024',
    title: 'IA Intégrée',
    description: 'Lancement des fonctionnalités d\'intelligence artificielle',
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main stats */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            France-IOI en chiffres
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Rejoignez une plateforme éprouvée par des centaines de milliers 
            d'utilisateurs dans le monde entier.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Notre parcours
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Depuis notre création, nous n&apos;avons cessé d&apos;innover pour offrir 
              la meilleure expérience d&apos;apprentissage possible.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary-500 hidden lg:block"></div>

            <div className="space-y-8 lg:space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:text-left text-center`}
                >
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                      <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">
                        {achievement.year}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Prêt à rejoindre cette success story ?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Faites partie des milliers d&apos;éducateurs qui ont déjà transformé 
              leur approche de l&apos;enseignement avec Algoréa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Commencer maintenant
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Planifier une démo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}