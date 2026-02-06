import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6">
          Let's Work Together
        </h2>
        <p className="text-xl text-zinc-400 mb-12 sm:whitespace-nowrap max-w-none overflow-visible">
          Have a project in mind? I'd love to hear from you. Send me a message and let's create something amazing.
        </p>
        <ContactForm />
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          <a
            href="mailto:connect.mayen@gmail.com"
            className="group"
            aria-label="Email"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center">
              <Image
                src="/gmail.png"
                alt="Gmail"
                fill
                className="object-contain scale-120"
                loading="eager"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/connectmayen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="LinkedIn"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                fill
                className="object-contain scale-180"
                loading="eager"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/connectmayen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Instagram"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center">
              <Image
                src="/instagram.png"
                alt="Instagram"
                fill
                className="object-contain scale-190"
                loading="eager"
              />
            </div>
          </a>
          <a
            href="https://wa.me/+8801704486373"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="WhatsApp"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center">
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                fill
                className="object-contain scale-140"
                loading="eager"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
