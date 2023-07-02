import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Registration from "./Registration"

export default function SelectIndicator() {
  const navigate = useNavigate();

  const handleAddSubject = () => {
    console.log("ssssssssssss");

    navigate("/Students");
  };

  return (
    <FormControl
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Select
          defaultValue="default"
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: 200,
            height: 35,
            "& .MuiSelect-icon": {
              transition: "0.2s",
              transform: "rotate(0deg)",
            },
            "&.Mui-expanded .MuiSelect-icon": {
              transform: "rotate(-180deg)",
            },
          }}
        >
          <MenuItem value="default" selected>
            All sites
          </MenuItem>
          <MenuItem value="jeep">Jeep</MenuItem>
          <MenuItem value="volkswagen">Volkswagen</MenuItem>
          <MenuItem value="volvo">Volvo</MenuItem>
          <MenuItem value="jaguar">Jaguar</MenuItem>
          <MenuItem value="audi">Audi</MenuItem>
        </Select>

        <Select
          defaultValue="default"
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: 150,
            height: 35,
            "& .MuiSelect-icon": {
              transition: "0.2s",
              transform: "rotate(0deg)",
            },
            "&.Mui-expanded .MuiSelect-icon": {
              transform: "rotate(-180deg)",
            },
          }}
        >
          <MenuItem value="default">All doses</MenuItem>
          <MenuItem value="jeep">Jeep</MenuItem>
          <MenuItem value="volkswagen">Volkswagen</MenuItem>
          <MenuItem value="volvo">Volvo</MenuItem>
          <MenuItem value="jaguar">Jaguar</MenuItem>
          <MenuItem value="audi">Audi</MenuItem>
        </Select>
      </div>

      {/* <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div style={{ margin: "-10px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker slotProps={{ textField: { size: "small" } }} />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div>
          <Button
            style={{ background: "#EA9E4F", color: "white" }}
            size="sm"
            onClick={handleAddSubject}
          >
            Add Subject
          </Button>
        </div>
      </div> */}
    </FormControl>
  );
}
