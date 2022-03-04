import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 1,
    // minWidth: 600,
    width: 600,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: 3,
  },
}));

export default function Empresas({docs, resultados, setResultados}) {
  const classes = useStyles();

  return(
    <FormControl size="small" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label" value="Empresa">Empresa</InputLabel>
      <Select value={resultados} labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" onChange={e => setResultados(e.target.value)}>
        {docs.map(r => <MenuItem variant="contained" key={r.id} value={r.id}>{r.name}</MenuItem>)}
      </Select>
    </FormControl>
  );
}