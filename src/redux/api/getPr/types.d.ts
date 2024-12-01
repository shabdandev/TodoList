namespace TODO {
  type getResponse = {
    id: number;
    name: string;
    description: string;
    image: string | file;
  }[];
  type getRequest = void;
}
