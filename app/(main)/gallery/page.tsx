import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";

export default function GalleryPage() {
  return (
    <>
      <section className="px-10 md:px-20" >
        <h2 className="text-center mb-10">
          <Header text="Gallery" />
        </h2>
        <Gallery />
      </section>
    </>
  );
}
