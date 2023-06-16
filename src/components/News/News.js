import React, { useContext, useEffect, useState } from "react";
import "./News.css";
import NavBar from "../NavBar/NavBar";
import NewsCard from "../NewsCard/NewsCard";
import { newsContext } from "../../contexts/NewsContext";
import { CircularProgress } from "@material-ui/core";
//import { CircularProgress, makeStyles } from "@material-ui/core";
//import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

// const useStyles = makeStyles((theme) => ({
//   pagination: {
//     color: "#c4ab9d",
//   },
// }));

const News = () => {
  const { language } = useContext(LanguageContext);

  const { getNews, news, totalPages } = useContext(newsContext);
  const history = useHistory();
  //const [page, setPage] = useState(getPage());
  //const classes = useStyles();

  useEffect(() => {
    getNews();
  }, []);

  // function getPage() {
  //   const search = new URLSearchParams(history.location.search);
  //   return search.get("page") ? search.get("page") : 1;
  // }

  // function handlePage(event, page) {
  //   const search = new URLSearchParams(history.location.search);
  //   search.set("page", page);
  //   history.push(`${history.location.pathname}?${search.toString()}`);
  //   getNews();
  //   setPage(page);
  // }

  return (
    <>
      {/* <NavBar /> */}
  
      <div className="news__container">
      {language === 'ru' ? <span className="news__title">НОВОСТИ</span> : <span className="news__title">NEWS</span>}
        
        {news && news.news ? (
          <>
            {news.news
              .sort((a, b) => {
                const dateA = new Date(
                  parseInt(a.date.split("/")[2]), // год
                  parseInt(a.date.split("/")[1]) - 1, // месяц (нумерация месяцев начинается с 0)
                  parseInt(a.date.split("/")[0]) // день
                );
                const dateB = new Date(
                  parseInt(b.date.split("/")[2]), // год
                  parseInt(b.date.split("/")[1]) - 1, // месяц (нумерация месяцев начинается с 0)
                  parseInt(b.date.split("/")[0]) // день
                );
  
                return dateB - dateA;
              })
              .map((elem) => (
                <NewsCard
                  key={elem.news_id}
                  image={elem.bgImage}
                  id={elem.news_id}
                  title={elem.title}
                  description={elem.description.slice(0, 300) + "..."}
                  date={elem.date}
                />
              ))}
  
            {/* <Pagination
              className={classes.pagination}
              page={+page}
              onChange={handlePage}
              count={totalPages}
            /> */}
          </>
        ) : (
          <div className="progress__container">
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
  
};

export default News;
