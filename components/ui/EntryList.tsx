import { List, Paper } from '@mui/material';
import { FC, useContext, useMemo, DragEvent } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';

import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);
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
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 150px)',
          overflow: 'scroll',
          overflowX: 'hidden',
          backgroundColor: 'transparent',
          padding: '15px',
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.2 : 1,
            transition: 'all 125ms ease-in-out',
          }}
        >
          {entriesFiltred.map((e) => (
            <EntryCard data={e} key={e._id} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
