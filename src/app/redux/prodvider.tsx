"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import settingReducer, { setSettingState } from "./setting";
export function ReduxProvider({ data, children }: any) {
  const storeRef = useRef<any>(null);
  if (!storeRef.current) {
    storeRef.current = configureStore({
      reducer: {
        settingReducer,
      },
    });

    storeRef.current.dispatch(setSettingState(data.setting));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
