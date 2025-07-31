import React from "react";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TODO: Check if user is authenticated
  // If not authenticated, redirect to login page
  return <>{children}</>;
}

export default AdminLayout;
