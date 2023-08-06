import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact App",
  description: "Contact sushi description",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Contact Layout</div>
      {children}
    </>
  );
}
