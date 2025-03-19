import ProductCard from "./productCard";
import product1 from "../assets/image/product1.jpg";
import product2 from "../assets/image/product2.jpg";
import product3 from "../assets/image/product3.jpg";

const products = [
  {
    id: 1,
    name: "bat",
    price: 1200,
    image: product1,
    desc: "a specialised piece of equipment used by batters in the sport of cricket to hit the ball",
  },
  {
    id: 2,
    name: "football",
    price: 2000,
    image: product2,
    desc: "An American football is an oval-shaped ball used for playing American football.",
  },
  {
    id: 3,
    name: "badminton racket",
    price: 1000,
    image: product3,
    desc: "Badminton is a racket sport that is played by two or four players. A singles game involves one person playing against another, and a doubles game is when two players play against another two players"
  },
];

export default function ProductList({ onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  );
}
