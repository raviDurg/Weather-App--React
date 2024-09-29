import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({ info }) {
  const INIT_URL = "https://media.istockphoto.com/id/1156400081/photo/threatening-storm-clouds-over-farmland.jpg?s=1024x1024&w=is&k=20&c=82-FyNYfmNFhvL5t3FEV6zp7YEaBCu8iYgHt6y88rFM=";

  // let HOT_URL = "https://www.istockphoto.com/photo/woman-cooling-herself-with-water-on-a-hot-summer-day-gm1181078407-331118948";
  // let COLD_URL = "https://www.istockphoto.com/photo/cold-and-flu-season-street-sign-gm463035645-32712756";
  // let RAIN_URL = "https://www.istockphoto.com/photo/rain-drops-falling-down-from-the-roof-at-night-gm2151002398-572133042";
  let HOT_URL = "https://via.placeholder.com/300x140/FF5733/FFFFFF?text=Hot+Weather";
  let COLD_URL = "https://via.placeholder.com/300x140/3498DB/FFFFFF?text=Cold+Weather";
  let RAIN_URL = "https://via.placeholder.com/300x140/2ECC71/FFFFFF?text=Rainy+Weather";
  // let HOT_URL = "https://unsplash.com/photos/a-man-walking-down-a-street-next-to-a-tall-building-vMP-s6hWFlE";
  // let COLD_URL = "https://images.unsplash.com/photo-1600557821901-33d0f4d8883e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fHx8MTYxNTkzMTYyOA&ixlib=rb-1.2.1&q=80&w=400";
  // let RAIN_URL = "https://images.unsplash.com/photo-1533491371971-9f40b992a4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHJhaW58ZW58MHx8fHwxNjE1OTMxNzQw&ixlib=rb-1.2.1&q=80&w=400";

  return (
    <div className="cardContainer">
      <div className="InfoBox" >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
                ? HOT_URL
                : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>

              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>The Temp feels like = {info.feelslike}&deg;C</p>
              <p>The weather can be describe as a <i> {info.weather}</i> and feels
                like {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>

  );
}