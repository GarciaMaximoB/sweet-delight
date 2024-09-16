export default function CardProduct({ image, name, description, price }) {
  return (
    <div className="product">
      <img src={image} alt=""/>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
