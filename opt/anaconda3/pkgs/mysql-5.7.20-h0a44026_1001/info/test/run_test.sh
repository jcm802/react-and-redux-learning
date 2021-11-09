

set -ex



mysql_config --version
my_print_defaults --version
mysqld --help --verbose
command -v mysql.server
exit 0
