import LayeredCards from "@/components/LayeredCards";
import CircullarImages from "@/components/CircullarImages";
import SocialCards from "@/components/SocialCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <LayeredCards />
      <CircullarImages />
      <SocialCards />
    </main>
  );
}
