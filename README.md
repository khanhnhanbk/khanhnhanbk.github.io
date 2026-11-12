# khanhnhanbk.github.io

Trang giới thiệu của Nguyễn Văn Khánh Nhân. Astro + Tailwind CSS 4, xuất HTML tĩnh, deploy GitHub Pages khi push `main`.

## Chạy

```bash
npm i -g pnpm   # nếu máy chưa có pnpm
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # ra thư mục dist/
```

## Sửa nội dung

- Chữ tiếng Việt: `src/data/vi.json`, tiếng Anh: `src/data/en.json`
- Zalo, email, điện thoại: `src/data/lien-he.json`
- Màu, kính mờ: `src/styles/global.css`
- Ảnh xem trước khi chia sẻ link: `public/og.jpg` (1200×630), vẽ từ `scripts/og/og.html` bằng `NODE_PATH=$(npm root -g) node scripts/og/make-og.mjs --kiem`. **Luật:** chữ và ảnh chính phải nằm trong ô vuông 630×630 ở giữa (x 285–915), vì Facebook (bình luận, Messenger) và Zalo cắt ảnh thành ô vuông giữa. Vẽ lại thì tăng `?v=` của og.jpg trong `src/layouts/Base.astro`.

Kế hoạch các bước: [docs/KE-HOACH.md](docs/KE-HOACH.md).
