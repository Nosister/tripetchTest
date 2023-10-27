"use client";

import {Box} from "@mui/material";

export default function SecondContentPicture() {
  return (
    <Box>
      {/* top right slash */}
      <Box sx={{position: "relative"}}>
        <Box
          sx={{
            position: "absolute",
            top: {xl: "80px", lg: "80px", md: "80px"},
            left: {xl: "100%", lg: "100%", md: "100%"},
            ml: {xl: "-440px", lg: "-140px", md: "-0px"},
            mt: {lg: "0px", },
          }}
        >
          <Box
            component="img"
            src="/slash.png"
            alt="slash"
            sx={{
              width: {
                lg: "266px",
                // md: "691px",
              },
              height: {
                lg: "311px",
                // md: "568px"
              },
            }}
          />
        </Box>
        {/* left bottom slash */}

        <Box
          sx={{
            position: "absolute",
            top: {xl: "460px", lg: "460px", md: "460px"},
            left: {xl: "100%", lg: "100%", md: "100%"},
            ml: {xl: "-900px", lg: "-600px", md: "-230px"},
            mt: {lg: "0px", },
          }}
        >
          <Box
            component="img"
            src="/slash.png"
            alt="slash"
            sx={{
              width: {
                lg: "263px",
                md: "178px",
              },
              height: {
                lg: "304px",
                md: "207px"
              },
            }}
          />
        </Box>
        {/* top left plus */}
        <Box
          sx={{
            position: "absolute",
            top: {xl: "132px", lg: "132px", md: "105px"},
            left: {xl: "100%", lg: "100%", md: "100%"},
            ml: {xl: "-805px", lg: "-505px", md: "-235px"},
            mt: {lg: "0px", },
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                lg: "15px",
                md: "15px"
              },
              height: {
                lg: "15px",
                md: "15px"
              },
            }}
          />
        </Box>

        {/* second top left plus */}
        <Box
          sx={{
            position: "absolute",
            top: {xl: "147px", lg: "147px", md: "120px"},
            left: {xl: "100%", lg: "100%", md: "100%"},
            ml: {xl: "-785px", lg: "-485px", md: "-215px"},
            mt: {lg: "0px", },
            opacity: "0.3",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                lg: "15px",
                md: "15px"
              },
              height: {
                lg: "15px",
                md: "15px"
              },
            }}
          />
        </Box>

        {/* button right plus */}
        <Box
          sx={{
            position: "absolute",
            top: {xl: "400px", lg: "400px", md: "400px"},
            left: {xl: "100%", lg: "100%", md: "100%"},
            ml: {xl: "-330px", lg: "-30px", md: "-0px"},
            mt: {lg: "0px", },
            opacity: "1",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                lg: "15px",
                md: "15px"
              },
              height: {
                lg: "15px",
                md: "15px"
              },
            }}
          />
        </Box>

        {/* main picture */}
        <Box
          sx={{
            position: "absolute",
            left: {xl: "100%", lg: "100%", md: "100%"},
            ml: {xl: "-1100px", lg: "-800px", md: "-430px"},
            mt: {lg: "0px", md: "33px"},
          zIndex: "999"
          }}
        >
          <Box
            component="img"
            src="/basketball.png"
            alt="basketball"
            sx={{
              width: {
                lg: "991px",
                md: "691px",
              },
              height: {lg: "815px", md: "568px"},
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
