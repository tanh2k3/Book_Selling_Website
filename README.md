# Website bán sách

Công nghệ web và dịch vụ trực tuyến

## Thư mục `src`

- **components**: Chứa các thành phần React dùng chung trong toàn bộ ứng dụng, ví dụ như `Header`, `Footer`, `CardItem`, v.v.
- **pages**: Chứa các trang chính của ứng dụng, mỗi trang là một thành phần React riêng biệt, ví dụ như `HomePage`, `LoginPage`, `RegisterPage`. Mỗi trang có thể bao gồm các thành phần con và logic riêng biệt để xử lý các chức năng cụ thể của trang đó. Thư mục này giúp tổ chức mã nguồn theo từng trang, giúp dễ dàng quản lý và mở rộng ứng dụng.
  - **HomePage**: Trang chủ của ứng dụng
  - **LoginPage**: Trang đăng nhập
  - **RegisterPage**: Trang đăng ký
- **assets**: Chứa các tài nguyên tĩnh như hình ảnh, biểu tượng, và các tệp CSS.
- **utils**: Chứa các hàm tiện ích và các tệp hỗ trợ khác có thể được sử dụng trong nhiều phần của ứng dụng.
- **context**: Chứa các tệp giúp quản lý trạng thái toàn cục của ứng dụng, ví dụ như trạng thái của User, cấu hình giao diện App.
- **App.jsx**: Tệp chính của ứng dụng, nơi cấu hình các tuyến đường và thành phần chính.
- **index.jsx**: Điểm vào của ứng dụng, nơi khởi tạo và render ứng dụng React vào DOM.
