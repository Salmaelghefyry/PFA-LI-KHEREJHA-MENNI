"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  BarChart,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  User,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: "admin" | "manager" | "employee"
  userName: string
}

export default function DashboardLayout({ children, userRole, userName }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const roleBasedRoutes = {
    admin: [
      {
        name: "Tableau de bord",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Utilisateurs",
        href: "/admin/users",
        icon: Users,
      },
      {
        name: "Rapports",
        href: "/admin/reports",
        icon: BarChart,
      },
      {
        name: "Paramètres",
        href: "/admin/settings",
        icon: Settings,
      },
    ],
    manager: [
      {
        name: "Tableau de bord",
        href: "/manager/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Projets",
        href: "/manager/projects",
        icon: FolderKanban,
      },
      {
        name: "Équipes",
        href: "/manager/teams",
        icon: Users,
      },
      {
        name: "Tâches",
        href: "/manager/tasks",
        icon: CheckSquare,
      },
      {
        name: "Rapports",
        href: "/manager/reports",
        icon: BarChart,
      },
    ],
    employee: [
      {
        name: "Tableau de bord",
        href: "/employee/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Mes tâches",
        href: "/employee/tasks",
        icon: CheckSquare,
      },
      {
        name: "Mes projets",
        href: "/employee/projects",
        icon: FolderKanban,
      },
    ],
  }

  const routes = roleBasedRoutes[userRole]

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for mobile */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden",
          sidebarOpen ? "block" : "hidden",
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-card shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          sidebarOpen || isDesktop ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <FolderKanban className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ProManage</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )}
              >
                <route.icon className="h-5 w-5" />
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
            <Link href="/login">
              <LogOut className="h-4 w-4" />
              Déconnexion
            </Link>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center gap-4 border-b bg-card px-6">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 hover:bg-accent">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="hidden md:inline-block">{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profil</DropdownMenuItem>
                <DropdownMenuItem>Paramètres</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login">Déconnexion</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
