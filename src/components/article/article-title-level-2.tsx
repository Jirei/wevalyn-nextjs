import React from "react";

export function ArticleTitleLevel2({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl font-bold text-primary dark:text-primary-light-dark-theme">
      {children}
    </h2>
  );
}
