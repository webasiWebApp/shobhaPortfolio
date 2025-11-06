import { StarIcon } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from 'swiper/modules';

const navigationItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACT", href: "#contact" },
];

const featureCards = [
  {
    title: "CIVIL ENGINEERING",
    description:
      "Solid Foundation In Structural Analysis, Infrastructure Design, And Construction Management With A Focus On Sustainable Solutions.",
  },
  {
    title: "CIVIL ENGINEERING",
    description:
      "Solid Foundation In Structural Analysis, Infrastructure Design, And Construction Management With A Focus On Sustainable Solutions.",
  },
  {
    title: "CIVIL ENGINEERING",
    description:
      "Solid Foundation In Structural Analysis, Infrastructure Design, And Construction Management With A Focus On Sustainable Solutions.",
  },
];

const careerHighlights = [
  "Executed 40.2 Million Sq.ft. Across Residential, Commercial, It And Hospitality Sectors.",
  "Established Infinite Building Technologies To Provide End-to-end Development Services.",
];

const coreCompetencies = [
  "Project & Design Management",
  "Technical Due Diligence & Feasibility Studies",
  "Procurement & Supplier Management",
  "Budgeting, Costing & Boq Preparation",
  "Sustainable Building & Green Rating Advisory (igbc / Leed)",
  "Iso 9001 Auditing & Sop Implementation.",
];

const educationCertifications = [
  {
    title: "B.E. (CIVIL), M.S. – FIRST CLASS WITH DISTINCTION (1998)",
    institution: "RAMAIAH COLLEGE, BANGALORE",
  },
  {
    title: "EXECUTIVE MBA (BUSINESS ADMINISTRATION)",
    institution:
      "INTERNATIONAL SCHOOL OF BUSINESS MANAGEMENT & ADMINISTRATION (ISBM)",
  },
  {
    title: "FELLOW & APPROVED LIFETIME MEMBEROW",
    institution: "INSTITUTION OF VALUERS (IMMOVABLE PROPERTY)",
  },
  {
    title: "QUALIFIED AUDITOR",
    institution: "ISO 9001:2008 QUALITY MANAGEMENT SYSTEM",
  },
  {
    title: "ADVANCED TRAINING",
    institution: "GREEN BUILDING RATING SYSTEM (CII & IGBC)",
  },
  {
    title: "TECHNICAL SKILLS: AUTOCAD, STAAD-PRO, PRIMAVERA, CAMP-EX",
    institution: "",
  },
];

// Removed legacy professionalExperience card grid in favor of vertical timeline

const coreStrengths = [
  {
    id: 1,
    title: "Strategic Vision & Leadership",
    icon: "/targeting-1.png",
  },
  {
    id: 2,
    title: "Project & Design Management",
    icon: "/team-leader-1.png",
  },
  {
    id: 3,
    title: "Technical Due Diligence & Feasibility Studies",
    icon: "/implementation-1.png",
  },
  {
    id: 4,
    title: "Cross-functional Team Leadership",
    icon: "/leadership-1.png",
  },
  {
    id: 5,
    title: "Business Development & Client Relations",
    icon: "/team-leader-1.png",
  },
  {
    id: 6,
    title: "Sustainable Design Solutions",
    icon: "/implementation-1.png",
  },
  {
    id: 7,
    title: "Innovation & Risk Management",
    icon: "/risk-management-1.png",
  },
  {
    id: 8,
    title: "Innovation & Risk Management",
    icon: "/risk-management-1.png",
  },
  {
    id: 9,
    title: "Innovation & Risk Management",
    icon: "/risk-management-1.png",
  },
];

