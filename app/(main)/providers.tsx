"use client";

import React from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div>{children}</div>;
}
