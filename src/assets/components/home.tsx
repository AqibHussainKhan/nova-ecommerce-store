function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-36 md:px-10 lg:px-16 lg:pt-44"
    >
      {/* Background Glow */}
      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left */}
        <div className="animate-fadeUp">

          <div className="mb-6 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            ✦ NEW COLLECTION 2026
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            STYLE
            <br />
            THAT
            <br />

            <span className="text-orange-500">
              SPEAKS.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
            Discover premium fashion, modern essentials and
            everyday products designed to make your style stand out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#products"
              className="rounded-full bg-black px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-500 active:scale-95"
            >
              Shop Collection →
            </a>

            <a
              href="#categories"
              className="rounded-full border border-black px-7 py-4 font-semibold transition duration-300 hover:bg-black hover:text-white"
            >
              Explore Categories
            </a>

          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-black">10K+</h3>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-black">500+</h3>
              <p className="text-sm text-gray-500">Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-black">4.9★</h3>
              <p className="text-sm text-gray-500">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="absolute -left-6 top-10 z-10 rotate-[-8deg] rounded-2xl bg-orange-500 px-5 py-3 font-black text-white shadow-xl">
            UP TO
            <br />
            <span className="text-2xl">50% OFF</span>
          </div>

          <div className="group overflow-hidden rounded-[40px] bg-black shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85"
              alt="Fashion collection"
              className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[600px]"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;