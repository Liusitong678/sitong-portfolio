import batterySwap from "../assets/images/battery-swap-system.png";
import smartHotel from "../assets/images/smart-hotel.jpg";
import ipad from "../assets/images/ipad.jpg";

export const projectData = [
    {
      id: 1,
      title: "Battery Swap Station Management System 2.0",
      role: "Frontend Lead",
      company: "Zhejiang Geely Holding Group",
      location: "China",
      summary:
        "A management platform for electric vehicle battery swap stations, supporting battery operations, fault monitoring, device control, and real-time equipment status updates.",
      highlights: [
        "Led all frontend development for the system and its iterative releases.",
        "Built core modules including battery management, fault handling, swap operations, and device control pages.",
        "Implemented real-time communication with WebSocket for live device monitoring.",
        "Contributed to three major iterations, including UI redesign, new equipment monitoring features, and internationalization for overseas deployment.",
        "Added device upgrade management and PLC-related query features.",
        "Participated in on-site deployment, integration, and debugging in Jiaxing and Hangzhou Qiantang facilities.",
        "Currently deployed in more than 300 battery swap stations across China."
      ],
      image: batterySwap
    },
    {
      id: 2,
      title: "PAD Business Management System",
      role: "Frontend Developer",
      company: "Beijing Trust & Far Technology Co., Ltd.",
      location: "Hangzhou, China",
      summary:
        "A business device management system designed to support borrowing and returning PAD devices across departments.",
      highlights: [
        "Developed the Borrow & Return subsystem for PAD device workflow management.",
        "Built role-based interfaces for applicants, approvers, and device administrators.",
        "Supported application submission, approval flow, progress tracking, and device supervision.",
        "Improved workflow efficiency through clear role permissions and responsive interface design."
      ],
      image: ipad
    },
    {
      id: 3,
      title: "Smart Hotel Mini Program",
      role: "Frontend Developer",
      company: "Zhejiang Yuantong Intelligent Technology Co., Ltd.",
      location: "Hangzhou, China",
      summary:
        "A WeChat Mini Program for smart hotel room control, allowing users to manage connected devices through mobile interaction.",
      highlights: [
        "Handled all frontend development for the mini program.",
        "Built interfaces for controlling room devices such as doors, curtains, lighting, and televisions.",
        "Implemented the project using native JavaScript in the WeChat Mini Program development environment.",
        "Designed the interface to support intuitive mobile interaction for smart hotel scenarios."
      ],
      image: smartHotel
    }
  ];