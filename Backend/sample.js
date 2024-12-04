const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path to your Product model

// Sample book data
const sampleBooks = [
  {
    imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240720_zDJPi505tp.webp",
    title: "Dẫn dắt một bầy sói hay chăn một đàn cừu",
    author: "Tiffani Bova",
    translator: "Trương Anh Tuấn",
    price: 156000,
    originalPrice: 165000,
    discount: 20, 
    rating: 4.8,
    reviewsCount: 256,
    soldCount: 1500, 
    features: ["Classic text on military strategy", "Insights into leadership and tactics", "Applicable to business and life challenges"],
    similarBooks: [
      { title: "Vuca Quản lý", imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240719_xhX83JqLQZ.jpeg" },
      { title: "Thay đổi từ tâm", imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240713_GFX2LM4nBJ.jpeg" },
      { title: "Chính bắc - Lãnh đạo đích thực", imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240708_pQps3paZPx.png" },
      { title: "Lãnh đạo thực hành", imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240708_KEAKPIlMiQ.jpeg" },
      { title: "Lãnh đạo với lòng trắc ẩn", imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240708_5xaEu4X44P.png" },
      { title: "Trao niềm tin và truyền cảm hứng", imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240708_FQfbJPQ3e3.png" },
      { title: "Lãnh đạo: 6 Chiến lược Gia Kiệt", imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240416_uwkbXbPIZs.jpeg" },
      { title: "21 phẩm chất vàng của nhà lãnh đạo", imgSrc: "https://pos.nvncdn.com/fd5775-40602/ps/20240328_tYK2AZqS3T.jpeg" }
    ],
    sku: "VN12345",
    ageGroup: "Adults",
    supplier: "Ancient Wisdom Publishers",
    publisher: "Nhà xuất bản Dân trí",
    publicationYear: 1910,
    language: "English",
    weight: "250g",
    dimensions: "21 x 14 x 1.5 cm",
    pages: 200,
    binding: "Paperback",
    description: "A comprehensive guide to leadership and business strategies.",
<<<<<<< HEAD
    type: "V" 
=======
    type: "V"
>>>>>>> feature/trinhh
  },
  {
    imgSrc: "https://cdn0.fahasa.com/media/catalog/product/_/2/_2024_-thay_doi_ti_hon_hieu_qua_bat_ngo-tb8-02.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    translator: "Vũ Phi Yên - Trần Như Quỳnh",
<<<<<<< HEAD
    price: 141000,
    originalPrice: 189000,
    discount: 10, 
=======
    price: 170100,
    originalPrice: 189000,
    discount: 10,
>>>>>>> feature/trinhh
    rating: 4.9,
    reviewsCount: 500,
    soldCount: 3000,
    features: ["Proven framework for building habits", "Practical strategies for success", "Popular self-help book"],
    similarBooks: [
      { title: "Sức mạnh của 1%", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/t/t/ttph-s_c-m_nh-c_a-1_-thay-_i-t_ch-c_c-m_i-ng_yb_a-ch_nh.jpg" },
      { title: "Mật ngữ cuộc đời", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/m/a/mat-ngu-cuoc-doi---5.8.jpg" },
      { title: "Sức bật tinh thần", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/s/_/s_c-b_t-tinh-th_n---b_a-1.jpg" },
      { title: "Sức mạng của tiêu cực", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/s/u/suc-manh-cua-su-tieu-cuc-bia-truoc.jpg" },
      { title: "Ngôn ngữ hình thể", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-tr_c_s_c-m_nh-c_a-ng_n-ng_-h_nh-th_.jpg" },
      { title: "Sự chuyển mình kỳ diệu", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/z/5/z5814301122325_404caf61e2388f2a4b1ece9efddd7263.jpg" },
      { title: "Mở khoá tiềm năng", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-tr_c-manifest-th_c-h_nh.jpg" },
      { title: "Siêu tập trung", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935278608202.jpg" }
    ],
    sku: "VN12345",
    ageGroup: "4+",
    supplier: "Motivation Publishers",
    publisher: "Success Books",
    publicationYear: 2019,
    language: "Việt Nam",
    weight: "300g",
    dimensions: "22 x 14 x 2 cm",
    pages: 320,
    binding: "Hardcover",
    description: "Atomic Habits \n- Thay Đổi Tí Hon Hiệu Quả Bất Ngờ (Tái Bản 2023) Wall Street Journal Bestseller,USA Today Bestseller, Publisher's Weekly BestsellerNằm trong Top 20 tựa sách thể loại non-fiction bán chạy và được tìm đọc nhiều nhất của Amazon suốt 40 tuần tính đến tháng 9/2019ột thay đổi tí hon có thể biến đổi cuộc đời bạn không?Hẳn là khó đồng ý với điều đó. Nhưng nếu bạn thay đổi thêm một chút? Một chút nữa? Rồi thêm một chút nữa? Đến một lúc nào đó, bạn phải công nhận rằng cuộc sống của mình đã chuyển biến nhờ vào một thay đổi nhỏ…Và đó chính là sức mạnh của thói quen nguyên tử.",
<<<<<<< HEAD
    type: "V" 
=======
    type: "V"
>>>>>>> feature/trinhh
  },
  {
    imgSrc: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043775662.jpg",
    title: "Giáo trình chuẩn HSK",
    author: "Khương Lệ Bình, Vương Phương, Vương Phong, Lưu Lệ Bình",
    translator: "TS Nguyễn Thị Minh Hồng",
<<<<<<< HEAD
    price: 145000,
    originalPrice: 198000,
    discount: 10, 
=======
    price: 168300,
    originalPrice: 198000,
    discount: 15,
>>>>>>> feature/trinhh
    rating: 4.9,
    reviewsCount: 500,
    soldCount: 7.400,
    features: ["Top 100 sách tiếng Hoa phát triển nhất"],
    similarBooks: [
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_188637_1.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_188634.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043356380_1.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/e/m/emotionalchinese1.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043358568_1.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786045893104.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043775662.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043775679_1.jpg" }
    ],
    sku: "",
    ageGroup: "",
    supplier: "Công ty TNHH Nhân trí Việt",
    publisher: "Nhà xuất bản tổng hợp Thành phố Hồ Chí Minh",
    publicationYear: 2024,
    language: "Việt Nam",
    weight: "345",
    dimensions: "28.5 x 21 x 1 cm",
    pages: 141,
    binding: "Bìa mềm",
    description: "Kết hợp thi cử và giảng dạy: Được biên soạn phù hợp với nội dung, hình thức cũng như các cấp độ của đề thi HSK thật, bộ sách này có thể được sử dụng đồng thời cho cả hai mục đích là giảng dạy tiếng Trung Quốc và luyện thi HSK. • Bố cục chặt chẽ và khoa học: Các điểm ngữ pháp được giải thích cặn kẽ, phần ngữ âm và chữ Hán được trình bày từ đơn giản đến phức tạp theo từng cấp độ",
<<<<<<< HEAD
    type: "V" 
=======
    type: "V"
>>>>>>> feature/trinhh
  },
  {
    imgSrc: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786044777481.jpg",
    title: "38 Bức Thư Rockefeller Viết Cho Con Trai",
    author: "Thanh Hương",
    translator: "NXB Văn Học",
<<<<<<< HEAD
    price: 69000,
    originalPrice: 113000,
    discount: 10, 
=======
    price: 67800,
    originalPrice: 113000,
    discount: 40,
>>>>>>> feature/trinhh
    rating: 4.9,
    reviewsCount: 500,
    soldCount: 3000,
    features: ["Sách kỹ năng sống"],
    similarBooks: [
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/t/h/thao-t_ng-c_m-x_c-_p-_t-v_-_nh-ki_n-bia-1.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/c/h/chien-thang-con-quy-trong-ban-sbooks.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935236416962_2.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043721522_1.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia_giong-bao-lam-nguoi-lon_-nang-vang-lam-tre-tho-1-1.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-1b_-k_p-sinh-t_n-cho-nh_ng-tr_i-tim-nh_y-c_m.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia_12-cach-bien-nguoi-ban-ghet-thanh-dong-minh-1.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/b/i/bia_tim-toi-trong-mot-tinh-cau-khac_infinal.jpg" }
    ],
    sku: "VN9786043775662",
    ageGroup: "",
    supplier: "",
    publisher: "",
    publicationYear: 2023,
    language: "Việt Nam",
    weight: "300g",
    dimensions: "20.5 x 15 x 1.3 cm",
    pages: 268,
    binding: "Bìa Mềm",
    description: "NGƯỜI SỐNG TRÊN ĐỜI, NHƯ THẾ NÀO LÀ THIỆN, LẠI NHƯ THẾ NÀO LÀ ÁC? THẾ NÀO LÀ SỰ THIÊN LỆCH, MÀ THẾ NÀO MỚI LÀ CHÍNH ĐÍNH?",
<<<<<<< HEAD
    type: "V" 
=======
    type: "V"
>>>>>>> feature/trinhh
  },
  {
    imgSrc: "https://cdn0.fahasa.com/media/catalog/product/n/i/ninja-rantaro_bia_tap-41.jpg",
    title: "Ninja Rantaro - Tập 41 (Tái Bản 2024)",
    author: "Soubee Amako",
    translator: "Nguyễn Vân Anh",
    price: 180000,
    originalPrice: 200000,
<<<<<<< HEAD
    discount: 10, 
=======
    discount: 10,
>>>>>>> feature/trinhh
    rating: 4.9,
    reviewsCount: 500,
    soldCount: 3000,
    features: [""],
    similarBooks: [
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/n/i/ninja-rantaro_bia_tap-40.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/n/i/ninja-rantaro_bia_tap-38.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/n/i/ninja-rantaro_bia_tap-10.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/n/i/ninja-rantaro---tap-6.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/6/6/666_satan_-_tap_7_2.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935352601136.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935352602485.jpg" },
      { title: "", imgSrc: "https://cdn0.fahasa.com/media/catalog/product/n/a/naruto---tap-56---tb-2022.jpg" }
    ],
    sku: "VN8935352619278",
    ageGroup: "4+",
    supplier: "NXB Kim Đồng",
    publisher: "NXB Kim Đồng",
    publicationYear: 2024,
    language: "Việt Nam",
    weight: "215g",
    dimensions: "18 x 13 x 1.2 cm",
    pages: 244,
    binding: "Hardcover",
    description: "“Rất vui khi được gặp lại các cháu. Bác đoán vào năm học mới chắc hẳn có nhiều bạn sẽ được bầu làm ban cán sự lớp đúng không? Ban cán sự của trường đào tạo ninja năm học mới này sẽ có nhiều hoạt động rất sôi nổi, các cháu hãy cùng chờ xem nhé! Ninja Rantaro tập này sẽ lấy bối cảnh là “địa ngục”, chắc các cháu cũng từng được nghe kể địa ngục là nơi như thế nào rồi nhỉ. Bác chỉ lấy ví dụ chẳng hạn nếu ai nói dối khi xuống địa ngục sẽ bị kéo mất lưỡi. Nghe sợ ghê ha! Bác dự định sẽ cho nhân vật Diêm Vương xuất hiện, Diêm Vương sẽ được vẽ dựa trên hình mẫu bức tượng trong chùa Gangoji ở Nara nên rất đẹp đấy!”",
<<<<<<< HEAD
    type: "V" 
=======
    type: "V"
>>>>>>> feature/trinhh
  },
  // {
  //   imgSrc: "",
  //   title: "",
  //   author: "",
  //   translator: "",
  //   price: 180000,
  //   originalPrice: 200000,
  //   discount: 10, 
  //   rating: 4.9,
  //   reviewsCount: 500,
  //   soldCount: 3000,
  //   features: [""],
  //   similarBooks: [
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" }
  //   ],
  //   sku: "",
  //   ageGroup: "",
  //   supplier: "",
  //   publisher: "",
  //   publicationYear: 2024,
  //   language: "Việt Nam",
  //   weight: "300g",
  //   dimensions: "22 x 14 x 2 cm",
  //   pages: 320,
  //   binding: "Hardcover",
  //   description: "",
  //   type: "V" 
  // },
  // {
  //   imgSrc: "",
  //   title: "",
  //   author: "",
  //   translator: "",
  //   price: 180000,
  //   originalPrice: 200000,
  //   discount: 10, 
  //   rating: 4.9,
  //   reviewsCount: 500,
  //   soldCount: 3000,
  //   features: [""],
  //   similarBooks: [
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" }
  //   ],
  //   sku: "",
  //   ageGroup: "",
  //   supplier: "",
  //   publisher: "",
  //   publicationYear: 2024,
  //   language: "Việt Nam",
  //   weight: "300g",
  //   dimensions: "22 x 14 x 2 cm",
  //   pages: 320,
  //   binding: "Hardcover",
  //   description: "",
  //   type: "V" 
  // },
  // {
  //   imgSrc: "",
  //   title: "",
  //   author: "",
  //   translator: "",
  //   price: 180000,
  //   originalPrice: 200000,
  //   discount: 10, 
  //   rating: 4.9,
  //   reviewsCount: 500,
  //   soldCount: 3000,
  //   features: [""],
  //   similarBooks: [
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" },
  //     { title: "", imgSrc: "" }
  //   ],
  //   sku: "",
  //   ageGroup: "",
  //   supplier: "",
  //   publisher: "",
  //   publicationYear: 2024,
  //   language: "Việt Nam",
  //   weight: "300g",
  //   dimensions: "22 x 14 x 2 cm",
  //   pages: 320,
  //   binding: "Hardcover",
  //   description: "",
  //   type: "V" 
  // },
];

const insertSampleData = async () => {
  try {
    await mongoose.connect('mongodb+srv://trantuananhbo2093:FPa18YPpQAi7VkSM@cluster0.lydwo.mongodb.net/bookDB?retryWrites=true&w=majority&appName=Cluster0'); // Replace with your MongoDB URI
    console.log('Connected to MongoDB');

    await Product.deleteMany(); // Clear the existing collection
    console.log('Existing data cleared.');

    await Product.insertMany(sampleBooks);
    console.log('Sample data inserted successfully.');

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error inserting sample data:', error);
    mongoose.disconnect();
  }
};

insertSampleData();