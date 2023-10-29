"use client";

import {Box, Stack, Typography} from "@mui/material";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper/modules";
import "./styles.css";
import Number from "@/components/organisms/DescriptionPanel/Number";

export default function MainContentMobile() {
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
                mb: "69px",
                px: "18px",
                color: "#000",
                fontSize: "15px ",
                lineHeight: "18px",
                fontWeight: 400,
              }}
            >
              Connect with coaches directly, you can ping coaches to view
              profile.
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
                mb: "69px",
                px: "18px",
                color: "#000",
                fontSize: "15px ",
                lineHeight: "18px",
                fontWeight: 400,
              }}
            >
              Work with other student athletes to  increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
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
                mb: "69px",
                px: "18px",
                color: "#000",
                fontSize: "15px ",
                lineHeight: "18px",
                fontWeight: 400,
              }}
            >
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc {" "}
            </Typography>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
