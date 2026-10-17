import { useState } from "react";

type ProjectProps = {
  search: string;
  category: string;
  addToCart: () => void;
};

function Project({ search, category, addToCart }: ProjectProps) {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Premium Oversized Tee",
      category: "Men",
      price: 2499,
      oldPrice: 3499,
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 2,
      name: "Classic Women's Dress",
      category: "Women",
      price: 3999,
      oldPrice: 5499,
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 3,
      name: "Urban Runner Sneakers",
      category: "Shoes",
      price: 5999,
      oldPrice: 7499,
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 4,
      name: "Minimal Leather Bag",
      category: "Accessories",
      price: 4499,
      oldPrice: 5999,
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 5,
      name: "Modern Casual Shirt",
      category: "Men",
      price: 3299,
      oldPrice: 4299,
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 6,
      name: "Elegant Fashion Top",
      category: "Women",
      price: 2899,
      oldPrice: 3999,
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=85",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "All" || product.category === category;

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section
      id="products"
      className="bg-white px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Trending Now
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Featured Products
            </h2>
          </div>

          <p className="max-w-md text-gray-500">
            Handpicked products with premium quality,
            modern design and amazing prices.
          </p>

        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-[28px] border border-black/10 bg-[#f8f5f0] transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[390px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Sale */}
                  <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-2 text-xs font-bold text-white">
                    SALE
                  </span>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl shadow-lg backdrop-blur transition hover:scale-110 active:scale-95"
                  >
                    {wishlist.includes(product.id) ? "♥" : "♡"}
                  </button>

                </div>

                {/* Content */}
                <div className="p-5">

                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                      {product.category}
                    </span>

                    <span className="text-sm font-semibold">
                      ★ {product.rating}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-3">

                    <span className="text-xl font-black">
                      Rs. {product.price.toLocaleString()}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      Rs. {product.oldPrice.toLocaleString()}
                    </span>

                  </div>

                  <button
                    onClick={addToCart}
                    className="mt-5 w-full rounded-full bg-black py-3.5 font-bold text-white transition duration-300 hover:bg-orange-500 active:scale-95"
                  >
                    Add to Cart +
                  </button>

                </div>

              </div>
            ))}

          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 py-20 text-center">
            <div className="mb-4 text-5xl">🔎</div>

            <h3 className="text-2xl font-black">
              No products found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Project;