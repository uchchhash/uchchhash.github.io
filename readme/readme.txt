
###########################################
############ Portfolio Website ############
###########################################

###############################
#### About Me 
###############################

Hi, I'm Uchchhash Sarkar.
I am a Design Verification Engineer, with a B.Sc. in EEE.
My research interests include System-on-Chip, Computer Architecture, In-Memory Computing, AI Accelerators, and Hardware Security.

###############################
#### Academic Credentials
###############################

Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering
- Nov 16-Aug 21
- Ahsanullah University of Science and Technology (AUST)
- Cumulative GPA: 3.584/4.00; 
- Last Four Semester: 3.854/4.00
- Relevant Courses: 
    - VLSI, 
    - Computer Architecture, 
    - Microcontroller and Microprocessor, 
    - Digital Logic Design, 
    - Digital Signal Processing, 
    - Analog Integrated Circuit


###############################
#### Professional Experience
###############################

Design Verification Engineer, Department of Silicon Engineering   
- Dec 21–Present
- Ulkasemi Private Limited, Dhaka, Bangladesh.
- Skilled in test plan development, self-checking testbench implementation, debugging, coverage analysis, and 
    protocol checking with assertions of IP-level RTL designs using SystemVerilog and UVM
- Skilled in behavioral modeling for mixed-signal design, creating self-checking testbench to validate models, 
    verifying schematics according to design specifications, and 
    integrating analog and digital domains into a UVM testbench environment

###############################
#### Technical Skills 
###############################
- Design Verification: SystemVerilog, Verilog-AMS, UVM, UVM-RAL, UVMF
- EDA Tools: Cadence (Xcelium, Virtuoso, IMC, ICCR), Synopsys (Verdi, VCS), Modelsim
- Protocol Knowledge: AMBA, SPI, I2C, DFI, DDR4, HBM4, UCIe
- Behavioral Modeling: PLL, Data Converters, PMIC, SerDes
- Computer Architecture: ISA & microarchitecture, control-data path, pipelining, memory hierarchy
- Programming: OOP, C++, Python, Bash, Git, Perforce
- Data Analysis: Python libraries (Pandas, NumPy, Matplotlib, Seaborn)
- ML & Computer Vision: Supervised Learning, CNNs (YOLO), TensorFlow, Scikit-Learn

###############################
#### Project Experience 
###############################

- Customer Testbench Development of HBM4 PHY Layer
- Functional Coverage Checkers Development for LPDDR5x/4x
- Development and Integration of DMS Models and UVM Testbench for SoC Verification
- Functional Verification of USB Type-C and USB PD Controller
- Mixed Signal Modeling and Verification of Next-Gen Wireless Base Band Generator
- Real Number Modeling of Analog Blocks of Touch Controller
- Functional Verification of AMBA APB, AHB, AXI Slave, I2C Slave, and SPI Master Controller
- Comparative Analysis of Different SRAM Topologies
- Data Science and Machine Learning Projects


###############################
#### Research Experience
###############################

Undergraduate Thesis
“Enabling and Enforcing Social Distancing for COVID-19 Using Fully Convolutional YOLO Neural Networks." 
- It focuses on the social distancing protocol to prevent coronavirus spread. 
- We used a deep learning-based object detection system to detect crowds in public places and 
- inform people about the crowd density around them through a web application.

Abu Nayem MD. Noman, Pranesh Majumder, Uchchhash Sarkar, and Susmita Karmaker, 
"Optimizing Threshold Voltage Performance in AlGaN/GaN MIS-HEMTs through GaON Integration." 
Presented at the 9th IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE).

###############################
#### Extra Curricular Courses
###############################

- Python for Everybody Specialization
- Neural Networks and Deep Learning
- Data Science with Python


###############################
#### Contace Me 
###############################
Name : Uchchhash Sarkar
Address : Sector 14, Uttara, Dhaka 1230, Bangladesh
Phone: +8801778944122 
Email: uchchhash.sarkar@gmail.com
LinkedIn: uchchhash 
Github: uchchhash
ResearchGate : uchchhash_sarkar







