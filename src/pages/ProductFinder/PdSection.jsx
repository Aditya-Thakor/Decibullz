import ItemCard from "/src/components/ItemCard/Itemcard";

export default function PdSection({ productData }) {
  return (
    <div className="h-auto my-20  ">
      <div className="  w-full px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {productData.map((pd) => (
          <ItemCard
            key={pd._id}
            itmImg={`http://localhost:5000/productImages/${pd.image}`}
            title={pd.productName}
            price={pd.productPrice}
            offer={pd.offer}
            product={pd}
          />
        ))}
      </div>
    </div>
  );
}
