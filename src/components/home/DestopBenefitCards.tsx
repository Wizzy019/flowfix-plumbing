import { benefits } from "../../data/benefits";

export default function DesktopBenefitsCard() {
  return (
    <div className="hidden md:grid grid-cols-4 bg-white rounded-3xl shadow-xl overflow-hidden">
      {benefits.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              flex
              items-center
              gap-4
              p-8
              border-r
              last:border-r-0
            "
          >
            <Icon size={34} className="text-primary shrink-0" />

            <div>
              <h3 className="font-semibold leading-tight">{item.title}</h3>

              <p className="text-muted-foreground text-sm">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
