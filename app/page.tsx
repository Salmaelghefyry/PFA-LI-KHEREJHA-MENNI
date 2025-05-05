import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">ProManage</h1>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/login">Connexion</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Plateforme de Gestion de Projets Collaborative
          </h1>
          <p className="text-xl text-muted-foreground">
            Gérez vos projets, équipes et tâches efficacement avec notre solution complète
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link href="/login">Commencer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 px-6 text-center text-sm text-muted-foreground">
        <p>© 2025 ProManage. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
