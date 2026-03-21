# Hướng Dẫn Quản Lý Blog "Henry Tập Viết"

Chào Henry! Vì bạn đã chọn phong cách quản lý mộc mạc và an toàn tuyệt đối qua GitHub, dự án của bạn sẽ không cần đến một hệ thống quản lý rườm rà (Database). Mọi thứ thao tác qua việc chỉnh sửa tệp giống như viết một cuốn nhật ký số.

Dưới đây là cẩm nang để bạn tự đăng bài và ảnh mọi lúc, mọi nơi:

---

## 📸 Phần 1: Tải Ảnh Lên Blog (Upload Image)

Trước khi viết bất kỳ bài nào, nếu bài đó có ảnh bìa, bạn làm theo 3 bước sau:

1. Đăng nhập vào trang [GitHub](https://github.com/) của bạn. Mở kho lưu trữ `henrytapviet`.
2. Di chuyển vào thư mục: `public` ➡ `images`.
3. Nhấn vào mục **"Add file"** (góc trên bên phải) ➡ Chọn **"Upload files"**.
4. Chọn tấm ảnh bạn muốn dùng làm bìa và tải lên. (Khuyên dùng tên ngắn gọn, viết liền không dấu, ví dụ: `nang-thu.jpg` hay `cafe-sang.png`).
5. Cuộn xuống dưới cùng và nhấn **"Commit changes"** màu xanh lá. **Hoàn thành! Bạn đã có ảnh.**

---

## ✍️ Phần 2: Đăng Áng Văn Mới (Publish Post)

Bây giờ bạn đã có ảnh trong kho, hãy viết bài thôi!

1. Ở trang gốc GitHub (`henrytapviet`), bạn vào thư mục `src` rổi mở tệp `data.js`.
2. Nhấn biểu tượng **Cây bút (Edit)** mờ mờ ở góc phải tệp.
3. Kéo chuột xuống, copy toàn bộ cấu trúc của một bài viết (từ dấu `{` đến dấu `}`) dán xuống ngay bên dưới nó. (Nhớ có **dấu phẩy**, phân tách giữa bài cũ và bài mới).
4. Thay đổi thông tin bài mới của chính bạn. Ví dụ:
   
   ```javascript
   {
      id: 5, // Tăng ID lên 1 đơn vị
      title: "Cà phê sáng và những cơn mưa", // Tiêu đề
      category: "Tản văn", // Thể loại
      date: "24 Tháng 9, 2026", // Ngày đăng
      image: "/images/cafe-sang.png", // Tên tấm ảnh bìa bạn mới tải ở Phần 1
      content: "Cơn mưa rào bất chợt đổ xuống hiên nhà nhỏ... Bạn cứ viết tự do." // Nội dung bài
   }
   ```

5. Cuộn xuống cuối cùng nhấn **"Commit changes"**.

### 🎉 Thế là xong! Trang web của bạn sẽ tự động hiện bài mới chưa đầy 1 phút sau đó.

---

## 🛠 Phần 3 (Nâng cao): Nếu Bạn Cập Nhật Từ Máy Tính Cá Nhân

Nếu bạn không thích dùng thẳng trang GitHub mà muốn viết bài bằng máy tính (khi ở nhà), bạn chỉ cần làm như 3 bước cập nhật "combo" huyền thoại:

1. Chép ảnh vào `public/images/`.
2. Mở file `data.js` trong máy ra và gõ thêm bài.
3. Bật màn hình đen lệnh (PowerShell) lên, gõ:
   - `git add .`
   - `git commit -m "Äang bai: Ca phe sang"`
   - `git push`

*Thỏa sức tận hưởng và để lại trên Internet những án văn lưu giữ tâm hồn bạn nhé - "Henry Tập Viết" vĩnh cửu.*
