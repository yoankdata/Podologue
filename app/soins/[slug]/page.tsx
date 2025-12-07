import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CheckCircle2, FileText, ArrowLeft, HelpCircle } from 'lucide-react'
import Link from 'next/link'

// DATA (Simulated CMS)
const soinsData: Record<string, {
    title: string;
    description: string;
    image: string; // Image path relative to public/
    content: {
        intro: string;
        symptoms: string[];
        treatment: string;
        benefits: string[];
    };
    faq?: { question: string; answer: string }[];
}> = {
    'pedicurie': {
        title: "Pédicurie Médicale",
        description: "Soin complet des affections de la peau et des ongles.",
        image: "/images/orthonyxie.jpg", // Using orthonyxie as a representative treatment image for now
        content: {
            intro: "Le soin de pédicurie est un acte médical complet visant à traiter les affections épidermiques (peau) et unguéales (ongles) du pied. Il permet de soulager immédiatement la douleur et de prévenir les complications.",
            symptoms: [
                "Cors, durillons, œils-de-perdrix",
                "Ongles incarnés (traitement conservateur)",
                "Ongles épais, mycosés ou déformés",
                "Verrues plantaires",
                "Fissures et crevasses talonnières"
            ],
            treatment: "Le soin se déroule dans des conditions d'hygiène strictes (instruments stérilisés, lames à usage unique). Il comprend la coupe et le fraisage des ongles, l'exérèse des hyperkératoses (cors, durillons) et l'hydratation finale.",
            benefits: [
                "Soulagement immédiat de la douleur",
                "Prévention des infections",
                "Retrouver un confort de marche",
                "Esthétique du pied améliorée"
            ]
        },
        faq: [
            {
                question: "Est-ce douloureux ?",
                answer: "Non, le soin est réalisé avec douceur et précision. Pour les zones très sensibles (ongle incarné infecté), l'acte est adapté pour minimiser l'inconfort."
            },
            {
                question: "Quelle est la fréquence recommandée ?",
                answer: "Cela dépend de votre pathologie. En entretien, une à deux fois par an suffisent. Pour des pathologies chroniques, un suivi tous les 2 mois peut être nécessaire."
            }
        ]
    },
    'podologie': {
        title: "Podologie & Semelles Orthopédiques",
        description: "Correction des troubles statiques et dynamiques par orthèses plantaires.",
        image: "/images/bureau-analyse.jpg",
        content: {
            intro: "La podologie s'intéresse à la structure et au fonctionnement du pied et de l'appareil locomoteur. Le bilan podologique permet de diagnostiquer les troubles statiques ou dynamiques pouvant causer des douleurs aux pieds, chevilles, genoux, hanches ou dos.",
            symptoms: [
                "Douleurs plantaires (métatarsalgies, talalgies, épine calcanéenne)",
                "Pieds plats ou pieds creux douloureux",
                "Tendinites (Achille, jambier postérieur)",
                "Douleurs de genoux (syndrome rotulien)",
                "Instabilité de la cheville"
            ],
            treatment: "Après un examen clinique complet (statique et dynamique sur plateforme de force), des semelles orthopédiques sur-mesure sont réalisées (techniques classiques ou thermoformage) pour corriger ou compenser les troubles.",
            benefits: [
                "Correction de la posture",
                "Répartition harmonieuse des appuis",
                "Soulagement des chaînes musculaires et articulaires",
                "Amélioration du confort à la marche"
            ]
        }
    },
    'sport': {
        title: "Podologie du Sport",
        description: "Analyse du geste sportif et traitement des pathologies liées à l'activité physique.",
        image: "/images/tapis-course-analyse.jpg",
        content: {
            intro: "Le podologue du sport accompagne l'athlète, amateur ou professionnel, dans sa pratique. L'objectif est double : traiter les pathologies existantes et prévenir les blessures en optimisant la biomécanique.",
            symptoms: [
                "Syndrome de l'essuie-glace (TFL)",
                "Périostites tibiales",
                "Tendinopathies d'Achille",
                "Fractures de fatigue",
                "Ampoules à répétition"
            ],
            treatment: "L'examen inclut une analyse vidéo de la course sur tapis, l'étude du chaussage sportif et un examen postural. Les semelles sont conçues avec des matériaux techniques absorbants et dynamiques adaptés au sport pratiqué.",
            benefits: [
                "Optimisation du geste sportif",
                "Prévention des blessures",
                "Reprise du sport sécurisée",
                "Confort et performance"
            ]
        }
    },
    'appareillages': {
        title: "Orthoplasties & Appareillages",
        description: "Petits appareillages sur-mesure pour protéger ou corriger les orteils.",
        image: "/images/orthonyxie.jpg", // Correct usage
        content: {
            intro: "Les orthoplasties sont des orthèses d'orteils réalisées sur mesure en élastomère de silicone. Elles sont moulées directement sur le pied du patient.",
            symptoms: [
                "Hallux Valgus (Oignon) douloureux",
                "Griffes d'orteils",
                "Cors dorsaux ou interdigitaux récidivants",
                "Chevauchement d'orteils"
            ],
            treatment: "Il existe deux types d'orthoplasties : protectrices (pour décharger une zone douloureuse) et correctrices (pour réduire une déformation réductible chez l'enfant ou l'adulte).",
            benefits: [
                "Protection efficace contre les frottements",
                "Correction progressive des déformations",
                "Lavables et durables",
                "Port discret dans la chaussure"
            ]
        }
    }
}

