import HeadingThree from "@/components/shared/heading/HeadingThree";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Container from "../shared/Container";

const whoWeAreData = [
  {
    video: "/videos/home/1.mp4",
    title: "Delivering secure, cloud-native, and AI-powered software platforms",
  },
  {
    video: "/videos/home/3.mp4",
    title:
      "Expertise in Cloud, AI, Cybersecurity, and enterprise-grade products",
  },
  {
    video: "/videos/home/2.mp4",
    title:
      "Vendor-neutral, multi-cloud solutions across Microsoft, AWS & Google Cloud",
  },
];

export default function WhoWeAre() {
  return (
    <Container>
    <section className=" py-10 lg:py-20 overflow-hidden">
      
      <HeadingTwo title="Who We Are" />
 <PageSubtitle
        text="Beyond AI Limited delivers enterprise-grade cloud, AI, ERP, and cybersecurity solutions, combining global standards with unmatched speed, flexibility, and ownership."
        className="text-center mb-6 lg:mb-9 text-[#6e6e6e] lg:w-[80%] mx-auto"
      />
      {/* <PageSubtitle
        text="A Global IT Powerhouse for Secure, Scalable, AI-Driven Platforms"
        className="text-center mb-6 lg:mb-9 text-[#6e6e6e]"
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whoWeAreData.map((item, index) => (
          <div key={index} className="relative pb-4 px-1 xl:p-3">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={item.video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

            <div className="relative z-20 px-4">
              <HeadingThree
                title={item.title}
                center={false}
                className="pt-40 lg:pt-60 pb-3 text-white font-medium"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    </Container>
  );
}
// import Image from "next/image";

// export default function WhoWeAre() {
//   return (
//     <section className="w-full py-10 md:py-16 px-4 md:px-6  overflow-hidden max-w-[1660px] mx-auto">
//       <h2 className="text-3xl md:text-4xl xl:text-[52px] text-center font-bold text-[#45556C] mb-4">
//         Who We Are
//       </h2>
//       <div className="w-20 h-1 bg-[#FF9500] mx-auto mb-3"></div>
//       <p className="text-lg md:text-2xl text-[#6e6e6e] max-w-3xl mx-auto mb-6 text-center">
//        A Global IT Powerhouse for Secure, Scalable, AI-Driven Platforms
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* 1st */}
//         <div className="relative pb-4 px-1 xl:p-3"> 
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source
//               src="/videos/home/1.mp4"
//               type="video/mp4"
//             />
//           </video> 
//           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"></div> 
//           <div className="relative z-20 container  px-4 ">
//             <h5 className="text-2xl md:text-xl xl:text-[36px] text-white font-normal xl:font-medium pt-40 lg:pt-60">
//            Delivering secure, cloud-native, and AI-powered software platforms
//             </h5>

//             {/* <p className="text-sm md:text-lg mt-2 text-white">
//               Competing with Infosys & TCS on the global stage
//             </p> */}
//           </div>
//         </div>
//         {/* 2nd */}
//         <div className="relative pb-4 px-1 xl:p-3"> 
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source
//               src="/videos/home/3.mp4"
//               type="video/mp4"
//             />
//           </video> 
//           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"></div> 
//           <div className="relative z-20 container  px-4 ">
//             <h5 className="text-2xl md:text-xl xl:text-[36px] text-white font-normal xl:font-medium pt-40 lg:pt-60">
//             Expertise in Cloud, AI, Cybersecurity, and enterprise-grade products
//             </h5>

//             {/* <p className="text-sm md:text-lg mt-2 text-white">
//             Delivering Cloud, AI, Cybersecurity, and cutting-edge Products
//             </p> */}
//           </div>
//         </div>
//         {/* 3rd */}
//         <div className="relative pb-4 px-1 xl:p-3"> 
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source
//               src="/videos/home/2.mp4"
//               type="video/mp4"
//             />
//           </video> 
//           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"></div> 
//           <div className="relative z-20 container  px-4 ">
//             <h5 className="text-2xl md:text-xl xl:text-[36px] text-white font-normal xl:font-medium pt-40 lg:pt-60">
//               Vendor-neutral, multi-cloud solutions across Microsoft, AWS & Google Cloud
//             </h5>

//             {/* <p className="text-sm md:text-lg mt-2 text-white">
//           Multi-cloud expertise across Microsoft, AWS, and Google Cloud
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
