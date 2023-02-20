import Typography from "@mui/material/Typography";
import {projectsData, teamsData} from "../Data";
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";


export default function ProjectsId() {
    const params=useParams();

    let project=undefined;


    const url=params.id;
    projectsData.map(value =>{
        if (value.id==url){
            project={name:value.name, teamId:value.teamId, description:value.description}
        }
    });
    console.log(project);

    const getTeamName=(teamId)=>{
        return  teamsData.map(value => {
            if (value.id===teamId){
                return value.name;
            }
        });

        return "Team mavjud emas";
    }


    return (
        <>
            {project?
                <Box>
                    <Typography> Project nomi: {
                        project.name
                    }</Typography>
                    <Typography> Project qaysi guruhga tushgan: {getTeamName(project.teamId)}
                    </Typography>
                    <Typography>Project tavsifi:     {project.description}
                    </Typography>
                </Box>
                :<Typography>Project mavjud emas</Typography>
            }
        </>
    );

}