-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 04, 2022 lúc 08:15 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `which_animas`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `animals`
--

CREATE TABLE `animals` (
  `id` int(11) NOT NULL,
  `ten` text NOT NULL,
  `tenkhoahoc` text NOT NULL,
  `loai` text NOT NULL,
  `hinhthai` text NOT NULL,
  `sinhthai` text NOT NULL,
  `image1` text NOT NULL,
  `image2` text NOT NULL,
  `image3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `animals`
--

INSERT INTO `animals` (`id`, `ten`, `tenkhoahoc`, `loai`, `hinhthai`, `sinhthai`, `image1`, `image2`, `image3`) VALUES
(1, 'Ếch giun nguyễn', 'Ichthyophis nguyenorum', '', 'Đặc điểm chẩn loại: cơ thể tròn, dẹt mặt bụng; chóp đuôi cùn, không có dạng mũ; không có đốm màu vàng mặt bụng; đầu rộng nhất ở góc mép miệng, hẹp dần về trước; mút mõm tròn; lỗ mũi nằm gần bờ trước mép miệng; số vòng quanh thân: 312 – 318; sọc vàng rộng chạy liên tục từ sau mắt đến huyệt (Nishikawa et al.,2012). \r\nĐặc điểm hình thái: SVL 201,3 mm. Dài đuôi: 2,6 – 3,5; rộng đuôi: 2,8 – 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn; dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 – 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục.\r\nGhi chú:  Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).', 'Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.', 'https://hinhanh.gihay.com/file/image/1311/ech-giun-nguyen.jpg', 'https://media.ngoisao.vn/news/2012/4/27/49/a10jpg1335497199.jpg', 'https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w800/Uploaded/2020/iftqd/2016_06_17/echgiun1.jpg'),
(2, 'Cóc nhà', 'Duttaphrynus melanostictus', '', 'Kích thước cơ thể trung bình, mắt khỏe; phía trên ổ mắt, phía sau ổ mắt, phía trên màng nhĩ và phía trước mắt có nhiều gai nhọn; mõm nhọn, tuyến mang tai lớn, có chều dài hơn chiều rộng; cơ thể có nhiều nốt sần lớn và nhỏ; ngón tay thứ I dài hơn ngón tay thứ II; khớp cổ chân chạm giữa tuyến mang tai khi xếp dọc theo thân.', 'Là loài phổ biến trong khu rừng tràm Mỹ Phước, thường được tìm thấy trong các khu vực đất cao, trên các bờ kênh nước. Cóc nhà hoạt động vào ban đêm, ăn các loài côn trùng sống trong khu vực. Xuất hiện nhiều trong các sinh cảnh rừng tràm đặc dụng, rừng tràm khai thác vào đầu mùa mưa.', 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Bufo_melanosticus_01.JPG', 'https://www.naturephoto-cz.com/photos/sevcik/coc-nha--bufo-melanostictus.jpg', 'https://nguyentuyethanh.files.wordpress.com/2011/12/coc.jpg'),
(3, 'Ếch đồng', 'Hoplobatrachus rugulosus', '', 'Kích thước lớn, chân và tay tương đối ngắn, ngón chân có màng bao phủ gần như hoàn toàn, đầu ngón không có đĩa ngón, hơi phồng ở đầu ngón; không có củ bàn trong ở chân, khoảng 10 hàng nếp gấp da trên lưng, gian ổ mắt nhỏ hơn nhiều so với chiều rộng mi mắt trên.', 'Ếch đồng là loài phổ biến trong khu vực rừng tràm Mỹ Phước; được tìm thấy nhiều vào mùa mưa, đặc biệt vào đầu mùa mưa. Ếch đồng sinh sản vào đầu mùa mưa, con đực phát âm thanh to thu hút con cái. Ếch đực và ếch cái có hiện tượng \"bắt cặp\" khi giao phối. Trong khu vực rừng tràm Mỹ Phước, ếch đồng được tìm thấy trong sinh cảnh rừng tràm khai thác và rừng tràm đặc dụng.', 'https://songmoi.vn/public/upload_editor/posts/images/ech-dong-anh1(1).jpg', 'https://tracuuduoclieu.vn/wp-content/uploads/2021/07/ech-dong.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Glandirana_rugosa.JPG/300px-Glandirana_rugosa.JPG');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
