import { DemoWebsiteItem } from "./demo-website-item";
import { HomeSectionTitle } from "@/components/home-section-title";
import languageSchoolImage from "./images/language-school/main.png";
import hairdresserImage from "./images/hairdresser/main.png";
import restaurantImage from "./images/restaurant/main.png";
import { getDictionary } from "@/internationalization/get-dictionary";
import { Locale } from "@/internationalization/i18n-config";

export async function DemoWebsites({ lang }: { lang: Locale }) {
  const {
    demoWebsites: dictionary,
    demoWebsitesItem: demoWebsitesItemDictionary,
  } = await getDictionary(lang);
  return (
    <section id="demos" className="flex flex-col items-center gap-y-28">
      <HomeSectionTitle>{dictionary.DemoWebsites}</HomeSectionTitle>
      <p className="mx-3 rounded bg-primary/20 p-5 py-8 text-center text-2xl text-primary dark:bg-primary-dark-theme/20 dark:text-primary-dark-theme">
        {dictionary.youCanSeeBelowSomeOfOurCreations}
      </p>
      <ul className="flex flex-col gap-y-32 lg:gap-x-3 xl:flex-row">
        {demoWebsites.map(({ name, imgURL }, index) => (
          <DemoWebsiteItem
            key={index}
            name={name[lang]}
            imgURL={imgURL}
            dictionary={demoWebsitesItemDictionary}
          />
        ))}
      </ul>
    </section>
  );
}

const demoWebsites = [
  { name: { en: "Restaurant", jp: "レストラン" }, imgURL: restaurantImage },
  { name: { en: "Hair Salon", jp: "美容院" }, imgURL: hairdresserImage },
  {
    name: { en: "Online Language School", jp: "オンライン語学学校" },
    imgURL: languageSchoolImage,
  },
];
