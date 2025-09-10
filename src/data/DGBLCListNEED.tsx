import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

const DGBLCListNEED = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="세목명" />
        <TextField source="체납액구간" />
        <TextField source="체납건수" />
        <TextField source="체납금액" />
        <TextField source="누적체납건수" />
        <TextField source="누적체납금액" />
      </Datagrid>
    </List>
  );
};

export default DGBLCListNEED;
