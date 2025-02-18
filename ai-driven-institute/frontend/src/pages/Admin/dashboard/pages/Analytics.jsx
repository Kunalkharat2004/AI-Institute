import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import ReactEcharts from 'echarts-for-react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const analyticsData = {
  inspectionsOverTime: [
    { month: 'Jan', inspections: 45 },
    { month: 'Feb', inspections: 55 },
    { month: 'Mar', inspections: 65 },
    { month: 'Apr', inspections: 85 },
    { month: 'May', inspections: 95 },
    { month: 'Jun', inspections: 110 },
    { month: 'Jul', inspections: 125 },
    { month: 'Aug', inspections: 140 },
    { month: 'Sep', inspections: 135 },
    { month: 'Oct', inspections: 120 },
    { month: 'Nov', inspections: 100 },
    { month: 'Dec', inspections: 90 },
  ],
  deficiencyData: [
    { name: 'Safety Issues', value: 55 },
    { name: 'Infrastructure', value: 45 },
    { name: 'Documentation', value: 40 },
    { name: 'Training', value: 30 },
    { name: 'Equipment', value: 35 },
    { name: 'Maintenance', value: 25 },
    { name: 'Compliance', value: 20 },
  ],
  regionalCompliance: [
    { name: 'North Region', value: 89 },
    { name: 'South Region', value: 82 },
    { name: 'East Region', value: 74 },
    { name: 'West Region', value: 76 },
    { name: 'Central Region', value: 68 },
    { name: 'North-East Region', value: 72 },
  ],
};

const COLORS = ['#0088FE', '#FF8042', '#00C49F', '#FFBB28'];

const getInspectionLineChartOptions = () => ({
  title: {
    text: 'Inspections Conducted Over Time',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: analyticsData.inspectionsOverTime.map((data) => data.month),
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: analyticsData.inspectionsOverTime.map((data) => data.inspections),
      type: 'line',
      smooth: true,
      areaStyle: {},
      itemStyle: {
        color: '#36CFC9',
      },
    },
  ],
});

const getDeficiencyBarChartOptions = () => ({
  title: {
    text: 'Most Common Deficiencies',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'category',
    data: analyticsData.deficiencyData.map((item) => item.name),
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: analyticsData.deficiencyData.map((item) => item.value),
      type: 'bar',
      barWidth: '50%',
      itemStyle: {
        color: '#4285F4',
      },
    },
  ],
});


export default function AnalyticsDashboard() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <ReactEcharts option={getInspectionLineChartOptions()} style={{ height: '400px' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <ReactEcharts option={getDeficiencyBarChartOptions()} style={{ height: '400px' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
  <Card>
    <CardContent>
      <Typography variant="h6" textAlign="center" gutterBottom>
        Regional Compliance Scores
      </Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={analyticsData.regionalCompliance}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          label={(entry) => `${entry.name}: ${entry.value}%`}
        >
          {analyticsData.regionalCompliance.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="#fff"
              strokeWidth={2}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => `${value}%`}
          contentStyle={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}
        />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ paddingTop: '10px' }}
        />
      </PieChart>
    </CardContent>
  </Card>
</Grid>

      </Grid>
    </Box>
  );
}
