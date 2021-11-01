import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardMedia, CardActionArea, Typography } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),
  '& .apexcharts-canvas svg': {
    height: CHART_HEIGHT
  },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [
  { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
  { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
  { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] }
];

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 3),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

export default function AppCurrentSubject() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2 },
    fill: { opacity: 0.48 },
    legend: { floating: true, horizontalAlign: 'center' },
    xaxis: {
      categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
      labels: {
        style: {
          colors: [
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary
          ]
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
          <CardMedia
            component="img"
            image="/static/mock-images/categorizem.png"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
        Assessment test for characterization user
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Light and interactive assessment content to support autism children characterization on a
        daily basis
      </Typography>
    </RootStyle>
  );
}
