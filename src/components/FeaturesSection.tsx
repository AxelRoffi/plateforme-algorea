'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Users, BarChart3, Trophy, BookOpen, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Code,
    title: 'Contenu interactif sans limites',
    description: 'Aucune limitation sur les contenus web. Simulations interactives intégrées. Système sécurisé anti-falsification des scores. Enregistrement et rechargement automatique.',
  },
  {
    icon: Users,
    title: 'Équipe dédiée à vos besoins',
    description: 'Intégration d\'IA personnalisée. Adaptation d\'outils existants. Support technique réactif.',
  },
  {
    icon: BarChart3,
    title: 'Gestion avancée des groupes',
    description: 'Création de groupes et sous-groupes. Système d\'entraide par chat temps réel. Grille de suivi d\'activité avec export CSV. Droits d\'accès granulaires.',
  },
  {
    icon: Trophy,
    title: 'Plateforme éprouvée',
    description: 'Robuste pour millions d\'utilisateurs. Intégration SSO enterprise. Plus de 700,000 participants/an (Concours Castor). Déployée chez des clients internationaux.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Une plateforme LMS
            <span className="text-primary-600">
              {' '}sans limites pour l'innovation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Découvrez une plateforme qui va bien au-delà des LMS traditionnels, 
            conçue pour intégrer tous types de contenus interactifs sans restrictions dans une seule et unique interface.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Fonctionnalités détaillées
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Types de contenus : QCM, textes à trous, réponses numériques/textuelles, vidéos, HTML/Markdown.
                  Gestion des épreuves : chronomètre, temps supplémentaire, blocage automatique, indices progressifs.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Administration', 'Édition collaborative', 'Paramétrage données', 'Statistiques'].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <p className="font-medium">Support technique 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}