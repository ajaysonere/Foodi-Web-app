const Menu = () => {
    return (
      <div>
        {/* Menu section */}
        <section className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC]to-100%">
          <div className="py-60 flex flex-col justify-center items-center gap-8">
            {/* Left */}
            <div className="text-center space-y-7 px-2">
              <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">
                For the Love of Delicious
                <span className="text-green"> Food </span>
              </h2>
              <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
                come with family and feel the joy of the mouthwatering food such as greek salad , Lasange , Butternut, Pumpkin, Tokusen, Olivas Rellenas and more for a moderate cost.
              </p>
              <button className="btn bg-green px-8 py-3 font-semobold text-white rounded-full">
                Order Now
              </button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Menu;