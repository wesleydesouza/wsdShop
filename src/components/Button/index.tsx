import React, { ButtonHTMLAttributes } from "react";

import * as S from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  width?: string;
  height?: string;
  icon?: any;
  bgColor?: string;
  color?: string;
  radius?: string;
  children?: string;
}

export const Button = ({ width = "32px", height = "32px", icon, bgColor = "#35363A", color = "#d1d5db", radius = "8px", children, ...rest }: ButtonProps) => {
  return (
    <S.ButtonWrapper width={width} height={height} bgColor={bgColor} color={color} radius={radius} {...rest}>
      {children}
      {icon}
    </S.ButtonWrapper>
  );
};
