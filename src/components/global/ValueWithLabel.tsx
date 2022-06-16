import { Box, Typography } from '@mui/material';

export type ValueWithLabelT = {
  value?: string | number | null;
  label: string;
};

export const ValueWithLabel = ({ value, label }: ValueWithLabelT) => {
  if (value === null || value === undefined) return <div>-</div>;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant="subtitle2"
        sx={{ font: { transform: 'capitalize' }, mr: 1 }}
      >
        {label}
      </Typography>

      <Typography variant="body1">{value}</Typography>
    </Box>
  );
};
