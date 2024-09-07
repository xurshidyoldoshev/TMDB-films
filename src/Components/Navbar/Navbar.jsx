import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { ENV_HTTP, ENV_KEY, ENV_TOKEN } from "../../Hook/useRequest";

export default function Navbar() {
  const [searchData, setSearchData] = React.useState([{ label: "", year: "" }]);
  const navigate = useNavigate();

  const searchMovie = (e) => {
    axios
      .get(
        `${ENV_HTTP}/search/movie?query=${e.target.value}&include_adult=false&api_key=${ENV_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${ENV_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setSearchData(
          res.data.results.map((item) => {
            return { label: item.title, year: item.id };
          })
        );
      });
  };

  const handleSearchChange = (e, value) => {
    navigate(`/singleFilm/${value.year}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Films
          </Typography>
          <div className="flex items-center gap-[950px] py-2">
            <ul className="flex items-center space-x-10 ml-14">
              <li className="whitespace-nowrap">
                <NavLink to={"/"}>Now Playing</NavLink>
              </li>
              <li className="whitespace-nowrap">
                <NavLink to={"/popular"}>Popular</NavLink>
              </li>
              <li className="whitespace-nowrap">
                <NavLink to={"/top-rated"}>Top Rated</NavLink>
              </li>
              <li className="whitespace-nowrap">
                <NavLink to={"/up-coming"}>Up Coming</NavLink>
              </li>
              <li className="translate-x-[150%]">
                <Autocomplete
                  onChange={handleSearchChange}
                  onKeyUp={searchMovie}
                  disablePortal
                  id="combo-box-demo"
                  options={searchData}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Search..." />
                  )}
                />
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
