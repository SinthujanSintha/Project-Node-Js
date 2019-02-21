-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2019 at 05:44 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ams2`
--

-- --------------------------------------------------------

--
-- Table structure for table `committee`
--

CREATE TABLE `committee` (
  `Committee_Id` varchar(10) NOT NULL,
  `Member_Id` varchar(10) NOT NULL,
  `CType_Id` varchar(10) NOT NULL,
  `Join_Date` text NOT NULL,
  `Status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `committee`
--

INSERT INTO `committee` (`Committee_Id`, `Member_Id`, `CType_Id`, `Join_Date`, `Status`) VALUES
('CM005', 'US048', 'CT002', '2019-01-14', 'Active'),
('CM011', 'US002', 'CT003', '2019-01-08', 'Active'),
('CM017', 'US001', 'CT001', '2019-01-03', 'Active'),
('CM021', 'US065', 'CT004', '2019-02-14', 'Active'),
('CM022', 'US051', 'CT004', '2019-02-13', 'Active'),
('CM023', 'US046', 'CT004', '2019-02-14', 'Active');

--
-- Triggers `committee`
--
DELIMITER $$
CREATE TRIGGER `tg_com_insert` BEFORE INSERT ON `committee` FOR EACH ROW BEGIN
  INSERT INTO committee_seq VALUES (NULL);
  SET NEW.Committee_Id = CONCAT('CM', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `committee_seq`
--

CREATE TABLE `committee_seq` (
  `Committee_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `committee_seq`
--

INSERT INTO `committee_seq` (`Committee_Id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23);

-- --------------------------------------------------------

--
-- Table structure for table `committee_type`
--

CREATE TABLE `committee_type` (
  `CType_Id` varchar(10) NOT NULL,
  `Member_Type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `committee_type`
--

INSERT INTO `committee_type` (`CType_Id`, `Member_Type`) VALUES
('CT001', 'President'),
('CT002', 'Secretary'),
('CT003', 'Moderator'),
('CT004', 'Member');

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE `complaint` (
  `Complaint_ID` varchar(10) NOT NULL,
  `User_Id` varchar(10) NOT NULL,
  `Subject` varchar(25) NOT NULL,
  `Description` text NOT NULL,
  `Date` text NOT NULL,
  `Remark` varchar(9) NOT NULL,
  `Response` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`Complaint_ID`, `User_Id`, `Subject`, `Description`, `Date`, `Remark`, `Response`) VALUES
('CP008', 'US002', 'dirty water', 'dirty Water', '2019-01-08', '', ''),
('CP009', 'US002', ': Roof Top Door', 'We are getting too much sound for roof top need to close it on time becz issue is AIR.', '2019-01-08', '', ''),
('CP011', 'US018', 'Sound Issue', 'I am getting too much sound from Floor 6 Unit 6A kindly solve this issue thanks :)', '2019-01-17', '', ''),
('CP012', 'US002', 'Water Issue', ' Dear admin we are not getting too much water so we need to fix a meeting and solve this issue as soon as possible thanks :)', '2019-01-28', '', ''),
('CP013', 'US040', 'abaya', 'dangerous ', '2019-01-31', 'Solved', '																														\r\n                                                       i will care about that\r\n                                                            '),
('CP014', 'US040', 'hiii', 'halloooo', '2019-01-31', 'Not solve', 'No response yet.'),
('CP015', 'US039', 'not enough Salary', '   i want to salary as more', '2019-02-14', '', ''),
('CP019', 'US002', 'dirty water', 'dirty water', '2019-02-01', '', ''),
('CP020', 'US002', 'power ', 'Afghanistan\n', '2019-02-01', 'Not solve', 'No response yet.'),
('CP021', 'US040', 'hiii', 'hallloo', '2019-02-01', 'Not solve', 'No response yet.'),
('CP022', 'US002', 'power ', '', '2019-02-01', 'Not solve', 'No response yet.');

--
-- Triggers `complaint`
--
DELIMITER $$
CREATE TRIGGER `tg_cp_insert` BEFORE INSERT ON `complaint` FOR EACH ROW BEGIN
  INSERT INTO cop_seq VALUES (NULL);
  SET NEW.Complaint_ID = CONCAT('CP', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cop_seq`
--

CREATE TABLE `cop_seq` (
  `Complaint_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cop_seq`
--

INSERT INTO `cop_seq` (`Complaint_ID`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23);

-- --------------------------------------------------------

--
-- Table structure for table `cos_seq`
--

CREATE TABLE `cos_seq` (
  `Cost_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cos_seq`
--

INSERT INTO `cos_seq` (`Cost_Id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11);

-- --------------------------------------------------------

--
-- Table structure for table `device_tokens`
--

CREATE TABLE `device_tokens` (
  `Tokens` varchar(300) NOT NULL,
  `User_Id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `device_tokens`
--

INSERT INTO `device_tokens` (`Tokens`, `User_Id`) VALUES
('eKl1ll9EL4s:APA91bHBZl3C7E-HWo23aaktyRyJGzP4twI2Qh34_5K82N-sB0S08hPV41dTGwdMmbRIDBLJvZ6GVU6--lwi5PvKrVIkXa8r7BhxVlRTfxP6MF-cSjd2zKa3glDQzx9b6k32WfbI_u_p', 'US002'),
('fLe9yrf4Yvc:APA91bFWLfkXr4oq2BD9_2UTZxm5p8itS9ZFVMY0st7Bm1NPUCbF1FiJYuSblHMlj_qWgTbtccxPL48lR-ePO3Gnz-B6_4EfwQuD31beIP9EOULbcYWSuBRPdniym_mMutBr6ZX4fJxe', 'US040'),
('dT9dujK_BTo:APA91bG2MvU0872Uo2FFe8sCo6ia1SeM4GN4ePg8eGW0XhMkLQH8Vpa0ySoGPbdUllBjGhVFQ-Q5RiQB2ccOjS4-MYksi5D1jngo6NpOJNK4CPx5dfkA-Z_ZXtSNZwbBTPXtB5xC8L4A', 'US040'),
('f5oK0nhC4Ls:APA91bEe66YdlHTzv0nCszPJaVhbSFT3KaM3BuzdsTLe-k0VSfbP6Xg8qxruEnjAw_m72i-9scuYCg9ul9BMagX5O6nbLE6D9ThBgXowhTjXmgaX_QmIQlBK4QGMvl3BmUFjwz4dkT3Q', 'US040'),
('eJ0s6SCQa2A:APA91bHtzWGtwiwRdu1Clj1qGXdJFhQ47D_KNJQyWawO0yS_wnfShY4f29qWxXMxPvNT7r2v88frlGi7sNYct5_JQpE8oNvBbV4oJkT6XXMuR4Qsfi4M7fFg2CfuGD7wZBhWDYmJIc_q', 'US040'),
('et2vxX3bw0M:APA91bGb-kuGDF03v2ccL4oFt5-CDOqdLvNbvY-xcIHGeperOUruI2WDAcH78gM5UW8Vxo-eUIukv5sxIbA0_O1BaejNd5KC-ZwF56zrHfcGvR1CA4zuWFikzkUd9jsOfA3LBzNNjA5G', 'US040'),
('dbgVgm7Le50:APA91bEGXwKtx8aAdHaQik8mIiqs7IVBiyE8xjBlf09livX8nL6nG6dnBMqu19tiXlpmzvrRVO24cYaPJz_v6b1X8r6X8rSuZP6aF6KvmeRF07o280ESGTIB49GNOTh5kWGUwpPhfujX', 'US002');

-- --------------------------------------------------------

--
-- Table structure for table `employee_job`
--

CREATE TABLE `employee_job` (
  `Job_Id` varchar(10) NOT NULL,
  `Emp_Id` varchar(10) NOT NULL,
  `Emtype_Id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_job`
--

INSERT INTO `employee_job` (`Job_Id`, `Emp_Id`, `Emtype_Id`) VALUES
('JO002', 'US039', 'ET001'),
('JO003', 'US040', 'ET001'),
('JO004', 'US041', 'ET001'),
('JO005', 'US042', 'ET002'),
('JO006', 'US043', 'ET004'),
('JO009', 'US046', 'ET002'),
('JO011', 'US050', 'ET001'),
('JO012', 'US051', 'ET001');

--
-- Triggers `employee_job`
--
DELIMITER $$
CREATE TRIGGER `tg_job_insert` BEFORE INSERT ON `employee_job` FOR EACH ROW BEGIN
  INSERT INTO job_seq VALUES (NULL);
  SET NEW.Job_Id = CONCAT('JO', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `employee_leave`
--

CREATE TABLE `employee_leave` (
  `Leave_Id` varchar(10) NOT NULL,
  `Emp_Id` varchar(10) NOT NULL,
  `Leave_Title` text NOT NULL,
  `Description` text NOT NULL,
  `Leave_From` text NOT NULL,
  `Leave_To` text NOT NULL,
  `Remark` text NOT NULL,
  `Response` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Triggers `employee_leave`
--
DELIMITER $$
CREATE TRIGGER `tg_lev_insert` BEFORE INSERT ON `employee_leave` FOR EACH ROW BEGIN
  INSERT INTO Lev_seq VALUES (NULL);
  SET NEW.Leave_Id  = CONCAT('LV', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `employee_type`
--

CREATE TABLE `employee_type` (
  `Emtype_Id` varchar(10) NOT NULL,
  `Job` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_type`
--

INSERT INTO `employee_type` (`Emtype_Id`, `Job`) VALUES
('ET001', 'Cleaner'),
('ET002', 'Security'),
('ET003', 'Plumber'),
('ET004', 'Electricians');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `Event_ID` int(11) NOT NULL,
  `Title` varchar(25) NOT NULL,
  `Content` varchar(200) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`Event_ID`, `Title`, `Content`, `Date`) VALUES
(1, 'Thai Pongal', 'Mid-January is an important time in the Tamil calendar. The harvest festival, Pongal, falls typically on the 14th or the 15th of January and is the quintessential \'Tamil Festival\'. Pongal is a harvest', '2019-01-12');

-- --------------------------------------------------------

--
-- Table structure for table `floor`
--

CREATE TABLE `floor` (
  `Floor_Id` varchar(10) NOT NULL,
  `Name` text NOT NULL,
  `Houses` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `floor`
--

INSERT INTO `floor` (`Floor_Id`, `Name`, `Houses`) VALUES
('FL001', 'FirstFloor', '1A,1B,1C,1D'),
('FL002', 'SecondFloor', '2A,2B,2C,2D'),
('FL003', 'ThirdFloor', '3A,3B,3C,3D'),
('FL004', 'FourthFloor', '4A,4B,4C,4D'),
('FL005', 'FifthFloor', '5A,5B,5C,5D'),
('FL006', 'SixthFloor', '6A,6B,6C,6D'),
('FL007', 'SeventhFloor', '7A,7B,7C,7D'),
('FL008', 'Eighth Floor', '8A,8B,8C,8D');

--
-- Triggers `floor`
--
DELIMITER $$
CREATE TRIGGER `tg_floor_insert` BEFORE INSERT ON `floor` FOR EACH ROW BEGIN
  INSERT INTO Floor_seq VALUES (NULL);
  SET NEW.Floor_Id = CONCAT('FL', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `floor_seq`
--

CREATE TABLE `floor_seq` (
  `Floor_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `floor_seq`
--

INSERT INTO `floor_seq` (`Floor_Id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9);

-- --------------------------------------------------------

--
-- Table structure for table `house`
--

CREATE TABLE `house` (
  `House_Id` varchar(10) NOT NULL,
  `Floor_Id` varchar(10) NOT NULL,
  `Owner_Id` varchar(10) DEFAULT NULL,
  `House_Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `house`
--

INSERT INTO `house` (`House_Id`, `Floor_Id`, `Owner_Id`, `House_Name`) VALUES
('HO001', 'FL002', 'US002', '2A'),
('HO014', 'FL002', 'US018', '2C'),
('HO017', 'FL003', 'US021', '3D'),
('HO019', 'FL007', 'US023', '7C'),
('HO020', 'FL004', 'US024', '4C'),
('HO021', 'FL006', 'US025', '6B'),
('HO023', 'FL006', 'US027', '6D'),
('HO027', 'FL008', 'US048', '8B'),
('HO034', 'FL006', 'US065', '6A'),
('HO045', 'FL008', 'US086', '8A'),
('HO046', 'FL008', 'US087', '8C'),
('HO047', 'FL004', 'US088', '4A'),
('HO048', 'FL005', 'US089', '5A');

--
-- Triggers `house`
--
DELIMITER $$
CREATE TRIGGER `tg_house_insert` BEFORE INSERT ON `house` FOR EACH ROW BEGIN
  INSERT INTO House_seq VALUES (NULL);
  SET NEW.House_Id = CONCAT('HO', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `house_seq`
--

CREATE TABLE `house_seq` (
  `House_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `house_seq`
--

INSERT INTO `house_seq` (`House_Id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(34),
(35),
(36),
(37),
(38),
(39),
(40),
(41),
(42),
(43),
(44),
(45),
(46),
(47),
(48);

-- --------------------------------------------------------

--
-- Table structure for table `job_seq`
--

CREATE TABLE `job_seq` (
  `Job_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job_seq`
--

INSERT INTO `job_seq` (`Job_Id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15);

-- --------------------------------------------------------

--
-- Table structure for table `lev_seq`
--

CREATE TABLE `lev_seq` (
  `Leave_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lev_seq`
--

INSERT INTO `lev_seq` (`Leave_Id`) VALUES
(1),
(2),
(3),
(4),
(5);

-- --------------------------------------------------------

--
-- Table structure for table `maintenance`
--

CREATE TABLE `maintenance` (
  `Maintenance_Id` varchar(10) NOT NULL,
  `Title` text NOT NULL,
  `Total_Amount` double NOT NULL,
  `Paid_Amount` double NOT NULL,
  `Due_Date` text NOT NULL,
  `Paid_Date` text NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `maintenance`
--

INSERT INTO `maintenance` (`Maintenance_Id`, `Title`, `Total_Amount`, `Paid_Amount`, `Due_Date`, `Paid_Date`, `Description`) VALUES
('MA002', 'cleaning', 1500, 1200, '2019-01-18', '2019-01-03', ' for cleaning'),
('MA003', 'painting', 2500, 2000, '2019-01-22', '2019-01-08', ' painting the front gate of apartment'),
('MA004', 'replce the gate', 25000, 20000, '2019-01-10', '2019-01-08', ' Replace the apartment \'s backGate'),
('MA005', 'garden Manage', 4500, 44997, '2019-01-06', '2019-01-02', 'Manage the the garden of Apartment '),
('MA006', 'electricity debug', 3000, 23998, '2018-12-13', '2019-01-01', ' changed the Electricity Pannel '),
('MA008', 'FloorPainting', 34000, 23999, '2019-01-31', '2018-01-25', ' painting for floor'),
('MA009', 'cleaning', 900, 900, '2019-02-14', '2019-02-19', 'hjvjjf');

--
-- Triggers `maintenance`
--
DELIMITER $$
CREATE TRIGGER `tg_main_insert` BEFORE INSERT ON `maintenance` FOR EACH ROW BEGIN
  INSERT INTO main_seq VALUES (NULL);
  SET NEW.Maintenance_Id = CONCAT('MA', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `main_seq`
--

CREATE TABLE `main_seq` (
  `Maintenance_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `main_seq`
--

INSERT INTO `main_seq` (`Maintenance_Id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9);

-- --------------------------------------------------------

--
-- Table structure for table `noticeboard`
--

CREATE TABLE `noticeboard` (
  `Notification_Id` varchar(10) NOT NULL,
  `Notice_Type` text NOT NULL,
  `Date` text NOT NULL,
  `Subject` varchar(25) NOT NULL,
  `Content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `noticeboard`
--

INSERT INTO `noticeboard` (`Notification_Id`, `Notice_Type`, `Date`, `Subject`, `Content`) VALUES
('NO001', 'Common', '2019-01-09', 'Committee meeting', ' Committe meeting will be on 21 Feb 2019'),
('NO002', 'ForOwners', '2019-01-19', '    Wall Painting to Owne', 'There will be wall Painting to Each House Owner on 23/02/2019  '),
('NO005', 'ForEmployee', '2019-01-11', ' common Assemble', ' common Assembly will be on 23/05/2018 '),
('NO006', 'ForEmployee', '2019-01-23', 'Staff Meeting', ' staff Meeting will be on 12/02/2019'),
('NO007', 'Common', '2019-01-27', 'thaipongal Events', ' thaipongal Event will be on 2019/02/27');

--
-- Triggers `noticeboard`
--
DELIMITER $$
CREATE TRIGGER `tg_note_insert` BEFORE INSERT ON `noticeboard` FOR EACH ROW BEGIN
  INSERT INTO not_seq VALUES (NULL);
  SET NEW.Notification_Id = CONCAT('NO', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `not_seq`
--

CREATE TABLE `not_seq` (
  `Notification_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `not_seq`
--

INSERT INTO `not_seq` (`Notification_Id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7);

-- --------------------------------------------------------

--
-- Table structure for table `owner_utility`
--

CREATE TABLE `owner_utility` (
  `Cost_Id` varchar(10) NOT NULL,
  `Owner_Id` varchar(10) NOT NULL,
  `Month` text NOT NULL,
  `Year` text NOT NULL,
  `Gas_Amount` decimal(10,2) NOT NULL,
  `Water_Amount` decimal(10,2) NOT NULL,
  `Electricity_Amount` decimal(10,2) NOT NULL,
  `Security_Charge` decimal(10,2) NOT NULL,
  `Other_Expensive` decimal(10,2) NOT NULL,
  `Total_Amount` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `owner_utility`
--

INSERT INTO `owner_utility` (`Cost_Id`, `Owner_Id`, `Month`, `Year`, `Gas_Amount`, `Water_Amount`, `Electricity_Amount`, `Security_Charge`, `Other_Expensive`, `Total_Amount`) VALUES
('EX002', 'US048', 'February', '2019', '4500.00', '4600.00', '4800.00', '5678.00', '6500.00', '26078.00'),
('EX003', 'US027', 'August', '2019', '2345.00', '5460.00', '5600.00', '5600.00', '998.00', '20005.00'),
('EX004', 'US025', 'June', '2019', '3889.00', '6700.00', '4500.00', '3421.00', '2300.00', '20810.00'),
('EX005', 'US024', 'September', '2019', '2339.00', '4500.00', '1245.00', '3400.00', '5600.00', '17084.00'),
('EX007', 'US049', 'February', '2019', '2300.00', '4500.00', '1200.00', '2400.00', '1560.00', '11960.00'),
('EX008', 'US018', 'June', '2019', '2345.00', '5600.00', '5400.00', '2300.00', '1200.00', '16845.00'),
('EX009', 'US023', 'October', '2019', '7654.00', '5600.00', '4100.00', '2300.00', '4500.00', '24154.00'),
('EX010', 'US002', 'August', '2019', '1200.00', '1500.00', '1600.00', '2100.00', '3200.00', '9600.00');

--
-- Triggers `owner_utility`
--
DELIMITER $$
CREATE TRIGGER `tg_cost_insert` BEFORE INSERT ON `owner_utility` FOR EACH ROW BEGIN
  INSERT INTO cos_seq VALUES (NULL);
  SET NEW.Cost_Id = CONCAT('EX', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `Salary_Id` varchar(10) NOT NULL,
  `Emp_Id` varchar(10) NOT NULL,
  `Amount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`Salary_Id`, `Emp_Id`, `Amount`) VALUES
('SA005', 'US039', '2500.00'),
('SA006', 'US040', '3400.00'),
('SA007', 'US041', '5500.00'),
('SA008', 'US042', '1200.00'),
('SA009', 'US043', '4800.00'),
('SA012', 'US046', '1200.00'),
('SA014', 'US050', '35600.00'),
('SA015', 'US051', '780.00'),
('SA019', 'US074', '34561.00');

--
-- Triggers `salary`
--
DELIMITER $$
CREATE TRIGGER `tg_sal_insert` BEFORE INSERT ON `salary` FOR EACH ROW BEGIN
  INSERT INTO sal_seq VALUES (NULL);
  SET NEW.Salary_Id = CONCAT('SA', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `sal_seq`
--

CREATE TABLE `sal_seq` (
  `Salary_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sal_seq`
--

INSERT INTO `sal_seq` (`Salary_Id`) VALUES
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(20) NOT NULL,
  `User_Id` varchar(10) NOT NULL,
  `First_Name` text NOT NULL,
  `Last_Name` text NOT NULL,
  `Contact_Number` int(10) NOT NULL,
  `Email_Id` varchar(40) NOT NULL,
  `PassWord` text NOT NULL,
  `Phone` int(10) NOT NULL,
  `Address` text NOT NULL,
  `Type_Id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `User_Id`, `First_Name`, `Last_Name`, `Contact_Number`, `Email_Id`, `PassWord`, `Phone`, `Address`, `Type_Id`) VALUES
(1, 'US001', 'Sinthujan', 'Sintha', 232254678, 'sinthujanspp@gmail.com', '$2a$10$5lfTGt8qpdjl1hovipWvIOclpMOfspFPTqrJq5LY2t2LU7IMX4V62', 776725515, 'Mannar,Srilanka', 'TY001'),
(8, 'US002', 'Vaishu', 'Vais', 252234564, 'vaishnavi@gmail.com', '$2a$10$ZAytM/OZYb8rwgXwevYcOegkoK1Y6jEdJntEoadKuuMOc/g/9adpe', 756745678, 'Mannar,Srilanka', 'TY002'),
(24, 'US018', 'kurubarshan', 'kuru', 242234564, 'kuru@gmail.com', '$2a$10$CVWu5bztmJB4f.A8c3aHZ.l8jndbsKD/Y.EL2LihbXlG7RxXrZsGa', 776745678, 'jaffna,srilanka', 'TY002'),
(27, 'US021', 'Sajee', 'sajan', 254678987, 'Sajee@gmail.com', '$2a$10$99Jsno0lZRGjWt4pKk8wVOca79ehnDRwbfs7.IeqBZh5uzW.PSinW', 756789765, 'bathula,Kandy', 'TY002'),
(29, 'US023', 'kajanan', 'kajan', 242234564, 'kajan@gmail.com', '$2a$10$Ohx7JmacVX1GdXmMnFyMN.Iu4L8wuXdo9c1IvI9O.2sqzzXMZEp7O', 756789765, 'Monarakala,Srilanka', 'TY002'),
(30, 'US024', 'dineshh', 'dina', 242234564, 'dinesh@gmail.com', '$2a$10$X0MLXIZHy04QRFB6INd9wesD7GxTZIjyiIv/jv3Ky04RCFG6MyIr.', 776745678, 'Vavuniya,Srilanka', 'TY002'),
(31, 'US025', 'thana', 'thanjn', 242234564, 'thana@gmail.com', '$2a$10$TB2etuIqa.UiAwI4bfrFiuHu5UO7h5wydSFGD3qF.UT/T9r4k4UGy', 756789765, 'Vavuniya,Srilanka', 'TY002'),
(33, 'US027', 'vijithan', 'vijii', 242234564, 'vijithan@gmail.com', '$2a$10$LRuRtQDP9uuBXVujYxMmkuq4Wt20cUlMUuuuCQCuH9DWdWEe78qJ2', 756789765, 'Monarakala,Srilanka', 'TY002'),
(41, 'US039', 'Anojan', 'ano', 254678987, 'anojan@gmail.com', '$2a$10$yi98ddOdVbn.innm3oKU0Oqz5CMC1DKZY6ZMWdJqZXQ1/5f8sWQ5y', 756789765, 'Mannar,Srilanka', 'TY003'),
(42, 'US040', 'sanu', '123', 242234564, '123@gmail.com', '$2a$10$wmOuvcatlILGJavzUV8e4uMrxAv0LiNPL8JLfUdrRmoT3tIUO7OYq', 756789765, 'colombo,Mannar', 'TY003'),
(43, 'US041', 'emp23', 'emp2', 254678987, 'emp23@gmail.com', '$2a$10$4c29sHrwv04rVxVtWWFcuOlrPm183e3soZpV80/v6uB6EJ25pe/Sa', 756789765, 'Mannar,Srilanka', 'TY003'),
(44, 'US042', 'emp3', 'emp', 254678987, 'emp3@gmail.com', '$2a$10$OnV1FdN5AOFXNWUC9z/kb.oAuGT78MRDa/liDy/g8Zjr33ES/c9Hq', 776745678, 'Vavuniya,Srilanka', 'TY003'),
(45, 'US043', 'emp4', 'emp', 242234564, 'emp4@gmail.com', '$2a$10$aQtt4p2TOo9Lvjq2XLidM.Vj96sLo9pC/vrhOjfNLvqDW8/y4FnBG', 756789765, 'jaffna,srilanka', 'TY003'),
(48, 'US046', 'emp7', 'emp', 254678987, 'emp7@gmail.com', '$2a$10$CLuUAAFJA4MsKKkndj0OceBUdq.GgdB1qc4cQdke0vJXKX5hZI8ai', 756789765, 'Vavuniya,Srilanka', 'TY003'),
(50, 'US048', 'sulax', 'sulaxan', 242234564, 'sulax@gmail.com', '$2a$10$waECJr.PgVeyafrbWQ69xO6FY/O7AGpPdHvU4fprd3YUAKTSQT41.', 756789765, 'colombo,Mannar', 'TY002'),
(52, 'US050', 'emp6', 'emp', 242234564, 'emp6@gmail.com', '$2a$10$.8rhKDG.H8bkuGn9EriD7OiQS9iP/bzeTZrvq7kivcNIxD25VDKuO', 776745678, 'Vavuniya,Srilanka', 'TY003'),
(53, 'US051', 'emp8', 'emp', 254678987, 'emp8@gmail.com', '$2a$10$5II5dYSc4IeAkf/mjGeRjOmfpzPwbCWecjOW9VFyqmAzi33/ankUC', 756789765, 'Mannar,Srilanka', 'TY003'),
(64, 'US065', 'own3', 'own', 275678906, 'own3@gmail.com', '$2a$10$cwlB4ekqfFzaLBT8ynQZeeZQTgGHwd/N7ST/og4wftarKqPVqIjn.', 756789765, 'Monarakala,Srilanka', 'TY002'),
(79, 'US086', 'owner', 'own', 24223, 'own4@gmail.com', '$2a$10$cEwQGhoFY9L7IPlqT5qI4uYg5iGqweI4C1uj/oMlI.9PMt6mClIhe', 723456786, 'jaffna,srilanka', 'TY002'),
(80, 'US087', 'own5', 'own', 254678987, 'own5@gmail.com', '$2a$10$aP95Sgeu0E8AbbmUT8nja.FkyewlshrekVkX6P23z465Jd4cPUd1O', 756789765, 'Mannar,Srilanka', 'TY002'),
(81, 'US088', 'own6', 'own', 254678987, 'own6@gmail.com', '$2a$10$0xP9UlqNvYUttDn/Q88ID.aQe373OvhT7/WCjS69yUmU7a55rgtpK', 756789765, 'Monarakala,Srilanka', 'TY002'),
(82, 'US089', 'abinaya', 'abaa', 254678987, 'abi@gmail.com', '$2a$10$cHXNySUHvwSVTlCAS4GZoO8vwiGo2SgwQ2yoWwLwOmM2b0zIKcHXC', 776745678, 'jaffna,srilanka', 'TY002');

--
-- Triggers `user`
--
DELIMITER $$
CREATE TRIGGER `tg_User_insert` BEFORE INSERT ON `user` FOR EACH ROW BEGIN
  INSERT INTO User_seq VALUES (NULL);
  SET NEW.User_Id = CONCAT('US', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user_seq`
--

CREATE TABLE `user_seq` (
  `User_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_seq`
--

INSERT INTO `user_seq` (`User_Id`) VALUES
(36),
(37),
(38),
(39),
(40),
(41),
(42),
(43),
(44),
(45),
(46),
(47),
(48),
(49),
(50),
(51),
(52),
(53),
(54),
(55),
(56),
(57),
(58),
(59),
(60),
(61),
(62),
(63),
(64),
(65),
(66),
(67),
(68),
(69),
(70),
(71),
(72),
(73),
(74),
(75),
(76),
(77),
(78),
(79),
(80),
(81),
(82),
(83),
(84),
(85),
(86),
(87),
(88),
(89);

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `Type_Id` varchar(10) NOT NULL,
  `Type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_type`
--

INSERT INTO `user_type` (`Type_Id`, `Type`) VALUES
('TY001', 'Admin'),
('TY002', 'Owner'),
('TY003', 'Employee');

-- --------------------------------------------------------

--
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `Visitor_Id` varchar(10) NOT NULL,
  `User_Id` varchar(10) NOT NULL,
  `Full_Name` varchar(40) NOT NULL,
  `Address` text NOT NULL,
  `Mobile_No` int(11) NOT NULL,
  `InDate` text NOT NULL,
  `OutDate` text NOT NULL,
  `InTime` text NOT NULL,
  `OutTime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `visitor`
--

INSERT INTO `visitor` (`Visitor_Id`, `User_Id`, `Full_Name`, `Address`, `Mobile_No`, `InDate`, `OutDate`, `InTime`, `OutTime`) VALUES
('VI004', 'US065', 'suren', 'colombo', 776725515, '2019-01-10', '2019-01-15', '13:59', '13:59'),
('VI005', 'US002', 'kajan', 'kandy', 765678987, '2019-01-17', '2019-01-11', '23:01', '00:00'),
('VI013', 'US025', 'sujan', 'trinco', 234567897, '2019-02-21', '2019-02-18', '01:00', '00:00');

--
-- Triggers `visitor`
--
DELIMITER $$
CREATE TRIGGER `tg_vis_insert` BEFORE INSERT ON `visitor` FOR EACH ROW BEGIN
  INSERT INTO visitor_seq VALUES (NULL);
  SET NEW.Visitor_Id = CONCAT('VI', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `visitor_seq`
--

CREATE TABLE `visitor_seq` (
  `Visitor_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `visitor_seq`
--

INSERT INTO `visitor_seq` (`Visitor_Id`) VALUES
(1),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `committee`
--
ALTER TABLE `committee`
  ADD PRIMARY KEY (`Committee_Id`);

--
-- Indexes for table `committee_seq`
--
ALTER TABLE `committee_seq`
  ADD PRIMARY KEY (`Committee_Id`);

--
-- Indexes for table `committee_type`
--
ALTER TABLE `committee_type`
  ADD PRIMARY KEY (`CType_Id`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD PRIMARY KEY (`Complaint_ID`);

--
-- Indexes for table `cop_seq`
--
ALTER TABLE `cop_seq`
  ADD PRIMARY KEY (`Complaint_ID`);

--
-- Indexes for table `cos_seq`
--
ALTER TABLE `cos_seq`
  ADD PRIMARY KEY (`Cost_Id`);

--
-- Indexes for table `device_tokens`
--
ALTER TABLE `device_tokens`
  ADD KEY `FK_UserID` (`User_Id`);

--
-- Indexes for table `employee_job`
--
ALTER TABLE `employee_job`
  ADD PRIMARY KEY (`Job_Id`);

--
-- Indexes for table `employee_leave`
--
ALTER TABLE `employee_leave`
  ADD PRIMARY KEY (`Leave_Id`);

--
-- Indexes for table `employee_type`
--
ALTER TABLE `employee_type`
  ADD PRIMARY KEY (`Emtype_Id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`Event_ID`);

--
-- Indexes for table `floor`
--
ALTER TABLE `floor`
  ADD PRIMARY KEY (`Floor_Id`);

--
-- Indexes for table `floor_seq`
--
ALTER TABLE `floor_seq`
  ADD PRIMARY KEY (`Floor_Id`);

--
-- Indexes for table `house`
--
ALTER TABLE `house`
  ADD PRIMARY KEY (`House_Id`),
  ADD UNIQUE KEY `Owner_Id` (`Owner_Id`);

--
-- Indexes for table `house_seq`
--
ALTER TABLE `house_seq`
  ADD PRIMARY KEY (`House_Id`);

--
-- Indexes for table `job_seq`
--
ALTER TABLE `job_seq`
  ADD PRIMARY KEY (`Job_Id`);

--
-- Indexes for table `lev_seq`
--
ALTER TABLE `lev_seq`
  ADD PRIMARY KEY (`Leave_Id`);

--
-- Indexes for table `maintenance`
--
ALTER TABLE `maintenance`
  ADD PRIMARY KEY (`Maintenance_Id`);

--
-- Indexes for table `main_seq`
--
ALTER TABLE `main_seq`
  ADD PRIMARY KEY (`Maintenance_Id`);

--
-- Indexes for table `noticeboard`
--
ALTER TABLE `noticeboard`
  ADD PRIMARY KEY (`Notification_Id`);

--
-- Indexes for table `not_seq`
--
ALTER TABLE `not_seq`
  ADD PRIMARY KEY (`Notification_Id`);

--
-- Indexes for table `owner_utility`
--
ALTER TABLE `owner_utility`
  ADD PRIMARY KEY (`Cost_Id`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`Salary_Id`),
  ADD UNIQUE KEY `salId` (`Salary_Id`);

--
-- Indexes for table `sal_seq`
--
ALTER TABLE `sal_seq`
  ADD PRIMARY KEY (`Salary_Id`) USING BTREE;

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_Id` (`User_Id`);

--
-- Indexes for table `user_seq`
--
ALTER TABLE `user_seq`
  ADD PRIMARY KEY (`User_Id`);

--
-- Indexes for table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`Type_Id`);

--
-- Indexes for table `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`Visitor_Id`);

--
-- Indexes for table `visitor_seq`
--
ALTER TABLE `visitor_seq`
  ADD PRIMARY KEY (`Visitor_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `committee_seq`
--
ALTER TABLE `committee_seq`
  MODIFY `Committee_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `cop_seq`
--
ALTER TABLE `cop_seq`
  MODIFY `Complaint_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `cos_seq`
--
ALTER TABLE `cos_seq`
  MODIFY `Cost_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `floor_seq`
--
ALTER TABLE `floor_seq`
  MODIFY `Floor_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `house_seq`
--
ALTER TABLE `house_seq`
  MODIFY `House_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `job_seq`
--
ALTER TABLE `job_seq`
  MODIFY `Job_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `lev_seq`
--
ALTER TABLE `lev_seq`
  MODIFY `Leave_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `main_seq`
--
ALTER TABLE `main_seq`
  MODIFY `Maintenance_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `not_seq`
--
ALTER TABLE `not_seq`
  MODIFY `Notification_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sal_seq`
--
ALTER TABLE `sal_seq`
  MODIFY `Salary_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `user_seq`
--
ALTER TABLE `user_seq`
  MODIFY `User_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `visitor_seq`
--
ALTER TABLE `visitor_seq`
  MODIFY `Visitor_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `device_tokens`
--
ALTER TABLE `device_tokens`
  ADD CONSTRAINT `FK_UserID` FOREIGN KEY (`User_Id`) REFERENCES `user` (`User_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
