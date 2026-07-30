type Props = {
  title: string;
};

export const SectionTitle = ({ title }: Props) => {
  return <h1 className="font-extrabold text-primary mb-5 mx-6">{title}</h1>;
};
