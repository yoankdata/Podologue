import { Metadata } from 'next'
import { Euro, CreditCard, ShieldCheck, Banknote } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Tarifs & Remboursements | Cabinet Vanessa LAGARRIGUE',
    description: 'Tarifs Pédicure-Podologue Toulouse. Prix des consultations, semelles orthopédiques et soins. Informations sur les remboursements Sécurité Sociale et Mutuelles.',
}

const pricing = [
    { name: "Soin de Pédicurie", price: "38 €", description: "Traitement complet des affections cutanées et unguéales. (Env. 45 min)" },
    { name: "Bilan Podologique", price: "50 €", description: "Examen clinique complet, statique et dynamique, sans semelles." },
    { name: "Semelles Orthopédiques (Pointure < 37)", price: "125 €", description: "Bilan podologique inclus + Paire de semelles sur-mesure." },
    { name: "Semelles Orthopédiques (Pointure > 37)", price: "135 €", description: "Bilan podologique inclus + Paire de semelles sur-mesure." },
    { name: "Consultation de suivi / Vérification", price: "30 €", description: "Contrôle des semelles ou petit soin spécifique." },
    { name: "Soin à domicile", price: "43 €", description: "Déplacement inclus sur le secteur Toulouse Sept Deniers / Blagnac." },
]

export default function TarifsPage() {
    return (
        <div className="bg-white py-32 sm:py-48">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl font-serif">
                        Tarifs & Remboursements
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
                        La transparence est essentielle. Voici la grille tarifaire des actes pratiqués au cabinet.
                    </p>
                </div>

                {/* PRICING TABLE */}
                <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 sm:mx-0 sm:max-w-none">
                    <div className="p-0">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[var(--color-surface)]">
                                <tr>
                                    <th scope="col" className="py-4 pl-6 pr-3 text-left text-sm font-semibold text-[var(--color-primary)] sm:pl-8">Acte</th>
                                    <th scope="col" className="px-3 py-4 text-left text-sm font-semibold text-[var(--color-primary)] hidden sm:table-cell">Détail</th>
                                    <th scope="col" className="py-4 pl-3 pr-6 text-right text-sm font-semibold text-[var(--color-primary)] sm:pr-8">Tarif</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                {pricing.map((item) => (
                                    <tr key={item.name} className="hover:bg-[var(--color-surface)]/50 transition-colors">
                                        <td className="whitespace-normal py-5 pl-6 pr-3 text-sm font-medium text-[var(--color-text-main)] sm:pl-8">
                                            {item.name}
                                            <div className="sm:hidden font-normal text-xs text-[var(--color-text-muted)] mt-1">{item.description}</div>
                                        </td>
                                        <td className="whitespace-normal px-3 py-5 text-sm text-[var(--color-text-muted)] hidden sm:table-cell">
                                            {item.description}
                                        </td>
                                        <td className="whitespace-nowrap py-5 pl-3 pr-6 text-right text-sm font-bold text-[var(--color-text-main)] sm:pr-8">
                                            {item.price}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* INFO BOTTOM GRID */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col bg-[var(--color-surface)] p-8 rounded-2xl">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[var(--color-text-main)]">
                                <ShieldCheck className="h-6 w-6 flex-none text-[var(--color-secondary)]" aria-hidden="true" />
                                Remboursements
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[var(--color-text-muted)]">
                                <p className="flex-auto">
                                    Les soins de pédicurie ne sont que très faiblement remboursés par la Sécurité Sociale (hors patients diabétiques gradés).<br />
                                    Cependant, de nombreuses <strong>Mutuelles</strong> prennent en charge une partie ou la totalité des soins. Une facture vous sera remise sur demande.
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col bg-[var(--color-surface)] p-8 rounded-2xl">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[var(--color-text-main)]">
                                <Euro className="h-6 w-6 flex-none text-[var(--color-secondary)]" aria-hidden="true" />
                                Semelles Orthopédiques
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[var(--color-text-muted)]">
                                <p className="flex-auto">
                                    Les semelles orthopédiques bénéficient d'une base de remboursement Sécurité Sociale (environ 28€). Le complément est généralement pris en charge par votre complémentaire santé (Mutuelle).
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col bg-[var(--color-surface)] p-8 rounded-2xl">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[var(--color-text-main)]">
                                <CreditCard className="h-6 w-6 flex-none text-[var(--color-secondary)]" aria-hidden="true" />
                                Moyens de paiement
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[var(--color-text-muted)]">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Banknote className="w-5 h-5 text-gray-500" />
                                        <span>Espèces</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center text-[10px] font-serif">Chq</div>
                                        <span>Chèques (Membre d'une AGA)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CreditCard className="w-5 h-5 text-gray-500" />
                                        <span>Carte Bancaire acceptée</span>
                                    </div>
                                </div>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
