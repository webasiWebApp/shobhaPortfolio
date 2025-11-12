import { StarIcon, Menu, X } from "lucide-react";
import ScrollReveal from '../../components/ScrollReveal';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import './styles.css';

const navigationItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SHOWCASE", href: "#showcase" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACT", href: "#contact" },
];

const featureCards = [
  {
    title: "Civil Engineering",
    description:
      "Solid Foundation In Structural Analysis, Infrastructure Design, And Construction Management With A Focus On Sustainable Solutions.",
  },
  {
    title: "Design Excellence",
    description:
      "Creative problem-solving through user-centered design, visual communication, and innovative approaches to complex challenges.",
  },
  {
    title: "Operations Management",
    description:
      "End-to-end project leadership, process optimization, and strategic coordination to deliver results on time and within budget.",
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
    title: "B.E. (CIVIL), M.S. – First Class with Distinction (1998)",
    institution: "RAMAIAH COLLEGE, BANGALORE",
  },
  {
    title: "Executive MBA (Business Administration)",
    institution:
      "INTERNATIONAL SCHOOL OF BUSINESS MANAGEMENT & ADMINISTRATION (ISBM)",
  },
  {
    title: "Fellow & Approved Lifetime Member",
    institution: "INSTITUTION OF VALUERS (IMMOVABLE PROPERTY)",
  },
  {
    title: "Qualified Auditor ",
    institution: "ISO 9001:2008 QUALITY MANAGEMENT SYSTEM",
  },
  {
    title: "Advanced Training ",
    institution: "GREEN BUILDING RATING SYSTEM (CII & IGBC)",
  },
  
];

const coreStrengths = [
  {
    id: 1,
    title: "Strategic Vision & Leadership",
    icon: "/cs1.png",
  },
  {
    id: 2,
    title: "Project & Design Management",
    icon: "/cs2.png",
  },
  {
    id: 3,
    title: "Technical Due Diligence & Feasibility Studies",
    icon: "/cs3.png",
  },
  {
    id: 4,
    title: "Cross-functional Team Leadership",
    icon: "/cs4.png",
  },
  {
    id: 5,
    title: "Business Development & Client Relations",
    icon: "/cs5.png",
  },
  {
    id: 6,
    title: "Sustainable Design Solutions",
    icon: "/cs6.png",
  },
  {
    id: 7,
    title: "",
    icon: null,
  },
  {
    id: 8,
    title: "Innovation & Risk Management",
    icon: "/cs7.png",
  },
  {
    id: 9,
    title: "",
    icon: null,
  },
];

