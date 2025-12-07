import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-[var(--color-primary)]">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-5xl font-serif">
                    Page introuvable
                </h1>
                <p className="mt-6 text-base leading-7 text-[var(--color-text-muted)]">
                    Désolé, nous n'avons pas trouvé la page que vous recherchez.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button asChild className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]">
                        <Link href="/">
                            Retour à l'accueil
                        </Link>
                    </Button>
                    <Link href="/contact" className="text-sm font-semibold text-[var(--color-text-main)] hover:text-[var(--color-primary)]">
                        Contacter le support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
