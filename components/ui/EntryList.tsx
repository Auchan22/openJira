import { List, Paper } from '@mui/material';
import { FC, useContext, useMemo, DragEvent } from 'react';
import { EntriesContext } from '../../context/entries';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const entriesFiltred = useMemo(
    () => entries.filter((entry) => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries],
  );

  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text');
    console.log(id);
  };

  return (
    <div onDrop={onDrop} onDragOver={allowDrop}>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'scroll',
          overflowX: 'hidden',
          backgroundColor: 'transparent',
          padding: '15px',
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesFiltred.map((e) => (
            <EntryCard data={e} key={e._id} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
