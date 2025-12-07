import { Button } from "@/components/ui/button"
import { CalendarCheck, ArrowRight, Star, MapPin } from "lucide-react"

export function Hero() {
    return (
        <div className="relative isolate pt-14 overflow-hidden bg-white">

            {/* --- BACKGROUND EFFECTS (Optimized to be softer) --- */}
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-secondary)] to-[var(--color-primary-light)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">

                        {/* 1. BADGE DE STATUT (Confiance immédiate) */}
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-[var(--color-text-muted)] ring-1 ring-[var(--color-border)] hover:ring-[var(--color-secondary)] transition-all bg-white/50 backdrop-blur-sm">
                                <span className="font-semibold text-[var(--color-secondary)]">Ouvert</span>{' '}
                                <span className="mx-1 text-gray-300">|</span> Nouveaux patients acceptés
                                <a href="#cabinet" className="font-semibold text-[var(--color-primary)] ml-2">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Voir le cabinet <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* 2. HEADLINES (H1 + Sub) */}
                        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-6xl font-serif">
                            Retrouvez le plaisir de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                                marcher sans douleur
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Cabinet d'expertise en <strong>Pédicurie</strong>, <strong>Podologie du Sport</strong> et <strong>Posturologie</strong>. Vanessa Lagarrigue vous accompagne pour des soins cliniques et la conception de semelles sur-mesure à Toulouse.
                        </p>

                        {/* 3. CALL TO ACTION (Conversion) */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                            <Button size="lg" className="w-full sm:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white h-12 px-8 text-base shadow-lg shadow-blue-900/10 transition-all hover:-translate-y-0.5" asChild>
                                <a href="https://www.doctolib.fr/pedicure-podologue/toulouse/vanessa-lagarrigue" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <CalendarCheck className="h-5 w-5" />
                                    Prendre RDV sur Doctolib
                                </a>
                            </Button>

                            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-[var(--color-text-main)] hover:bg-[var(--color-surface)]" asChild>
                                <a href="#expertises" className="flex items-center gap-2">
                                    Découvrir les soins <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                        </div>

                        {/* 4. TRUST INDICATOR (Preuve Sociale) */}
                        <div className="mt-10 flex items-center justify-center gap-x-6 border-t border-[var(--color-border)] border-dashed pt-8 mx-auto max-w-sm sm:max-w-none">
                            <div className="flex items-center gap-x-2">
                                <div className="flex -space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <div className="text-sm text-[var(--color-text-muted)]">
                                    <span className="font-bold text-[var(--color-text-main)]">4.9/5</span> sur Google
                                </div>
                            </div>
                            <div className="h-4 w-px bg-gray-300" />
                            <div className="flex items-center gap-x-2 text-sm text-[var(--color-text-muted)]">
                                <MapPin className="h-4 w-4 text-[var(--color-secondary)]" />
                                Toulouse (31200)
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Gradient - Balanced */}
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--color-primary-light)] to-[var(--color-secondary)] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}