import * as React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import ReactEcharts from 'echarts-for-react';

const getBarChartOptions = () => ({
  title: {
    text: 'Feedback Ratings Distribution',
    left: 'center',
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: '{b}: {c} Feedbacks',
  },
  xAxis: {
    type: 'category',
    data: feedbackData.categories,
    axisTick: {
      alignWithLabel: true,
    },
    axisLine: {
      lineStyle: {
        color: '#aaa',
      },
    },
    axisLabel: {
      fontSize: 12,
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      fontSize: 12,
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#ddd',
      },
    },
  },
  series: [
    {
      data: feedbackData.ratings,
      type: 'bar',
      barWidth: '60%',
      itemStyle: {
        color: '#4285F4',
        borderRadius: [5, 5, 0, 0],
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        fontSize: 12,
        color: '#333',
      },
    },
  ],
});

const getPieChartOptions = () => ({
  title: {
    text: 'Feedback Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Source',
      type: 'pie',
      radius: '50%',
      data: [
        { value: feedbackData.feedbackSources.direct, name: 'Direct' },
        { value: feedbackData.feedbackSources.email, name: 'Email' },
        { value: feedbackData.feedbackSources.surveys, name: 'Surveys' },
        { value: feedbackData.feedbackSources.chatbot, name: 'Chatbot' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});


const feedbackData = {
    ratings: [10, 20, 35, 25, 10],
    categories: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    feedbackSources: {
      direct: 120,
      email: 200,
      surveys: 90,
      chatbot: 150,
    },
    resolvedFeedback: 320,
    totalFeedback: 500,
    sentiment: [
      { name: 'Positive', value: 350 },
      { name: 'Negative', value: 150 },
    ],
   feedbackOverTime: [
    { month: 'Jan', feedback: 40 },
    { month: 'Feb', feedback: 65 },
    { month: 'Mar', feedback: 50 },
    { month: 'Apr', feedback: 85 },
    { month: 'May', feedback: 70 },
    { month: 'Jun', feedback: 95 },
  ],
  };

const getLineChartOptions = () => ({
    title: {
      text: 'Total Feedback Over Time',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: feedbackData.feedbackOverTime.map((data) => data.month),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: feedbackData.feedbackOverTime.map((data) => data.feedback),
        type: 'line',
        areaStyle: {},
        itemStyle: {
          color: '#36CFC9',
        },
      },
    ],
  });

export default function FeedbackDashboard() {
  return (
    <Box sx={{ padding: 4 }}>
      {/* <Typography variant="h4" gutterBottom>
        Feedback Dashboard
      </Typography> */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <ReactEcharts option={getBarChartOptions()} style={{ height: '400px' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <ReactEcharts option={getPieChartOptions()} style={{ height: '400px' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <ReactEcharts option={getLineChartOptions()} style={{ height: '400px' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resolved Feedback
              </Typography>
              <Typography variant="h4" color="success.main">
                {feedbackData.resolvedFeedback}/{feedbackData.totalFeedback}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Feedback Resolved
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pending Feedback
              </Typography>
              <Typography variant="h4" color="error.main">
                {feedbackData.totalFeedback - feedbackData.resolvedFeedback}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Feedback Pending for Resolution
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
