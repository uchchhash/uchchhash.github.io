
export const bio = [
  "Hi, I'm Uchchhash Sarkar.",
  "II am a Design Verification Engineer, with a B.Sc. in EEE.",
  "My research interests include System-on-Chip, Computer Architecture, In-Memory Computing, Hardware Accelerators, and Hardware Security.",
  "Thanks for visiting!",
];
  
export const education = [
  {
    title: "B.Sc. in Electrical & Electronic Engineering",
    duration: "November 16 - August 21",
    subtitle: "Ahsanullah University of Science & Technology",
    details: ["CGPA: 3.584/4.00, Last Four Semesters: 3.854/4.00"],
    tags: [
      "VLSI I & II",
      "Computer Architecture",
      "Microcontroller and Microprocessor",
      "Digital Logic Design",
      "Digital Signal Processing",
      "Analog Integrated Circuit",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Higher School Certificate in Science",
    duration: "2015",
    subtitle: "Board of Education, Dhaka",
    details: ["GPA: 5.00/5.00"],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const experience = [
  {
    title: "Ulkasemi Private Limited",
    duration: "December 2021 - Present",
    subtitle: "Design Verification Engineer",
    details: [
      `Skilled in test plan development, self-checking testbench implementation, debugging, coverage analysis, 
                    and protocol checking with assertions of IP-level RTL designs using SystemVerilog and UVM`,
      `Skilled in behavioral modeling for mixed-signal design, creating self-checking testbench to validate models, 
                verifying schematics according to design specifications, and 
                integrating analog and digital domains into a UVM testbench environment`,
    ],    tags: ["System-on-Chip", "Functional-Verification", "Behavioral-Modelling", "Co-Simulation"],
    icon: "group",
  },
];
export const projects = [
  {
    title: "Customer Testbench Development of HBM4 PHY Layer",
    subtitle: "June 24 - Present",
    duration: "",
    details: [
      "Worked on the development of the testbench architecture and test case plans.",
      "Developed clock, reset, and TDR agents and integrated them into the testbench architecture",
      "Implemented sort_reset, warm_reset, tdr_write, tdr_read sequences",
      "Currently working on implementing the HBM4 PHY Initialization sequence.",
    ],
    tags: ["HBM4 PHY", "PHY Init", "UVM"],
    icon: "group",
  },
  {
    title: "Functional Coverage Checkers Development for LPDDR5x/4x",
    subtitle: "April 24 - Present",
    duration: "",
    details: [
      "Monitored interactions between the memory controller and PHY through the DFI interface and flagged any illegal behaviors.",
      "Created coverage bins to catch these illegal actions, helping the Memory Controller team identify protocol violations instead of PHY issues.",
      "Developed negative test cases to ensure the illegal coverage bins were triggered correctly by the specified illegal conditions.",
    ],
    tags: ["LPDDR54x", "DFI", "Functional-Coverage"],
    icon: "group",
  },
  {
    title: "Development and Integration of DMS Models and UVM Testbench for SoC Verification",
    subtitle: "November 23 - January 24",
    duration: "",
    details: [
      "Contributed to DMS model development using SystemVerilog RNM and UDN for efficient analog-digital SoC verification.",
      "Integrated and validated analog models (e.g., PLL, PMU) in UVM testbenches, reducing simulation time.",
      "Acknowledged in the paper {{Advanced UVM Based Chip Verification Methodologies with Full Analog Functionality [NEED TO ADD LINK]}} for contributions.",
    ],
    tags: ["SoC-Verification", "Systemverilog RNM", "UVM"],
    icon: "group",
  },
  {
    title: "Functional Verification of USB Type-C and USB PD Controller",
    subtitle: "August 22 - October 22",
    duration: "",
    details: [
      "Developed the test case, assertion, and functional coverage plan from the specification for the clock reset block.",
      "Developed top-level test cases to transition between different power modes (active, idle, and sleep).",
      "Developed SystemVerilog assertions to verify the clock and reset behaviors.",
    ],
    tags: ["SV Assertions", "Clock-Reset-Block", "Test cases"],
    icon: "group",
  },
  {
    title: "Mixed Signal Modeling and Verification of Next-Gen Wireless Base Band Generator",
    subtitle: "April-June 22",
    duration: "",
    details: [
      "Developed behavioral models and self-checking testbenches for verifying the functionality of the mixed-signal design, including Power-on Reset, Thermal Shutdown Detect (TSD), Ultra-Low Voltage Detect (UVLO), LDO, Bias and Bandgap Generator, Oscillators, and Data Converters.",
      "Created a top-level test plan and verified the power-up sequence of the chip.",
      "Developed real number models and integrated them into the UVM environment.",
    ],
    tags: ["Mixed-Signal Verification", "Real Number Modeling", "UVM"],
    icon: "group",
  },
  {
    title: "Real Number Modeling of Analog Blocks of Touch Controller",
    subtitle: "Jan-Feb 23",
    duration: "",
    details: [
      "Developed behavioral models in SystemVerilog Real Number (RNM) of various analog mixed-signal blocks such as LDO, ADC, DAC, Inverter, Level Shifter, Clock Generator, and Bandgap Reference.",
      "Created self-checking testbenches in Verilog AMS to validate the behavioral models according to the design specifications and analog models.",
      "Developed self-checking testbenches to verify analog schematics against the validated models.",
    ],
    tags: ["Real Number Modeling", "Analog-Mixed-Signal", "Verilog AMS"],
    icon: "group",
  },
  {
    title: "Functional Verification of AMBA APB, AHB, AXI Slave, I2C Slave, and SPI Master Controller",
    subtitle: "Dec 21 - Aug 23",
    duration: "Ulkasemi Limited",
    details: [
      "Created test cases, coverage, and assertion plans based on design specifications for the IPs.",
      "Built UVM verification components, including drivers, monitors, and scoreboards.",
      "Generated and integrated the Register Abstraction Layer (RAL) model into the testbench for efficient verification of the APB-SPI Master Controller.",
      "Wrote SystemVerilog assertions to check protocols.",
    ],
    tags: ["AMBA Protocols", "UVM", "SystemVerilog Assertions"],
    icon: "group",
  },
  {
    title: "Comparative Analysis of Different SRAM Topologies",
    duration: "Dec 20",
    subtitle: "Ahsanullah University of Science and Technology",
    details: [
      "Analyzed power dissipation and the number of transistors required to design different SRAM circuits using CMOS technology.",
      "Compared various SRAM topologies to identify the most efficient design.",
    ],
    tags: ["SRAM", "Power Analysis", "CMOS"],
    icon: "group",
  },
  {
    title: "Data Science and Machine Learning Projects",
    duration: "June-July 21",
    subtitle: "Personal Projects",
    details: [
      "Conducted data pre-processing, analysis, and visualization for bike-sharing demand prediction and Titanic survival prediction datasets.",
      "Applied various regression and classification machine learning techniques to predict bike-sharing demand and passenger survival.",
    ],
    tags: ["Machine Learning", "Data Science", "Python"],
    icon: "group",
  },
];

export const courses = [
  {
    title: "Python for Everybody Specialization",
    duration: "May - July 20",
    subtitle: "University of Michigan on Coursera",
    details: [
      "Basic Python",
      "Python Data Structures",
      "Using Python to Access Web Data",
      "Retrieving, Processing, and Visualizing Data with Python",
    ],
    tags: ["Certificate of Compilation"],
    icon: "certificate",
  },
  {
    title: "Neural Networks and Deep Learning",
    duration: "September 20",
    subtitle: "DeepLearning.AI on Coursera",
    details: [
      "Deep Learning",
      "Artificial Neural Networks",
      "Backpropagation",
      "Neural Network Architecture",    ],
    tags: ["Certificate of Compilation"],
    icon: "brain",
  },
  {
    title: "Data Science with Python",
    duration: "June 21",
    subtitle: "Quantum.ai, BD",
    details: [
      "Python",
      "Statistics and Probability",
      "Web Scraping",
      "Data Preprocessing",
      "Data Visualization",
      "Exploratory Data Analysis",
      "Supervised Learning",
    ],
    tags: ["Certificate of Completion"],
    icon: "chart-line",
  },
];
