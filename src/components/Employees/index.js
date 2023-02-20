import Typography from "@mui/material/Typography";
import {employeesData} from "../Data";



import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {Button, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function Employees() {
    const data=employeesData;
    console.log(data);

    const navigate=useNavigate();

    let index=0;


    return (
        <>
            <Typography variant={"h6"}>Employees</Typography>
            {data?
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Tartib raqami</TableCell>
                                <TableCell>Ismi</TableCell>
                                <TableCell>Familiyasi</TableCell>
                                <TableCell align={"center"}>
                                    Amallar
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(value => {
                                return (
                                    <TableRow
                                        key={value.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {++index}
                                        </TableCell>
                                        <TableCell>{value.firstName}</TableCell>
                                        <TableCell>{value.lastName}</TableCell>
                                        <TableCell align="center">
                                            <Button variant={"contained"} color={"success"}
                                                    onClick={()=>{navigate("/employees/"+value.id)}}
                                            >Ko`rish</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>:
                <Typography>Ishchilar mavjud emas</Typography>}

        </>
    );
}