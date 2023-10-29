"use client";
import {Box, Stack, Typography} from "@mui/material";

export default function MainContentPictureMobile() {
  return (
    <>
      {/* slash picture */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: "20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: {xs: "80px"},

            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/slash.png"
            alt="slash"
            sx={{
              width: {
                xs: "178.893px",
              },
              height: {
                xs: "197.234px",
              },
            }}
          />
        </Box>
      </Box>

      {/* plus picture */}

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: "175px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: {xs: "90px"},
            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                xs: "15px"
              },
              height: {
                xs: "15px",
              },
            }}
          />
        </Box>
      </Box>

          {/* plus picture opacity */}

          <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: "215px",
          opacity: "0.3",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: {xs: "80px"},
            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                xs: "15px"
              },
              height: {
                xs: "15px",
              },
            }}
          />
        </Box>
      </Box>



      {/* Main picture */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "210px",
          zIndex: "999",
        }}
      >
        <Box
          sx={{
            position: "absolute",
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="start"
          >
            <Box
              component="img"
              src="/rugby.png"
              alt="rugby"
              sx={{
                width: {
                  xs: "200px",
                },
                height: {xs: "281px"},
              }}
            />
          </Stack>
        </Box>
      </Box>

      {/* toppic */}

      <Box sx={{minHeight: "296px", maxHeight: "296px"}}>
        <Typography
          sx={{
            ml: "18px",
            fontSize: "50px",
            fontWeight: 400,
            lineHeight: "59px",
            color: "#e7e7e7",
          }}
        >
          ATHLETS
        </Typography>
      </Box>
    </>
  );
}
