import { Icon } from '@iconify/react';
import windowsFilled from '@iconify/icons-ant-design/windows-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'left',
  padding: theme.spacing(5, 5),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
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
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1723315;

export default function AppItemOrders() {
  return (
    <RootStyle>
      <Typography variant="h4" sx={{ opacity: 0.72 }}>
        Total market that we can reach shown above with source:
      </Typography>
      <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
        1. Total Autism in Worldwide
      </Typography>
      <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
        2. 90% Asia’s autism population
      </Typography>
      <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
        3. 90% Indonesia’s autism population from Kementerian PPPA (Indonesia’s Ministry)
      </Typography>
    </RootStyle>
  );
}
