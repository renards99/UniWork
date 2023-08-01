Setup môi trường chung cho dự án bus official (BE) 
1 .env ( chứa các thông tin như port, db information )
2. các thư viện hiện tại đã cài : npm install express sequelize mysql2 cors --save cookie-parser  bcrypt
3. extension để format code : prettier
4. Ngoài ra đã setup các tutorial tại mỗi file để mọi người đọc và code theo flow có sẵn 

5. utils sẽ là thư mục chứa các chức năng như là sendSMS, VNP_api ....
Ngoài ra để tự render ra db thì sẽ chạy các lệnh sau: 

npx sequelize-cli db:drop; 
npx sequelize-cli db:create;
npx sequelize-cli db:migrate; 
npx sequelize-cli db:seed:all; 

npx sequelize-cli db:seed:undo; //xoá toàn bộ dữ liệu có trong table mới nhất trong folder seeders
npx sequelize-cli db:migrate:undo; // revert lại data thay đổi trong folder migrations

Lệnh tạo mới file migration: "npx sequelize-cli migration:generate --name DayLaTenFile"

Lệnh tạo file seeder: "npx sequelize-cli seed:generate --name DayLaTenFile"

6. Format code: 
Vào extension tải prettier sau đó 
- Ấn CTRL + SHIFT + P tìm  Format Document chọn Prettier - Code Formatter
- Settings tìm Editor: Format On Save set default thành prettier tick vào format on save 

--------------------- SẼ UPDATE THÊM SAU ---------------------