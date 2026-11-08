# Portfolio dựng lại bằng Astro: giữ, bỏ, thêm

Cập nhật 2026-11-08 · Repo: github.com/khanhnhanbk/khanhnhanbk.github.io · Trạng thái: **chờ Novian duyệt**, chưa code.

## Trang hiện tại (đọc từ repo)

- Next.js 15 + React + Tailwind 3, xuất tĩnh, deploy GitHub Pages khi push `main`.
- Hai ngôn ngữ: tiếng Việt (`/`) và tiếng Anh (`/en`), chữ nằm trong `lib/i18n/vi.ts`, `en.ts`.
- Các phần: Header · Hero (ảnh, tên, chức danh, 2 nút) · Con số · Dịch vụ (6 ô) · Dự án (2) · Đánh giá (đang trống, tự ẩn) · Quy trình (4 bước) · Hỏi đáp (6) · Về tôi (kinh nghiệm, học vấn, kỹ năng) · Liên hệ · Footer · nút Zalo nổi.
- Hiệu ứng kính mờ (liquid glass) + con trỏ phát sáng, nút sáng/tối, in ra PDF A4 được, ảnh xem trước tự tạo.

## Giữ

| Phần | Ghi chú |
|---|---|
| Toàn bộ nội dung vi + en | Chuyển sang `src/data/vi.json`, `en.json` (cùng kiểu trang giáo viên) |
| Hiệu ứng kính mờ | Novian đã dặn phải giữ |
| Nút sáng/tối, nút Zalo nổi, in PDF A4 | |
| Thứ tự phần: dịch vụ → dự án → quy trình → hỏi đáp → về tôi → liên hệ | Đúng nhịp đã tìm hiểu (bằng chứng trước, nút lặp lại) |
| Ảnh đại diện, ảnh xem trước khi chia sẻ | Ảnh xem trước làm tĩnh `og.jpg` như trang giáo viên |

## Sửa (nội dung đã cũ)

| Chỗ | Hiện tại | Đề xuất |
|---|---|---|
| Kinh nghiệm | Dừng ở AvePoint 05/2026 | Thêm **Akselos, Python developer, Sài Gòn, từ 10/2026** lên đầu |
| Con số | "1+ năm" | "2 năm" (từ 09/2024) |
| Kỹ năng | Thiếu Astro, Cloudflare | Thêm Astro, Cloudflare; bớt Vue nếu không còn dùng |
| Lockfile | Có cả `package-lock.json` lẫn `pnpm-lock.yaml` | Chỉ giữ pnpm |

## Thêm

1. **Dự án mới:** trang bán gói web sinh viên (lam-web-sinh-vien), trang mẫu giáo viên (Astro, 8 giao diện), Speak Log (app luyện nói tiếng Anh, FastAPI + AI).
2. **Bento** cho phần con số và dịch vụ (cùng phong cách đã chốt).
3. **Nhận xét thật** của chị Hằng khi xong trang của chị (phần này đang trống).
4. **Bảng chọn giao diện:** không thêm, vì đây là trang của chính Novian, không phải trang mẫu.

## Bỏ

- Next.js, React, file `.tsx`: thay bằng Astro, trang ra HTML tĩnh, nhẹ hơn.
- `GlassPointer` (con trỏ phát sáng): giữ nếu Novian thích, nhưng chỉ bật trên máy tính để không tốn pin điện thoại.

## Cần Novian chốt

1. **Nơi chạy:** giữ GitHub Pages (khỏi đổi gì) hay dời sang Cloudflare cho giống trang giáo viên (có link xem trước cho mỗi PR)? Mình nghiêng về **Cloudflare**.
2. Làm trên **repo cũ** (nhánh mới, thay Next.js bằng Astro) hay tạo repo mới? Đề xuất **repo cũ**, giữ được lịch sử và link github.io.
3. Ba chỗ "Sửa" ở trên có đúng không (nhất là Akselos, kỹ năng)?

## Các bước sau khi chốt (mỗi bước một PR)

1. Khung Astro + theme (dùng lại `global.css` của trang giáo viên, thêm kính mờ) + chuyển nội dung sang JSON. Chưa đổi giao diện nhiều.
2. Dựng lại từng phần theo bento, giữ đủ nội dung vi/en.
3. Thêm dự án mới, sửa kinh nghiệm, ảnh xem trước, in PDF.
4. Đổi nơi chạy (nếu chọn Cloudflare), kiểm tra link cũ còn chạy.
