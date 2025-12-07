import { Metadata } from 'next'
import Link from 'next/link'
import { Microscope, Footprints, Activity, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Soins & Actes | Cabinet Vanessa LAGARRIGUE',
    description: 'Nos Soins Podologiques à Toulouse : Pédicurie médicale, Semelles orthopédiques thermoformées, Podologie du Sport et Orthoplasties. Expertises complètes.',
}

const expertises = [
    {
        title: "Pédicurie Médicale",
        slug: "pedicurie",
        description: "Traitement des affections cutanées (cors, durillons, verrues) et unguéales (ongles incarnés, mycoses). Soin complet pour retrouver le confort.",
        icon: Microscope,
        features: ["Traitement des cors & durillons", "Soins des ongles incarnés", "Verrues plantaires", "Hygiène rigoureuse"]
    },
    {
        title: "Podologie & Semelles",
        slug: "podologie",
        description: "Bilan postural complet et conception de semelles orthopédiques sur-mesure pour corriger les troubles statiques et dynamiques.",
        icon: Footprints,
        features: ["Bilan postural complet", "Analyse de la marche", "Semelles thermoformées", "Semelles classiques"]
    },
    {
        title: "Podologie du Sport",
        slug: "sport",
        description: "Accompagnement du sportif, de l'amateur au professionnel. Analyse du geste, prévention des blessures et orthèses spécifiques.",
        icon: Activity,
        features: ["Analyse du geste sportif", "Prévention des blessures", "Optimisation des appuis", "Semelles techniques"]
    },
    {
        title: "Orthoplasties & Appareillages",
        slug: "appareillages",
        description: "Conception de petits appareillages en silicone moulé pour protéger les orteils ou corriger une déformation (hallux valgus, griffes).",
        icon: ShieldCheck,
        features: ["Orthoplasties protectrices", "Orthoplasties correctrices", "Orthonyxies (ongles)", "Sur-mesure"]
    }
]

export default function SoinsPage() {
    return (
        <div className="bg-white">
            <div className="bg-[var(--color-surface)] py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-5xl font-serif">
                        Soins & Expertises
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Une prise en charge globale, allant du soin médical précis à l'analyse biomécanique complexe.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {expertises.map((expertise) => (
                        <div key={expertise.slug} className="group relative flex flex-col bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-200 hover:ring-[var(--color-secondary)] transition-all hover:shadow-md">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-none p-3 rounded-xl bg-[var(--color-surface)] group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                    <expertise.icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h2 className="text-2xl font-bold text-[var(--color-text-main)] font-serif">
                                    <Link href={`/soins/${expertise.slug}`} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {expertise.title}
                                    </Link>
                                </h2>
                            </div>

                            <p className="text-[var(--color-text-muted)] mb-8 flex-auto">
                                {expertise.description}
                            </p>

                            <ul className="mb-8 space-y-2 text-sm text-[var(--color-text-muted)]">
                                {expertise.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-[var(--color-primary)] font-semibold group-hover:translate-x-2 transition-transform">
                                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="bg-[var(--color-primary)] rounded-3xl p-8 sm:p-16 relative overflow-hidden isolate">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white mb-6 font-serif">
                                Besoin d'un avis ?
                            </h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Si vous avez un doute sur le soin adapté à votre situation, n'hésitez pas à contacter le cabinet ou à prendre rendez-vous pour un bilan.
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50" asChild>
                                <a href="https://www.doctolib.fr/pedicure-podologue/toulouse/vanessa-lagarrigue" target="_blank" rel="noopener noreferrer">
                                    Prendre rendez-vous
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
