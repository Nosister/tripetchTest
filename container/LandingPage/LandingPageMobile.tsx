"use client";
import MainContentMobile from "@/components/organisms/DescriptionPanel/MainContent/MainContentMobile";
import MainContentPictureMobile from "@/components/organisms/DescriptionPanel/MainContent/MainContentPictureMobile";
import SecondContentMobile from "@/components/organisms/DescriptionPanel/SecondContent/SecondContentMobile";
import SecondContentPictureMobile from "@/components/organisms/DescriptionPanel/SecondContent/SecondContentPictureMobile";
import {Box, Stack, Typography} from "@mui/material";

export default function LandingPageMobile() {
  return (
    <>
      <MainContentPictureMobile />
      <MainContentMobile />
      <SecondContentPictureMobile />
      <SecondContentMobile />
    </>
  );
}
