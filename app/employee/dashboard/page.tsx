import DashboardLayout from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckSquare, Clock, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function EmployeeDashboardPage() {
  return (
    <DashboardLayout userRole="employee" userName="Thomas Dubois">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord employé</h1>
          <p className="text-muted-foreground">Bienvenue, Thomas. Voici l'état de vos tâches.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Tâches totales</CardTitle>
              <CheckSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Sur 2 projets</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">En cours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Progression moyenne: 60%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">En retard</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-destructive">Nécessite votre attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Terminées</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Cette semaine</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Mes tâches</CardTitle>
            <CardDescription>Vos tâches en cours et à venir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Concevoir la nouvelle page d'accueil",
                  project: "Refonte du site web",
                  status: "En cours",
                  progress: 75,
                  dueDate: "10/05/2025",
                  priority: "Haute",
                },
                {
                  title: "Intégrer les composants React",
                  project: "Refonte du site web",
                  status: "En cours",
                  progress: 45,
                  dueDate: "15/05/2025",
                  priority: "Moyenne",
                },
                {
                  title: "Optimiser le responsive design",
                  project: "Refonte du site web",
                  status: "En attente",
                  progress: 0,
                  dueDate: "20/05/2025",
                  priority: "Basse",
                },
                {
                  title: "Corriger les bugs d'affichage",
                  project: "Application mobile v2",
                  status: "En retard",
                  progress: 30,
                  dueDate: "01/05/2025",
                  priority: "Critique",
                },
                {
                  title: "Tester la compatibilité navigateurs",
                  project: "Refonte du site web",
                  status: "En cours",
                  progress: 20,
                  dueDate: "18/05/2025",
                  priority: "Moyenne",
                },
              ].map((task, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="space-y-1">
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">Projet: {task.project}</p>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        task.status === "En cours"
                          ? "bg-blue-100 text-blue-800"
                          : task.status === "En attente"
                            ? "bg-yellow-100 text-yellow-800"
                            : task.status === "Terminée"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progression: {task.progress}%</span>
                      <span>Échéance: {task.dueDate}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${task.status === "En retard" ? "bg-destructive" : "bg-primary"}`}
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span
                        className={`text-xs font-medium ${
                          task.priority === "Critique"
                            ? "text-destructive"
                            : task.priority === "Haute"
                              ? "text-amber-600"
                              : task.priority === "Moyenne"
                                ? "text-blue-600"
                                : "text-green-600"
                        }`}
                      >
                        Priorité: {task.priority}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/employee/tasks/${i}`}>Mettre à jour</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
