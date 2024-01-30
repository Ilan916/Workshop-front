import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Réalité Augmentée Intuitive',
    description:
      'Explorez la réalité augmentée pour des informations instantanées sur vos produits alimentaires.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Informations Nutritionnelles Détaillées',
    description:
      'Accédez aux valeurs nutritives, allergènes et conseils personnalisés en un instant.',
    icon: LockClosedIcon,
  },
  {
    name: 'Origine des Produits et Traçabilité',
    description:
      "Découvrez l'origine de vos aliments, favorisant une consommation responsable.",
    icon: ArrowPathIcon,
  },
  {
    name: 'Personnalisation des Préférences Alimentaires ',
    description:
      "Adaptez Mangi à vos goûts et besoins, recevez des recommandations sur mesure.",
    icon: FingerPrintIcon,
  },
  {
    name: 'Personnalisation des Préférences Alimentaires ',
    description:
      "Simplifiez vos achats avec une liste automatique basée sur vos scans.",
    icon: FingerPrintIcon,
  },
  {
    name: 'Suggestions de Recettes Personnalisées ',
    description:
      "Trouvez l'inspiration culinaire avec des recettes adaptées à vos préférences uniques.",
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Partenariats et Collaborations </h2>
          
        <p className="mt-6 text-lg leading-8 text-gray-300">
                Chez Manĝi, nous sommes fiers de travailler avec certaines des enseignes alimentaires les plus renommées en France. Leur confiance en notre service témoigne de notre engagement envers la qualité et la satisfaction de nos clients.
            </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
