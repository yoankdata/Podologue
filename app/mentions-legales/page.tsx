import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mentions Légales | Cabinet Vanessa LAGARRIGUE',
    description: 'Mentions légales et informations réglementaires du site internet.',
}

export default function MentionsLegalesPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl font-serif">
                    Mentions Légales
                </h1>
                <p className="mt-4 text-[var(--color-text-muted)]">
                    Informations réglementaires concernant le site du cabinet.
                </p>
            </div>

            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="prose prose-lg prose-blue text-[var(--color-text-muted)] mx-auto">
                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-4">1. Éditeur du site</h2>
                        <ul className="list-none pl-0 space-y-2">
                            <li><strong>Raison sociale :</strong> Cabinet Pédicurie-Podologie Vanessa LAGARRIGUE</li>
                            <li><strong>Adresse :</strong> 98 Route de Blagnac, 31200 Toulouse</li>
                            <li><strong>Téléphone :</strong> 05 61 57 42 42</li>
                            <li><strong>SIRET :</strong> [Numéro SIRET à compléter]</li>
                            <li><strong>Directrice de la publication :</strong> Vanessa LAGARRIGUE</li>
                        </ul>
                    </section>

                    <hr className="my-12 border-gray-100" />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-4">2. Hébergement</h2>
                        <p>
                            Le site est hébergé par <strong>Vercel Inc.</strong><br />
                            Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA
                        </p>
                    </section>

                    <hr className="my-12 border-gray-100" />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-4">3. Propriété Intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Toute reproduction ou représentation, intégrale ou partielle, du site ou de l'un des éléments qui le composent, est expressément interdite, de même que leur altération.
                        </p>
                    </section>

                    <hr className="my-12 border-gray-100" />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-4">4. Ordre National des Pédicures-Podologues</h2>
                        <p>
                            Vanessa LAGARRIGUE est inscrite au tableau de l'Ordre National des Pédicures-Podologues sous le numéro RPPS [Numéro RPPS à compléter].<br />
                            Elle est soumise au Code de déontologie des pédicures-podologues.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
