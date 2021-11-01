import { Icon } from '@iconify/react';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 2),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
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
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 234;

export default function AppBugReports() {
  return (
    <RootStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Based on research “The Broad Autism Phenotype Questionnaire” that published by Robert S
        Hurley, Morgan Parlier and Joseph Piven, they divided autism into 3 types: Autism Aloof
        (entails a tendency to not prefer interactions with others, not enjoy small talk, and have
        few close friendships), Autism Rigid (inability to mentally adapt to new demands or
        information), and Autism Pragmatic language (impairment in understanding and/or use of
        pragmatic aspects of language)
      </Typography>
    </RootStyle>
  );
}
