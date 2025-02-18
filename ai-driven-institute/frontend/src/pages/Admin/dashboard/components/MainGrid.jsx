import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard from './StatCard';
import CollegeCards from './CollegeCards';

const data = [
  {
    title: 'Completed Inspections',
    value: '1.2k',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      100, 120, 150, 180, 200, 220, 240, 260, 300, 320, 340, 400, 420, 450, 480, 500,
      520, 550, 600, 620, 640, 660, 700, 720, 740, 760, 800, 820, 850, 900,
    ],
  },
  {
    title: 'Feedback Received',
    value: '450',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      15, 20, 25, 30, 28, 26, 35, 40, 38, 36, 50, 48, 60, 62, 65, 70, 68, 72, 80, 85,
      90, 92, 100, 105, 110, 115, 120, 125, 130, 135,
    ],
  },
  {
    title: 'Average Compliance Score',
    value: '85%',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      80, 81, 82, 83, 83.5, 84, 84.5, 85, 85.5, 86, 86.2, 86.5, 87, 87.5, 88, 88.2,
      88.5, 88.8, 89, 89.5, 89.7, 90, 90.2, 90.5, 90.8, 91, 91.2, 91.5, 91.8, 92,
    ],
  },
  {
    title: 'Resolved Contact Queries',
    value: '95%',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      80, 82, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 98.5, 99, 99.2,
      99.5, 99.7, 99.9, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
];


export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        {/* <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid> */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        {/* <Grid size={{ xs: 12, lg: 9 }}>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
        <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
        <CustomizedTreeView />
        <ChartUserByCountry />
        </Stack>
        </Grid> */}
        <CustomizedDataGrid />
      </Grid>
      <CollegeCards/>
      {/* <RegionalHeatmap/> */}
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}