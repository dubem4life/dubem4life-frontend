// import React from "react";
// import "./Home.css";
// import {
//   FaCar,
//   FaTools,
//   FaMicrochip,
//   FaKey,
//   FaWhatsapp,
//   FaPhoneAlt,
//   FaCheckCircle,
//   FaBolt,
//   FaShieldAlt,
//   FaClock,
//   FaArrowRight,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaMicrochip />,
//     title: "ECM / ECU (Brainbox)",
//     desc: "Professional diagnosis, repair, cloning, replacement and programming of Engine Control Modules for all vehicle brands.",
//   },
//   {
//     icon: <FaKey />,
//     title: "Smart Keys",
//     desc: "Key cutting, keyless entry systems, transponder programming and immobilizer solutions.",
//   },
//   {
//     icon: <FaCar />,
//     title: "Airflow Meters",
//     desc: "Testing, calibration and replacement of MAF sensors for maximum engine performance.",
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: "Immobilizers",
//     desc: "Immobilizer programming, synchronization and security module repairs.",
//   },
//   {
//     icon: <FaBolt />,
//     title: "Fuse Boxes",
//     desc: "Repair and replacement of damaged BCM, fuse boxes and electrical modules.",
//   },
//   {
//     icon: <FaTools />,
//     title: "Fuel Pump Modules",
//     desc: "Programming, diagnosis and replacement of electronic fuel pump control systems.",
//   },
// ];

// const stats = [
//   { number: "15+", label: "Years Experience" },
//   { number: "8,500+", label: "Vehicles Fixed" },
//   { number: "100%", label: "Customer Satisfaction" },
//   { number: "24/7", label: "Customer Support" },
// ];

// const brands = [
//   "Toyota", "Lexus", "Honda", "Mercedes", "BMW", "Hyundai",
//   "Kia", "Nissan", "Ford", "Volkswagen", "Mazda", "Mitsubishi",
// ];

// const Home = () => {
//   return (
//     <main className="home">

//       {/* ================= HERO ================= */}
//       <section className="hero">
//         <div className="hero-overlay"></div>
//         <div className="hero-container">
//           <div className="hero-left">
//             <span className="hero-badge">
//               Nigeria's Auto Electronics Specialist
//             </span>
//             <h1>
//               Specialists In <span> ECM / ECU </span> (Brainbox), Immobilizers, Smart Keys & Auto Electronics.
//             </h1>
//             <p>
//               DBM4 provides professional diagnosis, repair, replacement and programming of
//               Engine Control Modules (ECU/ECM), Brainboxes, Airflow Meters, Smart Keys, Immobilizers,
//               Fuel Pump Modules, Fuse Boxes and many other automotive electronic systems.
//             </p>

//             <div className="hero-buttons">
//               <a href="tel:+2348028845358" className="primary-btn">
//                 <FaPhoneAlt /> Call Now
//               </a>
//               <a href="https://wa.me/2348028845358" target="_blank" rel="noreferrer" className="secondary-btn">
//                 <FaWhatsapp /> WhatsApp
//               </a>
//             </div>

//             <div className="hero-features">
//               <div><FaCheckCircle /> Genuine Diagnostics</div>
//               <div><FaCheckCircle /> Fast Repairs</div>
//               <div><FaCheckCircle /> Affordable Pricing</div>
//             </div>
//           </div>

