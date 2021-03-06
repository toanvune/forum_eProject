USE [master]
GO
/****** Object:  Database [Forum_Doctor]    Script Date: 6/30/2021 10:26:21 AM ******/
CREATE DATABASE [Forum_Doctor]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Forum_Doctor', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Forum_Doctor.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Forum_Doctor_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Forum_Doctor_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Forum_Doctor] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Forum_Doctor].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Forum_Doctor] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Forum_Doctor] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Forum_Doctor] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Forum_Doctor] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Forum_Doctor] SET ARITHABORT OFF 
GO
ALTER DATABASE [Forum_Doctor] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Forum_Doctor] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Forum_Doctor] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Forum_Doctor] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Forum_Doctor] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Forum_Doctor] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Forum_Doctor] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Forum_Doctor] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Forum_Doctor] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Forum_Doctor] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Forum_Doctor] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Forum_Doctor] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Forum_Doctor] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Forum_Doctor] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Forum_Doctor] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Forum_Doctor] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Forum_Doctor] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Forum_Doctor] SET RECOVERY FULL 
GO
ALTER DATABASE [Forum_Doctor] SET  MULTI_USER 
GO
ALTER DATABASE [Forum_Doctor] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Forum_Doctor] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Forum_Doctor] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Forum_Doctor] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Forum_Doctor] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Forum_Doctor', N'ON'
GO
ALTER DATABASE [Forum_Doctor] SET QUERY_STORE = OFF
GO
USE [Forum_Doctor]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Account](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](50) NULL,
	[passHash] [varchar](100) NULL,
	[fullName] [varchar](50) NULL,
	[birthday] [date] NULL,
	[gender] [varchar](50) NULL,
	[mobile] [varchar](15) NULL,
	[email] [varchar](50) NULL,
	[address] [varchar](50) NULL,
	[active] [bit] NULL,
	[professional] [varchar](50) NULL,
	[qualification] [varchar](50) NULL,
	[experience] [varchar](50) NULL,
	[achievement] [varchar](50) NULL,
	[role] [int] NULL,
	[statusBlock] [bit] NULL,
	[registrationStatus] [bit] NULL,
	[photo] [varchar](250) NULL,
 CONSTRAINT [PK__Account__3213E83FBBF5D395] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[AccountNotifications]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountNotifications](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[notificationId] [int] NULL,
	[accId] [int] NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_AccountNotifications] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comment]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comment](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[accId] [int] NULL,
	[parentId] [int] NULL,
	[postId] [int] NULL,
	[status] [bit] NULL,
	[createdAt] [datetime] NULL,
	[content] [text] NULL,
 CONSTRAINT [PK__Comment__3213E83F45FA3663] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Help]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Help](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contactNumber] [varchar](50) NULL,
	[address] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[password] [varchar](100) NULL,
	[subject] [varchar](50) NULL,
 CONSTRAINT [PK_Help] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Notifications]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notifications](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](200) NULL,
	[url] [nvarchar](max) NULL,
	[created] [datetime] NULL,
 CONSTRAINT [PK_Notifications] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Post]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Post](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[accId] [int] NULL,
	[topicId] [int] NULL,
	[postName] [varchar](50) NULL,
	[statusBlock] [bit] NULL,
	[createdAt] [datetime] NULL,
	[updatedAt] [datetime] NULL,
	[content] [text] NULL,
	[photo] [varchar](250) NULL,
 CONSTRAINT [PK__Post__3213E83FD083F693] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Role]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Role](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Setting]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Setting](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](250) NULL,
	[successMsg] [varchar](250) NULL,
 CONSTRAINT [PK_Setting] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Specialize]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Specialize](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[specializeName] [varchar](50) NULL,
	[description] [varchar](250) NULL,
	[status] [bit] NULL,
 CONSTRAINT [PK_Specialize] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Topic]    Script Date: 6/30/2021 10:26:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Topic](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[specializeId] [int] NULL,
	[topicName] [varchar](50) NULL,
	[description] [varchar](250) NULL,
	[status] [bit] NULL,
 CONSTRAINT [PK__Thread__3213E83FDB3FAED5] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Account] ON 

INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (1, N'admin1', N'$2a$10$yqXsWwbLzANwpxMQcn4Nx..2miQ1GBD22oNQH/c7YEQDvVlAcQ5uS', N'Admin1', CAST(N'2001-01-01' AS Date), N'male', N'0563678399', N'admin1@gmail.com', N'HCM', 0, N'Admin', N'Admin', N'Admin', N'Admin', 1, 0, 1, N'avatar.png')
INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (2, N'admin2', N'$2a$10$hC6Pl2GkyBrpZNwp3hfBF.qW1nUo5EZ3yifZuE5610KbZcp3NbfEO', N'Admin2', CAST(N'1999-01-01' AS Date), N'male', N'0563678388', N'admin2@gmail.com', N'HCM', 0, N'Admin', N'Admin', N'Admin', N'Admin', 1, 0, 1, N'avatar.png')
INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (3, N'user1', N'$2a$10$EVoWQ0C/XfzLwZMLDqwC3OueDBhLeAsU6yCQt9BaYpAOqMI4ZGTdS', N'User1', CAST(N'1999-05-05' AS Date), N'male', N'0562344545', N'user1@gmail.com', N'HN', 0, N'Heart', N'Doctor of Medicine', N'5year', N'AA', 2, 0, 1, N'avatar.png')
INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (4, N'user2', N'$2a$10$qprkTk7PQuq2OKkzN022zeOcCBFo52EA.bG1V5pWbAg9CLe1dOqHy', N'User2', CAST(N'1999-05-07' AS Date), N'male', N'0542343545', N'user2@gmail.com', N'HN', 0, N'Heart', N'Doctor of Medicine', N'6year', N'FF', 2, 0, 1, N'avatar.png')
INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (5, N'user3', N'$2a$10$Mlq9fBGySTlEOgu9SPDSV.0Vf8w5pHcvH7TK4uNhy0HZjluk6I2yW', N'User3', CAST(N'1999-10-05' AS Date), N'male', N'0445234555', N'user3@gmail.com', N'HCM', 0, N'Lung', N'Doctor of Medicine', N'6year', N'DD', 2, 0, 1, N'avatar.png')
INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (6, N'user4', N'$2a$10$RMUVe3mjABWcw0LeujOJxeW67ZU6drC/SwqryPPlMwTSZHOCqAvme', N'User4', CAST(N'2000-01-01' AS Date), N'male', N'0432324555', N'user4@gmail.com', N'DN', 0, N'Lung', N'Doctor of Medicine', N'6year', N'BB', 2, 0, 1, N'avatar.png')
INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (7, N'user5', N'$2a$10$//8meDUMzXplPhvzKxIw7uGc4NMUUw/HvxCTDS4vGtQ2Z/Ax0Iery', N'User5', CAST(N'2000-04-01' AS Date), N'female', N'0434533443', N'user5@gmail.com', N'DL', 0, N'Blood', N'Doctor of Medicine', N'4year', N'XX', 2, 0, 1, N'avatar.png')
INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (8, N'user6', N'$2a$10$7NbNZ.4M3UD06rGrHXvTTu4mzF/mfdVdX5QVBDUyc31OQkKCG0/nu', N'User6', CAST(N'2000-08-01' AS Date), N'male', N'0565234555', N'user6@gmail.com', N'HCM', 0, N'Heart', N'Doctor of Medicine', N'9year', N'YY', 2, 0, 1, N'avatar.png')
INSERT [dbo].[Account] ([id], [userName], [passHash], [fullName], [birthday], [gender], [mobile], [email], [address], [active], [professional], [qualification], [experience], [achievement], [role], [statusBlock], [registrationStatus], [photo]) VALUES (9, N'user7', N'$2a$10$KTaZuWwpbZB0kKkhRyBjUeO6PitT0VtSLy25.TVILIUV1M/yKAZOK', N'User7', CAST(N'2000-01-10' AS Date), N'female', N'0424554667', N'user7@gmail.com', N'DN', 0, N'Heart', N'Doctor of Medicine', N'7year', N'CC', 2, 0, 1, N'avatar.png')
SET IDENTITY_INSERT [dbo].[Account] OFF
SET IDENTITY_INSERT [dbo].[AccountNotifications] ON 

