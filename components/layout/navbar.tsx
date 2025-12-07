"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation" // AJOUT CRITIQUE
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Soins & Actes", href: "/soins" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Le Cabinet", href: "/cabinet" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pathname = usePathname() // Pour savoir sur quelle page on est

    // Fonction utilitaire pour vérifier si un lien est actif
    const isActive = (path: string) => pathname === path

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm transition-all duration-200">
            <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">

                {/* LOGO */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Cabinet Vanessa LAGARRIGUE</span>
                        <img
                            src="/images/logo.png"
                            alt="Logo Cabinet Vanessa Lagarrigue"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Ouvrir le menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                            className={cn(
                                "text-sm font-medium leading-6 transition-all duration-200 hover:text-[var(--color-primary)] relative py-1",
                                isActive(item.href)
                                    ? "text-[var(--color-primary)] font-semibold"
                                    : "text-[var(--color-text-muted)]"
                            )}
                        >
                            {item.name}
                            {/* Petit point indicateur sous le lien actif */}
                            {isActive(item.href) && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-secondary)] rounded-full animate-in fade-in zoom-in duration-300" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* DESKTOP CTA */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
                    <a href="tel:0561574242" className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-primary)] flex items-center gap-2 mr-2">
                        <Phone className="w-4 h-4" />
                        05 61 57 42 42
                    </a>
                    <Button asChild className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-md">
                        <a href="https://www.doctolib.fr/pedicure-podologue/toulouse/vanessa-lagarrigue" target="_blank" rel="noopener noreferrer">
                            Prendre RDV
                        </a>
                    </Button>
                </div>
            </nav>

            {/* MOBILE MENU (Drawer) */}
            {/* Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--color-background)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[var(--color-border)] shadow-xl animate-in slide-in-from-right duration-300">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                                <span className="sr-only">Accueil</span>
                                <img
                                    src="/images/logo.png"
                                    alt="Logo Cabinet"
                                    className="h-10 w-auto object-contain"
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Fermer le menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="mt-8 flow-root">
                            <div className="-my-6 divide-y divide-[var(--color-border)]">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-[var(--color-surface)] transition-colors",
                                                isActive(item.href)
                                                    ? "text-[var(--color-primary)] bg-[var(--color-surface)]"
                                                    : "text-[var(--color-text-main)]"
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6 space-y-4">
                                    <a
                                        href="tel:0561574242"
                                        className="flex items-center justify-center gap-2 w-full text-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[var(--color-text-main)] hover:bg-[var(--color-surface)] border border-[var(--color-border)]"
                                    >
                                        <Phone className="w-4 h-4" />
                                        05 61 57 42 42
                                    </a>
                                    <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white" asChild onClick={() => setMobileMenuOpen(false)}>
                                        <a href="https://www.doctolib.fr/pedicure-podologue/toulouse/vanessa-lagarrigue" target="_blank" rel="noopener noreferrer">
                                            Prendre rendez-vous
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}