

function ProductPage({ computer }) {
  const { name, price, image } = computer;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} /> {/* Alt text should describe the image */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-secondary">৳{price}</div>
        <p>If a dog chews shoes whose shoes does he choose?</p> {/* Placeholder text */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
