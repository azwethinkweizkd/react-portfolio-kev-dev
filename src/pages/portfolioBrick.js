import { ImageList } from "@material-ui/core";
import { ImageListItemBar, ImageListItem } from "@mui/material";
const itemData = [];
export default function MasonPortfolio() {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar position="below" title={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
