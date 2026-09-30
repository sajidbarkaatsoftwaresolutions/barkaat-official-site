import Navbar from "../../components/Navbar";
import ContactForm from "./ContactForm";

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
