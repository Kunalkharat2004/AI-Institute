import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';

export default function PageViewsBarChart() {
  const theme = useTheme();
  const colorPalette = [
    theme.palette.primary.main,
    theme.palette.warning.dark,
    theme.palette.error.light,
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Inspection Metrics
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              1.8M
            </Typography>
            <Chip size="small" color="error" label="-5%" />
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Metrics for inspections and evaluations over the last 6 months
          </Typography>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'band',
              categoryGapRatio: 0.5,
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            },
          ]}
          series={[
            {
              id: 'infrastructure',
              label: 'Infrastructure Checks',
              data: [3450, 3780, 3650, 3900, 4200, 4000],
              stack: 'A',
            },
            {
              id: 'faculty',
              label: 'Faculty Evaluations',
              data: [2900, 3200, 3100, 3400, 3600, 3500],
              stack: 'A',
            },
            {
              id: 'compliance',
              label: 'Regulatory Compliance',
              data: [3100, 3400, 3300, 3700, 3900, 3800],
              stack: 'A',
            },
          ]}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}