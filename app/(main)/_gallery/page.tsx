import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Carousel from "@/components/Commitee/committee";

export default function GalleryPage() {
  return (
    <>
      <section className="px-10 relative pt-24" >
        <h2 className="text-center mb-10">
          <Header text="Gallery" />
        </h2>
        <Gallery />
        <Carousel />
      </section>
    </>
  );
}
