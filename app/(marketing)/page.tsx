import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Footer from "./_components/footer";

export default function MarketingPage() {
  return (
    <div className="flex min-h-full flex-col">
      <div className="md::justify-start flex flex-1 flex-col items-center justify-center gap-y-8 px-6 text-center">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
