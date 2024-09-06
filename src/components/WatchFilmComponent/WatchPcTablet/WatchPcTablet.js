import { useTranslation } from "react-i18next";
import "./WatchPcTablet.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EpisodesComponent from "../../EpisodesComponent/EpisodesComponent";
import DotLoading from "../../LoadingComponent/DotLoading";
import * as UserService from "../../../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { saveHistoryWatch, updateUser } from "../../../redux/UserSlice/UserSlice";
function WatchPcTablet(props) {
  let navigate = useNavigate();
  let { t, i18n } = useTranslation();
  let [data, setData] = useState({});
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  // function
  const redirectOtherEp = async (data) => {
    if (data === "next") {
      let ep = Number(props?.epInfo?.name.split(" ")[1]) + 1;
      let episodes = ep > 10 ? ep : `0${ep}`;
      navigate(`/xem-phim/${props?.filmInfo?.slug}/tap-${episodes}`);
    }
    if (data === "prev") {
      let ep = Number(props?.epInfo?.name.split(" ")[1]) - 1;
      let episodes = ep > 10 ? ep : `0${ep}`;
      navigate(`/xem-phim/${props?.filmInfo?.slug}/tap-${episodes}`);
    }
  };
  const activeEp = () => {
    let ep = props?.epInfo && Number(props?.epInfo?.name.split(" ")[1]);
    let epF = props?.epInfo && props?.epInfo?.slug;

    let listButtons = document.querySelectorAll(`.btn_episode`);
    listButtons.forEach((button) => {
      if (Number(button.textContent) === ep || button.textContent === epF) {
        button.classList.add("button_film_active");
      } else {
        button.classList.remove("button_film_active");
      }
    });
  };

  useEffect(() => {
    if (props?.filmInfo && props?.epInfo) {
      setData(props);
    }
    if (data?.filmInfo && data?.filmInfo?.slug && data?.episodes?.length > 0) {
      activeEp();
    }
  }, [props, data]);

  useEffect(() => {
    if (user && user?.id) {
      if (data?.filmInfo && data?.filmInfo?.slug) {
        saveHistory();
      }
    }
  }, [data]);

  const saveHistory = async () => {
    let ep = data?.epInfo?.slug?.split("-")[1];

    let dataFilm = {
      slug: data?.filmInfo?.slug,
      filmName: data?.filmInfo?.name,
      filmName_origin: data?.filmInfo?.origin_name,
      poster_url: data?.filmInfo?.poster_url,
      thumb_url: data?.filmInfo?.thumb_url,
      filmEp: Number(ep),
      access_token: user?.access_token,
    };
    if (dataFilm.slug !== "") {
      let res = await UserService.saveFilm({ id: user?.id, access_token: user?.access_token, dataFilm });
      if (res && res?.status === "OK") {
        dispatch(saveHistoryWatch({ dataFilm: dataFilm }));
        // dispatch(updateUser({ ...res?.user, id: res?.user?._id }));
      }
    }
  };

  return (
    <div className="watch-pc-tablet_container">
      <div className="container">
        <div className="row">
          <div className="name-episode_wrapper col col-12">
            {data?.filmInfo && data?.epInfo && data?.filmInfo?.name && data?.epInfo?.name ? (
              <>
                <div className="film_name">
                  <i className="fa-solid fa-film"></i> &nbsp;
                  {i18n.language === "en" ? data?.filmInfo?.origin_name : data?.filmInfo?.name}
                </div>
                <div className="film_episode">
                  {t("watching")}
                  {data?.epInfo && data?.epInfo?.name && data?.epInfo?.name.split(" ")?.length > 1
                    ? ` ${t("episode")} ${data?.epInfo?.name.split(" ")[1]}`
                    : ` ${t("episode")} ${data?.epInfo?.name}`}
                </div>
              </>
            ) : (
              <DotLoading />
            )}
          </div>
          <div className="episode_wrapper col col-12">
            {data?.epInfo && data?.epInfo?.name ? (
              ` ${t("episode")} ${
                (data?.epInfo && data?.epInfo?.name && data?.epInfo?.name.split(" ")[1]) || data?.epInfo?.name
              }`
            ) : (
              <DotLoading />
            )}
          </div>
          <div className="film-watching_wrapper col col-12">
            {data && data?.epInfo && data?.epInfo?.link_embed ? (
              <iframe
                className="film_video"
                title={data?.filmInfo?.origin_name}
                src={data && data?.epInfo?.link_embed}
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
            ) : (
              <div className="film_video">
                <DotLoading />
              </div>
            )}
          </div>
          <div className="film-buttons_wrapper col col-12">
            <button
              disabled={props?.epInfo && Number(props?.epInfo?.name.split(" ")[1]) <= 1}
              // disabled={false}
              onClick={() => redirectOtherEp("prev")}
              type="button"
              className="btn film_button btn_prev_ep"
            >
              <i className="fa-solid fa-angle-left"></i> {t("prevEp")}
            </button>
            <button
              disabled={props?.epInfo && Number(props?.epInfo?.name.split(" ")[1]) === props?.episodes?.length}
              onClick={() => redirectOtherEp("next")}
              type="button"
              className="btn film_button btn_next_ep"
            >
              {t("nextEp")} <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <div className="film-episodes_wrapper col col-12">
            {data?.filmInfo && data?.filmInfo?.slug && data?.episodes?.length > 0 ? (
              <EpisodesComponent slug={data?.filmInfo.slug} episodes={data?.episodes} />
            ) : (
              <DotLoading />
            )}
            {/* */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchPcTablet;
