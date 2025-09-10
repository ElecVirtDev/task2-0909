import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

const DVDList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="타이틀" />
        <TextField source="제작국가" />
        <TextField source="분류2(장르별)" />
        <TextField source="관람등급" />
        <TextField source="제작년도" />
        <TextField source="러닝타임" />
        <TextField source="데이터기준일자" />
      </Datagrid>
    </List>
  );
};

export default DVDList;
