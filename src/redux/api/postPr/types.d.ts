namespace TODO {
  type postResponse = {
    _id: number;
    name: string;
    description: string;
    image: string;
  };
  type postRequest = {
    name: string;
    description: string;
    image: string;
  };
}
