import i18next from "i18next";
// sử dụng thư viện i18next lưu và chuyển đổi ngôn ngữ 
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "vi", //fall back language 
  lng: "vi", // language
  interpolation: {
    escapeValue: false,
  }, // tham sô custom
  resources: {
    vi: {
      translation: {
        series: "Phim Bộ",
        movie: "Phim lẻ",
        cartoon: "Hoạt hình",
        genre: "Thể loại",
        search: "Tìm kiếm...",
        menu: "Danh mục",
        seeMore: "Xem thêm",

        newFilm: "Phim mới cập nhật",
        newFilmSeries: "Phim bộ mới cập nhật",
        newMovieFilm: "Phim lẻ mới cập nhật",

        // intro
        intro:
          "Xin chào, Tôi là Đồng Hữu Trọng (Satomi Jin), Một lập trình viên Front-end đến từ Thành Phố Hồ Chí Minh. Tôi sử dụng ReactJS cho Front-end và NodeJS cho Back-end.",
        contactMe: "Liên hệ",
        // thông tin phim
        originName: "Tên gốc",
        filmCategory: "Thể loại",
        filmStatus: "Trạng thái",
        yearRelease: "Phát hành",
        time: "Thời lượng",
        episode: "Tập",
        listEp: "Danh sách tập",
        filmDesc: "Nội dung",
        // filmStatus
        filmCompleted: "Hoàn thành",
        filmGoingOn: "Đang cập nhật",
        // xem phim
        watching: "Đang xem",
        prevEp: "Tập trước",
        nextEp: "Tập sau",
        // Một số chúc năng khác
        noData: "Không có dữ liệu",
        // Danh sách phim
        listSeries: "Danh sách phim bộ",
        listMovie: "Danh sách phim lẻ",
        listAnime: "Danh sách anime",
        // Đăng nhập
        login: "Đăng nhập",
        signUpNow: "Đăng ký ngay",
        username: "Tên đăng nhập",
        password: "Mật khẩu",
        noAccount: "Tạo tài khoản cinema mới?",
        // user option
        profile: "Thông tin cá nhân",
        history: "Lịch sử xem",
        logout: "Đăng xuất",
        // profile
      
        displayName: "Tên người dùng",
        phoneNumber: "Số điện thoại",
        address: "Địa chỉ",
        save: "Cập nhật",
        recentlyView: "Xem gần đây",
        loginSuccess: "Đăng nhập thành công!",
        saveSuccess: "Cập nhật thành công!",
        saveError: "Cập nhật thông tin thất bại!",
        signUp: "Đăng ký",
        signUpSuccess: "Đăng ký thành công!",
        homePage: "Trang chủ",
        manage: "Quản lý",
        signUpError: "Đăng ký thất bại, thử lại sau!",
        userManage: "Quản lý người dùng",
        role: "Quản trị",
        action: "Hành động",
        user: "Người dùng",
        close: "Đóng",
        userRole: "Quyền",
        manage: "Quản lý",

        // Đổi mật khẩu
        changePass: "Đổi mật khẩu",
        currPass: "Mật khẩu hiện tại",
        newPass: "Mật khẩu mới",
        confirmNew: "Nhập lại mật khẩu",
        back: "Trở lại",
      },
    },
    en: {
      translation: {
        series: "Series Movie",
        movie: "Movie",
        cartoon: "Anime",
        genre: "Movie Genre",
        search: "Search...",
        menu: "Menu",
        seeMore: "See more",
        newFilm: "Newly updated movies",
        newFilmSeries: "Newly updated series film",
        newMovieFilm: "Newly updated movie film",
        // intro
        intro:
          "Hello, I'm Đồng Hữu Trọng (Satomi Jin) a Front-end developer from Ho Chi Minh City. Specializing in Frontend with ReactJS and Backend with NodeJS.",
        contactMe: "Contact Me",
        // film information
        originName: "Origin name",
        filmCategory: "Category",
        filmStatus: "Status",
        yearRelease: "Year of release",
        time: "Time",
        episode: "Episode",
        listEp: "Episodes",
        filmDesc: "Description",
        // film status
        filmCompleted: "Completed",
        filmGoingOn: "Updating",

        // watch film
        watching: "Watching",
        prevEp: "Prev episode",
        nextEp: "Next episode",
        // More option
        noData: "No data",

        // list film
        listSeries: "List series film",
        listMovie: "List Movie film",
        listAnime: "List Anime film",

        // Đăng nhập
        login: "Sign In",
        signUpNow: "Create an account",
        username: "User name",
        password: "Password",
        noAccount: "New to cinema?",
        // user option
        profile: "My information",
        history: "History",
        logout: "Log out",
        // profile

        displayName: "Display name",
        phoneNumber: "Phone number",
        address: "Address",
        save: "Save",
        recentlyView: "Recently viewed",
        loginSuccess: "Login success!",
        saveSuccess: "Saving success!",
        saveError: "Saving Error, try later!",
        signUp: "Sign Up",
        signUpSuccess: "Sign up success!",
        homePage: "Home page",
        signUpError: "Sign up fail, try late!",
        manage: "Manage",
        userManage: "User management",
        role: "Admin",
        action: "Action",
        user: "User",
        userRole: "Role",
        close: "Close",
        manage: "Management",

        // change password
        changePass: "Change password",
        currPass: "Current password",
        newPass: "New password",
        confirmNew: "Confirm new password",
        back: "Back",
      },
    },
  },
});

export default i18next;
