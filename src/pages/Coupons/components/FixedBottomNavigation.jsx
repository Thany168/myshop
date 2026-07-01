import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ButtonNav from "./ButtonNav";
import SelectLabels from "./SelectLabels";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "./DataTable";

const rows = [
  {
    id: 1,
    coupon: "Summer discount 10% off\nSummer2020",
    usage: "15 times",
    status: "Active",
    date: "May 5, 2020 - May 15, 2020",
  },
  {
    id: 2,
    coupon: "Free shipping on all items\nShipfreetome15",
    usage: "42 times",
    status: "Active",
    date: "May 5, 2020 - May 15, 2020",
  },
  {
    id: 3,
    coupon: "Discount for women clothes 5%\nWomenclothing5",
    usage: "12 times",
    status: "Expired",
    date: "April 12, 2020 - April 20, 2020",
  },
  // ...
];

export default function FixedBottomNavigation() {
  const [status, setStatus] = React.useState("All");
  const [textSearch, settextSearch] = React.useState("");
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const filtered =
    status === "All" ? rows : rows.filter((item) => item.status === status);
  const search =
    filtered == ""
      ? filtered
      : filtered.filter((item) =>
          item.coupon.toLowerCase().includes(textSearch.toLowerCase()),
        );

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <BottomNavigation
        sx={{
          justifyContent: "flex-start",
          width: "fit-content",
          "& .MuiBottomNavigationAction-root": {
            minWidth: "auto",
            width: "fit-content",
            px: 2,
            flex: "0 0 auto",
          },
          "& .MuiBottomNavigationAction-label": {
            fontSize: "13px",
          },
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="All Coupons"
          showLabel
          icon={null}
          onClick={() => setStatus("All")}
          sx={{
            alignItems: "start",
            justifyContent: "center",
            textAlign: "left",
            "&.Mui-selected": {
              color: "#3b82f6",
              borderBottom: "1px solid #3b82f6",
            },
          }}
        />
        <BottomNavigationAction
          label="Active Coupons"
          showLabel
          onClick={() => setStatus("Active")}
          icon={null}
          sx={{
            "&.Mui-selected": {
              color: "#3b82f6",
              borderBottom: "1px solid #3b82f6",
            },
          }}
        />
        <BottomNavigationAction
          label="Expired Coupons"
          showLabel
          icon={null}
          onClick={() => setStatus("Expired")}
          sx={{
            "&.Mui-selected": {
              color: "#3b82f6",
              borderBottom: "1px solid #3b82f6",
            },
          }}
        />
      </BottomNavigation>
      <hr />
      <CssBaseline />
      <div>
        <div className="bg-blue-100">{/* <ButtonNav /> */}</div>
        <div className="flex mt-3 justify-between">
          <div className="flex gap-5">
            <div>
              <SelectLabels />
            </div>
            <div>
              <FormControl>
                <TextField
                  sx={{ width: "400px" }}
                  size="small"
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                  onChange={(e) => settextSearch(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="border border-gray-200 text-blue-500 w-10 rounded">
              <BorderColorSharpIcon />
            </button>
            <button className="border border-gray-200 text-blue-500 w-10 rounded">
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <DataTable row={search} />
      </div>
    </Box>
  );
}