//           <div className="hero-right">
//             <div className="car-circle"></div>
//             <div className="hero-card">
//               <FaMicrochip className="hero-icon"/>
//               <h3>ECM / ECU Programming</h3>
//               <p>Advanced vehicle module diagnostics with industry standard programming tools.</p>
//             </div>
//             <div className="floating-card one">Brainbox Repair</div>
//             <div className="floating-card two">Smart Keys</div>
//             <div className="floating-card three">Immobilizers</div>
//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section className="about section">
//         <div className="section-title">
//           <span>ABOUT DBM4</span>
//           <h2>Trusted Auto Electronics Experts</h2>
//         </div>
//         <div className="about-grid">
//           <div className="about-image">
//             <div className="image-placeholder">
//               <FaCar />
//             </div>
//           </div>
//           <div className="about-content">
//             <h3>Modern Diagnostic Technology</h3>
//             <p>
//               We specialize in advanced automotive electronic systems for both modern
//               and luxury vehicles. Whether your vehicle requires ECU replacement,
//               immobilizer programming or smart key duplication, our experienced
//               technicians deliver dependable solutions.
//             </p>
//             <ul>
//               <li><FaCheckCircle /> ECU / ECM Programming</li>
//               <li><FaCheckCircle /> Smart Key Duplication</li>
//               <li><FaCheckCircle /> Immobilizer Solutions</li>
//               <li><FaCheckCircle /> Fuel Pump Module Repairs</li>
//               <li><FaCheckCircle /> Fuse Box Replacement</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section className="services section">
//         <div className="section-title">
//           <span>OUR SERVICES</span>
//           <h2>Professional Automotive Electronic Solutions</h2>
//         </div>
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon">{service.icon}</div>
//               <h3>{service.title}</h3>
//               <p>{service.desc}</p>
//               <button>
//                 Learn More <FaArrowRight />
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="stats">
//         <div className="stats-container">
//           {stats.map((item, index) => (
//             <div className="stat-card" key={index}>
//               <h2>{item.number}</h2>
//               <p>{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= BRANDS ================= */}
//       <section className="brands section">
//         <div className="section-title">
//           <span>VEHICLE BRANDS</span>
//           <h2>We Service All Major Vehicle Brands</h2>
//           <p>Our diagnostic equipment supports a wide range of Asian, European and American vehicles.</p>
//         </div>
//         <div className="brands-grid">
//           {brands.map((brand, index) => (
//             <div className="brand-card" key={index}>
//               <FaCar />
//               <span>{brand}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="why section">
//         <div className="section-title">
//           <span>WHY CHOOSE DBM4</span>
//           <h2>Your Trusted Partner In Auto Electronics</h2>
//         </div>
//         <div className="why-grid">
//           <div className="why-card">
//             <FaMicrochip />
//             <h3>Advanced Equipment</h3>
//             <p>We use professional diagnostic and programming equipment to detect electronic faults.</p>
//           </div>
//           <div className="why-card">
//             <FaClock />
//             <h3>Fast Turnaround</h3>
//             <p>Most electronic repairs are completed within the shortest possible time.</p>
//           </div>
//           <div className="why-card">
//             <FaShieldAlt />
//             <h3>Guaranteed Quality</h3>
//             <p>Every repair undergoes comprehensive testing before delivery to ensure performance.</p>
//           </div>
//         </div>
//       </section>

//       {/* ================= PROCESS ================= */}
//       <section className="process section">
//         <div className="section-title">
//           <span>HOW WE WORK</span>
//           <h2>Four Simple Steps</h2>
//         </div>
//         <div className="process-grid">
//           <div className="process-card"><span>01</span><h3>Vehicle Diagnosis</h3><p>Complete electronic diagnosis to identify the exact fault.</p></div>
//           <div className="process-card"><span>02</span><h3>Repair / Programming</h3><p>Repair or reprogram damaged modules using professional tools.</p></div>
//           <div className="process-card"><span>03</span><h3>Testing</h3><p>Every component is thoroughly tested before installation.</p></div>
//           <div className="process-card"><span>04</span><h3>Delivery</h3><p>Your vehicle leaves fully functional and road-ready.</p></div>
//         </div>
//       </section>

//       {/* ================= TESTIMONIALS ================= */}
//       <section className="testimonials section">
//         <div className="section-title">
//           <span>TESTIMONIALS</span>
//           <h2>What Our Customers Say</h2>
//         </div>
//         <div className="testimonial-grid">
//           <div className="testimonial-card">
//             <p>"DBM4 repaired my Toyota ECU after several mechanics couldn't solve the problem. Highly recommended."</p>
//             <h4>— Chinedu A.</h4>
//           </div>
//           <div className="testimonial-card">
//             <p>"Professional service, excellent communication and very affordable."</p>
//             <h4>— Ibrahim M.</h4>
//           </div>
//           <div className="testimonial-card">
//             <p>"They programmed my smart key in less than one hour. Fantastic work."</p>
//             <h4>— Ngozi E.</h4>
//           </div>
//         </div>
//       </section>

