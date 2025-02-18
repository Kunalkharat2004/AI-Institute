import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import GaugeChart  from 'react-gauge-chart';
import Box from '@mui/material/Box';

const institutions = [
  {
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai, Maharashtra',
    inspectionsCompleted: '15',
    lastInspectionDate: '2024-04-10',
    complianceScore: 0.95,
  },
  {
    name: 'Indian Institute of Technology Delhi',
    location: 'New Delhi',
    inspectionsCompleted: '12',
    lastInspectionDate: '2024-04-08',
    complianceScore: 0.92,
  },
  {
    name: 'Indian Institute of Science',
    location: 'Bangalore, Karnataka',
    inspectionsCompleted: '18',
    lastInspectionDate: '2024-04-12',
    complianceScore: 0.98,
  },
  {
    name: 'Indian Institute of Technology Madras',
    location: 'Chennai, Tamil Nadu',
    inspectionsCompleted: '10',
    lastInspectionDate: '2024-04-05',
    complianceScore: 0.9,
  },
  {
    name: 'Indian Institute of Technology Kanpur',
    location: 'Kanpur, Uttar Pradesh',
    inspectionsCompleted: '14',
    lastInspectionDate: '2024-04-09',
    complianceScore: 0.94,
  },
  {
    name: 'University of Delhi',
    location: 'New Delhi',
    inspectionsCompleted: '20',
    lastInspectionDate: '2024-04-13',
    complianceScore: 0.88,
  },
  {
    name: 'Banaras Hindu University',
    location: 'Varanasi, Uttar Pradesh',
    inspectionsCompleted: '8',
    lastInspectionDate: '2024-04-04',
    complianceScore: 0.85,
  },
  {
    name: 'Jadavpur University',
    location: 'Kolkata, West Bengal',
    inspectionsCompleted: '7',
    lastInspectionDate: '2024-04-03',
    complianceScore: 0.82,
  },
//   {
//     name: 'University of Hyderabad',
//     location: 'Hyderabad, Telangana',
//     inspectionsCompleted: '9',
//     lastInspectionDate: '2024-04-06',
//     complianceScore: 0.89,
//   },
//   {
//     name: 'Indian Institute of Management Ahmedabad',
//     location: 'Ahmedabad, Gujarat',
//     inspectionsCompleted: '5',
//     lastInspectionDate: '2024-04-02',
//     complianceScore: 0.87,
//   },
];

export default function CollegeCards() {
  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {institutions.map((institution, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              transition: '0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
              height: "18rem"
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 'bold', color: 'primary.main' }}
              >
                {institution.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 1 }}
              >
                Location: {institution.location}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 1 }}
              >
                Inspections Completed: {institution.inspectionsCompleted}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 2 }}
              >
                Last Inspection: {institution.lastInspectionDate}
              </Typography>
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <GaugeChart
                  id={`gauge-${index}`}
                  nrOfLevels={30}
                  percent={institution.complianceScore}
                  colors={['#FF5F6D', '#FFC371']}
                  arcWidth={0.15}
                  textColor="inherit"
                  needleColor="#1E293B"
                  animate={true}
                  hideText={false}
                />
                <Typography
                  variant="caption"
                  sx={{ display: 'block', marginTop: 1, fontSize: '0.9rem', color: 'text.secondary' }}
                >
                  Compliance Score: {(institution.complianceScore * 100).toFixed(1)}%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}