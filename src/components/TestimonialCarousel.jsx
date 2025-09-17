import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import prev from "../assets/icons/prev.svg";
import next from "../assets/icons/next.svg";
import shareIcon from "../assets/images/capterra-logo.png";

const testimonials = [
  {
    name: "David Fincher",
    quote:
      "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lillian Williams",
    quote:
      "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael",
    quote:
      "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
   {
    name: "David Fincher",
    quote:
      "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lillian Williams",
    quote:
      "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael",
    quote:
      "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-30 px-4 md:px-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-[36px] font-[600] text-[#090F4E]">
          What people are saying about LeadCRM
        </h2>

        <div className="flex gap-4">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full border border-[#090F4E] flex items-center justify-center"
          >
            <span className="text-xl">
              <img src={prev} alt="" />
            </span>
          </button>

          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-[#090F4E] flex items-center justify-center"
          >
            <span className="text-xl">
              <img src={next} alt="" />
            </span>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-full">
              <div className="bg-[#F9F0F8] rounded-xl p-6 h-full min-h-[390px] flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <p className="text-[16px] font-[600]  text-[#2C2C2C] mb-4">
                    “{t.quote}”
                  </p>

                  <div className="flex items-center mb-2 gap-2">
                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[6.67px] bg-white">
                      <img
                        src={shareIcon}
                        alt="shareIcon"
                        className=" w-[20px] h-[20px]"
                      />
                    </div>
                    {[...Array(t.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#090F4E] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#7A7A7A4F] pt-4 mt-4 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-[44px] h-[44px] rounded-full object-cover"
                  />
                  <div>
                    <p className="font-[600] text-[20px] text-[#090F4E]">{t.name}</p>
                    <p className="text-[14px] font-[400] text-[#696969]">On Capterra</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
