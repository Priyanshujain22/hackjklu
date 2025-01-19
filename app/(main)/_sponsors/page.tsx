import Header from "@/components/Header/Header";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function SponsorsPage() {
  return (
    <>
      <section className="px-10 relative pt-24" >
        <h2 className="text-center mb-10">
          <Header text="Sponsors" />
        </h2>
        <Sponsors />
      </section>
    </>
  );
}
