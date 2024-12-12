import WindowStart from "@/components/windowStart";

import Titles from "@/components/titles";
import Heroes from "@/components/heores";
import Stats from "@/components/stats";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <WindowStart />
      <Titles />
      <Heroes />
      <Stats />
      <Footer />
    </div>
  );
}
