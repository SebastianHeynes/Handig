CREATE TABLE IF NOT EXISTS `images` (
  `id` int(9) NOT NULL,
  `position` int(9) NOT NULL,
  `category` varchar(50) NOT NULL,
  `url` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `settings` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profilepic` varchar(150) NOT NULL,
  `presentation` text NOT NULL,
  `facebook` varchar(50) NOT NULL,
  `instagram` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
