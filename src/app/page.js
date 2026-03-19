import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
// O Claude depois adiciona aqui o Testimonials e o Footer

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <ContactForm />
    </main>
  );
}