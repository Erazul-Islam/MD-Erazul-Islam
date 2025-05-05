import Cursor from "@/components/ui/cursor/Cursor";

export default function Home() {
  return (
    <section
      className="h-screen"
      style={{ backgroundImage: "url('/banner-background-one.jpg')" }}
    >
      <Cursor />
      <div className="max-w-7xl md:px-6 mx-auto">
        <div className="md:pt-[20%] md:text-5xl">
          Hi, <br /> I am{" "}
          <span className="text-pink-600">Md. Erazul Islam </span>a
        </div>
      </div>
    </section>
  );
}
