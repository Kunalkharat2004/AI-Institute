import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.5} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

AreaGradient.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

export default function SessionsChart() {
  const theme = useTheme();
  const data = getDaysInMonth(4, 2024);

  const colorPalette = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.error.light,
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Inspection Performance
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
              18,342
            </Typography>
            <Chip size="small" color="primary" label="+45%" />
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Metrics for the last 30 days
          </Typography>
        </Stack>
        <LineChart
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'point',
              data,
              tickInterval: (index, i) => (i + 1) % 5 === 0,
            },
          ]}
          series={[
            {
              id: 'facility-assessments',
              label: 'Facility Assessments',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              area: true,
              stackOrder: 'ascending',
              data: [
                300, 250, 400, 350, 450, 300, 500, 450, 400, 550, 500, 600, 700, 650,
                600, 700, 750, 800, 850, 750, 900, 950, 1000, 1100, 1200, 1150, 1300,
                1400, 1500, 1550,
              ],
            },
            {
              id: 'document-checks',
              label: 'Document Checks',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              area: true,
              stackOrder: 'ascending',
              data: [
                200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850,
                900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450,
                1500, 1550, 1600, 1650,
              ],
            },
            {
              id: 'ai-suggested-improvements',
              label: 'AI-Suggested Improvements',
              showMark: false,
              curve: 'linear',
              stack: 'total',
              area: true,
              stackOrder: 'ascending',
              data: [
                150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800,
                850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400,
                1450, 1500, 1550, 1600,
              ],
            },
          ]}
          height={250}
          margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          sx={{
            '& .MuiAreaElement-series-facility-assessments': {
              fill: "url('#facility-assessments')",
            },
            '& .MuiAreaElement-series-document-checks': {
              fill: "url('#document-checks')",
            },
            '& .MuiAreaElement-series-ai-suggested-improvements': {
              fill: "url('#ai-suggested-improvements')",
            },
          }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        >
          <AreaGradient color={theme.palette.primary.main} id="facility-assessments" />
          <AreaGradient color={theme.palette.secondary.main} id="document-checks" />
          <AreaGradient color={theme.palette.error.light} id="ai-suggested-improvements" />
        </LineChart>
      </CardContent>
    </Card>
  );
}