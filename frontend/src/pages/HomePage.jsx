import React from "react";
import homeHeroImage from "../assets/HomePage/house_for_homepage_hero.avif";

const HomePage = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* HERO SECTION 1 */}
      <section className="h-screen snap-start flex justify-center items-center px-6">
        <div className="hero-content flex-col lg:flex-row-reverse w-full mx-16">
          <img src={homeHeroImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="lg:mr-10">
            <h1 className="text-5xl font-bold">Mi Casa</h1>
            <h2 className="text-xl text-base-content/70 mt-2 mb-4">
              Your all-in-one household management system
            </h2>
            <p className="text-lg py-6">
              Mi Casa was created to simplify managing all your household tasks
              all in one place.
              <br />
              It helps busy families stay organised, share important updates,
              and keep track of chores, household tasks, shopping, and bills
              effortlessly.
            </p>
          </div>
        </div>
        <a
          href="#section-2"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black hover:text-gray-300 transition-opacity duration-300 opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </section>

      {/* HERO SECTION 2 */}
      <section className="h-screen snap-start flex flex-col justify-center items-center px-6 ">
        <h2 className="text-6xl font-bold mb-16">Homelife Made Easy</h2>
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Pizza"
            />
          </div>
        </div>
      </section>

      {/* HERO SECTION 3 */}
      <section className="h-screen snap-start flex flex-col justify-center items-center px-6 ">
        <h2 className="text-5xl font-bold mb-16">Features</h2>
        <div className="flex flex-col items-center mb-12">
          <div className="w-full max-w-2xl space-y-4 text-xl">
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">Shopping List</div>
              <div className="collapse-content text-sm">
                To ensure everyone is on the same page, keep track of items
                anyone can pick up during their next shop.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">Bill Calendar</div>
              <div className="collapse-content text-sm">
                They say the only thing promised in life is death and taxes. Any
                home owner knows bills should also be on that list. <br />
                <br />
                Keep track of all your upcomming bills to for some peace of
                mind.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">Chores</div>
              <div className="collapse-content text-sm">
                Delegate tasks to members of the household so that everyone
                pulls their weight.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">Messages</div>
              <div className="collapse-content text-sm">
                Chat with other members of your home.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do I create an account?
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
