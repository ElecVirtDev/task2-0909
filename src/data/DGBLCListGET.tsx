import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

const DGBLCListGET = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="세목명" />
        <TextField source="부과금액" />
        <TextField source="수납금액" />
        <TextField source="환급금액" />
        <TextField source="결손금액" />
        <TextField source="미수납 금액" />
        <TextField source="징수율" />
      </Datagrid>
    </List>
  );
};

export default DGBLCListGET;
