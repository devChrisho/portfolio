import { Switch } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { toggleDarkMode } from "../redux/slices/systemSlice";
import { useSelector } from "react-redux";
import { selectSystem } from "../redux/selectors/systemSelectors";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const SwitchDarkMode = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useSelector(selectSystem).isDarkMode;
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <Switch
      icon={<LightModeIcon />}
      checkedIcon={<DarkModeIcon />}
      checked={isDarkMode}
      onChange={handleToggleDarkMode}
      sx={{
        "& .MuiSwitch-switchBase": {
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#88c4ff",
          padding: 0.5,
          color: "yellow",
          "& .MuiSvgIcon-root": { filter: "drop-shadow(0 0 4px white)" },
          "&:hover": { backgroundColor: "#88c4ff" },

          "&.Mui-checked": {
            transform: "translate(20px, -50%)",
            color: "yellow",
            backgroundColor: "hsla(245, 38%, 23%, 0.851)",
            "& .MuiSvgIcon-root": { filter: "drop-shadow(0 0 2px white)" },
            "&:hover": {
              backgroundColor: "hsla(245, 38%, 23%, 0.851)",
            },
          },
        },
      }}
    />
  );
};

export default SwitchDarkMode;