const testimonials = [
  {
    name: "Vivek Uthaiah ",
    position:"Partner, Studio30 Architects and Planners",
    text: "I have been professionally associated with Shobha N V over two decades in a wide range of projects. She brings innovative Real estate trends, Project adaptive processess which are grounded and sustainable. These aspects are beneficial for all stakeholder of our projects.",
    rating: 5,
  },
  {
    name: "BO Prasanna Kumar",
    position:"Jt. Managing Director, DesignTree Service Consultants Pvt Ltd",
    text: "Shobha consistently demonstrates professionalism, attention to detail, and a remarkable ability to manage complex projects. Her friendly demeanour and excellent communication skills make her a joy to work with. Knowledge on MEPF systems & standards is exceptional, focus on sustainable design is an added advantage. Process driven approach towards coordination with all stakeholders. Rare combination of practical and design know how with focus on quality is commendable. Her exceptional project coordination skills have been invaluable to success of project.",
    rating: 5,
  },
  {
    name: "Manjunath Tv",
    position:"Chief Executive Officer at BSCPL Infrastructure Ltd",
    text: "Highest commitment is shown on any work which is taken up,A good leader who can get the work done with parameters, assures the quality of work to a great extent, and handles people with courage. Convincing capabilities are strong.Takes information and knowledge from one and all, incorporating modifications to get better results.She can handle total real estate development starting from business development to project completion - excellent in designing, coordination, contracts, purchase, and execution. · Thorough in regulatory requirements.In a nutshell, she can spearhead any organization. Having started her own consulting firm, it is a pleasure working with her. Desired results are assured.",
    rating: 5,
  },
  {
    name: "Gururaj Thali",
    position:"CMD Innotech Engineering Consult Pvt Ltd",
    text: ". Ms Shobha is a very well organised engineer with vast talent and zeal to work effectively with all the stakeholders. · Capable leader who can handle Urban Planning / Master planning. · Ability to connect the design with costing is an added advantage. · The structural systems knowledge is good and effective, open to new ideas. · Coordination with all consultants is smooth and result oriented. . A very dynamic, proactive approach to managing the work environment and a successful one too in the male dominated industry. · Wishing her all the best.",
    rating: 5,
  }
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
    title: "Assistant Vice President – Operations | BSCPL Infrastructure Ltd",
    date: "August 2013 – January 2022",
    description: [
      "Oversaw design, development, liasoning, procurement, and project execution across Bangalore, Hyderabad, and Chennai.",
      "Conducted technical due diligence and feasibility studies for new acquisitions nationwide.",
      "Spearheaded ERP implementation covering sales, marketing, procurement, HR, and execution.",
      "Established SOPs, procurement methods, and standard costing practices for all projects.",
      "Successfully executed FTTH unified systems for telecom, CCTV, and access control.",
      "Supported import procurement from China and South Korea ensuring quality compliance and cost efficiency.",
    ],
  },
  {
    position: "left",
    title: "Deputy General Manager – Design & Development | Century Group",
    date: "June 2011 – August 2013",
    description: [
      "Directed design coordination with architects, service consultants, and landscape teams.",
      "Facilitated statutory approvals and finalization of conceptual and schematic drawings.",
      "Worked with Contracts and QS teams to develop BOQs and tender documents.",
      "Guided architects in preparing sanction plans and liaised with government authorities (BDA, BBMP, Fire Dept).",
    ],
  },
  {
    position: "right",
    title: "Senior Manager – Projects (Pan India Planning) | Ascendas",
    date: "May 2008 – May 2011",
    description: [
      "Led national-level project planning, audits, and benchmarking for IT parks and SEZ developments.",
      "Conducted technical due diligence and feasibility studies for acquisitions.",
      "Ensured compliance with ISO 9001:2000 standards and facilitated LEED Gold-rated green building designs.",
      "Delivered presentations and reports for strategic project reviews and management decisions.",
      
    ],
  },
  {
    position: "left",
    title: "AGM – Planning | Mantri Developers",
    date: "August 2005 – April 2008",
    description: [
      "Headed design coordination and feasibility studies for premium residential and commercial projects across major cities.",
      "Managed environmental initiatives and statutory clearances (Hyderabad, Chennai, Pune).",
      "Collaborated with international architects including HOK (US), RTKL (London), and BENOY (Hong Kong).",
    ],
  },

  {
    position: "right",
    title: "Project Coordinator & Technical Assistant to VP – Projects | Brigade Group",
    date: "January 2002 – July 2005",
    description: [
      "Assisted in overall design and development coordination for commercial, residential, and hospitality projects.",
      "Conducted area calculations, bill verifications, tenders, and ISO documentation.",
      "Coordinated statutory NOC and PCB clearances.",
    ],
  },
  {
    position: "left",
    title: "Project Engineer | RNR Constructions Pvt. Ltd. & DEE Group",
    date: "November 1998 – October 2001",
    description: [
      "Supervised construction and design documentation for residential and industrial projects totaling over 5 lakh sq.ft.",
      "Prepared BOQs, rate analyses, and coordinated with clients and architects.",
    ],
  },
];

const showcaseImages = [
  "/sc1.webp",
  "/sc2.webp",
  "/sc3.webp",
  "/sc4.webp",
];

