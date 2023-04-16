import { Inter } from "next/font/google";
import Image from "next/image";
import React, { use } from "react";

interface News {
  headline: string;
  image_url: string;
  paragraphs: string;
}

const inter = Inter({ subsets: ["latin"] });

const getNews = async () => {
  return fetch("https://sportsnews-seven.vercel.app/api/news", {
    next: { revalidate: 10 },
  }).then((res) => res.json());
};

function News() {
  const news: News[] = use(getNews());

  return (
    <section className={inter.className}>
      <div className="columns-4 gap-9 mt-6">
        {news.map((news, index) => (
          <article
            key={index}
            className="rounded-md shadow-xs mb-4 shadow-sm"
          >
            <div className="flex flex-col gap-2">
              <Image
                priority
                src={news.image_url}
                width={75}
                height={75}
                alt="news image"
                className="rounded-t-md w-auto h-auto aspect-auto"
              />
              <div className='px-3 py-4'>
                <div className="text-lg font-semibold pb-4 hover:cursor-pointer hover:underline hover:underline-offset-8 decoration-sky-500">
                  {news.headline}
                </div>
                <p className="text-sm pb-2 leading-5">{news.paragraphs[0]}</p>
                <p className="text-sm pb-2 leading-5">{news.paragraphs[1]}</p>
                <p className="text-sm pb-2 leading-5">{news.paragraphs[2]}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default News;
