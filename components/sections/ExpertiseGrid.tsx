import Link from 'next/link'
import { Microscope, Footprints, Activity, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
    {
        name: 'Soins de Pédicurie',
        description: 'Traitement curatif des affections cutanées (cors, durillons) et unguéales. Soulagement immédiat et prévention dans un cadre d’hygiène stricte.',
        icon: Microscope,
        href: '/soins/pedicurie',
        color: "text-blue-600 bg-blue-50" // Optionnel: nuance visuelle
    },
    {
        name: 'Podologie & Semelles',
        description: 'Correction des troubles statiques et dynamiques. Conception de semelles orthopédiques sur-mesure pour rééquilibrer votre posture durablement.',
        icon: Footprints,
        href: '/soins/podologie',
        color: "text-emerald-600 bg-emerald-50"
    },
    {
        name: 'Podologie du Sport',
        description: 'Optimisation du geste technique et prévention des blessures. Analyse biomécanique spécifique pour le runner et le sportif de haut niveau.',
        icon: Activity,
        href: '/soins/sport',
        color: "text-indigo-600 bg-indigo-50"
    },
]

export function ExpertiseGrid() {
    return (
        <section className="bg-white py-24 sm:py-32" id="expertises">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* HEADLINES */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[var(--color-secondary)] uppercase">
                        Expertises Cliniques
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl font-serif">
                        Une prise en charge globale de votre santé
                    </p>
                    <p className="mt-4 text-lg leading-8 text-[var(--color-text-muted)]">
                        Du soin épidermique précis à l'analyse posturale complexe, le cabinet vous accompagne avec des protocoles thérapeutiques adaptés.
                    </p>
                </div>

                {/* GRID CARDS */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="group relative flex flex-col items-start p-8 bg-[var(--color-surface)]/50 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icon Box */}
                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="h-7 w-7 text-[var(--color-primary)]" aria-hidden="true" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold leading-7 text-[var(--color-text-main)] font-serif mb-3">
                                <Link href={feature.href}>
                                    <span className="absolute inset-0" />
                                    {feature.name}
                                </Link>
                            </h3>
                            <p className="text-base leading-7 text-[var(--color-text-muted)] flex-1">
                                {feature.description}
                            </p>

                            {/* Fake Link Action */}
                            <div className="mt-6 flex items-center text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                                En savoir plus
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM CTA */}
                <div className="mt-16 flex justify-center">
                    <Button variant="outline" size="lg" className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors" asChild>
                        <Link href="/soins">
                            Découvrir tous les traitements
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}