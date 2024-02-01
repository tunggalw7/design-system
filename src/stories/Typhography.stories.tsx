import type { Meta, StoryObj } from "@storybook/react";
import Typhography from "../components/typhography/Typhography";

const meta: Meta<typeof Typhography> = {
  title: "Typhography",
  component: Typhography,
  tags: ["autodocs"],
  argTypes: {
    text: String,
    type: String,
    variant: String,
  },
  args: {
    variant: "display1",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Props: Story = {
  args: {
    text: "Typhography",
  },
  argTypes: {
    variant: {
      options: [
        "display1",
        "display2",
        "display3",
        "h1",
        "h2",
        "h3",
        "label1-regular",
        "label1-semibold",
        "label1-underline",
        "label2-regular",
        "label2-semibold",
        "label2-underline",
        "label3-regular",
        "label3-semibold",
        "label3-underline",
        "body-regular",
        "body-semibold",
        "body-underline",
        "body-superscript-regular",
        "body-superscript-semibold",
        "paragraph-regular",
        "paragraph-semibold",
        "paragraph-underline",
        "caption-regular",
        "caption-underline",
      ],
      control: { type: "select" },
    },
  },
};
