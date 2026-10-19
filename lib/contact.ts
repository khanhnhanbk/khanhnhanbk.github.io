// Language-independent contact details. All UI copy lives in lib/i18n/.
export const EMAIL = "nhannguyenqna2002@gmail.com";
export const PHONE = "+84349796850";
export const PHONE_DISPLAY = "(+84) 349 796 850";
export const ZALO_URL = "https://zalo.me/84349796850";
export const HAN_NGU_URL = "https://han-ngu-studio.vercel.app";

// Profile URLs. An empty string hides that link everywhere.
export const FACEBOOK_URL = "";
export const GITHUB_URL = "";
export const LINKEDIN_URL = "https://www.linkedin.com/in/nhan-nguyenvankhanh/";

export const SITE_URL = "https://khanhnhanbk.github.io";

// Live links for projects, keyed by the project id used in the dictionaries.
// Screenshots go in public/projects/<id>.jpg (or .png / .webp).
export const PROJECT_LINKS: Record<string, string | undefined> = {
  "han-ngu": HAN_NGU_URL,
};
