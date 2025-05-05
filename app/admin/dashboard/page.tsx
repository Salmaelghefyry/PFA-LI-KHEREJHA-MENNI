import DashboardLayout from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FolderKanban, AlertTriangle } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <DashboardLayout userRole="admin" userName="Admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord administrateur</h1>
          <p className="text-muted-foreground">Bienvenue sur votre tableau de bord d'administration</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Utilisateurs totaux</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120</div>
              <p className="text-xs text-muted-foreground">+5 ce mois</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Chefs de projet</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">+2 ce mois</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Projets actifs</CardTitle>
              <FolderKanban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 ce mois</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Tâches en retard</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">-2 depuis la semaine dernière</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
              <CardDescription>Les dernières actions effectuées sur la plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    action: "Création d'un compte chef de projet",
                    user: "Admin",
                    time: "Il y a 2 heures",
                  },
                  {
                    action: "Mise à jour des paramètres système",
                    user: "Admin",
                    time: "Il y a 5 heures",
                  },
                  {
                    action: "Création d'un nouveau projet",
                    user: "Sophie Martin (Chef de projet)",
                    time: "Il y a 1 jour",
                  },
                  {
                    action: "Ajout d'un nouvel employé",
                    user: "Admin",
                    time: "Il y a 2 jours",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.action}</p>
                      <p className="text-xs text-muted-foreground">{item.user}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">{item.time}</div>
                  </div>
                ))}
              </div>
            </Card>
            Content>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Statistiques système</CardTitle>
              <CardDescription>Vue d'ensemble des performances du système</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Utilisation CPU</div>
                    <div className="text-sm text-muted-foreground">28%</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[28%]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Utilisation mémoire</div>
                    <div className="text-sm text-muted-foreground">45%</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[45%]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Espace disque</div>
                    <div className="text-sm text-muted-foreground">72%</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[72%]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Temps de réponse API</div>
                    <div className="text-sm text-muted-foreground">120ms</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[20%]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
