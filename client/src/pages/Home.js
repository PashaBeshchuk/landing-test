import React, { useState } from 'react'
import Article from '../components/ Article/ Article'
import Breadcumbs from '../components/Breadcumbs/Breadcumbs'
import ContetnWrap from '../components/ContetnWrap/ContetnWrap'
import { Divider } from '../components/Divider/Divider'
import Footer from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import NewLable from '../components/NewLable/NewLable'
import Search from '../components/Search/Search'
import Skeleton from '../components/Skeleton/Skeleton'
import TryFree from '../components/TryFree/TryFree'
import { articles}  from '../utils/articles'

function chunkArray(arr, columns = 2, minPerColumn = 3) {
  if (!arr || arr.length === 0) return Array.from({ length: columns }, () => []);

  const result = [];
  const total = arr.length;

 
  let baseSize = Math.floor(total / columns);

  let actualColumns = columns;
  if (baseSize < minPerColumn) {
    actualColumns = Math.floor(total / minPerColumn) || 1;
    baseSize = Math.floor(total / actualColumns);
  }

  let start = 0;
  for (let i = 0; i < actualColumns; i++) {
    let end = start + baseSize;
    if (i === actualColumns - 1) {
      end = total;
    }
    result.push(arr.slice(start, end));
    start = end;
  }

  // Если нужно ровно columns массивов, добавляем пустые
  while (result.length < columns) {
    result.push([]);
  }

  return result;
}

const Home = () => {
  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const lowerQuery = query.toLowerCase();
    return (
      article.title.toLowerCase().includes(lowerQuery) ||
      article.description.toLowerCase().includes(lowerQuery)
    );
  });
 
  const groupedArticles = filteredArticles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {});

  const half = Math.ceil(groupedArticles['Interesting'].length / 2);
  const chunks = chunkArray(groupedArticles['Interesting'], half);

  return (
    <div className=''>
      <Header/>
      <ContetnWrap>
        <Breadcumbs/>
        <Search setQuery={setQuery}/>
        {!!groupedArticles['New']?.length && (<NewLable/>)}
        {groupedArticles['New']?.map(e=>(
          <Article key={e.id} title={e.title} data={e.date} text={e.description} img={e.image} isNew/>
        ))}
        {!!groupedArticles['Top of the Day']?.length && (
          <>
            <Divider/>
            <div className='topic'>Top of the day</div>
          </>
        )}
       
        <div className='cards-container'>
          {groupedArticles['Top of the Day']?.map(e=>(
            <Article key={e.id} title={e.title} data={e.date} text={e.description} img={e.image}/>
          ))}
        </div>
        {!!groupedArticles['Interesting'].length && (
          <>
           <Divider/>
          <div className='topic'>Interesting</div>
          </>
        )}
        
        <div className='cards-container three-per-row'>
        {chunks[0]?.map(e=>(
          <Article key={e.id} title={e.title} data={e.date} text={e.description} img={e.image}/>
        ))}
        </div>
        <TryFree/>
        <div className='cards-container three-per-row'>
        {chunks[1]?.map(e=>(
          <Article key={e.id} title={e.title} data={e.date} text={e.description} img={e.image}/>
        ))}
        </div>
        <div className='cards-container three-per-row'>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
        </div>
        <Footer/>
      </ContetnWrap>
    </div>
  )
}

export default Home
