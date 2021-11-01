import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { alpha, styled } from '@mui/material/styles';
// material
import { Card, CardMedia, CardActionArea, Typography } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Team A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: 'Team B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'Team C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
];

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 3),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });

  return (
    <RootStyle>
      {/* <IconWrapperStyle>
        <Icon icon={androidFilled} width={24} height={24} />
      </IconWrapperStyle> */}
      {/* <Typography variant="h3">Background</Typography> */}
      <Card style={{ marginBottom: 8 }}>
        <CardActionArea>
          <CardMedia component="img" image="/static/mock-images/autism.jpeg" alt="green iguana" />
        </CardActionArea>
      </Card>
      <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
        From the statement above, we initiated making online education solutions accessible and
        affordable for autism children with AI Assistance.
      </Typography>
    </RootStyle>
  );
}
