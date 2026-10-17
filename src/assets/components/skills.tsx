type SkillsProps = {
  category: string;
  setCategory: (value: string) => void;
};

function Skills({ category, setCategory }: SkillsProps) {
  const categories = [
    {
      name: "All",
      icon: "✦",
    },
    {
      name: "Men",
      icon: "👔",
    },
    {
      name: "Women",
      icon: "👗",
    },
    {
      name: "Shoes",
      icon: "👟",
    },
    {
      name: "Accessories",
      icon: "👜",
    },
  ];

  return (
    <section
      id="categories"
      className="px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Explore
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Shop by Category
            </h2>
          </div>

          <p className="max-w-md text-gray-500">
            Find exactly what you are looking for and
            discover products made for your lifestyle.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">

          {categories.map((item) => (
            <button
              key={item.name}
              onClick={() => setCategory(item.name)}
              className={`group rounded-3xl border p-6 text-left transition duration-300 hover:-translate-y-2 ${
                category === item.name
                  ? "border-black bg-black text-white shadow-xl"
                  : "border-black/10 bg-white hover:border-orange-400"
              }`}
            >

              <div className="mb-8 text-3xl transition duration-300 group-hover:scale-125">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold">
                {item.name}
              </h3>

              <p
                className={`mt-1 text-xs ${
                  category === item.name
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              >
                View Collection →
              </p>

            </button>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;