import Navbar from "../../components/Navbar";
import ContactForm from "./ContactForm";

export const runtime = "nodejs";

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
