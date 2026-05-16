"use client";

import { useAuthStore } from "../../stores/auth.store";
import { LogOut, Users, CheckSquare } from "lucide-react";

export default function DashboardPage() {
  const { user, logout } = useAuthStore();

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-outfit font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground mt-1">
            Bienvenue, {user?.email}
          </p>
        </div>
        <button 
          onClick={() => logout()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-destructive/20 text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Déconnexion</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Module Card: Children */}
        <div className="glass dark:glass-dark p-6 rounded-2xl hover:-translate-y-1 transition-transform cursor-pointer group">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Gestion des Enfants</h2>
          <p className="text-muted-foreground text-sm">
            Ajouter, modifier ou consulter le profil des enfants inscrits.
          </p>
        </div>

        {/* Module Card: Attendance */}
        <div className="glass dark:glass-dark p-6 rounded-2xl hover:-translate-y-1 transition-transform cursor-pointer group">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <CheckSquare className="w-6 h-6 text-emerald-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Présences</h2>
          <p className="text-muted-foreground text-sm">
            Marquer la présence pour le culte en cours.
          </p>
        </div>

      </div>

    </div>
  );
}
