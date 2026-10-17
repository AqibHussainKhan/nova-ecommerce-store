function About() {
  const features = [
    {
      number: "01",
      title: "Premium Quality",
      text: "Every product is carefully selected to give you the best quality.",
    },
    {
      number: "02",
      title: "Fast Delivery",
      text: "Get your favorite products delivered quickly and safely.",
    },
    {
      number: "03",
      title: "Easy Returns",
      text: "Changed your mind? Our simple return process has you covered.",
    },
  ];

  return (
    <section
      id="about"
      className="px-5 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Text */}
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Why NOVA
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Shopping should
              <br />
              feel
              <span className="text-orange-500"> special.</span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              NOVA is built for people who want simple,
              modern and premium products without the
              boring shopping experience.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-gray-500">
              From everyday essentials to statement pieces,
              we bring together products that look good,
              feel good and fit your lifestyle.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-black px-7 py-4 font-bold text-white transition hover:bg-orange-500 active:scale-95"
            >
              Learn More →
            </a>

          </div>

          {/* Features */}
          <div className="space-y-4">

            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-3xl border border-black/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
              >

                <div className="flex gap-5">

                  <span className="text-sm font-black text-orange-500">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-black">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-500">
                      {feature.text}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;