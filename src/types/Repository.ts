type Repository = {
  name: string;
  id: number;
  topics: string[];
  url: string;
  homepage: string | null;
  languages: string[];
  languagesValues: {
    [key: string]: number;
  };
};

export default Repository;