INSERT [dbo].[AccountNotifications] ([id], [notificationId], [accId], [status]) VALUES (1, 1, 3, 0)
INSERT [dbo].[AccountNotifications] ([id], [notificationId], [accId], [status]) VALUES (2, 1, 3, 0)
INSERT [dbo].[AccountNotifications] ([id], [notificationId], [accId], [status]) VALUES (3, 2, 4, 0)
INSERT [dbo].[AccountNotifications] ([id], [notificationId], [accId], [status]) VALUES (4, 3, 5, 0)
SET IDENTITY_INSERT [dbo].[AccountNotifications] OFF
SET IDENTITY_INSERT [dbo].[Comment] ON 

INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (1, 3, NULL, 3, 0, CAST(N'2021-06-02T10:00:00.000' AS DateTime), N'fff')
INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (2, 4, NULL, 3, 0, CAST(N'2021-06-02T11:02:00.000' AS DateTime), N'bbb')
INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (3, 3, NULL, 4, 0, CAST(N'2021-06-02T11:00:00.000' AS DateTime), N'aaaaaa')
INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (4, 4, NULL, 4, 0, CAST(N'2021-06-02T11:02:00.000' AS DateTime), N'bbb')
INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (5, 3, NULL, 4, 0, CAST(N'2021-06-02T11:05:00.000' AS DateTime), N'ok')
INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (6, 3, NULL, 5, 0, CAST(N'2021-06-02T09:02:00.000' AS DateTime), N'acc')
INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (7, 4, NULL, 5, 0, CAST(N'2021-06-02T09:03:00.000' AS DateTime), N'bcd')
INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (8, 3, NULL, 5, 0, CAST(N'2021-06-02T11:05:00.000' AS DateTime), N'okkk')
INSERT [dbo].[Comment] ([id], [accId], [parentId], [postId], [status], [createdAt], [content]) VALUES (9, 6, 8, 5, 0, CAST(N'2021-06-02T11:06:00.000' AS DateTime), N'oh')
SET IDENTITY_INSERT [dbo].[Comment] OFF
SET IDENTITY_INSERT [dbo].[Help] ON 

INSERT [dbo].[Help] ([id], [contactNumber], [address], [email], [password], [subject]) VALUES (1, N'0123456789', N'HCM', N'abc@gmail.com', N'01', N'ChangePass')
INSERT [dbo].[Help] ([id], [contactNumber], [address], [email], [password], [subject]) VALUES (2, N'0563678399', N'HCM', N'222thienvo@gmail.com', N'$2a$10$NZQpRHrzIXh8uoxfyIei9eUd7KqDm0LQeUgUMd6s61ytK00Nogn9W', N'ChangePass')
SET IDENTITY_INSERT [dbo].[Help] OFF
SET IDENTITY_INSERT [dbo].[Notifications] ON 

INSERT [dbo].[Notifications] ([id], [title], [url], [created]) VALUES (1, N'abc', NULL, NULL)
INSERT [dbo].[Notifications] ([id], [title], [url], [created]) VALUES (2, N'cef', NULL, NULL)
INSERT [dbo].[Notifications] ([id], [title], [url], [created]) VALUES (3, N'aaa', NULL, NULL)
INSERT [dbo].[Notifications] ([id], [title], [url], [created]) VALUES (4, N'ccc', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Notifications] OFF
SET IDENTITY_INSERT [dbo].[Post] ON 

