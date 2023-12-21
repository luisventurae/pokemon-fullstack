import ResponsePackInterface from "../../app/common/domain/interface/ResponsePack.interface";

export const successPag = (
  results: any,
  total: number,
  nextPage: string | null,
  previousPage: string | null
): ResponsePackInterface => {
  total = total ?? 0;
  nextPage = nextPage ?? null;
  previousPage = previousPage ?? null;
  return {
    count: total,
    next: nextPage,
    previous: previousPage,
    results: results,
  };
};
