type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return <div className="font-extrabold text-primary mb-5">{title}</div>;
};
