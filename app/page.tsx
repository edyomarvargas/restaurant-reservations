import Header from "./components/Header";
import RestauranteCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestauranteCard />
      </div>
    </main>
  );
}
