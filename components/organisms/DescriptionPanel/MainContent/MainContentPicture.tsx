"use client";

import {Box, Hidden} from "@mui/material";

export default function MainContentPicture() {
  return (
    <Box sx={{position: "relative"}}>
      <Hidden smDown lgUp>
        <Box
          sx={{
            position: "absolute",
            top: {md: "135px"},
            left: {md: "40px"},

            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/slash.png"
            alt="slash"
            sx={{
              width: {
                md: "217.697px",
              },
              height: {
                md: "233.717px",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: {md: "95px"},
            left: {md: "60px"},
            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                md: "15px",
              },
              height: {
                md: "15px",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: {md: "80px"},
            left: {md: "40px"},
            zIndex: "1",
            opacity: "0.3",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                md: "15px",
              },
              height: {
                md: "15px",
              },
            }}
          />
        </Box>
      </Hidden>
      <Box
        sx={{
          position: "absolute",
          left: {xl: "175px", lg: "-220px", md: "-160px", sm: "-100px"},
          mt: {lg: "35px", md: "120px"},
          zIndex: "999",
        }}
      >
        <Box
          component="img"
          src="/rugby.png"
          alt="rugby"
          sx={{
            width: {
              lg: "678px",
              md: "518px",
            },
            height: {lg: "950px", md: "699px"},
          }}
        />
      </Box>
    </Box>
  );
}
