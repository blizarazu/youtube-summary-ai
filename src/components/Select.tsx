import { Children, ReactElement, ReactNode } from "react";

export function Select({ children, className, ...rest }: SelectProps) {
  const label = Children.toArray(children).find(
    (child) => (child as any).type === SelectLabel
  ) as ReactElement<SelectLabelProps>;
  const options = Children.toArray(children).find(
    (child) => (child as any).type === SelectOptions
  ) as ReactElement<SelectOptionsProps>;
  return (
    <div className={className}>
      {label}
      <select
        {...rest}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.props.children}
      </select>
    </div>
  );
}

export function SelectLabel({ children, ...rest }: SelectLabelProps) {
  return (
    <label
      {...rest}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
    >
      {children}
    </label>
  );
}

export function SelectOptions({ children }: SelectOptionsProps) {
  Children.map(children, (child) => {
    if (!(child && (child as any).type === "option"))
      throw new Error("Options can only contain <option> elements");
  });
  return <>{children}</>;
}

type SelectProps = {
  [key: string]: unknown;
  className?: string;
  children:
    | ReactElement<SelectLabelProps | SelectOptionsProps>
    | Array<ReactElement<SelectLabelProps | SelectOptionsProps>>;
};

type SelectLabelProps = {
  children: string;
  [key: string]: unknown;
};

type SelectOptionsProps = {
  children: ReactNode;
};
