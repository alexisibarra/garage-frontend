interface IIdd {
  id: string | number;
}

export interface IObjectById<T> {
  [id: string]: T;
}

type TGetObjectByIdFromArray = <T extends IIdd>(someArray: T[]) => IObjectById<T>;

export const getObjectByIdFromArray: TGetObjectByIdFromArray = <T extends IIdd>(someArray: T[]) =>
  someArray.reduce(
    (accElements: IObjectById<T>, element: T) => ({
      ...accElements,
      [element.id]: element
    }),
    {}
  );
