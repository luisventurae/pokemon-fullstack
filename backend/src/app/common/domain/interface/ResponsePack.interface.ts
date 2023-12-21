export default interface ResponsePackInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: any;
}
