import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import indiaGeoJSON from './path-to-your-india-geojson.json'; // Update with the correct path

// Register the India map
echarts.registerMap('india', indiaGeoJSON);

const heatmapData = [
  { name: 'Maharashtra', value: 95 },
  { name: 'Delhi', value: 92 },
  { name: 'Karnataka', value: 98 },
  { name: 'Tamil Nadu', value: 90 },
  { name: 'Uttar Pradesh', value: 94 },
  { name: 'Telangana', value: 89 },
  { name: 'West Bengal', value: 82 },
  { name: 'Gujarat', value: 87 },
  { name: 'Rajasthan', value: 85 },
  { name: 'Punjab', value: 88 },
];

const getHeatmapOptions = () => {
  return {
    title: {
      text: 'Regional Compliance Heatmap',
      left: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br/>Compliance Score: {c}%',
    },
    visualMap: {
      min: 80,
      max: 100,
      left: 'left',
      top: 'bottom',
      text: ['High', 'Low'],
      calculable: true,
      inRange: {
        color: ['#FFC371', '#FF5F6D'],
      },
    },
    series: [
      {
        name: 'Compliance Score',
        type: 'map',
        map: 'india', // Matches the registered map name
        roam: true,
        label: {
          show: true,
        },
        data: heatmapData,
      },
    ],
  };
};

export default function RegionalHeatmap() {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        padding: 2,
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Regional Compliance Heatmap
        </Typography>
        <Box sx={{ height: 500 }}>
          <ReactEcharts option={getHeatmapOptions()} style={{ height: '100%' }} />
        </Box>
      </CardContent>
    </Card>
  );
}
