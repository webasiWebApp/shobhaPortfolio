import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

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

const professionalExperience = [
  {
    position: "left",
    title: "Founder & Ceo | Infinite Building Technologies",
    date: "July 2023 – Present",
    description: [
      "• Founded And Lead A Professionally Managed Real Estate Services Company Providing Complete Development Management And Design Services.",
      "• Offer Economical And Sustainable Design Solutions Focusing On Quality, Safety, And Efficiency.",
      "• Manage Multi-disciplinary Teams Of Experts In Architecture, Structural, Mep, And Landscape Design.",
      "• Conduct Technical Due Diligence, Feasibility Studies, And Master Planning For Diverse Asset Classes.",
      "• Foster Transparent, Client-centric Operations And Create Platforms Enabling Landowners To Unlock Development Potential.",
      "• Promote Innovation-driven Work Culture Ensuring Excellence, Collaboration, And Commitment To Client Success.",
    ],
  },
  {
    position: "right",
    title: "Founder & Ceo | Infinite Building Technologies",
    date: "July 2023 – Present",
    description: [
      "• Founded And Lead A Professionally Managed Real Estate Services Company Providing Complete Development Management And Design Services.",
      "• Offer Economical And Sustainable Design Solutions Focusing On Quality, Safety, And Efficiency.",
      "• Manage Multi-disciplinary Teams Of Experts In Architecture, Structural, Mep, And Landscape Design.",
      "• Conduct Technical Due Diligence, Feasibility Studies, And Master Planning For Diverse Asset Classes.",
      "• Foster Transparent, Client-centric Operations And Create Platforms Enabling Landowners To Unlock Development Potential.",
      "• Promote Innovation-driven Work Culture Ensuring Excellence, Collaboration, And Commitment To Client Success.",
    ],
  },
  {
    position: "left",
    title: "Founder & Ceo | Infinite Building Technologies",
    date: "July 2023 – Present",
    description: [
      "• Founded And Lead A Professionally Managed Real Estate Services Company Providing Complete Development Management And Design Services.",
      "• Offer Economical And Sustainable Design Solutions Focusing On Quality, Safety, And Efficiency.",
      "• Manage Multi-disciplinary Teams Of Experts In Architecture, Structural, Mep, And Landscape Design.",
      "• Conduct Technical Due Diligence, Feasibility Studies, And Master Planning For Diverse Asset Classes.",
      "• Foster Transparent, Client-centric Operations And Create Platforms Enabling Landowners To Unlock Development Potential.",
      "• Promote Innovation-driven Work Culture Ensuring Excellence, Collaboration, And Commitment To Client Success.",
    ],
  },
  {
    position: "right",
    title: "Founder & Ceo | Infinite Building Technologies",
    date: "July 2023 – Present",
    description: [
      "• Founded And Lead A Professionally Managed Real Estate Services Company Providing Complete Development Management And Design Services.",
      "• Offer Economical And Sustainable Design Solutions Focusing On Quality, Safety, And Efficiency.",
      "• Manage Multi-disciplinary Teams Of Experts In Architecture, Structural, Mep, And Landscape Design.",
      "• Conduct Technical Due Diligence, Feasibility Studies, And Master Planning For Diverse Asset Classes.",
      "• Foster Transparent, Client-centric Operations And Create Platforms Enabling Landowners To Unlock Development Potential.",
      "• Promote Innovation-driven Work Culture Ensuring Excellence, Collaboration, And Commitment To Client Success.",
    ],
  },
];

