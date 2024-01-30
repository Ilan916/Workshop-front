const featuredTestimonial = {
    body: "En tant que chef, Manĝi m'a ouvert un nouveau monde de créativité culinaire. Pouvoir visualiser les informations détaillées des ingrédients en temps réel a considérablement amélioré mes choix et a inspiré de nouvelles recettes passionnantes.",
    author: {
      name: 'Guy Savoy',
      handle: 'guysavoy_cook',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    },
  }
  const testimonials = [
    [
      [
        {
          body: "Manĝi a changé ma façon de faire l'épicerie. Maintenant, je peux scanner chaque produit et en savoir plus sur sa provenance, ses ingrédients et ses valeurs nutritionnelles. Une expérience informative et amusante à chaque rayon!",
          author: {
            name: 'Leslie Marie-Bonnet',
            handle: 'lesliemb',
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: "Manĝi est devenu mon allié pour une alimentation plus consciente. Je peux rapidement vérifier les informations nutritionnelles et m'assurer que mes choix alimentaires correspondent à mes objectifs santé. Simple, efficace et ludique!",
          author: {
            name: 'Lindsay Walton',
            handle: 'lindsaywalton',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: "Je suis un amateur de produits locaux, et Manĝi m'aide à soutenir les producteurs de ma région. En scannant les codes-barres, je peux voir la provenance des produits et favoriser une consommation plus responsable. Une révolution pour les locavores!",
          author: {
            name: 'Paulo Gauchot',
            handle: 'paulotgaucho',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: "Manĝi rend les courses en famille amusantes! Mes enfants adorent scanner les produits et voir des informations intéressantes apparaître en réalité augmentée. Une façon géniale d'impliquer toute la famille dans des choix alimentaires sains et éducatifs.",
          author: {
            name: 'Samy Krasner',
            handle: 'samykrasner',
            imageUrl:
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        // More testimonials...
      ],
    ],
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Testimony() {
    return (
      <div className="relative isolate  pb-32 pt-24 sm:pt-32">
       
       
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="l">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ce que nos utilisateurs disent de Manĝi</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Explorez les témoignages de nos utilisateurs et plongez dans le monde captivant de la réalité augmentée appliquée à la cuisine. Découvrez comment Manĝi transforme la manière dont les gens interagissent avec leurs produits alimentaires, ajoutant une dimension unique et informative à chaque repas.            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <img
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                          <div>
                            <div className="font-semibold">{testimonial.author.name}</div>
                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  