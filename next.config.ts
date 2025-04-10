import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ /** @type {import('next').NextConfig} */

  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "**" }],
  },
  async rewrites() {
    return [
      {
        source: "/dang-nhap",
        destination: "/login",
      },
      {
        source: "/dang-ky",
        destination: "/register",
      },
      {
        source: "/quen-mat-khau",
        destination: "/forgot-password",
      },
      {
        source: "/khoi-phuc-mat-khau",
        destination: "/reset-password",
      },
      {
        source: "/tai-khoan",
        destination: "/profile",
      },
      {
        source: "/gioi-thieu",
        destination: "/about",
      },
      {
        source: "/gio-hang",
        destination: "/cart",
      },
      {
        source: "/lien-he",
        destination: "/contact",
      },
      {
        source: "/don-hang",
        destination: "/order",
      },
      {
        source: "/tim-kiem",
        destination: "/search",
      },
      {
        source: "/sitemap/url.xml",
        destination: "/sitemap/url",
      },
      {
        source: "/sitemap/post/:id(\\d+).xml",
        destination: "/sitemap/post/:id",
      },
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
      {
        source: "/:type/t/:trademark",
        destination: "/trademark",
      },
      {
        source: "/:type/g/:group",
        destination: "/group",
      },
      {
        source: "/:type/:slug-:id(\\d+).html",
        destination: "/detail",
      },
      {
        source: "/:type/:category",
        destination: "/category",
      },
      {
        source: "/:type",
        destination: "/type",
      },
    ];
  },
};

export default nextConfig;
