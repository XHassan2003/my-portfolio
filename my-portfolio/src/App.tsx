import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import About from "./components/About";
import Stack from "./components/Stack";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Divider() {
  return <div className="border-t border-foreground/10" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-accent-foreground">
      <Header />
      <Hero />
      <Divider />
      <Work />
      <Divider />
      <Experience />
      <Divider />
      <About />
      <Divider />
      <Stack />
      <Divider />
      <Certifications />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
