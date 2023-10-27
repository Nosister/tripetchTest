"use client";
import {Box, Stack, Typography} from "@mui/material";

export default function SecondContentPictureMobile() {
  return (
    <>
      {/* slash picture */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ml: "165px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: {xs: "130px"},

            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/slash.png"
            alt="slash"
            sx={{
              width: {
                xs: "76.691px",
              },
              height: {
                xs: "89.838px",
              },
            }}
          />
        </Box>
      </Box>

      {/* buttom slash picture */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: "75px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: {xs: "200px"},

            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/slash.png"
            alt="slash"
            sx={{
              width: {
                xs: "106.346px",
              },
              height: {
                xs: "123.199px",
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
            top: {xs: "110px"},
            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                xs: "15px",
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
            top: {xs: "100px"},
            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                xs: "15px",
              },
              height: {
                xs: "15px",
              },
            }}
          />
        </Box>
      </Box>


      {/* plus buttom picture */}

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ml: "250px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: {xs: "250px"},
            zIndex: "1",
          }}
        >
          <Box
            component="img"
            src="/plus.png"
            alt="plus"
            sx={{
              width: {
                xs: "15px",
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
          top: "230px",
          zIndex: "999",
        }}
      >
        <Box
          sx={{
            position: "absolute",
          }}
        >
          <Stack direction="column" alignItems="center" justifyContent="start">
            <Box
              component="img"
              src="/basketball.png"
              alt="rugby"
              sx={{
                width: {
                  xs: "302px",
                },
                height: {xs: "249px"},
              }}
            />
          </Stack>
        </Box>
      </Box>

      {/* topic */}
      <Box sx={{minHeight: "296px", maxHeight: "296px"}}>
        <Typography
          sx={{
            mt: "19px",
            ml: "18px",
            fontSize: "50px",
            fontWeight: 400,
            lineHeight: "59px",
            color: "#e7e7e7",
          }}
        >
          PLAYERS
        </Typography>
      </Box>
    </>
  );
}
