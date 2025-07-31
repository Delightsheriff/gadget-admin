import React from "react";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TODO: Check if user is authenticated
  // If not authenticated, redirect to login page
  return <>{children}</>;
}

export default RootLayout;
