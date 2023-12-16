import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
    
  }
});

const Demo = () => {
  const classes = useStyles();

  const originalRows = [
    { Country:"India", Capital:"NewDelhi",Popullation:"140.76crores"},
    { Country:"America", Capital:"Washington D.C",Popullation:"33.10crores"},
    { Country:"China", Capital:"Beijing",Popullation:"141.24crores"},
    { Country:"SouthKorea", Capital:"Seoul",Popullation:"97.8lakhs"},
    { Country:"Bangladesh", Capital:"Dhaka",Popullation:"16.94crores"},
    { Country:"Japan", Capital:"Tokyo",Popullation:"12.57crores"},
    { Country:"Jermany", Capital:"Berlin",Popullation:"8.32crores"},
    { Country:"Nepal", Capital:"Kathmandu",Popullation:"3crores"},
    { Country:"Singapore", Capital:"Singapore",Popullation:"54.5lakhs"},
    { Country:"Malaysia", Capital:"Kuala Lumpur",Popullation:"3.36crores"}

    
  ];

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.Country.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell align="center">Capital</TableCell>
                <TableCell align="center">Popullation</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Country}>
                  <TableCell component="th" scope="row">
                    {row.Country}
                  </TableCell>
                  <TableCell align="center">{row.Capital}</TableCell>
                  <TableCell align="center">{row.Popullation}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Demo;

