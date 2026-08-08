type Props = {
  title1: string;
  title2?: string;
};

export const SectionDesc = ({ title1, title2 }: Props) => {
  return (
    <div>
      <h2 className="font-bold text-text text-3xl mb-2">
        {title1}
        <br />
        {title2}
      </h2>
      <div className="md:hidden w-16 mt-4 border-b-4 border-primary"></div>
    </div>
  );
};

export const Desc = ({ text }: { text: string }) => (
  <h2 className="text-3xl text-text font-bold">{text}</h2>
);