export function generateStaticParams() {
    return Object.keys(soinsData).map((slug) => ({
        slug: slug,
    }))
}

// Typage pour Next.js 15+ ou 16
// params est une Promise
type Props = {
    params: Promise<{ slug: string }>
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const { slug } = params
    const soin = soinsData[slug]

    if (!soin) {
        return {
            title: 'Soin non trouvé',
        }
    }

    return {
        title: `${soin.title} | Cabinet Vanessa LAGARRIGUE`,
        description: soin.description,
    }
}

export default async function SoinDetailPage(props: Props) {
    const params = await props.params;
    const { slug } = params
    const soin = soinsData[slug]

    if (!soin) {
        return notFound()
    }

    return (
        <div className="bg-white">
            {/* HEADER */}
            <div className="relative bg-[var(--color-primary)] py-24 sm:py-32 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src={soin.image}
                        alt={soin.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent z-10" />

                <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-8">
                        <Link href="/soins" className="text-sm font-semibold text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Retour aux soins
                        </Link>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                        {soin.title}
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl font-light">
                        {soin.description}
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* INTRO PARAGRAPH */}
                        <div className="prose prose-lg prose-blue text-[var(--color-text-muted)]">
                            {/* Mobile CTA */}
                            <div className="lg:hidden mb-8">
                                <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md" size="lg" asChild>
                                    <a href="https://www.doctolib.fr/pedicure-podologue/toulouse/vanessa-lagarrigue" target="_blank" rel="noopener noreferrer">
                                        Prendre rendez-vous sur Doctolib
                                    </a>
                                </Button>
                            </div>
                            <p>{soin.content.intro}</p>
                        </div>

                        {/* SYMPTOMS & TREATMENT */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 font-serif flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] flex items-center justify-center text-sm font-sans font-bold">1</span>
                                    Motifs de consultation
                                </h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {soin.content.symptoms.map((symptom) => (
                                        <li key={symptom} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl text-sm text-[var(--color-text-muted)]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mt-2 flex-none" />
                                            {symptom}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 font-serif flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] flex items-center justify-center text-sm font-sans font-bold">2</span>
                                    Déroulement du soin
                                </h2>
                                <div className="prose prose-blue text-[var(--color-text-muted)]">
                                    <p>{soin.content.treatment}</p>
                                </div>
                                {/* Image contextuelle au milieu du contenu si pertinent */}
                                <div className="mt-8 rounded-2xl overflow-hidden shadow-sm">
                                    <img src={soin.image} alt={soin.title} className="w-full h-64 object-cover object-center" />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 font-serif flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)] flex items-center justify-center text-sm font-sans font-bold">3</span>
                                    Bénéfices
                                </h2>
                                <ul className="space-y-3">
                                    {soin.content.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-center gap-3 text-[var(--color-text-main)] font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)]" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* FAQ if exists */}
                        {soin.faq && (
                            <div className="border-t border-gray-100 pt-12">
                                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-8 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-[var(--color-text-muted)]" /> Questions fréquentes
                                </h3>
                                <div className="space-y-6">
                                    {soin.faq.map((item) => (
                                        <div key={item.question} className="bg-[var(--color-surface)] p-6 rounded-2xl">
                                            <h4 className="font-semibold text-[var(--color-text-main)] mb-2">{item.question}</h4>
                                            <p className="text-sm text-[var(--color-text-muted)]">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* SIDEBAR CTA (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-6 sm:p-8">
                            <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-4">
                                Prendre rendez-vous
                            </h3>
                            <p className="text-sm text-[var(--color-text-muted)] mb-6">
                                Consultez les disponibilités du cabinet pour ce type de soin sur Doctolib.
                            </p>

                            <div className="space-y-4">
                                <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md" size="lg" asChild>
                                    <a href="https://www.doctolib.fr/pedicure-podologue/toulouse/vanessa-lagarrigue" target="_blank" rel="noopener noreferrer">
                                        Réserver un créneau
                                    </a>
                                </Button>

                                <div className="text-center">
                                    <a href="tel:0561574242" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                                        ou par téléphone au 05 61 57 42 42
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                                    <FileText className="w-4 h-4 text-[var(--color-secondary)]" />
                                    <span>Tarifs : voir la grille</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
