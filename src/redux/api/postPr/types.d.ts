namespace TODO {
  type postResponse = {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  type postRequest = {
    title: string;
    description: string;
    image: string;
  };
}
