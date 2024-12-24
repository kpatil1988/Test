import AppHeader from "@/components/App/AppHeader";
import Navbar from "@/components/App/Navbar";

export default function DashboardRootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <AppHeader />
      <div className="flex min-h-screen">
        <Navbar />
        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </>
  );
}