//       {/* ================= CALL TO ACTION ================= */}
//       <section className="cta">
//         <div className="cta-container">
//           <h2>Need Professional Auto Electronics Repairs?</h2>
//           <p>Contact DBM4 today for expert diagnostics, ECU programming, and module repairs.</p>
//           <div className="cta-buttons">
//             <a href="tel:+2348028845358" className="primary-btn"><FaPhoneAlt /> Call Now</a>
//             <a href="https://wa.me/2348028845358" target="_blank" rel="noreferrer" className="secondary-btn"><FaWhatsapp /> Chat On WhatsApp</a>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default Home;


import React from "react";
import "./Home.css";
import {
  FaCar,
  FaTools,
  FaMicrochip,
  FaKey,
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaShoppingCart,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShoppingCart />,
    title: "ECM / ECU (Brainbox)",
    desc: "Marketing and Sales of brand new and clean tested pre-owned Engine Control Modules (ECM/ECU) for all vehicle brands with warranty.",
  },
  {
    icon: <FaMicrochip />,
    title: "ECM / ECU (Brainbox) Services",
    desc: "Professional diagnosis, repair, cloning, replacement and programming of Engine Control Modules for all vehicle brands.",
  },
  {
    icon: <FaKey />,
    title: "Smart Keys & Immobilizers",
    desc: "Key cutting, keyless entry systems, transponder programming, and security module repairs.",
  },
  {
    icon: <FaCar />,
    title: "Airflow Meters",
    desc: "Supply, testing, calibration, and replacement of MAF sensors for maximum engine performance.",
  },
  {
    icon: <FaBolt />,
    title: "Fuse Boxes & Electricals",
    desc: "Sales, repair, and replacement of damaged BCM, fuse boxes, and electrical modules.",
  },
  {
    icon: <FaTools />,
    title: "Fuel Pump Modules",
    desc: "Supply, programming, diagnosis, and replacement of electronic fuel pump control systems.",
  },
];

