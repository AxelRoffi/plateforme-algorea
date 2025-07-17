'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'Gratuit',
    description: 'Parfait pour commencer et tester la plateforme',
    icon: Star,
    features: [
      'Jusqu\'à 3 cours',
      '50 étudiants maximum',
      'Support communautaire',
      'Stockage 1GB',
      'Analytics de base',
      'Accès mobile',
    ],
    limitations: [
      'Fonctionnalités IA limitées',
      'Pas d\'intégrations avancées',
    ],
    cta: 'Commencer gratuitement',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '29',
    period: '/ mois',
    description: 'Idéal pour les enseignants et petites institutions',
    icon: Zap,
    features: [
      'Cours illimités',
      '500 étudiants maximum',
      'Support prioritaire',
      'Stockage 100GB',
      'Analytics avancés',
      'IA personnalisée',
      'Intégrations (Google, Microsoft)',
      'Certificats personnalisés',
      'Rapports détaillés',
    ],
    cta: 'Essayer Pro',
    highlighted: true,
    badge: 'Plus populaire',
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    period: '',
    description: 'Pour les grandes institutions et entreprises',
    icon: Crown,
    features: [
      'Tout du plan Pro',
      'Étudiants illimités',
      'Support dédié 24/7',
      'Stockage illimité',
      'SSO & sécurité avancée',
      'API personnalisée',
      'Formation sur site',
      'SLA garanti',
      'Conformité RGPD+',
    ],
    cta: 'Contacter les ventes',
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Tarifs transparents pour tous
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Choisissez le plan qui convient à votre établissement. 
            Tous les plans incluent un essai gratuit de 14 jours, sans engagement.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-white dark:bg-gray-700 rounded-lg p-1 mb-8"
          >
            <button className="px-4 py-2 text-sm font-medium bg-primary-600 text-white rounded-md">
              Mensuel
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Annuel
            </button>
            <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
              -20%
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <Card className={`h-full ${
                  plan.highlighted 
                    ? 'ring-2 ring-primary-600 shadow-lg scale-105' 
                    : 'hover:shadow-lg'
                } transition-all duration-300`}>
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                      plan.highlighted 
                        ? 'bg-gradient-to-r from-primary-500 to-purple-500' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        plan.highlighted ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                      }`} />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </CardTitle>
                    
                    <div className="my-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {plan.name === 'Enterprise' ? '' : '€'}{plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-600 dark:text-gray-400 ml-1">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-primary-600 hover:bg-primary-700' 
                          : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>

                    <div className="space-y-3">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Fonctionnalités incluses :
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {plan.limitations && (
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Limitations :
                          </p>
                          <ul className="space-y-1">
                            {plan.limitations.map((limitation, i) => (
                              <li key={i} className="text-xs text-gray-400 dark:text-gray-500">
                                • {limitation}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ for pricing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Questions fréquentes sur les tarifs
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Puis-je changer de plan à tout moment ?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. 
                Les changements prennent effet immédiatement.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Y a-t-il des frais cachés ?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Non, nos tarifs sont transparents. Pas de frais de setup, 
                pas de coûts cachés. Payez seulement ce que vous utilisez.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Proposez-vous des remises pour l&apos;éducation ?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Oui, nous offrons des tarifs préférentiels pour les établissements 
                d&apos;enseignement. Contactez-nous pour plus d&apos;informations.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Que se passe-t-il si je dépasse les limites ?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Nous vous préviendrons avant d&apos;atteindre les limites et vous 
                proposerons de passer au plan supérieur si nécessaire.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}