import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

export function useCalc() {
  return useContext(CalcContext);
}