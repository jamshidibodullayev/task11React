
import {employeesData} from "../Data";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useLocation, useParams} from "react-router-dom";


export default function EmployeesId() {
    const params=useParams();

    const location=useLocation();








    let employe=undefined;
    const data=employeesData.map(value => {
        if (value.id==params.id){
            employe={firstName:value.firstName, lastName:value.lastName,
                phoneNumber:value.phoneNumber, role:value.role, description:value.description}
        }
    } );

    return (
        <>
            {employe?
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Box width={"50%"}>
                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", minWidth:"25%"}}>Ismi:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employe.firstName}</Typography>
                        </Box>

                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", minWidth:"25%"}}>Familiyasi:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employe.lastName}</Typography>
                        </Box>

                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", width:"25%"}}>Telifon raqami:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employe.phoneNumber}</Typography>
                        </Box>

                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", width:"25%"}}>Roli:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employe.role}</Typography>
                        </Box>

                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", width:"25%"}}>Ismi:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employe.description}</Typography>
                        </Box>

                    </Box>
                </Box>:
                <Typography color={"error"}>Ishchi mavjud emas</Typography>}
        </>
    );
}