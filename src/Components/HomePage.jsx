import { Carousel, HomePageCard, CarouselCategory, CarouselProducts } from "./";

const HomePage = () => {
  return (
    <div className="bg-littlepaws-grey">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/hg1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Bowls and Diner"}
            img={"../images/home_grid_2.jpg"}
            link={"Stainless Steels bowls, for your husky to eat with comfort"}
          />
          <HomePageCard
            title={"Walking Essentials "}
            img={"../images/home_grid_3.jpg"}
            link={"Made up with soft fabric, for your buddy to stay comfyy!"}
          />
          <HomePageCard
            title={"Food and Treats"}
            img={"../images/home_grid_4.jpg"}
            link={"Sum up of all the essential nutrients for your pet"}
          />
          <HomePageCard
            title={"Grooming"}
            img={"../images/home_grid_5.jpg"}
            link={"C'ause your pet needs to look as stylish as you"}
          />
          <HomePageCard
            title={"Doctors on Board"}
            img={"../images/home_grid_6.jpg"}
            link={"Book Your Furry Friend's Next Appointment with Ease!"}
          />
          <HomePageCard
            title={"Community"}
            img={"../images/home_grid_7.jpg"}
            link={"Connect with Pet Lovers: Share, Learn, and Grow Together!"}
          />
          <HomePageCard
            title={"Parlour Appointment"}
            img={"../images/home_grid_8.jpg"}
            link={"Pamper Your Pet: Book a Spa Day for Ultimate Relaxation!"}
          />

          <div className="m-3 pt-8">
            <img className="xl:hidden" src={"../images/banner_image_2.jpg"} />
          </div>
        </div>
        <CarouselProducts />
        <CarouselCategory />
        <div className="h-[200px]">
          <img className="h-[100%] m-auto" src={"../images/banner_image.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
