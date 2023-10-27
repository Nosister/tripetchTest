"use client";
import {Box, Stack, Typography} from "@mui/material";
import Number from "../Number";

export default function MainContent() {
  return (
    <>
      <Stack
        spacing={0}
        direction="row"
        justifyContent={"flex-end"}
        alignItems="flex-end"
        sx={{bgcolor: "#fff"}}
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
              mt: {lg: "24px", md: "87px"},
            }}
          >
            ATHLETS
          </Typography>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            sx={{mt: {lg: "59px", md: "36px"}, mb: {lg: "31px", md: "21px"}}}
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
              minWidth: {lg: "912px", md: "477px"},
              maxWidth: {lg: "912px", md: "477px"},
            }}
          >
            <Typography
              sx={{
                mb: {lg: "56px", md: "30px"},
                color: "#000",
                fontSize: {lg: "20px", md: "18px"},
                fontWeight: 400,
                lineHeight: "28px" ,
                pr: {lg: "195px", md: "30px"},
              }}
            >
              Connect with coaches directly, you can ping coaches to view
              profile.
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack
        spacing={0}
        direction="row"
        justifyContent={"flex-end"}
        alignItems="flex-end"
        sx={{bgcolor: "#F5F4F9"}}
      >
        <Stack
          spacing={0}
          direction="column"
          justifyContent={"flex-start"}
          alignItems="flex-start"
        >
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            sx={{mt: {lg: "53px", md: "30px"}, mb: "21px"}}
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
              minWidth: {lg: "912px", md: "477px"},
              maxWidth: {lg: "912px", md: "477px"},
            }}
          >
            <Typography
              sx={{
                mb: {lg: "56px", md: "30px"},
                color: "#000",
                fontSize: {lg: "20px", md: "18px"},
                fontWeight: 400,
                lineHeight: "28px" ,
                pr: {lg: "195px", md: "30px"},
              }}
            >
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack
        spacing={0}
        direction="row"
        justifyContent={"flex-end"}
        alignItems="flex-end"
        sx={{bgcolor: "#5E3DB3"}}
      >
        <Stack
          spacing={0}
          direction="column"
          justifyContent={"flex-start"}
          alignItems="flex-start"
        >
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
            sx={{mt: {lg: "80px", md: "30px"}, mb: "21px"}}
          >
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"center"}
              sx={{mr: "10px"}}
            >
              <Number
                numberColor={"#000"}
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
              minWidth: {lg: "912px", md: "477px"},
              maxWidth: {lg: "912px", md: "477px"},
            }}
          >
            <Typography
              sx={{
                mb: {lg : "98px", md: "58px"},
                color: "#fff",
                fontSize: {lg: "20px", md: "18px"},
                fontWeight: 400,
                lineHeight: "28px" ,
                pr: {lg: "195px", md: "30px"},
              }}
            >
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
