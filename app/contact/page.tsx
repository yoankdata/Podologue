import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Contact | Cabinet Vanessa LAGARRIGUE',
    description: 'Contactez votre Podologue à Toulouse Sept Deniers. Prise de rendez-vous sur Doctolib, téléphone et horaires du cabinet Vanessa Lagarrigue.',
}

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* HEADER */}
            <div className="bg-[var(--color-surface)] pt-40 pb-16 sm:pt-48 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-5xl font-serif">
                        Contactez le Cabinet
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Pour toute prise de rendez-vous, privilégiez Doctolib. Vous pouvez également nous contacter par téléphone pour toute question.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 sm:py-20">

                {/* INFO & DOCTOLIB (Centered Loop) */}
                <div className="flex flex-col gap-10">
                    {/* Doctolib Box */}
                    <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 rounded-2xl p-8 mb-8 text-center">
                        <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">Prise de rendez-vous en ligne</h2>
                        <p className="text-[var(--color-text-muted)] mb-6">
                            Accédez directement aux disponibilités du cabinet et réservez votre créneau en quelques clics.
                        </p>
                        <Button className="w-full sm:w-auto text-lg h-14 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md px-8" size="lg" asChild>
                            <a href="https://www.doctolib.fr/pedicure-podologue/toulouse/vanessa-lagarrigue" target="_blank" rel="noopener noreferrer">
                                Prendre rendez-vous sur Doctolib
                            </a>
                        </Button>
                    </div>

                    {/* Coordonnées */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[var(--color-text-main)]">Téléphone</h3>
                                <p className="text-[var(--color-text-muted)] mt-1 mb-2">Secrétariat téléphonique</p>
                                <a href="tel:0561574242" className="text-lg font-bold text-[var(--color-primary)] hover:underline">05 61 57 42 42</a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[var(--color-text-main)]">Adresse</h3>
                                <p className="text-[var(--color-text-muted)] mt-1">
                                    98 Route de Blagnac<br />
                                    31200 Toulouse
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[var(--color-text-main)]">Horaires d'ouverture</h3>
                                <div className="text-[var(--color-text-muted)] mt-1 text-sm space-y-1">
                                    <p><span className="font-medium">Lun - Jeu :</span> 08h00 - 19h00</p>
                                    <p><span className="font-medium">Vendredi :</span> 08h00 - 18h30</p>
                                    <p><span className="font-medium">Sam - Dim :</span> Fermé</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