const testimonials = [
  {
    name: "JOHN JAPUR",
    text: "In Promotion And Advertising, A Testimonial Or Show Consists Of A Person's Written Or Spoken Statement Extolling The Virtue Of A Product.",
    rating: 5,
  },
  {
    name: "JOHN JAPUR",
    text: "In Promotion And Advertising, A Testimonial Or Show Consists Of A Person's Written Or Spoken Statement Extolling The Virtue Of A Product.",
    rating: 5,
  },
  {
    name: "JOHN JAPUR",
    text: "In Promotion And Advertising, A Testimonial Or Show Consists Of A Person's Written Or Spoken Statement Extolling The Virtue Of A Product.",
    rating: 5,
  },
  {
    name: "JOHN JAPUR",
    text: "In Promotion And Advertising, A Testimonial Or Show Consists Of A Person's Written Or Spoken Statement Extolling The Virtue Of A Product.",
    rating: 5,
  },
  {
    name: "JOHN JAPUR",
    text: "In Promotion And Advertising, A Testimonial Or Show Consists Of A Person's Written Or Spoken Statement Extolling The Virtue Of A Product.",
    rating: 5,
  },
  {
    name: "JOHN JAPUR",
    text: "In Promotion And Advertising, A Testimonial Or Show Consists Of A Person's Written Or Spoken Statement Extolling The Virtue Of A Product.",
    rating: 5,
  },
  {
    name: "JOHN JAPUR",
    text: "In Promotion And Advertising, A Testimonial Or Show Consists Of A Person's Written Or Spoken Statement Extolling The Virtue Of A Product.",
    rating: 5,
  },
  {
    name: "JOHN JAPUR",
    text: "In Promotion And Advertising, A Testimonial Or Show Consists Of A Person's Written Or Spoken Statement Extolling The Virtue Of A Product.",
    rating: 5,
  },
];

const professionalExperience = [
  {
    position: "left",
    title: "Founder & Ceo | Infinite Building Technologies",
    date: "July 2023 – Present",
    description: [
      "Founded And Lead A Professionally Managed Real Estate Services Company Providing Complete Development Management And Design Services.",
      "Offer Economical And Sustainable Design Solutions Focusing On Quality, Safety, And Efficiency.",
      "Manage Multi-disciplinary Teams Of Experts In Architecture, Structural, Mep, And Landscape Design.",
      "Conduct Technical Due Diligence, Feasibility Studies, And Master Planning For Diverse Asset Classes.",
      "Foster Transparent, Client-centric Operations And Create Platforms Enabling Landowners To Unlock Development Potential.",
      "Promote Innovation-driven Work Culture Ensuring Excellence, Collaboration, And Commitment To Client Success.",
    ],
  },
  {
    position: "right",
    title: "Founder & Ceo | Infinite Building Technologies",
    date: "July 2023 – Present",
    description: [
      "Founded And Lead A Professionally Managed Real Estate Services Company Providing Complete Development Management And Design Services.",
      "Offer Economical And Sustainable Design Solutions Focusing On Quality, Safety, And Efficiency.",
      "Manage Multi-disciplinary Teams Of Experts In Architecture, Structural, Mep, And Landscape Design.",
      "Conduct Technical Due Diligence, Feasibility Studies, And Master Planning For Diverse Asset Classes.",
      "Foster Transparent, Client-centric Operations And Create Platforms Enabling Landowners To Unlock Development Potential.",
      "Promote Innovation-driven Work Culture Ensuring Excellence, Collaboration, And Commitment To Client Success.",
    ],
  },
  {
    position: "left",
    title: "Founder & Ceo | Infinite Building Technologies",
    date: "July 2023 – Present",
    description: [
      "Founded And Lead A Professionally Managed Real Estate Services Company Providing Complete Development Management And Design Services.",
      "Offer Economical And Sustainable Design Solutions Focusing On Quality, Safety, And Efficiency.",
      "Manage Multi-disciplinary Teams Of Experts In Architecture, Structural, Mep, And Landscape Design.",
      "Conduct Technical Due Diligence, Feasibility Studies, And Master Planning For Diverse Asset Classes.",
      "Foster Transparent, Client-centric Operations And Create Platforms Enabling Landowners To Unlock Development Potential.",
      "Promote Innovation-driven Work Culture Ensuring Excellence, Collaboration, And Commitment To Client Success.",
    ],
  },
  {
    position: "right",
    title: "Founder & Ceo | Infinite Building Technologies",
    date: "July 2023 – Present",
    description: [
      "Founded And Lead A Professionally Managed Real Estate Services Company Providing Complete Development Management And Design Services.",
      "Offer Economical And Sustainable Design Solutions Focusing On Quality, Safety, And Efficiency.",
      "Manage Multi-disciplinary Teams Of Experts In Architecture, Structural, Mep, And Landscape Design.",
      "Conduct Technical Due Diligence, Feasibility Studies, And Master Planning For Diverse Asset Classes.",
      "Foster Transparent, Client-centric Operations And Create Platforms Enabling Landowners To Unlock Development Potential.",
      "Promote Innovation-driven Work Culture Ensuring Excellence, Collaboration, And Commitment To Client Success.",
    ],
  },
];

