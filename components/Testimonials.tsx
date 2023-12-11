import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="w-[360px] md:w-[450px] p-6 testomonialBox ">
      <p className="text-sm text-justify">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur modi
        quo eius ipsam, necessitatibus sunt, quis magnam vero iste accusantium,
        aut ea? Illo fugit autem, sapiente quasi molestiae id dolor."
      </p>
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue rounded-full p-1 flex justify-end w-10 h-10">
            <Image src="/user.png" alt="user" width={34} height={34} />
          </div>
          <div className="flex flex-col ">
            <span>Corina Macoy</span>
            <p>User</p>
          </div>
        </div>
        <div>
          <Image src="/stars.png" alt="stars" width={100} height={56} />
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="w-full my-24 flex flex-col items-center relative z-30 px-4">
      <div className="flex justify-center">
        <h1>Beyond Expectaion</h1>
      </div>
      <p className="text-xl max-w-xl text-center mt-4">
        Only at Predictify , you can build a good reliable , scalable prediction
        analysis based about the best practices
      </p>
      <div className="scroll grid grid-flow-row md:grid-flow-col gap-10 overflow-x-scroll pt-24 place-items-center">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className="w-full h-[100px]  ">
        <Image src="/galaxy_bg.png" alt="galaxy" width="1200" height={300} className=" rotate-90 absolute top-0 -right-10 z-0"/>
      </div>
    </section>
  );
};
