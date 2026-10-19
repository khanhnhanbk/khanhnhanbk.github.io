import type { IconName } from "@/components/Icon";

export type Testimonial = {
  quote: string;
  name: string;
  // Business or role, e.g. "Chủ shop thời trang, Đà Nẵng".
  role: string;
};

export const vi = {
  meta: {
    title: "Thiết kế website & phần mềm cho doanh nghiệp nhỏ — Khánh Nhân Freelancer",
    description:
      "Làm website giới thiệu, web bán hàng, phần mềm quản lý và công cụ tự động hoá theo yêu cầu. Tư vấn & báo giá miễn phí qua Zalo.",
    keywords: [
      "thiết kế website",
      "làm website",
      "thiết kế landing page",
      "làm web bán hàng",
      "phần mềm quản lý",
      "lập trình viên freelance",
      "freelancer IT",
    ],
    ogLocale: "vi_VN",
  },
  header: {
    logo: "Khanh Nhan",
    nav: [
      { href: "#services", label: "Dịch vụ" },
      { href: "#projects", label: "Dự án" },
      { href: "#faq", label: "Hỏi đáp" },
      { href: "#contact", label: "Liên hệ" },
    ],
    cta: "Nhắn Zalo",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },
  languageSwitch: "Chuyển ngôn ngữ",
  hero: {
    badge: "Đang nhận dự án · Tư vấn miễn phí",
    headline: "Website & phần mềm",
    highlight: "cho cửa hàng và doanh nghiệp nhỏ",
    pitch:
      "Đẹp trên điện thoại, dễ tìm trên Google, báo giá rõ ràng trước khi làm. Bạn chỉ cần kể ý tưởng — phần kỹ thuật để tôi lo.",
    ctaPrimary: "Nhắn Zalo tư vấn miễn phí",
    ctaSecondary: "Xem dự án",
    checks: ["Báo giá trước khi làm", "Xem demo thường xuyên", "Hỗ trợ sau bàn giao"],
    greeting: "Xin chào, tôi là",
    name: "Nguyễn Văn Khánh Nhân",
    role: "Lập trình viên Full-stack · Kỹ sư ĐH Bách Khoa TP.HCM",
    avatarAlt: "Ảnh của Nguyễn Văn Khánh Nhân",
  },
  stats: {
    items: [
      { value: "1+ năm", label: "làm phần mềm cho công ty công nghệ quốc tế" },
      { value: "< 24h", label: "phản hồi tin nhắn" },
      { value: "0đ", label: "tư vấn & báo giá" },
    ],
  },
  services: {
    eyebrow: "Dịch vụ",
    title: "Tôi có thể giúp gì cho bạn?",
    subtitle:
      "Không cần biết code — bạn nói mục tiêu kinh doanh, tôi đề xuất giải pháp vừa với ngân sách.",
    items: [
      {
        icon: "globe" as IconName,
        title: "Website giới thiệu & landing page",
        description:
          "Khách tìm thấy bạn trên Google, xem sản phẩm và bấm Zalo liên hệ ngay. Đẹp trên mọi điện thoại.",
      },
      {
        icon: "cart" as IconName,
        title: "Web bán hàng & đặt lịch",
        description:
          "Danh mục sản phẩm, giỏ hàng, đặt lịch hẹn, nhận đơn qua web — không phụ thuộc phí sàn.",
      },
      {
        icon: "dashboard" as IconName,
        title: "Phần mềm quản lý",
        description:
          "Quản lý đơn hàng, khách hàng, kho, nhân viên, báo cáo doanh thu — thay cho sổ sách và Excel rời rạc.",
      },
      {
        icon: "bolt" as IconName,
        title: "Tự động hoá & AI",
        description:
          "Tự động xử lý file Excel, gửi báo cáo, chatbot trả lời khách — tiết kiệm hàng giờ làm việc tay mỗi tuần.",
      },
      {
        icon: "wrench" as IconName,
        title: "Sửa lỗi & nâng cấp web cũ",
        description:
          "Web chậm, lỗi giao diện trên điện thoại, cần thêm tính năng? Tôi kiểm tra và báo giá sửa nhanh.",
      },
      {
        icon: "search" as IconName,
        title: "Tên miền, hosting & SEO",
        description:
          "Tư vấn và cài đặt tên miền .vn/.com, hosting, Google Maps, Google Analytics để web chạy ổn định.",
      },
    ],
  },
  projects: {
    eyebrow: "Dự án",
    title: "Sản phẩm tôi đã làm",
    viewLive: "Xem trực tiếp",
    problemLabel: "Vấn đề",
    solutionLabel: "Giải pháp",
    resultLabel: "Kết quả",
    items: [
      {
        id: "han-ngu",
        title: "Hán Ngữ Studio",
        problem: "Người Việt học tiếng Trung thiếu công cụ tập viết chữ Hán miễn phí, dễ dùng.",
        solution: "Web app tạo phiếu tập viết A4 in ngay và tách từ tiếng Trung tự động.",
        result: "Chạy hoàn toàn trên trình duyệt, không cần cài đặt, miễn phí cho mọi người.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python (FastAPI)", "Vercel"],
      },
      {
        id: "language-platform",
        title: "Nền tảng học ngoại ngữ",
        problem: "Cần một nền tảng học ngoại ngữ có lộ trình, bài tập và theo dõi tiến độ.",
        solution: "Hệ thống khoá học, bài học, từ vựng và bài kiểm tra chấm điểm tự động, kiểu Duolingo.",
        result: "Người học thấy rõ tiến độ; dễ mở rộng thêm khoá học và nội dung mới.",
        tags: ["ASP.NET Core", "Entity Framework Core", "Next.js", "SQL Server"],
      },
    ],
  },
  testimonials: {
    eyebrow: "Đánh giá",
    title: "Khách hàng nói gì",
    // Add real quotes here; the section stays hidden while this list is empty.
    items: [] as Testimonial[],
  },
  process: {
    eyebrow: "Quy trình",
    title: "Làm việc rõ ràng, minh bạch",
    steps: [
      {
        title: "Trao đổi miễn phí",
        description: "Bạn kể nhu cầu qua Zalo hoặc điện thoại, tôi tư vấn giải pháp phù hợp.",
      },
      {
        title: "Báo giá & lịch bàn giao",
        description: "Báo giá chi tiết bằng văn bản, chốt phạm vi và thời gian trước khi làm.",
      },
      {
        title: "Làm & gửi demo",
        description: "Bạn xem bản demo thường xuyên, góp ý và chỉnh sửa ngay trong quá trình làm.",
      },
      {
        title: "Bàn giao & hỗ trợ",
        description: "Bàn giao đầy đủ, hướng dẫn sử dụng, hỗ trợ sửa lỗi sau khi chạy thật.",
      },
    ],
  },
  faq: {
    eyebrow: "Hỏi đáp",
    title: "Câu hỏi thường gặp",
    items: [
      {
        q: "Làm một website mất bao lâu?",
        a: "Landing page thường 3–5 ngày, website doanh nghiệp 1–2 tuần, phần mềm quản lý 3–6 tuần. Thời gian chính xác được ghi rõ trong báo giá.",
      },
      {
        q: "Thanh toán như thế nào?",
        a: "Theo thỏa thuận ghi rõ trong báo giá bằng văn bản, trước khi bắt đầu làm.",
      },
      {
        q: "Tôi không rành công nghệ, có làm được không?",
        a: "Hoàn toàn được. Bạn chỉ cần mô tả công việc kinh doanh; tôi lo phần kỹ thuật và hướng dẫn bạn tự cập nhật nội dung.",
      },
      {
        q: "Có hỗ trợ tên miền, hosting không?",
        a: "Có. Tôi tư vấn và đăng ký giúp tên miền (.vn, .com) và hosting phù hợp; phí tên miền/hosting bạn trả trực tiếp cho nhà cung cấp.",
      },
      {
        q: "Sau khi bàn giao, cần sửa thì sao?",
        a: "Tôi hỗ trợ sửa lỗi sau bàn giao; thời gian hỗ trợ ghi rõ trong báo giá. Thêm tính năng hoặc bảo trì được báo giá theo từng yêu cầu.",
      },
      {
        q: "Website có thuộc về tôi không?",
        a: "Có. Bạn sở hữu toàn bộ mã nguồn, tên miền và dữ liệu.",
      },
    ],
  },
  aboutMe: {
    eyebrow: "Về tôi",
    title: "Kỹ sư phần mềm, làm việc như một đối tác",
    intro:
      "Tôi là Khánh Nhân, kỹ sư Khoa học Máy tính ĐH Bách Khoa TP.HCM. Tôi đã làm phần mềm tại AvePoint, FPT Software và Paradox.AI — giờ tôi mang cùng tiêu chuẩn đó vào sản phẩm cho bạn.",
    experienceTitle: "Kinh nghiệm",
    experience: [
      {
        company: "AvePoint",
        role: "Lập trình viên",
        dates: "03/2025 – 05/2026",
        summary:
          "Phát triển nền tảng di chuyển dữ liệu đám mây FLY (SharePoint, OneDrive, Google Drive) cho khách hàng doanh nghiệp.",
      },
      {
        company: "FPT Software",
        role: "Thực tập sinh Full-stack",
        dates: "02/2025 – 04/2025",
        summary: "Xây dựng nền tảng tuyển dụng với ASP.NET Core và Angular.",
      },
      {
        company: "Paradox.AI",
        role: "Thực tập sinh Backend",
        dates: "09/2024 – 01/2025",
        summary: "Phát triển REST API bằng Python/Django cho sản phẩm AI.",
      },
    ],
    educationTitle: "Học vấn & thành tích",
    education: [
      "Kỹ sư KHMT (Trí tuệ nhân tạo ứng dụng), ĐH Bách Khoa – ĐHQG TP.HCM, GPA 3.5/4",
      "Giải Nhất Toán quốc gia (2019)",
      "Huy chương Bạc HOMC (2018)",
      "TOEIC 750",
    ],
    skillsTitle: "Công nghệ sử dụng",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      "C# / ASP.NET Core",
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Docker",
      "Vercel",
    ],
  },
  contact: {
    title: "Sẵn sàng có website cho riêng bạn?",
    subtitle:
      "Nhắn Zalo để được tư vấn & báo giá miễn phí. Tôi thường phản hồi trong vòng 24 giờ.",
    cta: "Nhắn Zalo ngay",
    zalo: "Zalo",
    phone: "Điện thoại",
    email: "Email",
    facebook: "Facebook",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    copyright: "Nguyễn Văn Khánh Nhân",
    tagline: "Thiết kế website & phần mềm theo yêu cầu",
    floatingZalo: "Chat Zalo",
  },
};

export type Dictionary = typeof vi;
