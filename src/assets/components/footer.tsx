function Footer() {
  return (
    <footer className="bg-black px-5 py-12 text-white md:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <a
              href="#home"
              className="text-3xl font-black"
            >
              NOVA<span className="text-orange-500">.</span>
            </a>

            <p className="mt-5 max-w-sm leading-7 text-gray-500">
              Modern products. Premium quality.
              A shopping experience designed for you.
            </p>

          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 font-bold">
              Shop
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a className="transition hover:text-orange-500" href="#products">
                Products
              </a>

              <a className="transition hover:text-orange-500" href="#categories">
                Categories
              </a>

              <a className="transition hover:text-orange-500" href="#products">
                New Arrivals
              </a>

              <a className="transition hover:text-orange-500" href="#products">
                Sale
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-bold">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a className="transition hover:text-orange-500" href="#about">
                About
              </a>

              <a className="transition hover:text-orange-500" href="#contact">
                Contact
              </a>

              <a className="transition hover:text-orange-500" href="#home">
                Privacy
              </a>

              <a className="transition hover:text-orange-500" href="#home">
                Terms
              </a>
            </div>
          </div>

        </div>

        <div className="my-10 h-px bg-white/10"></div>

        <div className="flex flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 NOVA. All rights reserved.
          </p>

          <p>
            Designed & Built with ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;