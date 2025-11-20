import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

type Variant = "hero" | "primary" | "secondary" | "outlined" | "text";

interface Props extends Omit<MuiButtonProps, "variant"> {
  variant?: Variant;
}

const MuiBtn: React.FC<Props> = ({ variant = "primary", children, ...rest }) => {
  // Map custom variants to MUI variants/colors
  let muiVariant: MuiButtonProps["variant"] = "contained";
  let color: any = "primary";

  if (variant === "outlined") {
    muiVariant = "outlined";
    color = "primary";
  } else if (variant === "text") {
    muiVariant = "text";
    color = "primary";
  } else if (variant === "secondary") {
    muiVariant = "contained";
    color = "secondary";
  } else if (variant === "hero") {
    muiVariant = "contained";
    color = "primary";
  }

  return (
    <MuiButton variant={muiVariant} color={color} {...rest}>
      {children}
    </MuiButton>
  );
};

export default MuiBtn;
