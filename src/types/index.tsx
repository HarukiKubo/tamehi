export type Prefectures = {
  prefCode: number;
  prefName: string;
};

export type PopulationData = {
  year: number;
  value: number;
};

export type PopulationResponse = {
  data: {
    label: string;
    data: PopulationData[];
  }[];
};
