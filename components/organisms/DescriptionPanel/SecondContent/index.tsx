"use client";
import {Box, Stack, Typography} from "@mui/material";
import Number from "../Number";

export default function SecondContent() {
  return (
    <>
      <Stack
        spacing={0}
        direction="row"
        justifyContent={"flex-start"}
        sx={{
          bgcolor: "#fff",
          mt: {lg: "124px", md: "52px"},
          ml: {xl: "321px", lg: "50px", md: "30px"},
        }}
      >
        <Stack
          spacing={0}
          direction="column"
          justifyContent={"flex-start"}
          alignItems="flex-start"
        >
          <Typography
            sx={{
              color: "#E7E7E7",
              fontSize: 90,
              fontStyle: "normal",
              fontWeight: "400 !important",
              lineHeight: "105px",
            }}
          >
            PLAYERS
          </Typography>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            sx={{mt: {lg: "68px", md: "34px"}, mb: {lg: "21px", md: "21px"}}}
          >
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"center"}
              sx={{mr: "10px"}}
            >
              <Number
                numberColor={"#000"}
                number={"01"}
                underLineColor={"#603EBE"}
              />
            </Stack>
            <Typography
              sx={{
                color: "#C2C2C2",
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: "42px",
                letterSpacing: "1.5px",
              }}
            >
              CONNECTION
            </Typography>
          </Stack>

          <Box
            sx={{
              minWidth: {lg: "717px", md: "432px"},
              maxWidth: {lg: "717px", md: "432px"},
            }}
          >
            <Typography
              sx={{
                mb: {lg: "69px", md: "10px"},
                color: "#000",
                fontSize: {lg: "20px", md: "18px"},
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack
        spacing={0}
        direction="row"
        justifyContent={"flex-start"}
        alignItems="flex-end"
        sx={{bgcolor: "#F5F4F9"}}
      >
        <Stack
          spacing={0}
          direction="column"
          justifyContent={"flex-start"}
          alignItems="flex-start"
          sx={{ml: {xl: "321px", lg: "50px", md: "30px"}}}
        >
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            sx={{mt: {lg: "52px", md: "51px"}, mb: "21px"}}
          >
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"center"}
              sx={{mr: "10px"}}
            >
              <Number
                numberColor={"#000"}
                number={"02"}
                underLineColor={"#603EBE"}
              />
            </Stack>
            <Typography
              sx={{
                color: "#C2C2C2",
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: "42px",
                letterSpacing: "1.5px",
              }}
            >
              COLLABORATION
            </Typography>
          </Stack>
          <Box
            sx={{
              minWidth: {lg: "717px", md: "432px"},
              maxWidth: {lg: "717px", md: "432px"},
            }}
          >
            <Typography
              sx={{
                mb: {lg: "102px", md: "65px"},
                color: "#000",
                fontSize: {lg: "20px", md: "18px"},
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Work with recruiter to increase your chances of finding talented
              athlete.
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack
        spacing={0}
        direction="row"
        justifyContent={"flex-start"}
        alignItems="flex-end"
        sx={{bgcolor: "#090C35"}}
      >
        <Stack
          spacing={0}
          direction="column"
          justifyContent={"flex-start"}
          alignItems="flex-start"
          sx={{ml: {xl: "321px", lg: "50px", md: "30px"}}}
        >
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            sx={{mt: {lg: "87px", md: "44px"}, mb: "21px"}}
          >
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"center"}
              sx={{mr: "10px"}}
            >
              <Number
                numberColor={"#8F6BE8"}
                number={"03"}
                underLineColor={"#fff"}
              />
            </Stack>
            <Typography
              sx={{
                color: "#C2C2C2",
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: "42px",
                letterSpacing: "1.5px",
              }}
            >
              GROWTH
            </Typography>
          </Stack>
          <Box
            sx={{
              minWidth: {lg: "717px", md: "432px"},
              maxWidth: {lg: "717px", md: "432px"},
            }}
          >
            <Typography
              sx={{
                mb: {lg: "62px", md: "72px"},
                color: "#fff",
                fontSize: {lg: "20px", md: "18px"},
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Save your time, recruit proper athlets for your team.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