INSERT [dbo].[Post] ([id], [accId], [topicId], [postName], [statusBlock], [createdAt], [updatedAt], [content], [photo]) VALUES (1, 3, 1, N'Heart', 1, CAST(N'2021-06-01T10:00:00.000' AS DateTime), CAST(N'1900-01-01T00:00:00.000' AS DateTime), N'aaaaaa', NULL)
INSERT [dbo].[Post] ([id], [accId], [topicId], [postName], [statusBlock], [createdAt], [updatedAt], [content], [photo]) VALUES (2, 3, 2, N'Lung', 1, CAST(N'2021-06-02T09:00:00.000' AS DateTime), CAST(N'1900-01-01T00:00:00.000' AS DateTime), N'bbbbb', NULL)
INSERT [dbo].[Post] ([id], [accId], [topicId], [postName], [statusBlock], [createdAt], [updatedAt], [content], [photo]) VALUES (3, 4, 3, N'Blood', 0, CAST(N'2021-06-02T09:00:00.000' AS DateTime), CAST(N'2021-06-02T11:00:00.000' AS DateTime), N'bbbbb', NULL)
INSERT [dbo].[Post] ([id], [accId], [topicId], [postName], [statusBlock], [createdAt], [updatedAt], [content], [photo]) VALUES (4, 4, 3, N'Blood', 0, CAST(N'2021-06-02T09:00:00.000' AS DateTime), CAST(N'2021-06-02T11:00:00.000' AS DateTime), N'bbbbb', NULL)
INSERT [dbo].[Post] ([id], [accId], [topicId], [postName], [statusBlock], [createdAt], [updatedAt], [content], [photo]) VALUES (5, 5, 3, N'Blood', 0, CAST(N'2021-06-02T09:00:00.000' AS DateTime), CAST(N'2021-06-02T11:00:00.000' AS DateTime), N'bbbbb', NULL)
SET IDENTITY_INSERT [dbo].[Post] OFF
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([id], [name]) VALUES (1, N'admin')
INSERT [dbo].[Role] ([id], [name]) VALUES (2, N'user')
SET IDENTITY_INSERT [dbo].[Role] OFF
SET IDENTITY_INSERT [dbo].[Setting] ON 

INSERT [dbo].[Setting] ([id], [title], [successMsg]) VALUES (1, N'Forum_Doctor', N'You have successfully created your account. Now you need to login to your account')
SET IDENTITY_INSERT [dbo].[Setting] OFF
SET IDENTITY_INSERT [dbo].[Specialize] ON 

INSERT [dbo].[Specialize] ([id], [specializeName], [description], [status]) VALUES (1, N'heart     ', N'heart     ', 0)
INSERT [dbo].[Specialize] ([id], [specializeName], [description], [status]) VALUES (2, N'blood     ', N'blood     ', 0)
INSERT [dbo].[Specialize] ([id], [specializeName], [description], [status]) VALUES (3, N'hypotension', N'hypotension', 0)
INSERT [dbo].[Specialize] ([id], [specializeName], [description], [status]) VALUES (4, N'hypertension', N'hypertension', 0)
INSERT [dbo].[Specialize] ([id], [specializeName], [description], [status]) VALUES (5, N'cardiopathy', N'cardiopathy', 0)
INSERT [dbo].[Specialize] ([id], [specializeName], [description], [status]) VALUES (6, N'lung', N'lung', 0)
SET IDENTITY_INSERT [dbo].[Specialize] OFF
SET IDENTITY_INSERT [dbo].[Topic] ON 

