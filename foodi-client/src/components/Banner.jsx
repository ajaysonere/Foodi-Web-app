import heroImage from '/images/home/banner.png';
import img1 from '/images/home/b-food1.png';
import img2 from '/image 13.png';

const Banner = () => {
    return (
      <section className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC]to-100%">
        <div className="py-40 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
          <div className="md:w-1/2">
            <img src={heroImage} alt="hero-image" />
            <div className="flex flex-col md:flex-row items-center justify-center -mt-14 lg: gap-20">
              <div className="flex bg-white py-2 px-3 rounded-2x items-center gap-3 shadow-md w-64">
                <img src={img1} className="rounded-2xl"></img>
                <div>
                  <h5 className="space-y-1">Spicy noodles</h5>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                    />
                  </div>
                  <p className="text-red">$ 18.50</p>
                </div>
              </div>
              <div className="sm:flex hidden bg-white py-2 px-3 rounded-2x items-center gap-3 shadow-md w-64">
                <img src={img2} className="rounded-2xl"></img>
                <div>
                  <h5 className="space-y-1">Salad</h5>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500 "
                    />
                  </div>
                  <p className="text-red">$ 10.50</p>
                </div>
              </div>
            </div>
          </div>
          {/* Left */}
          <div className="md:w-1/2 space-y-7 px-2">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug">
              Dive into Delights Of Delectable
              <span className="text-green"> Food </span>
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <button className="btn bg-green px-8 py-3 font-semobold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </section>
    );
};

export default Banner;