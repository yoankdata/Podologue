import { Metadata } from 'next'
import { MapPin, Bus, Car, Accessibility, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Le Cabinet & Accès | Cabinet Vanessa LAGARRIGUE',
    description: 'Le Cabinet de Podologie à Toulouse Sept Deniers : Équipements de pointe (Plateforme de force, Tapis de course), accessibilité PMR et stationnement facile.',
}

const equipments = [
    {
        name: "Plateforme de Force",
        description: "Analyse baropodométrique statique et dynamique pour l'étude précise des appuis plantaires."
    },
    {
        name: "Tapis de course",
        description: "Analyse vidéo de la marche et du geste sportif en conditions réelles."
    },
    {
        name: "Salle de soins",
        description: "Espace dédié aux soins de pédicurie avec matériel de stérilisation aux normes hospitalières."
    },
    {
        name: "Atelier de façonnage",
        description: "Fabrication sur place de vos semelles orthopédiques sur-mesure."
    }
]

export default function CabinetPage() {
    return (
        <div className="bg-white">
            {/* HEADER / TITLE */}
            <div className="relative isolate overflow-hidden bg-[var(--color-surface)] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-primary)] sm:text-6xl font-serif">
                            Le Cabinet
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
                            Un espace moderne et équipé pour une prise en charge complète de votre santé, situé au cœur de Toulouse Sept Deniers.
                        </p>
                    </div>
                </div>
            </div>

            {/* GALLERY SECTION (Real Images) */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">

                    {/* Main Large Item - Consultation Office (2x2) */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
                        <img
                            src="/images/bureau-consultation.jpg"
                            alt="Bureau de consultation"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                            <span className="text-white font-medium">Cabinet de Consultation</span>
                        </div>
                    </div>

                    {/* Waiting Room (1x1) */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                        <img
                            src="/images/salle-attente.jpg"
                            alt="Salle d'attente"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <span className="text-white text-sm font-medium">Salle d'attente</span>
                        </div>
                    </div>

                    {/* Treadmill (1x1) */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                        <img
                            src="/images/tapis-course-analyse.jpg"
                            alt="Tapis de course pour analyse"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <span className="text-white text-sm font-medium">Analyse Dynamique</span>
                        </div>
                    </div>

                    {/* Analysis Tech (2x1) */}
                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
                        <img
                            src="/images/bureau-analyse.jpg"
                            alt="Logiciel d'analyse podologique"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                            <span className="text-white font-medium">Technologie d'Analyse</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* EQUIPMENTS */}
            <div className="bg-[var(--color-surface)] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-[var(--color-secondary)] uppercase tracking-wide">Plateau Technique</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl font-serif">
                            Des équipements de pointe
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                            {equipments.map((item) => (
                                <div key={item.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[var(--color-text-main)]">
                                        <CheckCircle2 className="h-5 w-5 flex-none text-[var(--color-secondary)]" aria-hidden="true" />
                                        {item.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[var(--color-text-muted)]">
                                        <p className="flex-auto">{item.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ACCESS & MAP */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Info Content */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl font-serif mb-8">
                                Accès et Informations Pratiques
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-text-main)]">Adresse</h3>
                                        <p className="text-[var(--color-text-muted)] mt-1">
                                            98 Route de Blagnac<br />
                                            31200 Toulouse (Sept Deniers)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                                        <Accessibility className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-text-main)]">Accessibilité</h3>
                                        <p className="text-[var(--color-text-muted)] mt-1">
                                            Cabinet situé en rez-de-chaussée.<br />
                                            Accès complet aux personnes à mobilité réduite (PMR).
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                                        <Bus className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-text-main)]">Transports en commun</h3>
                                        <p className="text-[var(--color-text-muted)] mt-1">
                                            Bus L1 - Arrêt "Sept Deniers - Salvador Dali"<br />
                                            Bus 70 - Arrêt "Soleil d'Or"
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-none flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                                        <Car className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-text-main)]">Parking</h3>
                                        <p className="text-[var(--color-text-muted)] mt-1">
                                            Places de stationnement gratuites disponibles dans la rue et aux alentours du cabinet.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Button asChild className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]">
                                    <a
                                        href="https://www.google.com/maps/dir//98+Rte+de+Blagnac,+31200+Toulouse"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Itinéraire Google Maps
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Google Map Iframe */}
                        <div className="h-[400px] lg:h-full bg-gray-100 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.3571869894456!2d1.4168057766524388!3d43.61989677110375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6f3e5b5b5b%3A0x1b1b1b1b1b1b1b1b!2s98+Rte+de+Blagnac%2C+31200+Toulouse!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carte de localisation du cabinet"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