INSERT [dbo].[Topic] ([id], [specializeId], [topicName], [description], [status]) VALUES (1, 1, N'Heart', N'Heart     ', 0)
INSERT [dbo].[Topic] ([id], [specializeId], [topicName], [description], [status]) VALUES (2, 6, N'Lung', N'Lung      ', 0)
INSERT [dbo].[Topic] ([id], [specializeId], [topicName], [description], [status]) VALUES (3, 2, N'Blood', N'Blood     ', 0)
SET IDENTITY_INSERT [dbo].[Topic] OFF
ALTER TABLE [dbo].[Account] ADD  CONSTRAINT [DF__Account__role__24927208]  DEFAULT ((2)) FOR [role]
GO
ALTER TABLE [dbo].[Account] ADD  CONSTRAINT [DF__Account__status__25869641]  DEFAULT ((0)) FOR [statusBlock]
GO
ALTER TABLE [dbo].[Account] ADD  CONSTRAINT [DF_Account_registrationStatus]  DEFAULT ((1)) FOR [registrationStatus]
GO
ALTER TABLE [dbo].[Account] ADD  CONSTRAINT [DF_Account_photo]  DEFAULT ('avatar.png') FOR [photo]
GO
ALTER TABLE [dbo].[AccountNotifications] ADD  CONSTRAINT [DF_AccountNotifications_status]  DEFAULT ((0)) FOR [status]
GO
ALTER TABLE [dbo].[Comment] ADD  CONSTRAINT [DF__Comment__status__2D27B809]  DEFAULT ((0)) FOR [status]
GO
ALTER TABLE [dbo].[Post] ADD  CONSTRAINT [DF__Post__status__2A4B4B5E]  DEFAULT ((1)) FOR [statusBlock]
GO
ALTER TABLE [dbo].[Specialize] ADD  CONSTRAINT [DF_Specialize_status]  DEFAULT ((0)) FOR [status]
GO
ALTER TABLE [dbo].[Topic] ADD  CONSTRAINT [DF_Topic_status]  DEFAULT ((0)) FOR [status]
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD  CONSTRAINT [FK__Account__role__33D4B598] FOREIGN KEY([role])
REFERENCES [dbo].[Role] ([id])
GO
ALTER TABLE [dbo].[Account] CHECK CONSTRAINT [FK__Account__role__33D4B598]
GO
ALTER TABLE [dbo].[AccountNotifications]  WITH CHECK ADD  CONSTRAINT [FK_AccountNotifications_Account] FOREIGN KEY([accId])
REFERENCES [dbo].[Account] ([id])
GO
ALTER TABLE [dbo].[AccountNotifications] CHECK CONSTRAINT [FK_AccountNotifications_Account]
GO
ALTER TABLE [dbo].[AccountNotifications]  WITH CHECK ADD  CONSTRAINT [FK_AccountNotifications_Notifications] FOREIGN KEY([notificationId])
REFERENCES [dbo].[Notifications] ([id])
GO
ALTER TABLE [dbo].[AccountNotifications] CHECK CONSTRAINT [FK_AccountNotifications_Notifications]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK__Comment__postId__36B12243] FOREIGN KEY([postId])
REFERENCES [dbo].[Post] ([id])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK__Comment__postId__36B12243]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK_Comment_Account] FOREIGN KEY([accId])
REFERENCES [dbo].[Account] ([id])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK_Comment_Account]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK_Comment_Comment] FOREIGN KEY([parentId])
REFERENCES [dbo].[Comment] ([id])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK_Comment_Comment]
GO
ALTER TABLE [dbo].[Post]  WITH CHECK ADD  CONSTRAINT [FK__Post__accId__34C8D9D1] FOREIGN KEY([accId])
REFERENCES [dbo].[Account] ([id])
GO
ALTER TABLE [dbo].[Post] CHECK CONSTRAINT [FK__Post__accId__34C8D9D1]
GO
ALTER TABLE [dbo].[Post]  WITH CHECK ADD  CONSTRAINT [FK_Post_Topic] FOREIGN KEY([topicId])
REFERENCES [dbo].[Topic] ([id])
GO
ALTER TABLE [dbo].[Post] CHECK CONSTRAINT [FK_Post_Topic]
GO
ALTER TABLE [dbo].[Topic]  WITH CHECK ADD  CONSTRAINT [FK_Topic_Specialize] FOREIGN KEY([specializeId])
REFERENCES [dbo].[Specialize] ([id])
GO
ALTER TABLE [dbo].[Topic] CHECK CONSTRAINT [FK_Topic_Specialize]
GO
USE [master]
GO
ALTER DATABASE [Forum_Doctor] SET  READ_WRITE 
GO
