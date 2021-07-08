import Checkout from "./Checkout";

export function Cart({ counter }) {
  return (
    <div>
      <br />
      <Checkout counter={counter} />
    </div>
  );
}