// Removed legacy pagination dots in favor of Swiper

export const Home = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video properties
    video.muted = true;
    video.playsInline = true;
    video.loop = false; // No loop - video length matches scroll length
    video.pause(); // Start paused

    // Handle scroll-linked video playback
    const handleScroll = () => {
      if (!video) return;

      // Clear existing timeout
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }

      // Calculate scroll progress (0 to 1)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = documentHeight > 0 ? scrollTop / documentHeight : 0;

      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Only play if video has loaded metadata
      if (video.readyState >= 2 && video.duration) {
        // Play the video if it's paused
        if (video.paused) {
          video.play().catch((err) => {
            console.log("Video play prevented:", err);
          });
        }

        // Set video time based on scroll progress
        // Video length matches scroll length exactly
        requestAnimationFrame(() => {
          if (video && video.duration) {
            video.currentTime = clampedProgress * video.duration;
          }
        });
      }

      // Pause video when scrolling stops
      scrollTimeoutRef.current = window.setTimeout(() => {
        if (video && !video.paused) {
          video.pause();
        }
      }, 150); // Pause after 150ms of no scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] relative">
      {/* Fixed Background Video */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
        src="/bgVideo.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
      <header className="relative w-full h-[819px]">
        
        <div className="absolute top-[0px] left-0 w-full h-[816px] bg-[linear-gradient(121deg,rgba(255,255,255,0.87)_52%,rgba(153,153,153,0.22)_100%)]" />

        <div className="absolute top-12 left-[72px] [font-family:'Boldonse',Helvetica] font-normal text-[#070d59] text-xs tracking-[3.60px] leading-[normal]">
          SHOBHA N.V.
        </div>

        <nav className="absolute top-[49px] left-[862px] flex gap-12">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-[15px] tracking-[2.55px] leading-[normal] whitespace-nowrap hover:text-[#ee6f57] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <h1 className="absolute top-[269px] left-[72px] [font-family:'Boldonse',Helvetica] font-normal text-8xl tracking-[0] leading-[normal]">
          <span className="text-[#00032d]">SHOBHA N</span>
          <span className="text-[#ee6f57]">.</span>
          <span className="text-[#00032d]">V</span>
          <span className="text-[#ee6f57]">.</span>
        </h1>

        <p className="absolute top-[246px] left-[72px] [font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-xl tracking-[4.00px] leading-[normal] whitespace-nowrap">
          A VISIONARY FORCE IN REAL ESTATE DEVELOPMENT
        </p>

        <p className="absolute top-[451px] left-[72px] w-[688px] [font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-xl tracking-[0.60px] leading-[normal]">
          Founder &amp; Ceo | 25+ Years In Project Lifecycle Management From
          Concept To Execution
        </p>

        <div className="absolute top-[529px] left-[72px] flex gap-[22px]">
          <Button className="w-[179px] h-[46px] bg-[#ee6f57] hover:bg-[#d96349] [font-family:'Raleway',Helvetica] font-semibold text-white text-[15px] tracking-[0.45px]">
            View My Work
          </Button>
          <Button className="w-[179px] h-[46px] bg-[#ee6f57] hover:bg-[#d96349] [font-family:'Raleway',Helvetica] font-semibold text-white text-[15px] tracking-[0.45px]">
            Get In Touch
          </Button>
        </div>
      </header>

      <section className="relative w-full h-[349px] bg-[#00032d]">
        <div className="absolute top-[90px] left-[143px] flex gap-[113px]">
          {featureCards.map((card, index) => (
            <div key={index} className="w-[324px] flex flex-col gap-[25px]">
              <h3 className="ml-[45px] [font-family:'Boldonse',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
                {card.title}
              </h3>
              <p className="w-80 [font-family:'Raleway',Helvetica] font-light text-white text-xl text-center tracking-[0.60px] leading-[normal]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <Separator
          className="absolute top-[54px] left-[496px] w-px h-[249px] bg-white"
          orientation="vertical"
        />
        <Separator
          className="absolute top-[54px] left-[924px] w-px h-[249px] bg-white"
          orientation="vertical"
        />
      </section>

      <section className="relative w-full min-h-[816px]  bg-cover bg-[50%_50%]">
        <div className="w-full min-h-[816px] bg-[#ffffffde] py-16">
          <div className="relative max-w-[1440px] mx-auto px-[65px]">
            <div className="flex flex-row gap-8">
              <div className="mt-[100px]">
                <h2 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-5xl tracking-[0] leading-[normal] mb-2.5">
                  ABOUT ME
                </h2>
                <p className="w-[343px] [font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-[15px] tracking-[0] leading-[normal]">
                  With A Foundation In Civil Engineering And A Passion For
                  Design, I&#39;ve Evolved Into An Operations Specialist Who
                  Thrives On Transforming Complex Challenges Into Streamlined,
                  Efficient Solutions.
                </p>
              </div>

              <div className="flex gap-[32px] items-start mt-[100px]">
                <div className="relative w-[390px] h-[590px]">
                  <div className="absolute top-0 left-[31px] w-[359px] h-[590px] bg-[#ee6f57]" />
                  <img
                    className="absolute top-[15px] left-0 w-[372px] h-[559px] object-cover"
                    alt="Professional portrait"
                    src="/img-20251030-wa0008-1.png"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-8">
                  <div>
                    <h3 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-xl tracking-[0] leading-[normal] mb-[19px]">
                      CAREER HIGHLIGHTS
                    </h3>
                    {careerHighlights.map((highlight, index) => (
                      <div key={index} className="flex gap-[15px] mb-3">
                        <img
                          className="w-3.5 h-3.5 mt-1"
                          alt="Bullet point"
                          src="/garbage-truck-7.png"
                        />
                        <p className="flex-1 [font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-[15px] tracking-[0] leading-[normal]">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-xl tracking-[0] leading-[normal] mb-[30px]">
                      CORE COMPETENCIES
                    </h3>
                    {coreCompetencies.map((competency, index) => (
                      <div key={index} className="flex gap-[18px] mb-[11px]">
                        <img
                          className="w-3.5 h-3.5 mt-1"
                          alt="Bullet point"
                          src="/garbage-truck-7.png"
                        />
                        <p className="flex-1 [font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-[15px] tracking-[0] leading-[normal]">
                          {competency}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[105px] bg-[#00032d] flex items-center justify-center overflow-hidden">
        <p className="[font-family:'Raleway',Helvetica] font-medium text-white text-[32px] text-center tracking-[1.92px] leading-[33.7px] whitespace-nowrap">
          Founder &amp; Ceo | Real Estate Development ✦ Design &amp; Project
          Management ✦ Consulting &amp; Entrepreneurship
        </p>
      </section>

      <section className="relative w-full min-h-[506px] bg-cover bg-[50%_50%]">
        <div className="w-full min-h-[506px] bg-[#ffffffde] py-16">
          <div className="max-w-[1142px] h-full mt-[100px] mx-auto px-8 flex flex-col items-center justify-center">
            <p className="[font-family:'Raleway',Helvetica] font-medium text-[32px] text-center tracking-[1.92px] leading-[33.7px] ">
              <span className="text-[#000000c9] tracking-[0.61px]">
                Dynamic And Results-driven Real Estate And Construction
                Professional With Over{" "}
              </span>
              <span className="text-[#ee6f57] tracking-[0.61px]">25 Years</span>
              <span className="text-[#000000c9] tracking-[0.61px]">
                {" "}
                Of Leadership Experience In End-to-end Project Lifecycle
                Management, From Conceptual Design To Execution Across
                Residential, Commercial, It, And Hospitality Sectors. Proven
                Expertise In{" "}
              </span>
              <span className="text-[#ee6f57] tracking-[0.61px]">
                Strategic Planning
              </span>
              <span className="text-[#000000c9] tracking-[0.61px]">
                , Feasibility Studies, Technical Due Diligence, And Development
                Management For Large-scale, Sustainable Projects. Recognized For
                Establishing And Leading{" "}
              </span>
              <span className="text-[#ee6f57] tracking-[0.61px]">
                High-performing
              </span>
              <span className="text-[#000000c9] tracking-[0.61px]">
                {" "}
                Teams, Implementing Operational Excellence, And Driving
                Organizational Growth Through Innovation And Integrity.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[816px]  bg-cover bg-[50%_50%]">
        <div className="w-full min-h-[816px] bg-[#ffffffde] py-16">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-[49px] text-center tracking-[0] leading-[normal] mb-16">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-2 gap-x-[50px] gap-y-[31px] max-w-[1052px] mx-auto">
              {educationCertifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffffde] rounded-[5px] border-l-[9px] border-l-[#ee6f57] border-r-0 border-t-0 border-b-0 shadow-[0px_0px_4px_-1px_#00000061] h-[138px]"
                >
                  <CardContent className="p-0 h-full flex flex-col justify-between py-[31px] px-[33px]">
                    <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-2xl tracking-[0] leading-[normal]">
                      {cert.title}
                    </p>
                    {cert.institution && (
                      <p className="[font-family:'Raleway',Helvetica] font-bold text-[#00032d] text-base text-right tracking-[0] leading-[normal]">
                        {cert.institution}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#ffffffde] ">
        <div className="relative z-10">
          <h2 className="pt-[67px] [font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-[49px] text-center tracking-[0] leading-[normal] mb-16">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="max-w-[1100px] mx-auto px-6 pb-16">
            <VerticalTimeline  lineColor="#EE6F57">
              {professionalExperience.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  date={exp.date}
                  position={exp.position as any}
                  iconStyle={{ background: "#EE6F57", color: "#EE6F57" }}
                 
                >
                  <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {exp.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 bg-[#00032dc2]">
        <h2 className="[font-family:'Boldonse',Helvetica] font-normal text-white text-[49px] text-center tracking-[0] leading-[normal] mb-16">
          CORE STRENGTHS
        </h2>

        <div className="max-w-[1360px] mx-auto px-10">
      

        <div className="grid grid-cols-3 gap-0">
          {coreStrengths.map((card, index) => {
            const isRightColumn = (index + 1) % 3 === 0;
            const isBottomRow = index >= 6;
            return (
              <div
                key={card.id}
                className={`bg-white p-8 cursor-pointer min-h-[250px] flex flex-col items-center justify-center group ${
                  !isRightColumn ? 'border-r border-[#00032d]' : ''
                } ${
                  !isBottomRow ? 'border-b border-[#00032d]' : ''
                }`}
                style={{
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    {/* <Icon className="w-16 h-16 text-[#00032d] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} /> */}
                    <img src={card.icon} alt={card.title} className="w-16 h-16" />
              
                  </div>
                  {card.title && (
                    <h3 className="text-base font-normal text-gray-900 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {card.title}
                    </h3>
                  )}
                </div>
              </div>
            );
          })}
        </div>

         
        </div>
      </section>

      <section className="relative w-full h-[849px] bg-[#00032dc2]">
        

        <div className="relative z-10 pt-[77px]">
          <h2 className="[font-family:'Boldonse',Helvetica] font-normal text-white text-[49px] text-center tracking-[0] leading-[normal] mb-4">
            TESTIMONIALS
          </h2>
          <p className="[font-family:'Raleway',Helvetica] font-normal text-white text-xl text-center tracking-[3.40px] leading-[normal] mb-16">
            What Our Client Say About Us
          </p>

          <div className="px-[106px] mb-[97px]">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
               <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card className="w-[286px] h-[346px] bg-white rounded-[5px]  mx-auto">
                    <CardContent className="p-0 h-full flex flex-col items-center pt-[35px] px-[21px]">
                      <div className="w-20 h-20 bg-[#ee6f57] rounded-[40px] mb-[18px]" />
                      <p className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-base text-center tracking-[0] leading-[normal] mb-[7px]">
                        {testimonial.name}
                      </p>
                      <div className="flex gap-1 mb-[31px]">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-[13px] h-3.5 fill-current text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-base text-center tracking-[0] leading-[normal]">
                        {testimonial.text}
                      </p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
                
              ))}
              </Swiper>
            </Swiper>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
