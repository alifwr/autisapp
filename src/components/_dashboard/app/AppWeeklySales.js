import { Icon } from '@iconify/react';
import androidFilled from '@iconify/icons-ant-design/android-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import { Card, CardMedia, CardActionArea, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 3),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function AppWeeklySales() {
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
            image="/static/mock-images/map_autism.jpeg"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
        Autism Children market in Global poses a tremendous potential, growth is turbocharged by the
        deterioration of mental health during COVID-19 (One in ninety nine people has autism in
        their lives and stress is the #1 health risk factor and sensitiveness amongst global
        children with autism. Autism Children market in Global poses a tremendous potential, growth
        is turbocharged by the deterioration of mental health during COVID-19 (One in ninety nine
        people has autism in their lives and stress is the #1 health risk factor and sensitiveness
        amongst global children with autism. However, autism is a nascent ecosystem with no
        “localized” dominant solutions at status quo).
      </Typography>
    </RootStyle>
  );
}
