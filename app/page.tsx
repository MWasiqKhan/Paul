import {
  About,
  BookLedger,
  Contact,
  Featured,
  Fondements,
  Hero,
  Newsletter,
  Paroles,
  Reflections,
  Vision,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Fondements />
      <About />
      <Featured />
      <BookLedger />
      <Vision />
      <Reflections />
      <Paroles />
      <Newsletter />
      <Contact />
    </>
  );
}
