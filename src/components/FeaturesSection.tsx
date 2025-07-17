'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Users, BarChart3, Brain, BookOpen, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: GraduationCap,
    title: 'Gestion de cours avancée',
    description: 'Créez et organisez vos cours avec des outils intuitifs. Structurez votre contenu, ajoutez des médias interactifs et suivez les progrès en temps réel.',
  },
  {
    icon: Users,
    title: 'Collaboration en temps réel',
    description: 'Favorisez l\'interaction entre étudiants et enseignants avec des forums, messagerie instantanée et espaces de travail collaboratifs.',
  },
  {
    icon: BarChart3,
    title: 'Analytics et insights',
    description: 'Analysez les performances avec des tableaux de bord détaillés, métriques d\'engagement et rapports personnalisables pour optimiser l\'apprentissage.',
  },
  {
    icon: Brain,
    title: 'IA personnalisée',
    description: 'Intelligence artificielle qui s\'adapte au style d\'apprentissage de chaque étudiant pour proposer des parcours sur mesure et des recommandations pertinentes.',
  },
  {
    icon: BookOpen,
    title: 'Bibliothèque de ressources',
    description: 'Accédez à une vaste bibliothèque de contenus éducatifs, modèles de cours et ressources pédagogiques créées par la communauté.',
  },
  {
    icon: Shield,
    title: 'Sécurité et conformité',
    description: 'Protection des données étudiants avec chiffrement avancé, conformité RGPD et contrôles d\'accès granulaires pour une sécurité maximale.',
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
            Fonctionnalités puissantes pour
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              {' '}l&apos;éducation moderne
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Découvrez comment Algoréa transforme l&apos;expérience d&apos;apprentissage 
            avec des outils innovants conçus pour les éducateurs et les apprenants du 21e siècle.
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
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
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Intégration transparente avec vos outils existants
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Algoréa s&apos;intègre facilement avec Google Workspace, Microsoft 365, 
                  Zoom, et plus de 100 autres applications que vous utilisez déjà.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Google Drive', 'Microsoft Teams', 'Zoom', 'Slack'].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    >
                      {tool}
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
                    <p className="font-medium">100+ Intégrations disponibles</p>
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