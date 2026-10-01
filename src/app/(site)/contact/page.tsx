import Navbar from "../../../components/layout/Navbar";
import ContactForm from "../../../components/contact/ContactForm";

/** Renders the statically exported contact page. */
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-0">
        <ContactForm />
      </div>
    </>
  );
}
