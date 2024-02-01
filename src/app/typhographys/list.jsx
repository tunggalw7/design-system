"use client";
import React, { useEffect, useState } from "react";
import Typhography from "../../components/typhography/Typhography";

function List() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="mt-28">
            <Typhography
              className="mb-3"
              variant="label3-semibold"
              text="Usage"
            />
            <div className="flex items-center h-[206px] border-t-[#E3E6E9] border-t border-b-[#E3E6E9] border-b border-solid">
              <Typhography className="mb-3" variant="paragraph-regular">
                Use as the largest text on the screen. Ideal for short text and{" "}
                <br />
                numerals.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="justify-center my-8 max-md:max-w-full">
                <Typhography variant="h1" text="Desktop" />
              </div>
              <Typhography
                className="mb-3"
                variant="label3-semibold"
                text="Token"
              />
              <div className="flex items-center h-[206px] border-t-[#E3E6E9] border-t border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Display/Display 1/SemiBold"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="justify-center mt-28 max-md:max-w-full">
                <Typhography
                  className="mb-3"
                  variant="label3-semibold"
                  text="Example & Specifications"
                />
              </div>
              <div className="flex items-center h-[206px] border-t-[#E3E6E9] border-t border-b-[#E3E6E9] border-b border-solid">
                <div>
                  <Typhography variant="display1" text="Display 1" />
                  <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                    <Typhography
                      variant="label3-semibold"
                      text="Foundation/72/SemiBold"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="justify-center my-8 max-md:max-w-full">
                <Typhography variant="h1" text="Mobile" />
              </div>
              <Typhography
                className="mb-3"
                variant="label3-semibold"
                text="Token"
              />
              <div className="flex items-center h-[206px] border-t-[#E3E6E9] border-t border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Display/Display 1"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="justify-center mt-28 max-md:max-w-full">
                <Typhography
                  className="mb-3"
                  variant="label3-semibold"
                  text="Example & Specifications"
                />
              </div>
              <div className="flex items-center h-[206px] border-t-[#E3E6E9] border-t border-b-[#E3E6E9] border-b border-solid">
                <div>
                  <Typhography
                    className="!text-5xl !leading-[56px]"
                    variant="display1"
                    text="Display 1"
                  />
                  <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                    <Typhography
                      variant="label3-semibold"
                      text="Foundation/72/SemiBold"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use as the largest text on the screen. Ideal for short text and{" "}
                <br />
                numerals.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Display/Display 2"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div>
                  <Typhography variant="display2" text="Display 2" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 64pt
                      -
                      Line height: 72px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Display/Display 2"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div>
                  <Typhography
                    className="!text-[32px] !leading-10"
                    variant="display2"
                    text="Display 2"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 28pt
                      -
                      Line height: 36px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use as the largest text on the screen. Ideal for short text and{" "}
                <br />
                numerals.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Display/Display 3"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="display3" text="Display 3" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 48pt
                      -
                      Line height: 56px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Display/Display 3"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    className="!text-[32px] !leading-10"
                    variant="display3"
                    text="Display 3"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 28pt
                      -
                      Line height: 36px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8 pt-32">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for layout headings.Utilize different size <br />
                accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Heading/Heading 1"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="h1" text="Heading 1" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 32pt
                      -
                      Line height: 42px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Heading/Heading 1"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    className="!text-[28px] !leading-10"
                    variant="h1"
                    text="Heading 1"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 28pt
                      -
                      Line height: 32px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for layout headings.Utilize different size <br />
                accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Heading/Heading 2"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="h2" text="Heading 2" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 28pt
                      -
                      Line height: 32px
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Heading/Heading 2"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    className="!text-2xl !leading-7"
                    variant="h1"
                    text="Heading 2"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 24pt
                      -
                      Line height: 28px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for layout headings.Utilize different size <br />
                accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Heading/Heading 3"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="h3" text="Heading 3" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 20pt
                      -
                      Line height: 24px
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Heading/Heading 3"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="h3" text="Heading " />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 20pt
                      -
                      Line height: 24px
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8 pt-32">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 1 in component to reflect highest level of importance.
                accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 1 - Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label1-regular"
                    text="Label 1 - Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 18pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Label/Label 1 - Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label1-regular"
                    text="Label 1 - Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 18pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 1 in component to reflect highest level of importance.
                accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 1 - Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label1-semibold"
                    text="Label 1 - Semi Bold"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 16pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Label/Label 1 - Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label1-semibold"
                    text="Label 1 - Semi Bold"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 16pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 1 in component to reflect highest level of importance.
                accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 1 - Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label1-underline"
                    text="Label 1 - Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 16pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Label/Label 1 - Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label1-underline"
                    text="Label 1 - Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 16pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8 pt-32">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 2 in component to reflect equal level of importance
                within the screen.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 2 - Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label2-regular"
                    text="Label 2 - Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Label/Label 2 - Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label2-regular"
                    text="Label 2 - Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 2 in component to reflect equal level of importance
                within the screen.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 2 - Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label2-semibold"
                    text="Label 2 - Semi Bold"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Label/Label 2 - Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label2-semibold"
                    text="Label 2 - Semi Bold"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 2 in component to reflect equal level of importance
                within the screen.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 2 - Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label2-underline"
                    text="Label 2 - Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Label/Label 2 - Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label2-underline"
                    text="Label 2 - Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8 pt-32">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 3 in component to reflect equal level of importance
                within the screen.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 3 - Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label3-regular"
                    text="Label 3 - Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 12pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Label/Label 3 - Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label3-regular"
                    text="Label 3 - Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 12pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 3 in component to reflect equal level of importance
                within the screen.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 3 - Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label3-semibold"
                    text="Label 3 - Semi Bold"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 12pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Label/Label 3 - Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label3-semibold"
                    text="Label 3 - Semi Bold"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 12pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only use for text inside components or text label.Utilize
                different size and weight accordingly to maintain hierarchy.{" "}
                <br />
                Use label 3 in component to reflect equal level of importance
                within the screen.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Label/Label 3 - Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label3-semibold"
                    text="Label 3 - Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 12pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-underline"
                    text="Mobile-Label/Label 3 - Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="label3-underline"
                    text="Label 3 - Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 12pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only Only use for body copy/short text with one line. <br />
                Utilize different weight accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Body/Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="body-regular" text="Body Regular" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Body/Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="body-regular" text="Body Regular" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8 pt-32">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only Only use for body copy/short text with one line. <br />
                Utilize different weight accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Body/Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="body-semibold" text="Body Semi Bold" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Body/Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography variant="body-semibold" text="Body Semi Bold" />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Only Only use for body copy/short text with one line. <br />
                Utilize different weight accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Body/Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="body-underline"
                    text="Body Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Body/Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="body-underline"
                    text="Body Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for superscript in body copy.Pair with the same weight{" "}
                <br /> (Body Regular & Paragraph Regular) to maintain
                consistency.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Body/Superscript Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="body-superscript-regular"
                    text="Body Superscript Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Body/Superscript Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="body-superscript-regular"
                    text="Body Superscript Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8 pt-32">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for superscript in body copy.Pair with the same weight{" "}
                <br /> (Body Semi Bold & Paragraph Semi Bold) to maintain
                consistency.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Body/Superscript Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="body-superscript-semibold"
                    text="Body Superscript Semi Bold"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Body/Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="body-superscript-semibold"
                    text="Body Superscript Semi Bold"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 18px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for body copy/long paragraph text with more than one line.{" "}
                <br />
                Utilize different weight accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Body/Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="paragraph-regular"
                    text="Paragraph Regular"
                  />
                  <Typhography
                    variant="paragraph-regular"
                    text="Lorem ipsum dolor sit amet consectetur. Cursus blandit porta faucibus eget in risus fames. Nisi et sed vitae sed ac consequat non."
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Paragraph/Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="paragraph-regular"
                    text="Paragraph Regular"
                  />
                  <Typhography
                    variant="paragraph-regular"
                    text="Lorem ipsum dolor sit amet consectetur. Cursus blandit porta faucibus eget in risus fames. Nisi et sed vitae sed ac consequat non."
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for body copy/long paragraph text with more than one line.{" "}
                <br />
                Utilize different weight accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Paragraph/Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="paragraph-semibold"
                    text="Paragraph Semi Bold"
                  />
                  <Typhography
                    variant="paragraph-semibold"
                    text="Lorem ipsum dolor sit amet consectetur. Cursus blandit porta faucibus eget in risus fames. Nisi et sed vitae sed ac consequat non."
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Paragraph/Semi Bold"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="paragraph-semibold"
                    text="Paragraph Semi Bold"
                  />
                  <Typhography
                    variant="paragraph-semibold"
                    text="Lorem ipsum dolor sit amet consectetur. Cursus blandit porta faucibus eget in risus fames. Nisi et sed vitae sed ac consequat non."
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Semi Bold
                      -
                      Font size: 14pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8 pt-32">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for body copy/long paragraph text with more than one line.{" "}
                <br />
                Utilize different weight accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Paragraph/Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="paragraph-underline"
                    text="Paragraph Underlined"
                  />
                  <Typhography
                    variant="paragraph-underline"
                    text="Lorem ipsum dolor sit amet consectetur. Cursus blandit porta faucibus eget in risus fames. Nisi et sed vitae sed ac consequat non."
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Paragraph/Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="paragraph-underline"
                    text="Paragraph Underlined"
                  />
                  <Typhography
                    variant="paragraph-underline"
                    text="Lorem ipsum dolor sit amet consectetur. Cursus blandit porta faucibus eget in risus fames. Nisi et sed vitae sed ac consequat non."
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 14pt
                      -
                      Line height: 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for smallest text on the screen such as copyright. <br />
                Utilize different weight accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Caption/Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="caption-regular"
                    text="Caption Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 11pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Caption/Regular"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="caption-regular"
                    text="Caption Regular"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 10pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch px-8">
        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
          <div className="">
            <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
              <Typhography variant="paragraph-regular">
                Use for smallest text on the screen such as copyright. <br />
                Utilize different weight accordingly to maintain hierarchy.
              </Typhography>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Desktop-Caption/Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid mr-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="caption-underline"
                    text="Caption Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 11pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-5">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="bg-[#D5D8DD] py-1 px-2 rounded inline-flex my-4">
                  <Typhography
                    variant="label3-semibold"
                    text="Mobile-Caption/Underlined"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="flex items-center h-[206px] border-b-[#E3E6E9] border-b border-solid">
                <div className="grid">
                  <Typhography
                    variant="caption-underline"
                    text="Caption Underlined"
                  />
                  <div className="my-4">
                    <Typhography
                      className="text-gray"
                      variant="caption-regular"
                      text="Weight: Regular
                      -
                      Font size: 10pt
                      -
                      Line height: 16px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
