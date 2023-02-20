import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {Button, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {employeesData, teamsData} from "../Data";
import {useNavigate} from "react-router-dom";




export default function Teams() {
    const teamsDataList=teamsData;
    const employeesList=employeesData;


    const navigate=useNavigate();


    let index=0;


    const getDirector=(id)=>{
        return  employeesList.map((value)=>{
            return value.id===id&&value.firstName+" "+value.lastName;
        });
        return "Rahbar topilmadi"
    }


    return (
        <>
            <Typography variant={"h6"}>Teams</Typography>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width={"5%"}>Tartib raqami</TableCell>
                            <TableCell>Nomi</TableCell>
                            <TableCell>Rahbari</TableCell>
                            <TableCell align={"center"}>
                                Amallar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teamsData.map(value => {
                            return (
                                <TableRow
                                    key={value.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {++index}
                                    </TableCell>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{getDirector(value.id)}</TableCell>
                                    <TableCell align="center">
                                        <Button variant={"contained"} color={"success"}
                                                onClick={()=>{navigate("/teams/"+value.id)}}
                                        >Ko`rish</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    );
}