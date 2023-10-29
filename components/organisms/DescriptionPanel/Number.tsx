"use client";
import {Box, Stack, Typography} from "@mui/material";

interface numberPropsInterface {
  numberColor: string;
  number: string;
  underLineColor: string;
}
export default function Number({
  numberColor,
  number,
  underLineColor,
}: numberPropsInterface) {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent="center"
      sx={{mr: "9px"}}
      spacing={{md : '4px', xs : '2px'}}
    >
      <Typography
        sx={{
          color: numberColor,
          fontSize: {xs: '14px' , md: "18px"},
          fontWeight: 400,
          lineHeight: {xs: '16px' , md: "21px"},
          letterSpacing: "1.5px",
          mb: "4px",
        }}
      >
        {number}
      </Typography>
      <Box
        sx={{
          border: "2.5px solid",
          color: underLineColor,
          width: "100%",
          borderRadius: "2.5px",
        }}
      />
    </Stack>
  );
}
