import { Phone } from "lucide-react";
import { Button } from "../common/Button";
import Container from "../common/Container";
import EmergencyIcon from "../common/EmergencyIcon";

export const EmergencyCTA = () => {
  return (
    <Container
      vatiant="primary"
      className="w-full flex flex-col md:flex-row items-center justify-between mx-auto rounded-t-xl"
      children={
        <>
          <EmergencyIcon />
          <div className="text-center text-white">
            <h2 className="font-bold text-3xl mb-2 md:px-auto">
              Need a Plumber Right Now?
            </h2>
            <span className="text-text-light-2">
              We're available 24/7 to handle any plumbing emergency
            </span>
          </div>
          <div className="max-w-full md:w-1/2 my-4 flex flex-col md:flex-row gap-3">
            <Button
              icon={Phone}
              text="+12347890"
              className="w-full bg-surface-2 text-primary p-4 text-xl font-bold"
            />
            <Button
              text="Get Free Estimate"
              className="w-full border-surface-2 text-white p-4 text-xl font-bold"
            />
          </div>
        </>
      }
    />
  );
};
