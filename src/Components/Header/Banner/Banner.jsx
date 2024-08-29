import bannerImg from '../../../assets/img/Banner-bg.png'
const Banner = () => {
  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <div
        className="hero min-h-screen rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="mb-5 text-[12px] md:text-sm lg:text-lg">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
           <div className="flex gap-4 justify-center">
           <button className="btn bg-[#0BE58A] rounded-[50px] hover:bg-base-100">Explore Now</button>
           <button className="btn rounded-[50px]">Our Feedback</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
