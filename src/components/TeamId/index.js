import Typography from "@mui/material/Typography";
import {employeesData, teamsData} from "../Data";
import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";


export default function TeamId() {

    const params=useParams();



    let team=undefined;

    teamsData.map(value => {
        if (value.id==params.id){
            team={name:value.name, directorId:value.directorId, employees:value.employees}
        }
    });


    const getDirector=(id)=>{
        return employeesData.map((value)=>{
            return value.id===id&&value.firstName+" "+value.lastName;
        });
        return "Rahbar topilmadi"
    }


    const getEmployees=(idList)=>{
        let members=[];

        employeesData.map((value)=>{
            return (
                idList.map((value2)=>{
                    if (value.id===value2){
                        members.push(value.firstName+" "+value.lastName)
                    }
                })
            )
        })
        return members.join(", ");
    }












    return (
        <>
            {team?
                <Box>
                    <Typography>Guruh nomi: {team.name}</Typography>
                    <Typography>Guruh rahbari: {getDirector(team.directorId)}</Typography>
                    <Typography>Guruh a`zolari soni: {team.employees.length}</Typography>
                    <Typography>A`zolari: {getEmployees(team.employees)}</Typography>
                </Box>
                :<Typography>Team mavjud emas</Typography>}
        </>
    );
}