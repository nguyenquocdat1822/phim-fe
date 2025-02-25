import { useEffect, useState } from "react";
import "./FilmMovieComponent.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Pagination from "rc-pagination";
import FilmItemComponent from "../../FilmItemComponent/FilmItemComponent";
import DotLoading from "../../LoadingComponent/DotLoading";
function FilmMovieComponent(props) {
  let [listFilm, setListFilm] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const totalItems = props?.pagination?.totalItems; // Tổng số mục
  const [current, setCurrent] = useState(props?.pageCurrent);
  let { t } = useTranslation();
  let navigate = useNavigate();
  useEffect(() => {
    if (props?.data && props?.data.length > 0) {
      setListFilm([...props?.data]);
    }
    setCurrent(props?.pageCurrent);
  }, [props]);
  const onChange = (page, pageSize) => {
    setCurrent(page);
    setPageSize(10);
    navigate(`/phim-le/trang/${page}`);
  };
  return (
    <div className="film-movie_container">
      <div className="container">
        <div className="row">
          <div className="title col col-12">{t("listMovie")}</div>
          {listFilm && listFilm?.length > 0 ? (
            <>
              <div className="list-film col col-12">
                {listFilm &&
                  listFilm?.length > 0 &&
                  listFilm.map((item, index) => {
                    return <FilmItemComponent dataFilm={item} key={index} />;
                  })}
              </div>
              <div className="pagination col col-12">
                <Pagination
                  onChange={onChange}
                  current={current}
                  total={totalItems}
                  pageSize={pageSize}
                  pageSizeOptions={["10", "20", "30"]}
                />
              </div>
            </>
          ) : (
            <div className="loading-component">
              <DotLoading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilmMovieComponent;
