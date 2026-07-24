import Cookies from "js-cookie";

export const COOKIE_ACCESS = "access_token";

export const authCookies = {
  getAccess: (): string | null => Cookies.get(COOKIE_ACCESS) ?? null,
  setAccess: (token: string) => {
    Cookies.set(COOKIE_ACCESS, token, { secure: false, sameSite: "lax" });
  },
  clear: () => {
    Cookies.remove(COOKIE_ACCESS);
  },
};
