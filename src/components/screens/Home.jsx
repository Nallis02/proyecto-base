import { MyContext } from "../context/MyContext";
function Home() {
  const {product} = MyContext();
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} height={200} width={200}/>
      <p>{product.desc}</p>
    </div>
  );
}
export default Home;