export const professional_experience = [
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
    ],    tags: ["Functional-Verification", "Behavioral-Modelling", "Co-Simulation"],
    icon: "truck ",
  },
];


xport const academic_credentials = [
  {
    title: "B.Sc. in Electrical & Electronic Engineering",
    duration: "Nov 16 - Aug 21",
    subtitle: "Ahsanullah University of Science & Technology",
    details: [],
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
    details: [],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

   <head>
      <!-- Character encoding declaration: Specifies that the document uses UTF-8 encoding, which supports all characters and symbols. -->
      <meta charset="utf-8">
   
      <!-- X-UA-Compatible: Ensures the page is rendered using the latest rendering engine in Internet Explorer. Improves compatibility. -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
   
      <!-- The title of the webpage, shown in the browser tab. It can be customized to reflect the portfolio owner's name or website theme. -->
      <title>Uchchhash Sarkar</title>
   
      <!-- Viewport settings: Controls the page's dimensions and scaling. "width=device-width" ensures the page matches the device width.
           "initial-scale=1" means the page is displayed at normal size (no zoom by default). Important for responsive design. -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
   
      <!-- Description of the webpage content. Used by search engines (SEO) and when sharing the page on social media. -->
      <meta name="description" content="Uchchhash Sarkar Portfolio" />
   
      <!-- Keywords: A list of words or phrases relevant to the content of the webpage. Used by search engines to understand the page context.
           Not as important for modern SEO, but still good practice. 
      <meta name="keywords" content="portfolio, website, personal website, github, projects, engineering, EEE, machine learning" /> -->
   
      <!-- Author: Identifies the creator of the webpage. Useful for both search engines and site administration. -->
      <meta name="author" content="Uchchhash Sarkar" />
   
      <!-- Link to Font Awesome: A library that provides scalable vector icons and social logos.
           These icons can be styled with CSS just like fonts (color, size, etc.). -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   
      <!-- Favicon: Specifies the small icon displayed in the browser tab next to the title. The image is in the "/images" folder. 
      <link rel="icon" type="image/png" href="/images/logo.png"> -->
   
      <!-- Google Fonts: Import custom fonts to style the webpage. "Quicksand" is a clean, geometric sans-serif font used for body text or headers.
           Different weights are included: 300 (light), 400 (normal), 500 (medium), and 700 (bold). -->
      <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
   
      <!-- Google Fonts: "Playfair Display" is a serif font typically used for elegant headings or titles. It has both italic and bold variations. -->
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet">
   
      <!-- Google Fonts: "Montserrat", "Open Sans", and "Raleway" are versatile sans-serif fonts, often used for various sections of the webpage.
           These fonts ensure readability and modern look. -->
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Raleway&display=swap" rel="stylesheet">
   
      <!-- Link to Animate.css: A CSS library that provides pre-built animations (like fading, bouncing, sliding).
           It's used to animate elements when they enter or leave the viewport (scrolling, page load, etc.). -->
      <link rel="stylesheet" href="css/animate.css">
   
      <!-- Link to Bootstrap: A popular CSS framework that provides responsive design tools, grid layout, and pre-defined components.
           Bootstrap ensures the website is mobile-friendly and scales well on all devices. -->
      <link rel="stylesheet" href="css/bootstrap.css">
   
      <!-- Link to custom stylesheet (style.css): This file contains all the specific styles for the webpage, like color schemes, font sizes,
           spacing, and layout customizations. -->
      <link rel="stylesheet" href="css/style.css">
   
      <!-- Modernizr: A JavaScript library that detects HTML5 and CSS3 features in the user's browser.
           It allows developers to build fallbacks for unsupported features in older browsers. -->
      <script src="js/modernizr-2.6.2.min.js"></script>
   
      <!-- JavaScript module: "index.js" is loaded as a module, which means it can import/export specific functionalities.
           It likely contains dynamic content or interactivity for the webpage. -->
      <script type="module" src="index.js"></script>
   
      <!-- Custom JavaScript file: "profile-card.js" is responsible for the functionality and dynamic rendering of profile cards on the webpage.
           These may display data such as social profiles, GitHub contributions, or other personal information. -->
      <script src="js/profile-card.js"></script>
   </head>
