"use client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid/Grid";
import { Hero } from "@/components/Hero/Hero";
import RecentProjects from "@/components/RecentProjects/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
