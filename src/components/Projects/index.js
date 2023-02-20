import Typography from "@mui/material/Typography";
import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {Button, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import {projectsData, teamsData} from "../Data";
import {useNavigate} from "react-router-dom";

export default function Projects() {

    const navigate=useNavigate();




    const getTeamName=(teamId)=>{
        return  teamsData.map(value => {
            if (value.id===teamId){
                return value.name;
            }
        });

        return "Team mavjud emas";
    }


    let index=0;




    return (
        <>
            <Typography variant={"h6"}>
                Projects
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tartib raqami</TableCell>
                            <TableCell>Nomi</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell align={"center"}>
                                Amallar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projectsData.map(value => {
                            return (
                                <TableRow
                                    key={value.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {++index}
                                    </TableCell>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{getTeamName(value.teamId)}</TableCell>
                                    <TableCell align="center">
                                        <Button variant={"contained"} color={"success"}
                                                onClick={()=>{navigate("/projects/"+value.id)}}
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