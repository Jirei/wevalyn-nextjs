import ServicesIllustration from "./services-illustration";
import ServicesList from "./services-list";

export function Services() {
  return (
    <section
      id="services"
      className="mt-14 flex flex-col items-center gap-y-20 md:gap-y-36"
    >
      <h2 className="text-primary dark:text-primary-dark-theme text-3xl">Services</h2>
      <ServicesIllustration />
      <ServicesList />
    </section>
  );
}
