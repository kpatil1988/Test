import LeftSideNav from "@/components/App_old/LeftSideNav";

export default function DashboardRootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
        {/* <div className=""> */}
          <div className="flex gap-44 absolute">
            <LeftSideNav />
            {children}
          </div>
        {/* </div> */}
    </>
  );
}
