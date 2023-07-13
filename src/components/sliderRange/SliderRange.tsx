import React from 'react';
import { Slider, Typography } from '@mui/material';
import styles from './SliderRange.module.css';

interface SliderRangeProps {
  maxRange: number;
  onChange: (value: number[]) => void;
  title: string;
}

const SliderRange = (props: SliderRangeProps) => {
  const { maxRange, onChange, title } = props;
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    onChange(newValue as number[]);
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title}>{`${title}:`}</Typography>
      <Slider
        sx={{ maxWidth: '50%' }}
        max={maxRange}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default SliderRange;
