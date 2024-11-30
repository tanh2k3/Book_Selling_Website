// < !DOCTYPE html >
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Voucher Page</title>
//                     <style>
//                         body {
//                             font - family: Arial, sans-serif;
//                         margin: 0;
//                         padding: 0;
//                         background-color: #f4f4f9;
//     }
//                         .container {
//                             max - width: 800px;
//                         margin: 20px auto;
//                         background: white;
//                         padding: 20px;
//                         border-radius: 8px;
//                         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//     }
//                         h1 {
//                             text - align: center;
//                         color: #333;
//     }
//                         .voucher {
//                             border: 1px solid #ddd;
//                         border-radius: 5px;
//                         margin: 10px 0;
//                         padding: 15px;
//                         display: flex;
//                         justify-content: space-between;
//                         align-items: center;
//                         background-color: #fff;
//     }
//                         .voucher h2 {
//                             font - size: 18px;
//                         margin: 0;
//                         color: #444;
//     }
//                         .voucher p {
//                             margin: 5px 0;
//                         color: #666;
//     }
//                         .voucher button {
//                             background: #007BFF;
//                         color: white;
//                         border: none;
//                         padding: 10px 15px;
//                         border-radius: 5px;
//                         cursor: pointer;
//                         transition: background 0.3s;
//     }
//                         .voucher button:hover {
//                             background: #0056b3;
//     }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="container">
//                         <h1>Your Vouchers</h1>
//                         <div id="voucher-list">
//                             <!-- Voucher cards will be rendered here -->
//                         </div>
//                     </div>

//                     <script>
//     // Sample data (can be replaced with API call)
//                         const vouchers = [
//                         {id: 1, title: "10% Off on Electronics", description: "Valid until 31 Dec 2024", code: "ELECTRO10" },
//                         {id: 2, title: "Free Shipping", description: "On orders above $50", code: "FREESHIP" },
//                         {id: 3, title: "$5 Off on Groceries", description: "Valid for new users only", code: "NEWGROCERY5" },
//                         ];

//                         // Function to render vouchers
//                         function renderVouchers() {
//       const voucherList = document.getElementById('voucher-list');
//       vouchers.forEach(voucher => {
//         const voucherCard = document.createElement('div');
//                         voucherCard.className = 'voucher';
//                         voucherCard.innerHTML = `
//                         <div>
//                             <h2>${voucher.title}</h2>
//                             <p>${voucher.description}</p>
//                         </div>
//                         <button onclick="copyCode('${voucher.code}')">Copy Code</button>
//                         `;
//                         voucherList.appendChild(voucherCard);
//       });
//     }

//                         // Function to copy voucher code to clipboard
//                         function copyCode(code) {
//                             navigator.clipboard.writeText(code).then(() => {
//                                 alert(`Voucher code "${code}" copied to clipboard!`);
//                             }).catch(err => {
//                                 alert('Failed to copy code. Please try again.');
//                                 console.error(err);
//                             });
//     }

//                         // Initialize vouchers
//                         renderVouchers();
//                     </script>
//                 </body>
//             </html>
