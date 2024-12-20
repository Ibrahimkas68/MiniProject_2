import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

const newsData: NewsCardProps[] = [
  {
    image: 'https://www.mapnews.ma/fr/sites/default/files/styles/corps_article_image/public/RAM-1_10.jpg?itok=ovSOqqYB',
    title: 'la ram reprend les liaisons directes sur le marche bresilien',
    description: 'la ram reprend les liaisons directes sur le marche bresilien.',
    date: 'Dec 10, 2024',
    url: '/news/project-update',
  },
  {
    image: 'https://laquotidienne.ma/uploads/actualites/61bb70eaf4082_rammaroc.jpeg',
    title: 'RAM est élue meilleure compagnie aérienne en Afrique',
    description: 'We are thrilled to announce our new partnership with a leading tech company.',
    date: 'Dec 8, 2024',
    url: '/news/partnership',
  },
  {
    image: 'https://www.h24info.ma/wp-content/uploads/2022/12/Maroc-Espagne-Tout-sur-le-nouveau-programme-de-vols-et-le-prix-fixe-par-la-RAM.jpg',
    title: 'RAM offre des facilités de déplacement',
    description: 'A big thank you to everyone for helping us reach this incredible milestone.',
    date: 'Dec 6, 2024',
    url: '/news/milestone',
  },
  {
    image: 'https://www.mapnews.ma/fr/sites/default/files/styles/corps_article_image/public/RAM-1_10.jpg?itok=ovSOqqYB',
    title: 'Upcoming Event You Shouldn’t Miss',
    description: 'Join us for an exciting event where we unveil our next big thing.',
    date: 'Dec 5, 2024',
    url: '/news/upcoming-event',
  },
];

const NewsCard: React.FC<NewsCardProps> = ({ image, title, description, date, url }) => {
    return (
      <div className="flex flex-col sm:flex-row bg-gray-800 shadow-md rounded-[25px] overflow-hidden hover:scale-105 transition-transform w-[300px] h-[450px] sm:w-[600px] sm:h-[250px]">
        <img src={image} alt={title} className="w-[130px] h-[150px] sm:w-[250px] sm:h-[200px] object-cover mt-[25px] ml-[22px] rounded-lg" />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <Calendar className="w-4 h-4 mr-2" /> {/* Adjusted Calendar icon size */}
              <span>{date}</span> {/* Date in a span tag */}
            </div>
            <a
              href={url}
              className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition-colors"
            >
              {title}
            </a>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          </div>
          <div className="mt-4">
            <a
              href={url}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-md hover:bg-blue-600 transition-all"
            >
              <ExternalLink className="w-4 h-4 mr-2 " />
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  };
  
const LatestNews: React.FC = () => {
  return (
    <section className="py-12 text-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
              date={news.date}
              url={news.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
