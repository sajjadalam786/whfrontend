import type { Metadata } from "next";
import "./globals.css";
import LeftSidebar from "../components/navigations/leftsidebar/page";
// import Header from "../components/header/page";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Wholesale House Maseter - Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        {/* <div className="ml-64">
          <Header />
        </div> */}
        {/* Left Sidebar */}
        <div className="flex min-h-screen">
          <LeftSidebar />
          <main className="flex-1 lg:ml-64 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
