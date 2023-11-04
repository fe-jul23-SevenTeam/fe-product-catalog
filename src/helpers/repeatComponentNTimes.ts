import { ItemsPerPage } from 'types/enumPageSize';

export const repeatComponentNtimes = (
  quantity: ItemsPerPage,
  component: React.FC,
): React.FC[] => {
  const items: React.FC[] = [];

  for (let i = 0; i < +quantity; i++) {
    items.push(component);
  }

  return items;
};
