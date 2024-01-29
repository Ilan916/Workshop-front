import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]
const values = [
  {
    name: 'Innovation :',
    description: 'Nous repoussons les limites de la technologie pour créer des expériences uniques qui transforment la manière dont vous interagissez avec vos produits alimentaires.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Transparence :',
    description: 'Nous croyons en une information claire et accessible. Mangi vise à fournir des détails précis sur chaque produit, favorisant une alimentation consciente et éclairée.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Engagement envers la qualité : ',
    description: "Nous nous engageons à fournir une expérience utilisateur exceptionnelle. La qualité est notre priorité, de la précision de la reconnaissance des codes-barres à l'affichage en réalité augmentée  ",
    icon: UserGroupIcon,
  },
  {
    name: 'Respect de la vie privée : ',
    description: ' La confidentialité de vos données est une priorité. Nous nous engageons à protéger vos informations et à garantir une utilisation éthique de la technologie.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Accessibilité mondiale : ',
    description: "Notre mission est de rendre la réalité augmentée accessible à tous, quel que soit l'endroit dans le monde. Mangi s'efforce d'éliminer les barrières technologiques.",
    icon: SparklesIcon,
  },
  {
    name: 'Rêver en Technicolor : ',
    description: "Chez Mangi, nous encourageons chacun à rêver en couleurs vives et à voir le monde de la nourriture avec une perspective éclatante. Notre réalité augmentée n'est pas seulement une technologie, c'est une toile où chaque produit devient une œuvre d'art interactive, éveillant la curiosité et inspirant des choix alimentaires vibrants.",
    icon: SunIcon,
  },
]
const team = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  // More people...
]
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]


export default function LandingPage() {

  return (
    <div className="bg-gray-900">
     

      <main className="relative isolate">
      
        {/* Header section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b  pt-14">
        
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Découvrez vos produits avec la réalité augmentée
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-200">
                Découvrez une nouvelle façon de connaître vos produits alimentaires avec Mangi, notre solution révolutionnaire de réalité augmentée. Plongez dans une expérience immersive où chaque article prend vie grâce à la technologie de pointe.Des détails nutritionnels aux origines du produit, notre application vous offre une vision approfondie pour vous aider à prendre des décisions éclairées.
                </p>
              </div>
              <img
                src="https://i.ibb.co/ZJnPK6X/5561905-21279.jpg"
                alt=""
                className="mt-8 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-14 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-32"
              />
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nos valeurs</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Découvrez une nouvelle façon de connaître vos produits alimentaires avec Mangi, notre solution révolutionnaire de réalité augmentée. Plongez dans une expérience immersive où chaque article prend vie grâce à la technologie de pointe.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">


        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in neque vel omnis. Eos error odio. Qui
              fugit voluptatibus eum culpa.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                <p className="text-base leading-7 text-gray-300">{person.role}</p>
                <p className="text-sm leading-6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our team</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                  in accusamus quisquam.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">
                    See our job postings <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </main>

     
    </div>
  )
}
