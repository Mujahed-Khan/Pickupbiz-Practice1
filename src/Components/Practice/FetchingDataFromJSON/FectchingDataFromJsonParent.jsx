import React from "react";
import { FetchingDataFromJsonChild } from "./FetchingDataFromJsonChild";
import { PersonReducer } from "../../State/Reducers/PersonReducer";
export const FectchingDataFromJsonParent = () => {
  return (
    <div>
      {PersonReducer.personDetail.map((item) => {
        return <FetchingDataFromJsonChild itemCurrent={item} />;
      })}
    </div>
  );
};
