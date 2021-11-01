import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardMedia, CardActionArea, Typography } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 3),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }
    },
    xaxis: {
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
        'South Korea',
        'Netherlands',
        'United States',
        'United Kingdom'
      ]
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
          <CardMedia component="img" image="/static/mock-images/elearning.png" alt="green iguana" />
        </CardActionArea>
      </Card>
      <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
        Gamified online learning material recommendation test based
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Gamified Q&A to help user track their learning material pattern & ML algorithm to recommend
        educational contents
      </Typography>
    </RootStyle>
  );
}
