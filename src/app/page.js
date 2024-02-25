import Bennerpage from "@/components/home/Benner";
import FooterPage from "@/components/home/Footer";
import HeadingPage from "@/components/home/Heading";
import Navbarpage from "@/components/home/Navbar";
import TrendingPostpage from "@/components/home/TrendingPost";
import WorldnewsPage from "@/components/home/Worldnews";
 

export default function Home() {
  return (
    <div>
       <Navbarpage></Navbarpage>
       <HeadingPage></HeadingPage>
       <Bennerpage></Bennerpage>
      <TrendingPostpage></TrendingPostpage>
      <WorldnewsPage></WorldnewsPage>
      <FooterPage></FooterPage>

    </div>
  );
}
