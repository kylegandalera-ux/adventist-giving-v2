import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Connect with the Adventist Giving Luzon demo team."
        description="Use this sample contact page as a placeholder for official conference, mission, or treasury contacts when the platform becomes real."
      />
      <section className="bg-linen px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-navy-950 p-8 text-white shadow-soft">
            <h2 className="font-serif text-3xl font-bold">Demo contact details</h2>
            <div className="mt-7 grid gap-5 text-white/75">
              <p className="flex items-center gap-3"><Mail className="text-gold-400" size={20} /> giving.luzon@example.org</p>
              <p className="flex items-center gap-3"><Phone className="text-gold-400" size={20} /> +63 900 000 0000</p>
              <p className="flex items-center gap-3"><MapPin className="text-gold-400" size={20} /> Luzon, Philippines</p>
            </div>
          </div>
          <form className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="focus-ring rounded-2xl border border-navy-900/10 bg-cloud px-4 py-3 text-sm" placeholder="Full name" />
              <input className="focus-ring rounded-2xl border border-navy-900/10 bg-cloud px-4 py-3 text-sm" placeholder="Email address" />
              <input className="focus-ring rounded-2xl border border-navy-900/10 bg-cloud px-4 py-3 text-sm md:col-span-2" placeholder="Subject" />
              <textarea className="focus-ring min-h-36 rounded-2xl border border-navy-900/10 bg-cloud px-4 py-3 text-sm md:col-span-2" placeholder="Message" />
            </div>
            <button type="button" className="focus-ring mt-6 rounded-full bg-gold-500 px-6 py-3 text-sm font-black text-navy-950 shadow-glow">
              Send Demo Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
