import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Link } from "react-router-dom";
import { newsContext } from "../../contexts/NewsContext";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

const useStyles = makeStyles({
  root: {
    maxWidth: "95%",
    marginTop: "5vh",
    marginBottom: "5vh",
    ["@media (max-width:800px)"]: {
      width: "95%",
    },
  },
  media: {
    height: "35vh",
    ["@media (max-width:800px)"]: {
      width: "100%",
    },
  },
  cardTitle: {
    ["@media (max-width:700px)"]: {
      fontSize: "15px",
    },
  },
});

export default function NewsCard(props) {
  const { language } = useContext(LanguageContext);
  const classes = useStyles();
  const { addToFavourites, checkNewsInFavourites } = useContext(newsContext);

  const translateTitle = (title) => {
    const translations = {
      'Новое оборудование для Специальной школы-интерната: Рельефные алфавиты Брайля для слепых детей': 'New equipment for Special Boarding School: Braille Relief Alphabets for blind children',
      'Преодоление последствий пандемии с ЮНИСЕФ и ПРООН в Кыргызской Республике': 'Overcoming the Consequences of the Pandemic with UNICEF and UNDP in the Kyrgyz Republic',
      'Переданы рельефные алфавиты Брайля в специализированную общеобразовательную школу для слепых и слабовидящих детей г. Бишкек.': 'These alphabets were produced by FabLab Bishkek, and the financial cost of the handouts was covered by SIFO (Seoul International Friendship Organization)',
      'Проект ОФ Технолэнд «Вовлечение детей с нарушением слуха к системам цифрового обучения» - победитель конкурса в рамках программы «Вызов открытым инновациям Inno4Kg», инициированный ПРООН для преодоления последствий пандемии.': "Technoland PF's project 'Engaging Hearing Impaired Children in Digital Learning Systems' is the winner of the UNDP Challenge to Open Innovation Inno4Kg program to overcome the effects of the pandemic.",
    };

    return translations[title] || title;
  };

  const translateDescription = (description) => {
    const translations = {
      'Специальной общеобразовательной школе-интернат для слепых и слабовидящих детей , г. Бишкек переданы грифели для письма по Брайлю, а также рельефные русские, кыргызские и английские алфавиты Брайля, которые разработаны совместно с FabLab Bishkek и организацией SIFO (Сеульская международная организаци...': 'A special general education boarding school for blind and visually impaired children in Bishkek received Braille slates, as well as Russian, Kyrgyz and English Braille alphabets in relief, which were developed together with FabLab Bishkek and SIFO (Seoul International Friendship Organization)',
      'С началом этого года для преодоления последствий пандемии ЮНИСЕФ и ПРООН в Кыргызской Республике оказали поддержку для разработки и запуску двуязычного мобильного приложения «Дилгир» для глухих и слабослышащих детей. Приложение является дополнением к учебнику “Дилгир-1”, над созданием которого рабо...': 'Since the beginning of this year, UNICEF and UNDP in the Kyrgyz Republic have provided support for the development and launch of a bilingual mobile application "Dilgir" for deaf and hard of hearing children to overcome the consequences of the pandemic. The application serves as a supplement to the "Dilgir-1" textbook, which is being developed by the methodological council of the Special General Education Boarding School for Deaf Children in collaboration with the Technoland Public Foundation. The textbook is being created...',
      'Данные алфавиты изготовлены в лаборатории FabLab Bishkek, финансовые расходы на раздаточные материалы покрыты организацией SIFO (Сеульская международная организация дружбы)...': 'These alphabets were made in the FabLab Bishkek, the financial cost of the handouts was covered by SIFO (Seoul International Friendship Organization). Kubatbekov Kanat and Saadabaeva Kamila, 4th year student of "Telematics" direction, mentor - engineer of FabLab Bishkek Azisbek uulu Timur, took active part in development and production of materials.',
      'В апреле этого года Программа Развития ООН в Кыргызстане объявил конкурс «Вызов Открытым Инновациям — Inno4Kg» для преодоления последствий пандемии. Победитель конкурса  - проект «Вовлечение детей с нарушением слуха к системам цифрового обучения», инициированный общественным фондом «Технолэнд» в тес... ' : 'In April of this year, the United Nations Development Program in Kyrgyzstan announced the "Open Innovation Challenge - Inno4Kg" competition to overcome the consequences of the pandemic. The winner of the contest is the project "Involvement of children with hearing impairment in digital learning systems", initiated by the public foundation "Technoland" in close cooperation with...',
    };

    const sanitizedDescription = decodeURIComponent(description.trim().replace(/\s+/g, ' '));

    return translations[sanitizedDescription] || description;
  };
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.cardTitle}
            gutterBottom
            variant="h6"
            component="h4"
          >
            {language === 'ru' ? props.title : translateTitle(props.title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {language === 'ru' ? props.description : translateDescription(props.description)}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions style={{ justifyContent: "space-between" }}>
        <div>
          <Link to={`/news-details/${props.id}`}>
            {language === 'ru' ? (
              <Button size="small" style={{ color: "orange" }}>
                Читать подробнее
              </Button>
            ) : (
              <Button size="small" style={{ color: "orange" }}>
                Read more
              </Button>
            )}
          </Link>
          <Button
            onClick={() =>
              addToFavourites({
                news_id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                date: props.date,
              })
            }
            size="small"
            style={{ color: "orange" }}
          >
            <BookmarkIcon
              style={{
                color: checkNewsInFavourites(props.id) ? "green" : "orange",
              }}
            />
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ScheduleIcon style={{ color: "orange", marginRight: "5px" }} />
          <Typography color="textSecondary" component="span">
            {props.date}
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}
