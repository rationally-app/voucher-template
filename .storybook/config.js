import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

configure(require.context("../src", true, /\.stories\.(js|mdx|tsx)$/), module);
addDecorator(withKnobs);
