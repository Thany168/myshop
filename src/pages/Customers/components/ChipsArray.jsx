import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({ customer }) {
  const [tags, setTags] = React.useState(customer.tags);
  const onDeleteChip = (name) => {
    setTags((pre) => pre.filter((tags) => tags !== name));
  };
  return (
    <>
      <div className="flex gap-2">
        {tags.map((item,index) => (
          <Chip key={index} label={item}  sx={{backgroundColor:"#e6e9f4",borderRadius:"5px" }} onDelete={() => onDeleteChip(item)} />
        ))}
      </div>
    </>
  );
}