const stats = [
  { number: "10,000+", label: "ECM / ECU (Brainbox) Sold" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Genuine Guarantee" },
  { number: "24/7", label: "Customer Support" },
];

const brands = [
  "Toyota", "Lexus", "Honda", "Mercedes", "BMW", "Hyundai",
  "Kia", "Nissan", "Ford", "Volkswagen", "Mazda", "Mitsubishi",
];

const Home = () => {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-left">
            <span className="hero-badge">
              Nigeria's Top Auto Electronics & ECM / ECU (Brainbox) Supplier
            </span>
            <h1>
              Marketing and Sales, Specialists In <span> ECM / ECU </span> (Brainbox), Immobilizers, Smart Keys & Auto Electronics.
            </h1>
            <p>
              DUBEM4LIFE is your premier hub for the marketing, sales, and distribution of genuine Engine Control Modules (ECU/ECM), Brainboxes, and advanced vehicle electronics, backed by expert configuration, diagnostic, and programming support.
            </p>

            <div className="hero-buttons">
              <a href="tel:+2348028845358" className="primary-btn">
                <FaPhoneAlt /> Call Sales Desk
              </a>
              <a href="https://wa.me/2348028845358" target="_blank" rel="noreferrer" className="secondary-btn">
                <FaWhatsapp /> Order on WhatsApp
              </a>
            </div>

            <div className="hero-features">
              <div><FaCheckCircle /> Nationwide Supply of ECM / ECU (Brainbox)</div>
              <div><FaCheckCircle /> Genuine Replacement Parts</div>
              <div><FaCheckCircle /> Certified Programming</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="car-circle"></div>
            <div className="hero-card">
              <FaShoppingCart className="hero-icon"/>
              <h3>Premium ECM / ECU (Brainbox) Store</h3>
              <p>Direct supply of tested OEM and brand new automotive computer modules.</p>
            </div>
            <div className="floating-card one">ECM / ECU (Brainbox) Supply</div>
            <div className="floating-card two">Wholesale & Retail</div>
            <div className="floating-card three">ECU Programming</div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about section">
        <div className="section-title">
          <span>ABOUT DUBEM4LIFE</span>
          <h2>Your Leading ECM / ECU (Brainbox) & Auto Electronics Partner</h2>
        </div>
        <div className="about-grid">
          <div className="about-image">
            <div className="image-placeholder">
              <FaCar />
            </div>
          </div>
          <div className="about-content">
            <h3>Direct Supply & Modern Technical Support</h3>
            <p>
              We prioritize the inventory, sales, and distribution of high-quality auto computer electronics. From sourcing rare modules to configuring them for your vehicle, our setup guarantees road-ready components for modern and luxury vehicles.
            </p>
            <ul>
              <li><FaCheckCircle /> Marketing and Sales of Premium ECUs / ECMs</li>
              <li><FaCheckCircle /> Genuine Replacement Modules in Stock</li>
              <li><FaCheckCircle /> Advanced ECU / ECM Programming</li>
              <li><FaCheckCircle /> Smart Key & Immobilizer Synchronization</li>
              <li><FaCheckCircle /> Secure Nationwide Shipping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services section">
        <div className="section-title">
          <span>OUR SERVICES</span>
          <h2>Marketing, Sales, and Advanced Electronic Solutions</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button>
                Inquire Rates <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="brands section">
        <div className="section-title">
          <span>VEHICLE BRANDS</span>
          <h2>ECM / ECU (Brainbox) and Modules for All Major Brands</h2>
          <p>We supply, match, and program electronic inventory for a wide range of Asian, European, and American vehicles.</p>
        </div>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <FaCar />
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why section">
        <div className="section-title">
          <span>WHY CHOOSE DUBEM4LIFE</span>
          <h2>Guaranteed Quality in Auto Electronics Distribution</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <FaShoppingCart />
            <h3>Verified Inventory</h3>
            <p>Every brainbox we sell is sourced from trusted manufacturers and verified for integrity.</p>
          </div>
          <div className="why-card">
            <FaClock />
            <h3>Immediate Delivery</h3>
            <p>Fast processing and shipping ensuring your replacement parts reach you swiftly.</p>
          </div>
          <div className="why-card">
            <FaShieldAlt />
            <h3>Warranty Coverage</h3>
            <p>Our sales items are backed by an operational warranty for your peace of mind.</p>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process section">
        <div className="section-title">
          <span>HOW WE WORK</span>
          <h2>Four Simple Steps</h2>
        </div>
        <div className="process-grid">
          <div className="process-card"><span>01</span><h3>Marketing and Sales</h3><p>Consult with our team to buy or source the perfect match module for your vehicle.</p></div>
          <div className="process-card"><span>02</span><h3>Vehicle Diagnosis</h3><p>Complete electronic diagnosis to identify the exact fault.</p></div>
          <div className="process-card"><span>03</span><h3>Repair / Programming</h3><p>Repair or reprogram modules using professional tools.</p></div>
          <div className="process-card"><span>04</span><h3>Testing & Delivery</h3><p>Every component is thoroughly tested before final handoff and road deployment.</p></div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials section">
        <div className="section-title">
          <span>TESTIMONIALS</span>
          <h2>What Our Store Customers Say</h2>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"DUBEM4LIFE supplied a clean, replacement ECU for my Lexus when no store in town had it. Their technical team configured it smoothly."</p>
            <h4>— Chinedu A.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Excellent store experience. Bought a wholesale batch of brainboxes; marketing details were accurate, and pricing is highly competitive."</p>
            <h4>— Ibrahim M.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Fantastic combination of auto parts sales and instant coding setup. Got my functional smart key and module delivered safely."</p>
            <h4>— Ngozi E.</h4>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="cta">
        <div className="cta-container">
          <h2>Looking for Genuine Auto ECM / ECU (Brainbox) or Electronic Modules?</h2>
          <p>Contact DUBEM4LIFE today to check inventory availability, request product pricing, or book a deployment service.</p>
          <div className="cta-buttons">
            <a href="tel:+2348028845358" className="primary-btn"><FaPhoneAlt /> Talk to Sales</a>
            <a href="https://wa.me/2348028845358" target="_blank" rel="noreferrer" className="secondary-btn"><FaWhatsapp /> Order on WhatsApp</a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
