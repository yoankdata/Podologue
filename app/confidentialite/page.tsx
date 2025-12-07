import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Politique de Confidentialité | Cabinet Vanessa LAGARRIGUE',
    description: 'Politique de protection des données personnelles (RGPD).',
}

export default function ConfidentialitePage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl font-serif">
                    Politique de Confidentialité
                </h1>
                <p className="mt-4 text-[var(--color-text-muted)]">
                    Protection de vos données personnelles et conformité RGPD.
                </p>
            </div>

            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="prose prose-lg prose-blue text-[var(--color-text-muted)] mx-auto">
                    <p className="lead text-lg">
                        Le cabinet de Vanessa LAGARRIGUE s'engage à ce que la collecte et le traitement de vos données, effectués à partir du présent site, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
                    </p>

                    <hr className="my-12 border-gray-100" />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-4">1. Absence de collecte de données</h2>
                        <p>
                            Ce site internet est un site vitrine informatif. Il ne propose pas de création de compte utilisateur et n'enregistre aucune donnée personnelle.
                        </p>
                        <p>
                            La prise de rendez-vous s'effectue exclusivement via la plateforme externe <strong>Doctolib</strong>, qui gère ses propres données conformément à sa politique de confidentialité stricte.
                        </p>
                    </section>

                    <hr className="my-12 border-gray-100" />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-4">2. Cookies</h2>
                        <p>
                            Les cookies utilisés sur ce site sont uniquement techniques et strictement nécessaires à son bon fonctionnement (affichage, sécurité). Ils ne nécessitent pas de consentement préalable selon les recommandations de la CNIL car ils ne servent pas au traçage publicitaire.
                        </p>
                    </section>

                    <hr className="my-12 border-gray-100" />

                    <section>
                        <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-4">3. Vos droits</h2>
                        <p>
                            Bien que ce site ne stocke pas de données, vous disposez d'un droit d'accès, de rectification et d'effacement concernant les informations que vous auriez pu transmettre par d'autres moyens (téléphone, courrier) dans le cadre de votre dossier médical au cabinet.
                        </p>
                        <p>
                            Pour exercer ces droits, vous pouvez contacter le cabinet par courrier postal à l'adresse indiquée dans les mentions légales.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
