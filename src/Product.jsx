import Price from "./Price";
import "./Product.css";

export default function Product({ title, idx }) {
  const oldPrices = ["1234", "456", "7864", "7944"];
  const newPrices = ["2313", "2314", "4321", "3213"];
  let description = [
    ["8000 DPI","5 Programmable buttons"],
    ["intuitive surface","designed for ipad Pro"],
    ["designed for ipad Pro","intuitive surface"],
    ["wireless","designed for ipad Pro"],
  ];
  return (
    <>
      <div className="Product">
        <h4>{title}</h4>
        <ul>
            <li>{description[idx][0]}</li>
            <li>{description[idx][1]}</li>
        </ul>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </>
  );
}
