import DashboardLayout from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FolderKanban, CheckSquare, Clock, Plus } from "lucide-react"
import Link from "next/link"

export default function ManagerDashboardPage() {
  return (
    <DashboardLayout userRole="manager" userName="Sophie Martin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tableau de bord chef de projet</h1>
            <p className="text-muted-foreground">Bienvenue, Sophie. Voici l'état de vos projets et tâches.</p>
          </div>
          <Button asChild>
            <Link href="/manager/projects/new">
              <Plus className="mr-2 h-4 w-4" /> Nouveau projet
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Projets actifs</CardTitle>
              <FolderKanban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">+1 ce mois</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Membres d'équipe</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Répartis sur 5 projets</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Tâches en cours</CardTitle>
              <CheckSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">8 terminées cette semaine</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Tâches en retard</CardTitle>
              <Clock className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-destructive">Nécessite votre attention</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects">
          <TabsList>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="tasks">Tâches récentes</TabsTrigger>
            <TabsTrigger value="team">Équipe</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Vos projets</CardTitle>
                <CardDescription>Liste de tous vos projets actifs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Refonte du site web",
                      progress: 75,
                      members: 4,
                      tasks: 12,
                      dueDate: "15/06/2025",
                    },
                    {
                      name: "Application mobile v2",
                      progress: 45,
                      members: 3,
                      tasks: 18,
                      dueDate: "30/07/2025",
                    },
                    {
                      name: "Intégration API partenaires",
                      progress: 30,
                      members: 2,
                      tasks: 8,
                      dueDate: "10/08/2025",
                    },
                    {
                      name: "Optimisation base de données",
                      progress: 90,
                      members: 1,
                      tasks: 5,
                      dueDate: "20/05/2025",
                    },
                    {
                      name: "Mise à jour sécurité",
                      progress: 10,
                      members: 2,
                      tasks: 7,
                      dueDate: "25/08/2025",
                    },
                  ].map((project, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">{project.name}</h3>
                        <span className="text-sm text-muted-foreground">Échéance: {project.dueDate}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progression: {project.progress}%</span>
                          <span>{project.tasks} tâches</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${project.progress}%` }} />
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex -space-x-2">
                            {Array(project.members)
                              .fill(0)
                              .map((_, j) => (
                                <div
                                  key={j}
                                  className="h-8 w-8 rounded-full bg-muted flex items-center justify-center border-2 border-background text-xs font-medium"
                                >
                                  {String.fromCharCode(65 + j)}
                                </div>
                              ))}
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/manager/projects/${i}`}>Détails</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tâches récentes</CardTitle>
                <CardDescription>Les tâches récemment créées ou mises à jour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Concevoir la nouvelle page d'accueil",
                      project: "Refonte du site web",
                      assignee: "Thomas D.",
                      status: "En cours",
                      dueDate: "10/05/2025",
                    },
                    {
                      title: "Implémenter l'authentification OAuth",
                      project: "Application mobile v2",
                      assignee: "Julie M.",
                      status: "En attente",
                      dueDate: "15/05/2025",
                    },
                    {
                      title: "Optimiser les requêtes SQL",
                      project: "Optimisation base de données",
                      assignee: "Marc L.",
                      status: "Terminée",
                      dueDate: "02/05/2025",
                    },
                    {
                      title: "Tester l'API des partenaires",
                      project: "Intégration API partenaires",
                      assignee: "Sophie B.",
                      status: "En retard",
                      dueDate: "01/05/2025",
                    },
                  ].map((task, i) => (
                    <div key={i} className="flex items-start justify-between rounded-lg border p-4">
                      <div className="space-y-1">
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-muted-foreground">Projet: {task.project}</p>
                        <p className="text-sm">Assignée à: {task.assignee}</p>
                      </div>
                      <div className="text-right">
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
                        <p className="mt-1 text-xs text-muted-foreground">Échéance: {task.dueDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Membres de l'équipe</CardTitle>
                  <CardDescription>Gérez les membres de votre équipe</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" /> Ajouter
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Thomas Dubois",
                      role: "Développeur Frontend",
                      email: "thomas.d@example.com",
                      tasks: 5,
                      projects: 2,
                    },
                    {
                      name: "Julie Martin",
                      role: "Développeur Mobile",
                      email: "julie.m@example.com",
                      tasks: 4,
                      projects: 1,
                    },
                    {
                      name: "Marc Leroy",
                      role: "Administrateur BDD",
                      email: "marc.l@example.com",
                      tasks: 3,
                      projects: 2,
                    },
                    {
                      name: "Sophie Bernard",
                      role: "Développeur Backend",
                      email: "sophie.b@example.com",
                      tasks: 6,
                      projects: 3,
                    },
                    {
                      name: "Pierre Durand",
                      role: "Designer UI/UX",
                      email: "pierre.d@example.com",
                      tasks: 4,
                      projects: 2,
                    },
                  ].map((member, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <p>{member.tasks} tâches</p>
                        <p>{member.projects} projets</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
