import { Metadata } from 'next'
import { GraduationCap, Award, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Mon Parcours | Cabinet Vanessa LAGARRIGUE',
    description: 'Vanessa Lagarrigue, Podologue D.E à Toulouse. Découvrez mon parcours, mes diplômes (Podologie du Sport, Posturologie) et mon approche thérapeutique.',
}

const timeline = [
    {
        date: '2021',
        title: 'Diplôme Universitaire de Podologie du Sport',
        institution: 'Université Toulouse III - Paul Sabatier',
        description: 'Spécialisation dans la prise en charge des pathologies du sportif (course à pied, sports co, tennis...).',
        icon: Award,
    },
    {
        date: '2019',
        title: 'Formation Posturologie Clinique',
        institution: 'Connaissance & Évolution',
        description: 'Analyse globale de la posture et des capteurs sensoriels pour traiter les douleurs chroniques.',
        icon: Briefcase,
    },
    {
        date: '2015',
        title: 'Diplôme d\'État de Pédicure-Podologue',
        institution: 'Institut de Formation de Toulouse',
        description: 'Formation initiale complète incluant pédicurie (soins) et podologie (semelles). Mémoire de fin d\'études sur la dynamique du pied.',
        icon: GraduationCap,
    },
]

export default function ParcoursPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* INTRO BIO */}
                <div className="mx-auto max-w-3xl text-center mb-24">
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-5xl font-serif mb-6">
                        Vanessa LAGARRIGUE
                    </h1>
                    <p className="text-xl font-semibold text-[var(--color-secondary)] mb-8">
                        Pédicure-Podologue D.E
                    </p>
                    <div className="prose prose-lg prose-blue mx-auto text-[var(--color-text-muted)] text-justify leading-relaxed">
                        <p>
                            Diplômée d'État et passionnée par la biomécanique humaine, j'ai fondé mon cabinet avec une vision claire : apporter une prise en charge globale et personnalisée à chaque patient.
                        </p>
                        <p>
                            Mon approche combine la rigueur technique de la podologie moderne avec une écoute attentive. Je considère que le pied ne doit pas être traité isolément, mais comme le fondement de l'équilibre général du corps. C'est pourquoi je me suis spécialisée en <strong>posturologie</strong> et en <strong>podologie du sport</strong>, afin de répondre aussi bien aux besoins des athlètes qu'à ceux des personnes souffrant de douleurs chroniques ou de troubles de la marche.
                        </p>
                    </div>
                </div>

                {/* TIMELINE */}
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-12 text-center font-serif">Formation & Diplômes</h2>

                    <div className="flow-root">
                        <ul role="list" className="-mb-8">
                            {timeline.map((event, eventIdx) => (
                                <li key={event.title}>
                                    <div className="relative pb-12">
                                        {eventIdx !== timeline.length - 1 ? (
                                            <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                        ) : null}
                                        <div className="relative flex space-x-6">
                                            <div>
                                                <span className="h-10 w-10 rounded-full bg-[var(--color-surface)] flex items-center justify-center ring-8 ring-white">
                                                    <event.icon className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                <div>
                                                    <p className="text-sm text-[var(--color-text-muted)] font-mono mb-1">{event.date}</p>
                                                    <h3 className="text-lg font-semibold text-[var(--color-text-main)]">{event.title}</h3>
                                                    <p className="text-sm font-medium text-[var(--color-secondary)]">{event.institution}</p>
                                                    <p className="mt-2 text-base text-[var(--color-text-muted)]">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* PHILOSOPHY */}
                <div className="mt-24 bg-[var(--color-surface)] rounded-3xl p-8 sm:p-16 text-center">
                    <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 font-serif">Ma Philosophie de Soin</h2>
                    <blockquote className="text-xl font-medium leading-9 text-[var(--color-text-main)] italic max-w-4xl mx-auto">
                        "Comprendre le mouvement pour mieux le soigner. Chaque consultation est un moment d'échange pour trouver la solution la plus adaptée à votre mode de vie, sans surtraitement."
                    </blockquote>
                </div>

            </div>
        </div>
    )
}
