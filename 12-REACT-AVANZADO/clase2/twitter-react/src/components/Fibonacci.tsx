// import { useMemo } from "react";

function fibonacci(value: number): number {
  if (value <= 1) return value;
  return fibonacci(value - 1) + fibonacci(value - 2);
}

export default function Fibonacci({
  value,
  someObject,
  someFunction,
}: {
  value: number;
  someObject: object;
  someFunction: () => void;
}) {
  //   const result = useMemo(() => fibonacci(value), [value]);
  const result = fibonacci(value);

  console.log("fibonaci", value, someObject);
  return (
    <div onClick={someFunction}>
      <code>
        Fibonaci({value}) = {result}
      </code>
    </div>
  );
}