const coreStrengths = [
  {
    title: "Strategic Vision & Leadership",
    icon: "/targeting-1.png",
  },
  {
    title: "Project & Design Management",
    icon: "/team-leader-1.png",
  },
  {
    title: "Technical Due Diligence & Feasibility Studies",
    icon: "/implementation-1.png",
  },
  {
    title: "Cross-functional Team Leadership",
    icon: "/leadership-1.png",
  },
  {
    title: "Business Development & Client Relations",
    icon: "/team-leader-1.png",
  },
  {
    title: "Sustainable Design Solutions",
    icon: "/implementation-1.png",
  },
  {
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
];

const paginationDots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] relative">
      <header className="relative w-full h-[819px]">
        <img
          className="absolute top-0 left-0 w-full h-[816px] object-cover"
          alt="Screenshot"
          src="/screenshot-2025-10-31-164808-1-3.png"
        />
        <div className="absolute top-[3px] left-0 w-full h-[816px] bg-[linear-gradient(121deg,rgba(255,255,255,0.87)_52%,rgba(153,153,153,0.22)_100%)]" />

        <div className="absolute top-12 left-[72px] [font-family:'Boldonse',Helvetica] font-normal text-[#070d59] text-xs tracking-[3.60px] leading-[normal]">
          SHOBHA N.V.
        </div>

        <nav className="absolute top-[49px] left-[862px] flex gap-12">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="[font-family:'Raleway',Helvetica] font-normal text-black text-[15px] tracking-[2.55px] leading-[normal] whitespace-nowrap hover:text-[#ee6f57] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <h1 className="absolute top-[269px] left-[72px] [font-family:'Boldonse',Helvetica] font-normal text-8xl tracking-[0] leading-[normal]">
          <span className="text-black">SHOBHA N</span>
          <span className="text-[#ee6f57]">.</span>
          <span className="text-black">V</span>
          <span className="text-[#ee6f57]">.</span>
        </h1>

        <p className="absolute top-[246px] left-[72px] [font-family:'Raleway',Helvetica] font-normal text-black text-xl tracking-[4.00px] leading-[normal] whitespace-nowrap">
          A VISIONARY FORCE IN REAL ESTATE DEVELOPMENT
        </p>

        <p className="absolute top-[451px] left-[72px] w-[688px] [font-family:'Raleway',Helvetica] font-normal text-black text-xl tracking-[0.60px] leading-[normal]">
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

      <section className="relative w-full min-h-[816px] bg-[url(/screenshot-2025-10-31-164808-1-3.png)] bg-cover bg-[50%_50%]">
        <div className="w-full min-h-[816px] bg-[#ffffffde] py-16">
          <div className="relative max-w-[1440px] mx-auto px-[65px]">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="[font-family:'Boldonse',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[normal] mb-2.5">
                  ABOUT ME
                </h2>
                <p className="w-[343px] [font-family:'Raleway',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
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
                    <h3 className="[font-family:'Boldonse',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] mb-[19px]">
                      CAREER HIGHLIGHTS
                    </h3>
                    {careerHighlights.map((highlight, index) => (
                      <div key={index} className="flex gap-[15px] mb-3">
                        <img
                          className="w-3.5 h-3.5 mt-1"
                          alt="Bullet point"
                          src="/garbage-truck-7.png"
                        />
                        <p className="flex-1 [font-family:'Raleway',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="[font-family:'Boldonse',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] mb-[30px]">
                      CORE COMPETENCIES
                    </h3>
                    {coreCompetencies.map((competency, index) => (
                      <div key={index} className="flex gap-[18px] mb-[11px]">
                        <img
                          className="w-3.5 h-3.5 mt-1"
                          alt="Bullet point"
                          src="/garbage-truck-7.png"
                        />
                        <p className="flex-1 [font-family:'Raleway',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
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

      <section className="relative w-full h-[105px] bg-[#070d59] flex items-center justify-center overflow-hidden">
        <p className="[font-family:'Raleway',Helvetica] font-medium text-white text-[32px] text-center tracking-[1.92px] leading-[33.7px] whitespace-nowrap">
          Founder &amp; Ceo | Real Estate Development ✦ Design &amp; Project
          Management ✦ Consulting &amp; Entrepreneurship
        </p>
      </section>

      <section className="relative w-full min-h-[816px] bg-[url(/screenshot-2025-10-31-164808-1-3.png)] bg-cover bg-[50%_50%]">
        <div className="w-full min-h-[816px] bg-[#ffffffde] py-16">
          <div className="max-w-[1142px] mx-auto px-8">
            <p className="[font-family:'Raleway',Helvetica] font-medium text-[32px] text-center tracking-[1.92px] leading-[33.7px]">
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

      <section className="relative w-full min-h-[816px] bg-[url(/screenshot-2025-10-31-164808-1-3.png)] bg-cover bg-[50%_50%]">
        <div className="w-full min-h-[816px] bg-[#ffffffde] py-16">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="[font-family:'Boldonse',Helvetica] font-normal text-black text-[49px] text-center tracking-[0] leading-[normal] mb-16">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-2 gap-x-[50px] gap-y-[31px] max-w-[1052px] mx-auto">
              {educationCertifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffffde] rounded-[5px] border-l-[9px] border-l-[#ee6f57] border-r-0 border-t-0 border-b-0 shadow-[0px_0px_4px_-1px_#00000061] h-[138px]"
                >
                  <CardContent className="p-0 h-full flex flex-col justify-between py-[31px] px-[33px]">
                    <p className="[font-family:'Raleway',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                      {cert.title}
                    </p>
                    {cert.institution && (
                      <p className="[font-family:'Raleway',Helvetica] font-bold text-black text-base text-right tracking-[0] leading-[normal]">
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

      <section className="relative w-full h-[2205px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background"
          src="/group-6.png"
        />
        <div className="relative z-10">
          <h2 className="pt-[67px] [font-family:'Boldonse',Helvetica] font-normal text-[#ffffffde] text-[49px] text-center tracking-[0] leading-[normal] mb-[159px]">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="relative max-w-[1440px] mx-auto px-[70px]">
            <div className="absolute left-1/2 top-0 w-[37px] h-[865px] -translate-x-1/2">
              <img
                className="w-full h-full"
                alt="Timeline arrow"
                src="/arrow-1.svg"
              />
            </div>

            <div className="flex flex-col gap-[118px]">
              {professionalExperience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${
                    exp.position === "left"
                      ? "mr-auto pr-[70px]"
                      : "ml-auto pl-[70px] rotate-180"
                  }`}
                  style={{ width: "calc(50% + 35px)" }}
                >
                  <Card className="bg-white rounded-[5px] border-r-[13px] border-r-[#ee6f57] border-l-0 border-t-0 border-b-0 shadow-none h-[265px]">
                    <CardContent className="p-0 h-full relative">
                      <img
                        className="absolute top-[102px] right-[-27px] w-[27px] h-[85px]"
                        alt="Arrow pointer"
                        src="/polygon-1.svg"
                      />
                      <div
                        className={`p-4 h-full flex flex-col ${
                          exp.position === "right" ? "rotate-180" : ""
                        }`}
                      >
                        <p className="[font-family:'Raleway',Helvetica] font-extrabold text-black text-[15px] tracking-[0.45px] leading-[normal] whitespace-nowrap mb-[18px]">
                          {exp.title}
                        </p>
                        <p className="[font-family:'Raleway',Helvetica] font-light text-black text-[15px] tracking-[0.45px] leading-[normal] whitespace-nowrap mb-[12px]">
                          {exp.date}
                        </p>
                        <div className="[font-family:'Raleway',Helvetica] font-normal text-black text-xs tracking-[0.36px] leading-[normal]">
                          {exp.description.map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < exp.description.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 bg-white">
        <h2 className="[font-family:'Boldonse',Helvetica] font-normal text-black text-[49px] text-center tracking-[0] leading-[normal] mb-16">
          CORE STRENGTHS
        </h2>

        <div className="max-w-[1360px] mx-auto px-10">
          <Separator className="w-full h-px bg-black mb-16" />

          <div className="grid grid-cols-3 gap-0">
            {coreStrengths.map((strength, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center px-4 py-8">
                  <img
                    className="w-[140px] h-[140px] object-cover mb-6"
                    alt={strength.title}
                    src={strength.icon}
                  />
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
                    {strength.title}
                  </p>
                </div>
                {(index + 1) % 3 !== 0 &&
                  index !== coreStrengths.length - 1 && (
                    <Separator
                      className="w-px h-full bg-black"
                      orientation="vertical"
                    />
                  )}
              </React.Fragment>
            ))}
          </div>

          <Separator className="w-full h-px bg-black mt-16" />
        </div>
      </section>

      <section className="relative w-full h-[849px] bg-[#00032d]">
        <div className="absolute top-0 left-0 w-[243px] h-[540px] bg-[linear-gradient(90deg,rgba(0,3,45,1)_22%,rgba(0,3,45,0)_100%)]" />
        <div className="absolute top-0 right-0 w-[243px] h-[540px] rotate-180 bg-[linear-gradient(90deg,rgba(0,3,45,1)_44%,rgba(0,3,45,0.05)_100%)]" />

        <div className="relative z-10 pt-[77px]">
          <h2 className="[font-family:'Boldonse',Helvetica] font-normal text-white text-[49px] text-center tracking-[0] leading-[normal] mb-4">
            TESTIMONIALS
          </h2>
          <p className="[font-family:'Raleway',Helvetica] font-normal text-white text-xl text-center tracking-[3.40px] leading-[normal] mb-16">
            What Our Client Say About Us
          </p>

          <div className="flex gap-[38px] justify-center px-[106px] mb-[97px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-[286px] h-[346px] bg-white rounded-[5px] border-[3px] border-solid border-[#ee6f57]"
              >
                <CardContent className="p-0 h-full flex flex-col items-center pt-[35px] px-[21px]">
                  <div className="w-20 h-20 bg-[#ee6f57] rounded-[40px] mb-[18px]" />
                  <p className="[font-family:'Boldonse',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal] mb-[7px]">
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
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex gap-[27px] justify-center">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-[10px] ${
                  dot.active ? "bg-[#ee6f57]" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
