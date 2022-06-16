import { Box, Button, ListItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export type ListInputT = {
  onChange: (value: string[]) => void;
  key: string;
  disabled: boolean;
};
export const ListInput = ({ onChange, key, disabled }: ListInputT) => {
  const [textValue, setTextValue] = useState('');
  const [steps, setSteps] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  const handleNewIngredient = () => {
    const newSteps = [...steps, textValue];
    setSteps(newSteps);
    setTextValue('');
    onChange(newSteps);
  };

  return (
    <Box>
      <Typography>{key}</Typography>
      <TextField
        value={textValue}
        onChange={handleChange}
        disabled={disabled}
      />
      <Button onClick={handleNewIngredient} disabled={disabled}>
        Add
      </Button>
      {steps.map((step, index) => (
        <ListItem key={`${key}-${index}`}>{step}</ListItem>
      ))}
    </Box>
  );
};
