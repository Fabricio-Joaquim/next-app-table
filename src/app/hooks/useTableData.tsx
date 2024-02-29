import { ITableGenericHeader } from '../model/TableHeader';
import { SlOptionsVertical } from 'react-icons/sl';
import { faker } from '@faker-js/faker';
import { useMemo } from 'react';


const useTableData = () => {
  const headers: ITableGenericHeader[] = [
    {
      header: 'Image',
      accessorKey: 'image',
    },
    {
      header: 'Car',
      accessorKey: 'name',
    },
    {
      header: 'Next Reservation',
      accessorKey: 'reservation',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
    {
      header: 'Rating',
      accessorKey: 'rating',
    },
    {
      header: 'Actions',
      accessorKey: 'actions',
    },
  ];

  const data = useMemo(() => Array.from({ length: 20 }, () => ({
    name: faker.vehicle.vehicle(),
    image: faker.image.url({ width: 100, height: 100 }),
    reservation: faker.date.future().getDate().toString().padStart(2, '0') + '/' + (faker.date.future().getMonth() + 1).toString().padStart(2, '0'),
    status: faker.helpers.arrayElement(['Available', 'Unavailable']),
    rating: faker.number.int({ min: 1, max: 5 }),
    actions: <SlOptionsVertical className="cursor-pointer" />
  }))
    , []);

  return { headers, data };

}

export { useTableData };