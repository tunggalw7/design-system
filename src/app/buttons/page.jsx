"use client";
import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Typhography from "@/components/typhography/Typhography";
import List from "./list";

function Buttons() {
  return (
    <div className="main-container relative bg-white">
      <div className="header grid lg:grid-cols-5 lg:gap-3 px-8 py-16 border-b-[6px] border-b-[#F4F4F4] border-solid">
        <div className="grid gap col-span-3">
          <Typhography variant="display3" text="Button" />
        </div>
      </div>
      <div>
        <div>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
            <div className="flex flex-col items-stretch w-1/12 max-md:ml-0 max-md:w-full">
              <div className="mt-28">
                <Typhography variant="h1" text="Default" />
              </div>
            </div>
            <div className="flex flex-col items-stretch ml-5 w-11/12 max-md:ml-0 max-md:w-full">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3">
                <div className="grid">
                  <div className="justify-center my-8 max-md:max-w-full">
                    <Typhography variant="h1" text="Primary" />
                  </div>
                  <List variant="primary" />
                  <List variant="primary" hover />
                  <List variant="primary" selected />
                  <List variant="primary" disabled />
                  <List variant="primary" loading />
                </div>
                <div className="grid mr-5">
                  <div className="justify-center my-8 max-md:max-w-full">
                    <Typhography variant="h1" text="Secondary" />
                  </div>
                  <List variant="secondary" />
                  <List variant="secondary" hover />
                  <List variant="secondary" selected />
                  <List variant="secondary" disabled />
                  <List variant="secondary" loading />
                </div>
                <div className="grid ml-5">
                  <div className="justify-center my-8 max-md:max-w-full">
                    <Typhography variant="h1" text="Ghost" />
                  </div>
                  <List variant="outline" />
                  <List variant="outline" hover />
                  <List variant="outline" selected />
                  <List variant="outline" disabled />
                  <List variant="outline" loading />
                </div>
                <div className="grid">
                  <div className="justify-center my-8 max-md:max-w-full">
                    <Typhography variant="h1" text="Danger Primary" />
                  </div>
                  <List variant="danger" />
                  <List variant="danger" hover />
                  <List variant="danger" selected />
                  <List variant="danger" disabled />
                  <List variant="danger" loading />
                </div>
                <div className="grid">
                  <div className="justify-center my-8 max-md:max-w-full">
                    <Typhography variant="h1" text="Danger Ghost" />
                  </div>
                  <List variant="outline-danger" />
                  <List variant="outline-danger" hover />
                  <List variant="outline-danger" selected />
                  <List variant="outline-danger" disabled />
                  <List variant="outline-danger" loading />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
            <div className="flex flex-col items-stretch w-1/12 max-md:ml-0 max-md:w-full">
              <div className="mt-28">
                <Typhography variant="h1" text="Dropdown" />
              </div>
            </div>
            <div className="flex flex-col items-stretch ml-5 w-11/12 max-md:ml-0 max-md:w-full">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3">
                <div className="grid">
                  <div className="justify-center my-8 max-md:max-w-full">
                    <Typhography variant="h1" text="Primary" />
                  </div>
                  <List type="dropdown" variant="primary" />
                  <List type="dropdown" variant="primary" hover />
                  <List type="dropdown" variant="primary" selected />
                  <List type="dropdown" variant="primary" disabled />
                  <List type="dropdown" variant="primary" loading />
                </div>
                <div className="grid mr-5">
                  <div className="justify-center my-8 max-md:max-w-full">
                    <Typhography variant="h1" text="Secondary" />
                  </div>
                  <List type="dropdown" variant="secondary" />
                  <List type="dropdown" variant="secondary" hover />
                  <List type="dropdown" variant="secondary" selected />
                  <List type="dropdown" variant="secondary" disabled />
                  <List type="dropdown" variant="secondary" loading />
                </div>
                <div className="grid ml-5">
                  <div className="justify-center my-8 max-md:max-w-full">
                    <Typhography variant="h1" text="Ghost" />
                  </div>
                  <List type="dropdown" variant="outline" />
                  <List type="dropdown" variant="outline" hover />
                  <List type="dropdown" variant="outline" selected />
                  <List type="dropdown" variant="outline" disabled />
                  <List type="dropdown" variant="outline" loading />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Buttons;
