"use client";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Button,
} from "@mui/material";

const RightSidebar = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }} className="shadow-md">
        <CardHeader title="Latest News" />
        <CardContent>
          <Card>
            <CardHeader
              avatar={<Avatar src="/profile-pic.jpg" />}
              title="John Doe"
              subheader="3 hours ago"
            />
            <CardContent>
              <Typography variant="h6">My Latest Post</Typography>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, urna eu pellentesque commodo, velit sapien commodo
                velit, vel commodo velit enim eget ipsum.
              </p>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                className="mt-2"
              >
                Read More...
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <div className="my-3">
        <Card>
          <CardHeader
            title="People You May Know"
            titleTypographyProps={{ variant: "h6" }}
          />
          <CardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Avatar src="/profile-pic.jpg" style={{ marginRight: "1rem" }} />
              <Typography variant="body1">John Smith</Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: "auto" }}
                className="bg-blue-600"
              >
                Connect
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Avatar src="/profile-pic.jpg" style={{ marginRight: "1rem" }} />
              <Typography variant="body1">Jane Doe</Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: "auto" }}
                className="bg-blue-600"
              >
                Connect
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RightSidebar;
