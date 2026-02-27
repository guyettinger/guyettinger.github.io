import { PageLayout } from '@/blocks/PageLayout';
import { Gainesville } from '@/blocks/Resume/ResumeSections/InmanPerkCoffee/Gainesville/Gainesville';
import { InmanPark } from '@/blocks/Resume/ResumeSections/InmanPerkCoffee/InmanPark/InmanPark';
import { ResumeSection } from '@/components/ResumeSection';

const Page = () => {
  return (
    <PageLayout>
      <h1>Inman Perk Coffee</h1>
      <ResumeSection
        role="Co-Owner"
        startDate="Jan 2005"
        endDate="Nov 2016"
        achievements={[
          'Successfully managed multiple coffee shop locations with a strong focus on community engagement.',
          'Crafted the brand\'s website and marketing materials, while establishing a rotating art gallery program.',
          'Achieved recognition as one of the Top 10 Coffee Shops in Atlanta across CitySearch, Yelp, and TripAdvisor.',
          'Received the ASID Bronze Design Excellence Award for interior design.',
          'Consulted with secondary education institutions to develop coffee-related educational programs.',
        ]}
        tags={[
          'Entrepreneurship',
          'Brand Design',
          'Web',
          'Marketing',
          'Community',
          'ASID Award',
        ]}
      />
      <InmanPark />
      <Gainesville />
    </PageLayout>
  );
};

export default Page;