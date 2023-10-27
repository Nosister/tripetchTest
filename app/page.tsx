"use client";

import LandingPageDesktop from "@/container/LandingPage/LandingPageDesktop";
import LandingPageMobile from "@/container/LandingPage/LandingPageMobile";
import { Hidden } from "@mui/material";

export default function Home() {
  return (
    <>
      <Hidden mdDown>
        <LandingPageDesktop />
      </Hidden>{" "}
      <Hidden mdUp>
        <LandingPageMobile />
      </Hidden>{" "}
    </>
  );
}
