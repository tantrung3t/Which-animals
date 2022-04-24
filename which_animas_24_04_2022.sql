-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 24, 2022 lúc 07:00 AM
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
  `nganh_id` int(11) NOT NULL,
  `lop_id` int(11) NOT NULL,
  `bo_id` int(11) NOT NULL,
  `hinhthai` text NOT NULL,
  `sinhthai` text NOT NULL,
  `image1` text NOT NULL,
  `image2` text NOT NULL,
  `image3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `animals`
--

INSERT INTO `animals` (`id`, `ten`, `tenkhoahoc`, `nganh_id`, `lop_id`, `bo_id`, `hinhthai`, `sinhthai`, `image1`, `image2`, `image3`) VALUES
(1, 'Ếch giun nguyễn', 'Ichthyophis nguyenorum', 1, 1, 1, 'Đặc điểm chẩn loại: cơ thể tròn, dẹt mặt bụng; chóp đuôi cùn, không có dạng mũ; không có đốm màu vàng mặt bụng; đầu rộng nhất ở góc mép miệng, hẹp dần về trước; mút mõm tròn; lỗ mũi nằm gần bờ trước mép miệng; số vòng quanh thân: 312 – 318; sọc vàng rộng chạy liên tục từ sau mắt đến huyệt (Nishikawa et al.,2012). \r\nĐặc điểm hình thái: SVL 201,3 mm. Dài đuôi: 2,6 – 3,5; rộng đuôi: 2,8 – 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn; dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 – 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục.\r\nGhi chú:  Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).', 'Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.', 'https://hinhanh.gihay.com/file/image/1311/ech-giun-nguyen.jpg', 'https://media.ngoisao.vn/news/2012/4/27/49/a10jpg1335497199.jpg', 'https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w800/Uploaded/2020/iftqd/2016_06_17/echgiun1.jpg'),
(2, 'Cóc nhà', 'Duttaphrynus melanostictus', 1, 1, 2, 'Kích thước cơ thể trung bình, mắt khỏe; phía trên ổ mắt, phía sau ổ mắt, phía trên màng nhĩ và phía trước mắt có nhiều gai nhọn; mõm nhọn, tuyến mang tai lớn, có chều dài hơn chiều rộng; cơ thể có nhiều nốt sần lớn và nhỏ; ngón tay thứ I dài hơn ngón tay thứ II; khớp cổ chân chạm giữa tuyến mang tai khi xếp dọc theo thân.', 'Là loài phổ biến trong khu rừng tràm Mỹ Phước, thường được tìm thấy trong các khu vực đất cao, trên các bờ kênh nước. Cóc nhà hoạt động vào ban đêm, ăn các loài côn trùng sống trong khu vực. Xuất hiện nhiều trong các sinh cảnh rừng tràm đặc dụng, rừng tràm khai thác vào đầu mùa mưa.', 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Bufo_melanosticus_01.JPG', 'https://www.naturephoto-cz.com/photos/sevcik/coc-nha--bufo-melanostictus.jpg', 'https://nguyentuyethanh.files.wordpress.com/2011/12/coc.jpg'),
(3, 'Ếch đồng', 'Hoplobatrachus rugulosus', 1, 1, 2, 'Kích thước lớn, chân và tay tương đối ngắn, ngón chân có màng bao phủ gần như hoàn toàn, đầu ngón không có đĩa ngón, hơi phồng ở đầu ngón; không có củ bàn trong ở chân, khoảng 10 hàng nếp gấp da trên lưng, gian ổ mắt nhỏ hơn nhiều so với chiều rộng mi mắt trên.', 'Ếch đồng là loài phổ biến trong khu vực rừng tràm Mỹ Phước; được tìm thấy nhiều vào mùa mưa, đặc biệt vào đầu mùa mưa. Ếch đồng sinh sản vào đầu mùa mưa, con đực phát âm thanh to thu hút con cái. Ếch đực và ếch cái có hiện tượng \"bắt cặp\" khi giao phối. Trong khu vực rừng tràm Mỹ Phước, ếch đồng được tìm thấy trong sinh cảnh rừng tràm khai thác và rừng tràm đặc dụng.', 'https://songmoi.vn/public/upload_editor/posts/images/ech-dong-anh1(1).jpg', 'https://tracuuduoclieu.vn/wp-content/uploads/2021/07/ech-dong.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Glandirana_rugosa.JPG/300px-Glandirana_rugosa.JPG'),
(4, 'Thằn lằn bóng', 'Eutropis longicaudata', 1, 2, 3, 'Vảy trên mũi chạm nhau hoặc hơi tách biệt với nhau; một vảy sau mũi; vảy trước trán tiếp xúc nhau; vảy má thứ nhất không cao hơn vảy má thứ 2; không có đĩa ở dưới mi mắt; vảy thường có 3 sóng, hiếm khi nhiều  hơn; 30-34 hàng vảy giữa thân; các đường trên lưng giữa các vảy thường mờ, tối; hai bên thân màu sậm với nhiều điểm dạng mắt.', 'Là loài phổ biến trong khu vực rừng tràm Mỹ Phước, hoạt động ban ngày, thường được tìm thấy trong sinh cảnh rừng tràm đặc dụng, rừng tràm khai thác. Kiếm ăn trên nền rừng, thức ăn của chúng là những loài côn trùng trong khu vực. Thường có tập tính phơi nắng vào buổi sáng hoặc sau các cơn mưa lớn.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Long-tailed_Skink_%28Mabuya_longicaudata%29_%E9%95%B7%E5%B0%BE%E5%8D%97%E8%9C%A5.jpg/420px-Long-tailed_Skink_%28Mabuya_longicaudata%29_%E9%95%B7%E5%B0%BE%E5%8D%97%E8%9C%A5.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Long-tailed_Skink_%28Mabuya_longicaudata%29_%E9%95%B7%E5%B0%BE%E5%8D%97%E8%9C%A52.jpg/180px-Long-tailed_Skink_%28Mabuya_longicaudata%29_%E9%95%B7%E5%B0%BE%E5%8D%97%E8%9C%A52.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Long-tailed_Skink_%28Mabuya_longicaudata%29_%E9%95%B7%E5%B0%BE%E5%8D%97%E8%9C%A53.jpg/180px-Long-tailed_Skink_%28Mabuya_longicaudata%29_%E9%95%B7%E5%B0%BE%E5%8D%97%E8%9C%A53.jpg'),
(5, 'Chàng xanh', 'Hylarana erythraea', 1, 1, 2, 'Cơ thể có kích thước tương đối lớn, thường có màu xanh với nếp gấp da trên lưng rộng màu vàng, dảy màu đen ở mặt bên của đầu và cơ thể, mũi nhọn và nhô ra, ngón tay mảnh khảnh, ngón thứ nhất hơi ngắn hơn ngón thứ 2, ngón chân gần như có màng bao phủ hoàn toàn, đĩa nhỏ trên đầu ngón, cổ chân chạm chóp mũi, không có hoa văn vòng quanh chi nhưng có các dấu song song chân, có túi thanh âm, con đực có chai sinh dục trên ngón tay thứ I.', 'Chàng xanh là loài hoạt động cả ngày và đêm, ban ngày thường bắt gặp trên các thảm thực vật nổi; ban đêm được tìm thấy trên các cành cây nhỏ, bên trên các bụi rậm. Thức ăn là các loài côn trùng nhỏ sống trong khu vực. Phân bố trên các sinh cảnh rừng tràm đặc dụng, rừng dừa nước, lung.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hylarana_erythraea.jpg/420px-Hylarana_erythraea.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Green_Paddy_Frog_%28Hylarana_erythraea%293.jpg/180px-Green_Paddy_Frog_%28Hylarana_erythraea%293.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_Paddy_Frog_%28Hylarana_erythraea%29.jpg/180px-Green_Paddy_Frog_%28Hylarana_erythraea%29.jpg'),
(6, 'Thạch sùng', 'Hemidactylus garnotii', 1, 2, 3, 'Đặc điểm chẩn loại:  mút mõm tù, dài mõm-mắt lớn hơn khoảng cách giữa mắt-tai (SnEye 5,13; EyeEar 3,66); lỗ mũi ở giữa tấm mõm.; đường kính tai không quá 1/2 lần đường kính mắt (EarL 1,87; OrbD4,28); 11 tấm mép trên, 10 tấm mép dưới; tấm cằm gấp hai lần tấm mép; tấm mõm rộng bằng cao.\r\n\r\nĐặc điểm hình thái: Đầu lớn (HL 7,91; HW 6,43; HH 4,18).  Lỗ tai bé, gần tròn, đường kính tai không quá 1/2 lần đường kính mắt. Tấm cằm có dạng hình tam giác, dài hơn 2 lần các tấm mép bên cạnh. Hai đôi tấm sau cằm, đôi I lớn hơn đôi II và  tiếp xúc nhau. Vảy vùng họng dạng hạt. Đuôi rất dẹp, sắc, có răng cưa ở hai bên, phía trên phủ các vảy nhỏ đồng dạng, mặt dưới phẳng với những vảy lớn xếp gối lên nhau và một hàng vảy ngang mở rộng ở giữa đùi. Thân màu nâu xám với các đốm hoặcvết không rõ ràng, thường có những điểm nhỏ màu trắng; có vạch tối dọc theo haibên đầu. Bụng trắng.  \r\n', 'Ban ngày thường trú trong các hốc cây nhỏ hoặc bên trong lớp vỏ cây mục, ban đêm kiếm mồi trên thân tràm và các thân gỗ lớn trong khu vực rừng tràm Mỹ Phước. Là loài ít gặp; chia sẻ sinh cảnh với loài Hemidactylys frenatus và Hemidactylus platyurus. ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Hemidactylus_garnotii_-_Mindanao%2C_Philippines_5.jpg/420px-Hemidactylus_garnotii_-_Mindanao%2C_Philippines_5.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Garnot%27s_Gecko_%28Hemidactylus_garnotii%29_%E9%8B%B8%E5%B0%BE%E8%9C%A5%E8%99%8E.jpg/180px-Garnot%27s_Gecko_%28Hemidactylus_garnotii%29_%E9%8B%B8%E5%B0%BE%E8%9C%A5%E8%99%8E.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Garnot%27s_Gecko_%28Hemidactylus_garnotii%29_%E9%8B%B8%E5%B0%BE%E8%9C%A5%E8%99%8E3.jpg/180px-Garnot%27s_Gecko_%28Hemidactylus_garnotii%29_%E9%8B%B8%E5%B0%BE%E8%9C%A5%E8%99%8E3.jpg'),
(7, 'Trăn lưới', 'Python molurus', 1, 2, 3, 'Đặc điểm chẩn loại:  Rắn lành cỡ rất lớn trong họ nhà Trăn Pythonidae, dài tới 8m (kích thước trung bình khoảng từ 4 - 6m). Đầu dài, nhỏ. Hai tấm vảy môi trên có trên mỗi tấm vảy một lỗ (lỗ môi là cơ quan cảm giác nhiệt). Có hai cựa nhỏ, hình móng nằm ở hai bên khe huyệt. Cựa trăn cái ngắn, ẩn sâu trong hốc bên khe huyệt. Đầu có màu nâu xám, mặt trên đầu có hoa văn hình mũi mác di từ cổ, mũi nhọn hướng về phía đầu mõm. Mặt trên lưng có màu xám nhạt hay vàng nhạt có một dãy những vết lớn dài, màu nâu đỏ viền đen. Mặt bụng màu vàng hay nâu vàng có những đốm nâu hay đen (Smith 1984).\r\nĐặc điểm hình thái:  Đầu hình tam giác, chiều dài gần 2 lần chiều rộng. Lỗ mũi tách biệt bởi 2 vảy mũi. Có 2 cặp vảy trước trán, cặp vảy phía sau nhỏ hơn; vảy trán phân chia. Vùng vảy chẩm và vùng vảy thái dương không đều. Có 10 – 13 vảy môi trên, vảy thứ VI hoặc thứ VII ở dưới mắt hoặc tách biệt với mắt bởi hàng vảy dưới mắt; 2 vảy môi trên đầu tiên có các hốc cảm nhiệt rõ ràng. Mắt được bao quanh bởi 2 hoặc 3 vảy trước mắt, 1 vảy trên mắt, 2 hoặc 3, hiếm khi 4 vảy sau mắt, 1, 2 hiếm khi 3 vảy dưới mắt. Các vảy bao quanh mắt, ngoại trừ vảy trên mắt thường hợp nhất hoặc được phân chia bởi đường đứt nhỏ. Vảy môi trên có 2 hố vảy sâu. 16-22 vảy hàm dưới. Vảy cằm  nhỏ và không đều. Rãnh môi dưới rõ ràng. Vảy trơn, 60-75 hàng vảy giữa thân. 256-270 vảy bụng; 65-70 vảy dưới đuôi. Vảy hậu môn phân chia.', 'Đặc điểm sinh thái học: Thường sống ở các rừng thưa, savan, cây bụi hay ven các rừng già, ở các đồi núi thấp có nhiều bụi rậm khô ráo. Chúng ưa sống gần các vực nước, đầm lầy. Có thể leo lên cây và thích cuốn mình vào những cành cây chìa ra trên mặt nước. ở đồng bằng Nam bộ, chúng ưa sống ở những nơi đầm lầy, rừng tràm, rừng sú vẹt ngập nước, đôi khi còn xâm nhập cả vào những khu vực có vườn cây. Chúng chủ yếu đi kiếm mồi vào ban đêm, nhiều nhất vào lúc xẩm tối. Trăn đất ăn những loài thú nhỏ (chủ yếu gặm nhấm, đôi khi cả hươu nai cỡ nhỏ, chim và những loài ếch nhái, bò sát). Sinh sản hàng năm. Ở khu vực Đồng Bằng Sông Cửu Long giao phối từ tháng 10 đến tháng giêng năm sau. Trăn chửa khoảng hai tháng đến ba tháng sáu ngày, đẻ từ 15 đến 60 quả trứng. Trăn mẹ ấp trứng bằng cách cuộn lấy ổ trứng. Sau khoảng hai tháng (56 - 85 ngày) thì trứng nở: Trăn sơ sinh dài khoảng 52 - 61cm và nặng khoảng 80 - 140g. Lột xác lần đầu khoảng 7 - 10 ngày sau khi nở.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pratik_jain_dahod_python.JPG/420px-Pratik_jain_dahod_python.JPG', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-Indian-Rock-Python.jpg/180px-2008-Indian-Rock-Python.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Python_molurus_molurus_2.jpg/180px-Python_molurus_molurus_2.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bo`
--

