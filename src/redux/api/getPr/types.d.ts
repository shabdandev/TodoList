namespace TODO {
  type getResponse = {
    _id: number;
    name: string;
    description: string;
    image: string | file;
  }[];
  type getRequest = void;
}
