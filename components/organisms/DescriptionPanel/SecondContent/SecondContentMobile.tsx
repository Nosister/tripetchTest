"use client";

import {Box, Stack, Typography} from "@mui/material";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper/modules";
import "./styles.css";
import Number from "@/components/organisms/DescriptionPanel/Number";

export default function SecondContentMobile() {
  return (
    <>
      <Box sx={{bgcolor: "#F5F4F9"}}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <Stack
              direction={"row"}
              alignContent={"center"}
              justifyContent={"start"}
              sx={{mt: "72px", mb: "20px", px: "18px"}}
            >
              <Number number="01" numberColor="#000" underLineColor="#603EBE" />
              <Typography
                sx={{
                  color: "#C2C2C2",
                  fontSize: "28px",
                  fontWeight: 400,
                  letterSpacing: "1.5px",
                  lineHeight: "33px",
                }}
              >
                {" "}
                CONNECTION{" "}
              </Typography>
            </Stack>
            <Typography
              sx={{
                mb: "77px",
                px: "18px",
                color: "#000",
                fontSize: "15px ",
                lineHeight: "18px",
                fontWeight: 400,
              }}
            >
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </Typography>
          </SwiperSlide>

          <SwiperSlide>
            <Stack
              direction={"row"}
              alignContent={"center"}
              justifyContent={"start"}
              sx={{mt: "72px", mb: "20px", px: "18px"}}
            >
              <Number number="02" numberColor="#000" underLineColor="#603EBE" />
              <Typography
                sx={{
                  color: "#C2C2C2",
                  fontSize: "28px",
                  fontWeight: 400,
                  letterSpacing: "1.5px",
                  lineHeight: "33px",
                }}
              >
                {" "}
                COLLABORATION
              </Typography>
            </Stack>
            <Typography
              sx={{
                mb: "77px",
                px: "18px",
                color: "#000",
                fontSize: "15px ",
                lineHeight: "18px",
                fontWeight: 400,
              }}
            >
              Work with recruiter to increase your chances of findingtalented
              athlete.
            </Typography>
          </SwiperSlide>

          <SwiperSlide>
            <Stack
              direction={"row"}
              alignContent={"center"}
              justifyContent={"start"}
              sx={{mt: "72px", mb: "20px", px: "18px"}}
            >
              <Number number="03" numberColor="#000" underLineColor="#603EBE" />
              <Typography
                sx={{
                  color: "#C2C2C2",
                  fontSize: "28px",
                  fontWeight: 400,
                  letterSpacing: "1.5px",
                  lineHeight: "33px",
                }}
              >
                {" "}
                GROWTH
              </Typography>
            </Stack>
            <Typography
              sx={{
                mb: "77px",
                px: "18px",
                color: "#000",
                fontSize: "15px ",
                lineHeight: "18px",
                fontWeight: 400,
              }}
            >
              Save your time, recruit proper athlets for your team.
            </Typography>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
