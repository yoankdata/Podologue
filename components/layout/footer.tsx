import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const navigation = {
    main: [
        { name: 'Soins', href: '/soins' },
        { name: 'Tarifs', href: '/tarifs' },
        { name: 'Le Cabinet', href: '/cabinet' },
        { name: 'Contact', href: '/contact' },
    ],
    legal: [
        { name: 'Mentions légales', href: '/mentions-legales' },
        { name: 'Politique de confidentialité', href: '/confidentialite' },
    ]
};

export function Footer() {
    // Lien Google Maps pré-rempli pour Toulouse
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Cabinet+Vanessa+LAGARRIGUE+98+Route+de+Blagnac+31200+Toulouse";

    return (
        <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-16 pb-8" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">

                    {/* COL 1 : Navigation Rapide */}
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="mt-6 space-y-4">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COL 2 : Contact & Accès (L'utile) */}
                    <div className="lg:col-span-1">
                        <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider flex items-center gap-2">
                            <MapPin className="h-4 w-4" /> Coordonnées
                        </h3>
                        <ul className="mt-6 space-y-6 text-sm text-[var(--color-text-muted)]">
                            <li>
                                <p className="font-medium text-[var(--color-text-main)] mb-1">Cabinet Vanessa LAGARRIGUE</p>
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[var(--color-primary)] hover:underline decoration-[var(--color-secondary)] underline-offset-4 transition-all"
                                >
                                    98 Route de Blagnac<br />
                                    31200 Toulouse
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:0561574242"
                                    className="inline-flex items-center gap-2 text-lg font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    <Phone className="h-4 w-4" />
                                    05 61 57 42 42
                                </a>
                                <p className="text-xs mt-1 text-[var(--color-text-muted)]">Secrétariat téléphonique</p>
                            </li>
                        </ul>
                    </div>

                    {/* COL 3 & 4 : Horaires (Plus large pour la lisibilité) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider flex items-center gap-2">
                            <Clock className="h-4 w-4" /> Horaires de consultation
                        </h3>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
                                <li className="flex justify-between border-b border-[var(--color-border)] pb-2 border-dashed">
                                    <span>Lundi - Jeudi</span>
                                    <span className="font-medium text-[var(--color-text-main)]">08h00 - 19h00</span>
                                </li>
                                <li className="flex justify-between border-b border-[var(--color-border)] pb-2 border-dashed">
                                    <span>Vendredi</span>
                                    <span className="font-medium text-[var(--color-text-main)]">08h00 - 18h30</span>
                                </li>
                                <li className="flex justify-between opacity-60">
                                    <span>Samedi - Dimanche</span>
                                    <span>Fermé</span>
                                </li>
                            </ul>

                            <div className="bg-white p-4 rounded-[var(--radius-md)] border border-[var(--color-border)] shadow-sm">
                                <p className="text-sm text-[var(--color-text-main)] font-medium mb-2">Une urgence ?</p>
                                <p className="text-xs text-[var(--color-text-muted)] mb-3">
                                    En cas d'urgence médicale grave, composez le 15. Pour une urgence podologique, laissez un message.
                                </p>
                                <Link
                                    href="https://www.doctolib.fr"
                                    target="_blank"
                                    className="block w-full text-center bg-[var(--color-primary)] text-white text-sm font-medium py-2 rounded-[var(--radius-sm)] hover:bg-[var(--color-primary-hover)] transition-colors"
                                >
                                    Prendre Rendez-vous
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="mt-16 border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-[var(--color-text-muted)]">
                        &copy; {new Date().getFullYear()} Cabinet Vanessa LAGARRIGUE. Tous droits réservés.
                    </p>
                    <div className="flex space-x-6">
                        {navigation.legal.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}