CREATE TABLE `bo` (
  `bo_id` int(11) NOT NULL,
  `bo_ten` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bo`
--

INSERT INTO `bo` (`bo_id`, `bo_ten`) VALUES
(1, 'GYMNOPHIONA (Muller, 1832)'),
(2, 'ANURA (Fischer, 1813)'),
(3, 'SQUAMATA (Oppel, 1841)');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `lop_id` int(11) NOT NULL,
  `lop_ten` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`lop_id`, `lop_ten`) VALUES
(1, 'AMPHIBIA (Linnaeus, 1758)'),
(2, 'REPTILIA (Laurenti, 1768)');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nganh`
--

CREATE TABLE `nganh` (
  `nganh_id` int(11) NOT NULL,
  `nganh_ten` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nganh`
--

INSERT INTO `nganh` (`nganh_id`, `nganh_ten`) VALUES
(1, 'Động vật có dây sống (Chordata)');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nganh_fk` (`nganh_id`),
  ADD KEY `bo_fk` (`bo_id`),
  ADD KEY `lop_fk` (`lop_id`);

--
-- Chỉ mục cho bảng `bo`
--
ALTER TABLE `bo`
  ADD PRIMARY KEY (`bo_id`);

--
-- Chỉ mục cho bảng `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`lop_id`);

--
-- Chỉ mục cho bảng `nganh`
--
ALTER TABLE `nganh`
  ADD PRIMARY KEY (`nganh_id`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `animals`
--
ALTER TABLE `animals`
  ADD CONSTRAINT `bo_fk` FOREIGN KEY (`bo_id`) REFERENCES `bo` (`bo_id`),
  ADD CONSTRAINT `lop_fk` FOREIGN KEY (`lop_id`) REFERENCES `lop` (`lop_id`),
  ADD CONSTRAINT `nganh_fk` FOREIGN KEY (`nganh_id`) REFERENCES `nganh` (`nganh_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
