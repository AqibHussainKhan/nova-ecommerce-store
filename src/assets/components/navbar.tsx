import { useState } from "react";

interface Navbarprops {
    cartCount: number;
    search: string;
    setSearch: (value: string) => void;
}

  function Navbar({ cartCount, search, setSearch }: Navbarprops) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/85 px-5 py-3 shadow-xl backdrop-blur-xl">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-black tracking-tight"
          >
            NOVA<span className="text-orange-500">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-7 lg:flex">
            <a
              href="#home"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              Home
            </a>

            <a
              href="#products"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              Shop
            </a>

            <a
              href="#categories"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              Categories
            </a>

            <a
              href="#about"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              Contact
            </a>
          </div>

          {/* Search */}
          <div className="hidden items-center rounded-full border border-black/10 bg-[#f7f7f7] px-4 py-2 md:flex">
            <span className="mr-2 text-gray-500">⌕</span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-32 bg-transparent text-sm outline-none placeholder:text-gray-400 lg:w-44"
            />
          </div>

          {/* Cart */}
          <div className="flex items-center gap-3">
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:scale-110 active:scale-95"
            >
              🛒

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenu(!menu)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl lg:hidden"
            >
              {menu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-black/10 bg-white p-5 shadow-xl lg:hidden">

            <div className="mb-4 flex items-center rounded-full border px-4 py-3">
              <span className="mr-2">⌕</span>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
            </div>

            <div className="flex flex-col gap-4">
              <a onClick={() => setMenu(false)} href="#home">
                Home
              </a>

              <a onClick={() => setMenu(false)} href="#products">
                Shop
              </a>

              <a onClick={() => setMenu(false)} href="#categories">
                Categories
              </a>

              <a onClick={() => setMenu(false)} href="#about">
                About
              </a>

              <a onClick={() => setMenu(false)} href="#contact">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;