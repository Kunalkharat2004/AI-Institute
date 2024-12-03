import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import useTokenStore from "../../store/userTokenStore";
import{ jwtDecode} from "jwt-decode";

// Sample data for the charts
const complianceData = [
  { month: "Jan", score: 70 },
  { month: "Feb", score: 80 },
  { month: "Mar", score: 75 },
  { month: "Apr", score: 85 },
  { month: "May", score: 90 },
];

const UserDashboardPage = () => {
  const token = useTokenStore((state) => state.token);

  // Simulating user data decoded from the token
  const user = token ? {...jwtDecode(token),role:"User"} : {email: "User", role: "User"};

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f7f9fc" }}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* User Info Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
                {user.email[0].toUpperCase()}
              </Avatar>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">Welcome, {user.email}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Role: {user.role}
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* Metric 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total Inspections
              </Typography>
              <Typography variant="h4" color="primary">
                25
              </Typography>
            </Card>
          </Grid>

          {/* Metric 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Compliance Score
              </Typography>
              <Typography variant="h4" color="success.main">
                85%
              </Typography>
            </Card>
          </Grid>

          {/* Compliance Trends Chart */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Compliance Trends
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={complianceData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="score" stroke="#3f51b5" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Notifications */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Notifications
              </Typography>
              <Typography variant="body2">
                3 new notifications. <br />
                - Compliance score updated.<br />
                - Upcoming inspection on May 15th.
              </Typography>
            </Card>
          </Grid>

          {/* Actionable Insights */}
          <Grid item xs={12} sm={6} md={8}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Actionable Insights
              </Typography>
              <Typography variant="body2">
                - Improve fire safety measures in Block A.<br />
                - Schedule regular lab maintenance.<br />
                - Submit faculty qualification reports.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UserDashboardPage;
