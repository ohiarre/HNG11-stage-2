import Navbar from "./components/Navbar";
import Listings from "./components/Listings";
import Products from "./components/Products";
import Footer from "./components/Footer";
import SearchbarSm from "./components/SearchbarSm";


export default function Home() {
  return (
    <div>
    <main className="bg-white max-w-[1200px] mx-auto">
      {/* navbar */}
      <Navbar />
      <SearchbarSm />
      {/* listings */}
      <Listings />
      {/* products */}
      <Products />
    </main>
      {/* footer */}
      <footer>
      <Footer />
      </footer>
    </div>
  );
}
