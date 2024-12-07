const mongoose = require('mongoose');
const Product = require('./models/Product');

const sampleBooks = [
    {
        imgSrc: "https://salt.tikicdn.com/cache/750x750/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png.webp",
        title: "Chat GPT Thực Chiến",
        author: "Dịch Dương, Phan Trách Bân, Lý Thế Minh",
        translator: "Huyền Trang",
        price: 101400,
        originalPrice: 169000,
        discount: 40,
        rating: 4.7,
        reviewsCount: 33,
        soldCount: 756,
        features: [],
        similarBooks: [],
        sku: "VNK1",
        ageGroup: "",
        supplier: "1980 Books",
        publisher: "Nhà xuất bản Dân trí",
        publicationYear: 2024,
        language: "Tiếng Việt",
        weight: "250g",
        dimensions: "21 x 14 x 1.5 cm",
        pages: 263,
        binding: "Paperback",
        description: "Trong thời đại hiện nay, tất cả những ai không muốn bị tụt hậu đều cần học về các công cụ AI, đặc biệt là biết cách sử dụng công cụ AI trong thực tế. Nếu nắm vững các kiến thức xoay quanh các công cụ AI, bạn có thể nhận được sự hỗ trợ đắc lực để nâng cấp đời sống của mình. Một trong những AI thông minh nhất hiện nay là gọi tên Chat GPT. Kể từ khi ra mắt, Chat GPT luôn được mệnh danh là một trí tuệ nhân tạo (AI) thông minh nhất thế giới. Bất kỳ ai từng sử dụng ChatGPT đều có thể cảm nhận sức hấp dẫn và khả năng tư duy “giống như con người” của nó. Nếu nắm được cách thức đặt câu lệnh chính xác, ta có thể dùng ChatGPT để hiện thực hóa vô số tiềm năng, ví dụ như tạo nội dung quảng cáo, làm bảng tính, viết bài văn, viết sách, tạo hình ảnh. Cuốn sách ChatGPT thực chiến xoay quanh việc học và sử dụng các công cụ AI, cũng như cách vận hành thực tế những ứng dụng AI trong các lĩnh vực khác nhau. Cuốn sách cung cấp những kiến thức cô đọng và thực tiễn nhất để nâng cao toàn diện những nhận thức, nguyên tắc sử dụng và các thao tác liên quan đến công cụ AI. Đây là thời đại mà tất cả chúng ta đều phải chạy đua, với điểm đích của cuộc đua chính là làm chủ công cụ AI. Nắm chắc nó, đồng thời sử dụng nó tạo ra thành tích là thử thách mà mỗi chúng ta đều phải đối mặt. Hãy cùng nhau bắt đầu tiến vào thời đại mới, nơi AI và con người cộng sinh!",
        type: "V"
    }
];

const insertSampleData = async () => {
    try {
        await mongoose.connect('mongodb+srv://trantuananhbo2093:FPa18YPpQAi7VkSM@cluster0.lydwo.mongodb.net/bookDB?retryWrites=true&w=majority&appName=Cluster0'); // Replace with your MongoDB URI
        console.log('Connected to MongoDB');

        const count = await Product.countDocuments();
        if (count > 0) {
            console.log('Collection is currently having ${count} entries');
            await Product.deleteMany();
            console.log('Existing data cleared');
        } else {
            console.log('Collection is empty');
        }

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