"use client";

import {Box} from "@mui/material";
import MainContent from "@/components/organisms/DescriptionPanel/MainContent";
import SecondContent from "@/components/organisms/DescriptionPanel/SecondContent";
import SecondContentPicture from "@/components/organisms/DescriptionPanel/SecondContent/SecondContentPicture";
import MainContentPicture from "@/components/organisms/DescriptionPanel/MainContent/MainContentPicture";

export default function LandingPageDesktop() {
  return (
    <Box sx={{overflowX: "hidden"}}>
      
      
      {/*  first item */}
      <MainContentPicture />
      <MainContent />


      {/* second item */}
      <SecondContentPicture />
      <SecondContent />
    
    </Box>
  );
}
