type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return <h2 className="font-extrabold text-primary mx-6">{title}</h2>;
};
