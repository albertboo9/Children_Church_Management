import ProtectedRoute from "../../components/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        {/* Later: Add Top Navigation Bar or Bottom Tab Bar here */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center">
            <div className="mr-4 flex">
              <a className="mr-6 flex items-center space-x-2" href="/dashboard">
                <span className="font-bold sm:inline-block">CCMS Dashboard</span>
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </ProtectedRoute>
  );
}