export const Home = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = false;
    video.pause();

    const handleScroll = () => {
      if (!video) return;

      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = documentHeight > 0 ? scrollTop / documentHeight : 0;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      if (video.readyState >= 2 && video.duration) {
        if (video.paused) {
          video.play().catch((err) => {
            console.log("Video play prevented:", err);
          });
        }

        requestAnimationFrame(() => {
          if (video && video.duration) {
            video.currentTime = clampedProgress * video.duration;
          }
        });
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        if (video && !video.paused) {
          video.pause();
        }
      }, 150);
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
    <div className="bg-white overflow-hidden w-full relative">
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
        {/* HEADER SECTION - Responsive */}
        <header className="relative w-full min-h-[600px] md:min-h-[90vh]">
          <div className="w-full h-[90vh] bg-[linear-gradient(121deg,rgba(255,255,255,0.87)_52%,rgba(153,153,153,0.22)_100%)]">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 flex flex-col justify-center ">
              {/* Top Navigation Bar */}
              <div className="flex items-center justify-between mb-8 md:mb-16">
                <div className="[font-family:'Boldonse',Helvetica] font-normal text-[#070d59] text-xs md:text-sm tracking-[3.60px] leading-[normal]">
                  SHOBHA N.V.
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 xl:gap-12">
                  {navigationItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-[13px] xl:text-[15px] tracking-[2.55px] leading-[normal] whitespace-nowrap hover:text-[#ee6f57] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                  onClick={() => setIsMobileMenuOpen(v => !v)}
                  className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur border border-black/10 text-[#00032d]"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Hero Content */}
              <div className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-24 max-w-4xl">
                <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-sm md:text-lg lg:text-xl tracking-[3.00px] md:tracking-[4.00px] leading-[normal]">
                  A VISIONARY FORCE IN REAL ESTATE DEVELOPMENT
                </p>

                <h1 className="[font-family:'Boldonse',Helvetica] font-normal text-4xl md:text-7xl lg:text-8xl tracking-[0] leading-[1.1]">
                  <span className="text-[#00032d]">SHOBHA N</span>
                  <span className="text-[#ee6f57]">.</span>
                  <span className="text-[#00032d]">V</span>
                  <span className="text-[#ee6f57]">.</span>
                </h1>

                <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-base md:text-lg lg:text-xl tracking-[0.60px] leading-[1.6] max-w-2xl">
                  Founder &amp; Ceo | 25+ Years In Project Lifecycle Management From
                  Concept To Execution
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4">
                  <Button className="w-full sm:w-[179px] h-[46px] bg-[#ee6f57] hover:bg-[#d96349] [font-family:'Raleway',Helvetica] font-semibold text-white text-[15px] tracking-[0.45px]">
                    View My Work
                  </Button>
                  <Button className="w-full sm:w-[179px] h-[46px] bg-[#ee6f57] hover:bg-[#d96349] [font-family:'Raleway',Helvetica] font-semibold text-white text-[15px] tracking-[0.45px]">
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-3/4 max-w-[320px] bg-white shadow-xl p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="[font-family:'Boldonse',Helvetica] text-[#00032d] tracking-[2px]">MENU</span>
                  <button
                    aria-label="Close menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-black/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navigationItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="[font-family:'Raleway',Helvetica] text-[#00032d] text-base tracking-[1.5px] hover:text-[#ee6f57]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </header>

        {/* FEATURE CARDS SECTION - Responsive Grid */}
        <section className="relative w-full bg-[#00032d] py-12 md:py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-white/30">
              {featureCards.map((card, index) => (
                <div key={index} className="flex flex-col gap-6 md:px-8 lg:px-12 text-center">
                  <h3 className="[font-family:'Boldonse',Helvetica] font-normal text-white text-lg md:text-xl tracking-[0] leading-[normal]">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Raleway',Helvetica] font-light text-white text-base md:text-lg lg:text-xl tracking-[0.60px] leading-[1.6]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - Responsive Flex Layout */}
        <section id="about" className="relative w-full bg-[#ffffffde] py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-5">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex-[0.8] space-y-8">
                <div>
                  <h1 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] mb-4">
                    ABOUT ME
                  </h1>
                  <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-sm md:text-[15px] tracking-[0] leading-[1.6]">
                    With A Foundation In Civil Engineering And A Passion For
                    Design, I've Evolved Into An Operations Specialist Who
                    Thrives On Transforming Complex Challenges Into Streamlined,
                    Efficient Solutions.
                  </p>
                </div>

                <div>
                    <h3 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-lg md:text-xl tracking-[0] leading-[normal] mb-4">
                      CAREER HIGHLIGHTS
                    </h3>
                    <div className="space-y-3">
                      {careerHighlights.map((highlight, index) => (
                        <div key={index} className="flex gap-3">
                          <img
                            className="w-3.5 h-3.5 mt-1 flex-shrink-0"
                            alt="Bullet point"
                            src="/garbage-truck-7.png"
                          />
                          <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-sm md:text-[15px] tracking-[0] leading-[1.6]">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                
              </div>

              {/* Right Content - Image and Details */}
              <div className="flex-1 lg:flex-[1.5] flex flex-col md:flex-row gap-8">
                {/* Image */}
                <div className="relative w-full md:w-1/2 lg:w-[220px] lg:flex-shrink-0">
                  <div className="relative w-full max-w-[390px] mx-auto">
                    <div className="w-full aspect-[372/559] bg-[#ee6f57] translate-x-4 translate-y-2" />
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      alt="Professional portrait"
                      src="/img-20251030-wa0008-1.png"
                    />
                  </div>
                </div>

                {/* Career & Competencies */}
                <div className="flex-1 space-y-8 px-2 md:px-12">
                  
                <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-sm md:text-[15px] tracking-[0] leading-[1.6]">
                  A visionary force in real estate development, Shobha N.V. blends technical rigor, entrepreneurial flair and decades-long expertise to shape impactful urban projects across India. From technical due diligence and feasibility studies to development management and procurement, Shobha delivers economical, sustainable design solutions.
                </p>

                  <div>
                    <h3 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-lg md:text-xl tracking-[0] leading-[normal] mb-4">
                      CORE COMPETENCIES
                    </h3>
                    <div className="space-y-3">
                      {coreCompetencies.map((competency, index) => (
                        <div key={index} className="flex gap-3">
                          <img
                            className="w-3.5 h-3.5 mt-1 flex-shrink-0"
                            alt="Bullet point"
                            src="/garbage-truck-7.png"
                          />
                          <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-sm md:text-[15px] tracking-[0] leading-[1.6]">
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

        {/* MARQUEE SECTION */}
        <section className="relative w-full bg-[#00032d] py-8 overflow-hidden">
          <marquee behavior="scroll" direction="left" scrollamount="6" className="w-full">
            <span className="[font-family:'Raleway',Helvetica] font-medium text-white text-xl md:text-2xl lg:text-[32px] tracking-[1.92px] leading-[1.2] whitespace-nowrap">
              Founder &amp; Ceo ✦ Real Estate Development ✦ Design &amp; Project Management ✦ Consulting &amp; Entrepreneurship
            </span>
          </marquee>
        </section>

       

        

        {/* EDUCATION & CERTIFICATIONS - Responsive Grid */}
        <section className="relative w-full bg-[#ffffffde] py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] text-center mb-4">
              EDUCATION &amp; CERTIFICATIONS
            </h1>
            <p className="[font-family:'Raleway',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl text-center tracking-[2.00px] md:tracking-[3.40px] leading-[normal] mb-12">
              What Our Client Say About Us
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {educationCertifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffffde] rounded-[5px] border-l-[9px] border-l-[#ee6f57] border-r-0 border-t-0 border-b-0 shadow-[0px_0px_4px_-1px_#00000061]"
                >
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-lg md:text-xl lg:text-xl tracking-[0] leading-[1.4] ">
                      {cert.title}
                    </p>
                    {cert.institution && (
                      <p className="[font-family:'Raleway',Helvetica] font-bold text-[#00032d] text-sm md:text-base text-right tracking-[0] leading-[normal]">
                        {cert.institution}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

         {/* PROFILE DESCRIPTION SECTION */}
         <section className="relative w-full min-h-[60vh] bg-[#ffffffde] py-12 md:py-16 lg:py-24 flex items-center justify-center">
          <div className="container w-[80%] mx-auto px-6 md:px-12 lg:px-20">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={4}
              textClassName="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-base md:text-lg lg:text-3xl/10 text-center tracking-[0.60px] "
            >
              Dynamic and results-driven Real Estate and Construction professional with over 25 years of leadership experience in end-to-end project lifecycle management, from conceptual design to execution across residential, commercial, IT, and hospitality sectors. Proven expertise in strategic planning, feasibility studies, technical due diligence, and development management for large-scale, sustainable projects. Recognized for establishing and leading high-performing teams, implementing operational excellence, and driving organizational growth through innovation and integrity.
            </ScrollReveal>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <section className="relative w-full bg-[#ffffffde] py-12 md:py-16">
          <h1 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] text-center mb-4">
            PROFESSIONAL EXPERIENCE
          </h1>
          <p className="[font-family:'Raleway',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl text-center tracking-[2.00px] md:tracking-[3.40px] leading-[normal] mb-12">
          projects and specifics of what I handled comes in
          </p>

          <div className="max-w-5xl mx-auto px-6 pb-16">
            <VerticalTimeline lineColor="#EE6F57">
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
        </section>

        {/* CORE STRENGTHS - Responsive Grid */}
        <section className="relative w-full py-12 md:py-16 lg:py-24 bg-[#00032d]">
          <h1 className="[font-family:'Boldonse',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] text-center mb-4">
            CORE STRENGTHS
          </h1>
          <p className="[font-family:'Raleway',Helvetica] font-normal text-white text-base md:text-lg lg:text-xl text-center tracking-[2.00px] md:tracking-[3.40px] leading-[normal] mb-12">
          professional and suitable for resumes or business profiles
          </p>

          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {coreStrengths.map((card, index) => {
                const isRightColumn = (index + 1) % 3 === 0;
                const isBottomRow = index >= 6;
                return (
                  <div
                    key={card.id}
                    className={`bg-[#fff] p-6 md:p-8 cursor-pointer min-h-[200px] md:min-h-[250px] flex flex-col items-center justify-center group ${
                      !isRightColumn ? 'md:border-r border-[#00032d]' : ''
                    } ${
                      !isBottomRow ? 'border-b border-[#00032d]' : ''
                    }`}
                    style={{
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        {card.icon != null && (
                          <img src={card.icon} alt={card.title} className="w-12 h-12 md:w-16 md:h-16" />
                        )}
                      </div>
                      {card.title && (
                        <h3 className="text-sm md:text-base font-normal text-gray-900 group-hover:text-white transition-colors duration-300 leading-relaxed">
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

        {/* SHOWCASE SECTION - Responsive */}
        <section id="showcase" className="relative w-full bg-[#ffffffde] py-12 md:py-16 lg:py-24">
          <h1 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] text-center mb-4">
            SHOWCASE
          </h1>
          <p className="[font-family:'Raleway',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl text-center tracking-[2.00px] md:tracking-[3.40px] leading-[normal] mb-12">
          Showcasing Our Expertise and Excellence
          </p>
          
          <div className="px-4 md:px-8 pb-8 md:pb-16">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {showcaseImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Showcase ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* TESTIMONIALS SECTION - Responsive */}
        <section className="relative w-full bg-[#00032d] py-12 md:py-16 lg:py-24">
          <h1 className="[font-family:'Boldonse',Helvetica] font-normal text-white text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] text-center mb-4">
            TESTIMONIALS
          </h1>
          <p className="[font-family:'Raleway',Helvetica] font-normal text-white text-base md:text-lg lg:text-xl text-center tracking-[2.00px] md:tracking-[3.40px] leading-[normal] mb-12">
            What Our Client Say About Us
          </p>

          <div className="px-6 md:px-12 lg:px-24 pb-8">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2,
                },
              }}
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card className="w-full max-w-[600px] min-h-[60vh] bg-white rounded-[5px] mx-auto">
                    <CardContent className="p-0 h-full flex flex-col items-center justify-center pt-8 px-6">
                      {/* <div className="w-20 h-20 bg-[#ee6f57] rounded-full mb-4" /> */}
                      <p className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-base text-center tracking-[0] leading-[normal] mb-2">
                        {testimonial.name}
                      </p>
                      <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-[13px] text-center tracking-[0] leading-[normal] mb-2">
                        {testimonial.position}
                      </p>
                      
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-3 h-3 fill-current text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-sm text-center tracking-[0] leading-[1.6]">
                        {testimonial.text}
                      </p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      
        {/* CONTACT SECTION - Responsive Grid */}
        <section id="contact" className="relative w-full bg-[#ffffffde] py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] text-center mb-4">
              CONTACT ME
            </h1>
            <p className="[font-family:'Raleway',Helvetica] font-normal text-[#00032d] text-base md:text-lg lg:text-xl text-center tracking-[1.5px] leading-[normal] mb-12">
              I'd love to hear from you. Reach out via the form or the channels below.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div className=" p-6 md:p-8">
                <h3 className="[font-family:'Boldonse',Helvetica] font-normal text-[#00032d] text-xl md:text-2xl mb-6">Direct Contacts</h3>
                <div className="space-y-5">
                  <div>
                    <p className="[font-family:'Raleway',Helvetica] font-bold text-[#00032d] text-base mb-1">Emails</p>
                    <div className="flex flex-col gap-1">
                      <a className="text-[#ee6f57] hover:underline text-sm md:text-base" href="mailto:shobha@example.com">shobha@example.com</a>
                      <a className="text-[#ee6f57] hover:underline text-sm md:text-base" href="mailto:contact@shobhanv.com">contact@shobhanv.com</a>
                    </div>
                  </div>

                  <div>
                    <p className="[font-family:'Raleway',Helvetica] font-bold text-[#00032d] text-base mb-1">Phone</p>
                    <div className="flex flex-col gap-1">
                      <a className="text-[#ee6f57] hover:underline text-sm md:text-base" href="tel:+911234567890">+91 12345 67890</a>
                      <a className="text-[#ee6f57] hover:underline text-sm md:text-base" href="tel:+919876543210">+91 98765 43210</a>
                    </div>
                  </div>

                  <div>
                    <p className="[font-family:'Raleway',Helvetica] font-bold text-[#00032d] text-base mb-1">Social & Web</p>
                    <div className="flex flex-col gap-1">
                      <a className="text-[#ee6f57] hover:underline text-sm md:text-base" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      <a className="text-[#ee6f57] hover:underline text-sm md:text-base" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                      <a className="text-[#ee6f57] hover:underline text-sm md:text-base" href="https://www.shobhanv.com" target="_blank" rel="noopener noreferrer">Website</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white rounded-[5px] shadow-[0px_0px_4px_-1px_#00000061] p-4">
                <div className="w-full min-h-[400px] md:min-h-[480px]">
                  <iframe
                    width="100%"
                    height="480px"
                    src="https://forms.office.com/r/073X776QTy?embed=true"
                    frameBorder="0"
                    marginWidth={0}
                    marginHeight={0}
                    style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER - Responsive */}
        <footer className="relative w-full bg-[#00032d] py-8 md:py-10">
          <div className="container mx-auto px-6 md:px-12">
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-6">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Raleway',Helvetica] font-normal text-white text-xs md:text-sm lg:text-[15px] tracking-[1.5px] md:tracking-[2px] hover:text-[#ee6f57] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="h-px bg-white/20 mb-6" />

            <div className="text-center [font-family:'Raleway',Helvetica] text-white text-xs md:text-sm opacity-90">
              <p className="mb-1">© {new Date().getFullYear()} All rights reserved.</p>
              <p>
                Design by <span className="font-semibold"> <a
                  href="https://webasi.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ee6f57] hover:underline"
                >
                  WEBASI
                </a></span> 
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};