interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Lorem Ipsum re loco malardo breoooooo',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'Lorem Ipsum re loco malardo breoooooo 2',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Lorem Ipsum re loco malardo breoooooo 3',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
