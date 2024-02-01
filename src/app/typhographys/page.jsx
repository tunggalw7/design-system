"use client";
import React, { useEffect, useState } from "react";
import Typhography from "../../components/typhography/Typhography";
import List from "./list";

function Typhographys() {
  return (
    <div className="main-container relative bg-white">
      <div className="header grid lg:grid-cols-5 lg:gap-3 px-8 py-16 border-b-[6px] border-b-[#F4F4F4] border-solid">
        <div className="grid gap col-span-3">
          <Typhography variant="display3" text="Typography" />
          <div>
            <Typhography
              className="!text-gray"
              variant="h3"
            >Use different typography setting according to screen size. Maintain hierarchy and contrast to <br /> ensure readability.
            </Typhography>
            <Typhography
              className="!text-gray"
              variant="h3"
              text="Refer to guidelines below for best practice to use typography style."
            />
          </div>
        </div>
        <div className="grid gap-5 col-span-2">
          <div className="flex justify-end">
          <Typhography variant="label1-regular" text="Font Family" />
          </div>
          <div className="flex justify-end">
            <Typhography
              className="text-5xl not-italic font-normal leading-[normal] mr-4"
              text="Inter"
            />
            <Typhography
              className="text-[32px] not-italic font-normal leading-[48px] break-all"
            >ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 !@#$%^&*()</Typhography>
          </div>
        </div>
      </div>
      <List  />
    </div>
  );
}

export default Typhographys;
