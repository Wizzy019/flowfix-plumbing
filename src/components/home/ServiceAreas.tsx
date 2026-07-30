import OntarioMap from "../../assets/images/ontario_map.jpg";
import { SectionDesc } from "../common/SectionDesc";
import { SectionTitle } from "../common/SectionTitle";
import { serviceAreas } from "../../data/serviceAreas";
import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  return (
    <section
      className="mb-6 py-4 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${OntarioMap}) ` }}
    >
      <SectionTitle title="SERVICE AREAS" />
      <div className={`w-full relative flex flex-col md:flex-row`}>
        <div className="md:min-w-1/3 mx-6 mb-4">
          <SectionDesc
            title1="Proudly Serving"
            title2="Communities Across Ontario"
          />
          <p className="mt-4 text-sm text-text-light">
            We provide plumbing service thoughout Ontario and sorrounding areas.
          </p>
        </div>

        <div className="">
          <div className="ml-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <div
                key={area.id}
                className="w-36 bg-surface-2 p-2 flex items-center gap-3 cursor-pointer"
              >
                <MapPin size={20} className="text-primary" />
                <span className="text-sm text-text">{area.city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
