import { createEntityAdapter } from "@reduxjs/toolkit";
import { UserInterface } from "../../interface/interface";

export const userAdapter = createEntityAdapter<UserInterface>({
  selectId: (user) => user._id,
});
