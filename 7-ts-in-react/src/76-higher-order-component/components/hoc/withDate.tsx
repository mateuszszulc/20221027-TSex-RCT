/**
*  W oczekiwaniu na Higher Order Component...
* */
interface WithDateProps {
    date: Date
}

export function withDate<T = WithDateProps>(WrappedComponent: React.ComponentType<T>) {

   const todayIs = new Date();
   const ComponentWithTheme = (props: Omit<T, keyof WithDateProps>) => {

    return <WrappedComponent date={todayIs} {...(props as T)} />;
  };

  return ComponentWithTheme;
}
