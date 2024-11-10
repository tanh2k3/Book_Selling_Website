require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return Product.insertMany([
      {
        imgSrc: 'src/assets/hoocmon.jpg',
        title: 'Giải mã Hoóc-môn Dopamine',
        author: 'Anna Lembke',
        price: '119.800₫',
        originalPrice: '198.000₫',
        discount: '-39%',
        rating: 5.0,
        reviewsCount: 97,
        soldCount: '1k',
        features: [
          'Giải thích chi tiết về hoóc-môn dopamine và vai trò của nó trong cơ thể con người.',
          'Cung cấp thông tin về tác động của dopamine đến sức khỏe và tâm lý.',
        ],
        similarBooks: [
          { title: 'Mua 3 Giảm 5%', imgSrc: 'path_to_image1' },
          { title: 'IKIGAI', imgSrc: 'path_to_image2' },
        ]
      },
      {
        imgSrc: 'src/assets/gpt.png',
        title: 'Chat GPT Thực Chiến',
        author: 'Author 1',
        price: '99.710₫',
        originalPrice: '169.000₫',
        discount: '-41%',
        rating: 4.5,
        reviewsCount: 120,
        soldCount: '500',
        features: [
          'Hướng dẫn thực hành sử dụng Chat GPT cho công việc và học tập.',
          'Cung cấp mẹo và kỹ thuật để tận dụng tối đa Chat GPT.',
        ],
        similarBooks: [
          { title: 'AI Revolution', imgSrc: 'path_to_image4' },
          { title: 'Deep Learning Simplified', imgSrc: 'path_to_image5' },
        ]
      },
      {
        imgSrc: 'src/assets/ketoanviahe.png',
        title: 'Kế Toán Vỉa Hè',
        author: 'Author 2',
        price: '169.000₫',
        originalPrice: '199.000₫',
        discount: '-15%',
        rating: 4.0,
        reviewsCount: 80,
        soldCount: '1.3k',
        features: [
          'Cẩm nang kế toán cho người mới bắt đầu.',
          'Hướng dẫn thực hành với ví dụ minh họa dễ hiểu.',
        ],
        similarBooks: [
          { title: 'Accounting Basics', imgSrc: 'path_to_image6' },
          { title: 'Finance 101', imgSrc: 'path_to_image7' },
        ]
      },
      {
        imgSrc: 'src/assets/payback.png',
        title: 'Payback Time - Ngày Đòi Nợ',
        author: 'Author 3',
        price: '284.050₫',
        originalPrice: '299.000₫',
        discount: '-5%',
        rating: 4.8,
        reviewsCount: 200,
        soldCount: '32k',
        features: [
          'Hướng dẫn đầu tư tài chính với các bước thực tế.',
          'Cung cấp chiến lược và phương pháp đầu tư bền vững.',
        ],
        similarBooks: [
          { title: 'The Intelligent Investor', imgSrc: 'path_to_image8' },
          { title: 'Stock Market Strategies', imgSrc: 'path_to_image9' },
        ]
      },
      {
        imgSrc: 'src/assets/maugiao.jpg',
        title: 'Trường Mẫu Giáo Vui Nhộn',
        author: 'Author 4',
        price: '46.000₫',
        originalPrice: '59.000₫',
        discount: '-22%',
        rating: 4.3,
        reviewsCount: 50,
        soldCount: '200',
        features: [
          'Giáo trình vui nhộn giúp trẻ em học tập dễ dàng.',
          'Bao gồm nhiều hoạt động và bài học bổ ích.',
        ],
        similarBooks: [
          { title: 'Early Learning ABCs', imgSrc: 'path_to_image10' },
          { title: 'Fun Activities for Kids', imgSrc: 'path_to_image11' },
        ]
      },
      {
        imgSrc: 'src/assets/tronlanlongloc.png',
        title: 'Tròn Lăn Long Lóc',
        author: 'Author 5',
        price: '143.000₫',
        originalPrice: '189.000₫',
        discount: '-24%',
        rating: 4.2,
        reviewsCount: 34,
        soldCount: '50',
        features: [
          'Truyện tranh hài hước, đầy màu sắc.',
          'Dành cho trẻ từ 3-7 tuổi.',
        ],
        similarBooks: [
          { title: 'Story Time Fun', imgSrc: 'path_to_image12' },
          { title: 'Kids’ Jokes and Riddles', imgSrc: 'path_to_image13' },
        ]
      },
      {
        imgSrc: 'src/assets/hoocmon.jpg',
        title: 'Hormone Secrets',
        author: 'Author 6',
        price: '130.000₫',
        originalPrice: '200.000₫',
        discount: '-35%',
        rating: 4.7,
        reviewsCount: 110,
        soldCount: '800',
        features: [
          'Khám phá những bí mật về hoóc-môn.',
          'Cách chúng ảnh hưởng đến tâm trạng và năng lượng.',
        ],
        similarBooks: [
          { title: 'Mind and Mood', imgSrc: 'path_to_image14' },
          { title: 'The Energy Blueprint', imgSrc: 'path_to_image15' },
        ]
      },
      {
        imgSrc: 'src/assets/baysoi.png',
        title: 'Dẫn Dắt Một Bầy Sói',
        author: 'Author 7',
        price: '137.000₫',
        originalPrice: '180.000₫',
        discount: '-30%',
        rating: 4.5,
        reviewsCount: 95,
        soldCount: '600',
        features: [
          'Chiến lược lãnh đạo hiện đại.',
          'Làm thế nào để dẫn dắt đội ngũ hiệu quả.',
        ],
        similarBooks: [
          { title: 'Leadership 101', imgSrc: 'path_to_image16' },
          { title: 'Team Dynamics', imgSrc: 'path_to_image17' },
        ]
      },
      {
        imgSrc: 'src/assets/english_book.png',
        title: 'The Great English Book',
        author: 'Author 8',
        price: '199.000₫',
        originalPrice: '250.000₫',
        discount: '-20%',
        rating: 4.9,
        reviewsCount: 300,
        soldCount: '1.5k',
        features: [
          'Học tiếng Anh một cách dễ dàng.',
          'Bài học chi tiết với hình minh họa.',
        ],
        similarBooks: [
          { title: 'English Made Easy', imgSrc: 'path_to_image18' },
          { title: 'Learning Languages', imgSrc: 'path_to_image19' },
        ]
      },
      {
        imgSrc: 'src/assets/vietnamese_book.png',
        title: 'Sách tiếng Việt',
        author: 'Author 9',
        price: '99.000₫',
        originalPrice: '120.000₫',
        discount: '-18%',
        rating: 4.1,
        reviewsCount: 70,
        soldCount: '300',
        features: [
          'Sách dành cho người học tiếng Việt.',
          'Bài học chi tiết và ví dụ thực tế.',
        ],
        similarBooks: [
          { title: 'Vietnamese Essentials', imgSrc: 'path_to_image20' },
          { title: 'Learn Vietnamese Fast', imgSrc: 'path_to_image21' },
        ]
      },
      {
        imgSrc: 'src/assets/van_phong_pham.png',
        title: 'Văn phòng phẩm hiện đại',
        author: 'Author 10',
        price: '79.000₫',
        originalPrice: '100.000₫',
        discount: '-21%',
        rating: 4.0,
        reviewsCount: 60,
        soldCount: '250',
        features: [
          'Cung cấp thông tin chi tiết về các sản phẩm văn phòng.',
          'Mẹo chọn sản phẩm phù hợp cho công việc.',
        ],
        similarBooks: [
          { title: 'Office Supplies Guide', imgSrc: 'path_to_image22' },
          { title: 'Modern Work Essentials', imgSrc: 'path_to_image23' },
        ]
      },
      {
        imgSrc: 'src/assets/qua_luu_niem.png',
        title: 'Quà lưu niệm tuyệt đẹp',
        author: 'Author 11',
        price: '150.000₫',
        originalPrice: '180.000₫',
        discount: '-17%',
        rating: 4.6,
        reviewsCount: 85,
        soldCount: '500',
        features: [
          'Sách hướng dẫn chọn quà lưu niệm ý nghĩa.',
          'Ý tưởng độc đáo cho mọi dịp lễ.',
        ],
        similarBooks: [
          { title: 'Gifting Ideas', imgSrc: 'path_to_image24' },
          { title: 'Special Occasions Gifts', imgSrc: 'path_to_image25' },
        ]
      }
    ]);
  })
  .then(() => {
    console.log('Products seeded successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error seeding data:', err));
