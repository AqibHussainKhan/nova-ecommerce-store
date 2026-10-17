function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[40px] bg-black px-7 py-14 text-white md:px-14 md:py-20">

          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl"></div>

          <div className="relative grid gap-12 lg:grid-cols-2">

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                Stay Updated
              </p>

              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Get the latest
                <br />
                drops first.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-gray-400">
                Subscribe to our newsletter and get exclusive
                deals, new collection alerts and special offers.
              </p>
            </div>

            <div className="flex items-center">

              <form className="w-full">

                <div className="flex flex-col gap-3 sm:flex-row">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-full border border-white/10 bg-white/10 px-6 py-4 text-white outline-none placeholder:text-gray-400 focus:border-orange-500"
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-400 active:scale-95"
                  >
                    Subscribe
                  </button>

                </div>

                <p className="mt-4 text-xs text-gray-500">
                  No spam. Only useful updates & exclusive offers.
                </p>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;