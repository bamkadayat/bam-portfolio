import Contact from "@/components/contact";
import ContactAddr from "@/components/contact-Addr";

export default function ContactPage() {
  return (
    <div className="container">
      <div className="page-margin grid md:grid-cols-2 gap-4 mb-10">
        <div className="mb-5 md:mb-0">
          <Contact />
        </div>
        <div className="md:justify-self-end md:mt-[52px]">
          <ContactAddr />
        </div>
      </div>
    </div>
  );
}
