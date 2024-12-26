import Problems from "@/components/Problems/Problems";
import Header from "@/components/Header/Header";

export default function ChallengesPage() {
  return (
    <>
      <section className="px-10 md:px-20" >
        <h2 className="text-center mb-10">
          <Header text="" />
        </h2>
        <Problems />
      </section>
    </>
  );
}
