import React from "react";
import { test, expect } from "@jest/globals";
import { create } from "react-test-renderer";
import App from "./app";

test("take app snapshot", () => {
    expect(create(<App />)).toMatchSnapshot();
})