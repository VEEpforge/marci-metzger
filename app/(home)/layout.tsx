import { PropsWithChildren } from "react";
import Underlay from "./underlay";
import Navbar from "@/components/navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Underlay />
      <Navbar />
      {/* <main className="">{children}</main> */}
      {children}
    </>
  )
}