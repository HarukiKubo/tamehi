export interface Prefectures {
  prefCode: number;
  prefName: string;
}

export interface PopulationData {
  year: number;
  value: number;
}

export interface PopulationLabel {
  label: string;
  data: PopulationData[];
}

export interface PopulationResponse {
  message: string | null;
  result: {
    boundaryYear: number;
    data: PopulationLabel[];
  };
}
