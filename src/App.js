
import Layaut2 from "./components/Layaut2";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Teams from "./components/Teams";
import Employees from "./components/Employees";
import Projects from "./components/Projects";
import TeamId from "./components/TeamId";
import EmployeesId from "./components/EmployeesId";
import ProjectsId from "./components/ProjectsId";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";


function App() {
  return (
    <>
          <BrowserRouter>
              <CssBaseline/>
              <Routes>
                  <Route path={"/"} element={<Layaut2/>}>
                      <Route path={"/"} element={<Main/>}></Route>
                      <Route path={"/teams"} element={<Teams/>}></Route>
                      <Route path={"/teams/:id"} element={<TeamId/>}></Route>
                      <Route path={"/employees"} element={<Employees/>}></Route>
                      <Route path={"/employees/:id"} element={<EmployeesId/>}></Route>
                      <Route path={"/projects"} element={<Projects/>}>Projects</Route>
                      <Route path={"/projects/:id"} element={<ProjectsId/>}>Projects</Route>
                      <Route path={"*"} element={<Box display={"flex"} alignItems={"end"} justifyContent={"center"} height={"100%"} >
                          <Typography color={"error"} fontWeight={"bold"}>Siz mavjud bo`lmagan sahifaga kirishga harajat qildingiz</Typography>
                      </Box>}></Route>

                  </Route>




              </Routes>
          </BrowserRouter>

        {/*<Box padding={10}>*/}
        {/*    <Box display={"flex"} flexDirection={"column"} gap={2}>*/}
        {/*        <TextField label={"Ismingizni kriiting"}/>*/}

        {/*        <Typography>Ma`lumotlar</Typography>*/}

        {/*        <Grid container spacing={2}>*/}
        {/*            <Grid item xs={4} sx={{background:"#457972"}}>*/}
        {/*                <Typography>Salomlar bo`lsin</Typography>*/}
        {/*            </Grid>*/}

        {/*            <Grid item xs={4} sx={{background:"#457972"}}>*/}
        {/*                <Typography>Salomlar bo`lsin</Typography>*/}
        {/*            </Grid>*/}

        {/*            <Grid item xs={4} sx={{background:"#457972"}}>*/}
        {/*                <Typography>Salomlar bo`lsin</Typography>*/}
        {/*            </Grid>*/}

        {/*        </Grid>*/}
        {/*    </Box>*/}
        {/*</Box>*/}
    </>
  );
}

export default App;
